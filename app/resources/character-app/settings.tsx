import Message from "@/util/components/message";
import Switch from "@/util/components/switch";
import { Info } from "@/util/input-components/input-elements";
import { Character, characterTemplate, user } from "@/util/types";
import { ObjectId } from "mongodb";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import PopUp from "@/util/components/pop-up";
import getTokenFromCookie from "@/util/getTokenFromCookie";
import { usePathname } from "next/navigation";

export default function Settings(props: { setEdit: Function, edit: boolean, character: Character, setCharacter: Function, isOwner: boolean, isTemplate?: boolean }) {
  let { setEdit, edit, character, setCharacter, isOwner, isTemplate } = props
  const [error, setError] = useState("")
  const [showConfirmation, setShowConfirmation] = useState(false)
  const router = useRouter()
  const path = usePathname()

  // parse cookies into an object
  const cookieArr = document.cookie.split('; ');
  const cookies = {}
  for (let i in cookieArr) {
    const cur = cookieArr[i].split('=');
    // @ts-expect-error
    cookies[cur[0]] = cur[1];
  }
  // Find token property to determine if user is logged in
  //@ts-expect-error
  const token = cookies["token"]

  const createTemplate = async (override?: boolean) => {
    // If not logged in display an error
    if (!token) {
      setError("You must be logged in to use this function.")
      return
    }

    // get user object
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/profile/api`, { cache: "no-store", method: "GET", headers: { token, getUser: "true" }, credentials: "include" })
    if (!res.ok) {
      setError("Something went wrong finding your user information. Please try logging in again.")
      return
    }
    let user: user = await res.json()

    // create template
    const template = {
      _id: new ObjectId,
      reference: character._id,
      referenceOwner: character.owner,
      dateCreated: new Date,
      public: true,
      owner: user.username,
      character
    }

    // Check for template from character
    const GETres = await fetch('/resources/character-templates/api', { method: "GET", headers: { reference: String(character._id) } })
    if (!GETres.ok) {
      throw ("Error communicating with API")
    } else {
      const response: { template: boolean } = await GETres.json()
      if (response.template && !override) {
        setShowConfirmation(true)
      } else {
        postTemplate(template)
      }
    }
  }

  const postTemplate = async (template: characterTemplate) => {
    const POSTres = await fetch(`/resources/character-templates/api`, { method: "POST", headers: { template: JSON.stringify(template) } })
    if (!POSTres.ok) {
      setError("Something went wrong! Please try again later.")
      throw (error)
    } else {
      router.push("/profile/templates?message=New template created!")
    }
  }

  const createCharacter = async () => {
    let token = getTokenFromCookie(document.cookie)
    if (!token) {
      router.push(`/sign-in?return=${path}`)
      return
    }
    const res = await fetch(`/resources/character-creator/api`, { method: "POST", headers: { fromTemplate: "true", token: token, char: JSON.stringify(character) } })
    if (!res.ok) {
      setError("Failed to create new character. Please try again later.")
      throw (error)
    } else {
      router.push("/profile/characters?message=New character created successfully!")
    }
  }

  return (
    <div>
      <div className="flex justify-center flex-col w-fit gap-y-4 mx-auto">
        {/* Switches - only show if owner */}
        {!isOwner ? <></> : <>
          {/* Edit mode switch */}
          <div className="relative flex items-center">
            <Info><p>Toggling this on allows you to adjust all the details of your {isTemplate ? "template" : "character"}: name, skill levels, wealth, etc.</p></Info>
            <Switch attribute={edit} setAttribute={setEdit} label="Edit Mode" />
          </div>
          {/* Public switch */}
          <div className="relative flex items-center">
            <Info><p>Toggling this on allows other players to view your {isTemplate ? "template" : "character"} (but not change it) if they have a link to it. {!isTemplate ? "Other users will also be able to create a template from this character if this is toggled on." : "Other users will also be able to create characters from this template if this is toggled on."}</p></Info>
            <Switch attribute={character.public} setAttribute={setCharacter} attributeIsForObject={true} object={character} attributeTag="public" label="Public" />
          </div>
        </>}
        {isTemplate ?
          // Create character from template button
          <div className="relative flex items-center">
            <Info><p>This will create a new character from this template.</p></Info>
            <button className="button w-[160px] py-2" onClick={() => createCharacter()}>Create Character</button>
          </div> :
          // Create Template from character Button
          <div className="relative flex items-center">
            <Info><p>This will add this character as a template on your profile where you can edit the template and spin it off as your own character.</p></Info>
            <button className="button w-[160px] py-2" onClick={() => createTemplate()}>Create Template</button>
          </div>}
        {/* Print view button */}
        <Link href={`/resources/character-sheet/${character._id}`} target="_blank" className="button w-[160px] py-2">Print View</Link>
      </div>

      {/* From Template info */}
      {isTemplate || !character.refOwner ? <></> :
        <div className="mt-10">
          <p className="text-center text-lg">This character was created from a template</p>
          <p className="text-center text-sm opacity-70"><em><Link href={`/resources/character-app/${character.templateRef}`}>Original Character</Link> created by {character.refOwner}</em></p>
        </div>}

      {/* Template copy confirmation popup */}
      {!showConfirmation ? <></> :
        <PopUp show={showConfirmation} setShow={setShowConfirmation}>
          <p className="text-center">This character already has templates made from it. Would you like to continue, or would you like to view the templates that already exist?</p>
          <div className="flex flex-col gap-y-4 w-[300px] mx-auto my-8 overflow-x-visible">
            <button className="button rounded text-lg w-full px-6 py-4" onClick={() => createTemplate(true)}>Create Template</button>
            <Link className="button rounded text-lg w-full px-6 py-4" href={`/resources/character-templates?refId=${character._id}`}>View Existing Templates</Link>
          </div>
        </PopUp>}
      {/* Message popup */}
      <Message good={false} message={error} setMessage={setError} />
    </div>
  )
}