import Message from "@/util/components/message";
import Switch from "@/util/components/switch";
import { Info } from "@/util/input-components/input-elements";
import { Character, characterTemplate, user } from "@/util/types";
import { ObjectId } from "mongodb";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import PopUp from "@/util/components/pop-up";

export default function Settings(props: { setEdit: Function, edit: boolean, character: Character, setCharacter: Function, isOwner: boolean }) {
  let { setEdit, edit, character, setCharacter, isOwner } = props
  const [error, setError] = useState("")
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [template, setTemplate] = useState<characterTemplate>()
  const router = useRouter()

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

  const createTemplate = async () => {
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
    setTemplate({
      _id: new ObjectId,
      reference: character._id,
      referenceOwner: character.owner,
      created: new Date,
      public: true,
      owner: user.username,
      character
    })


    // ---=== TODO: ENSURE TEMPLATE ISN'T A COPY (CHECK REF ID AND OWNER USERNAME) ===---
    // - Create new GET method in API
    // - Call it and provide ref id
    // - If something returns, this template is a copy!
    // - Show message saying that template has already been made from this character and provide link to continue (new tab). 
    // - Also allow to continue anyway

    // Check for template from character
    const GETres = await fetch('/resources/character-templates/api', { method: "GET", headers: { reference: String(character._id) } })
    if (!GETres.ok) {
      throw ("Error communicating with API")
    } else {
      const response: { template: boolean } = await GETres.json()
      if (response.template) {
        setShowConfirmation(true)
      } else {
        postTemplate()
      }
    }
  }

  const postTemplate = async () => {
    const POSTres = await fetch(`/resources/character-templates/api`, { method: "POST", headers: { template: JSON.stringify(template) } })
    if (!POSTres.ok) {
      setError("Something went wrong! Please try again later.")
      throw (error)
    } else {
      router.push("/profile/templates?message=New template created!")
    }
  }

  return (
    <div className="flex justify-center flex-col w-fit gap-y-4 mx-auto">
      {!isOwner ? <></> : <>
        <div className="relative flex items-center">
          <Info><p>Toggling this on allows you to adjust all the details of your character: name, skill levels, wealth, etc.</p></Info>
          <Switch attribute={edit} setAttribute={setEdit} label="Edit Mode" />
        </div>
        <div className="relative flex items-center">
          <Info><p>Toggling this on allows other players to view your character (but not change it) if they have a link to it.</p></Info>
          <Switch attribute={character.public} setAttribute={setCharacter} attributeIsForObject={true} object={character} attributeTag="public" label="Public" />
        </div>
      </>}
      <div className="relative flex items-center">
        <Info><p>This will add this character as a template on your profile where you can edit the template and spin it off as your own character.</p></Info>
        <button className="button w-[160px] py-2" onClick={createTemplate}>Create Template</button>
      </div>
      <Link href={`/resources/character-sheet/${character._id}`} target="_blank" className="button w-[160px] py-2">Print View</Link>
      <Message good={false} message={error} setMessage={setError} />
      {!showConfirmation ? <></> :
        <PopUp show={showConfirmation} setShow={setShowConfirmation}>
          <p className="text-center">This character already has templates made from it. Would you like to continue, or would you like to view the templates that already exist?</p>
          <div className="flex flex-col gap-y-4 w-[300px] mx-auto my-8 overflow-x-visible">
            <button className="button rounded text-lg w-full px-6 py-4" onClick={() => postTemplate()}>Create Template</button>
            <Link className="button rounded text-lg w-full px-6 py-4" href={`/resources/character-templates?refId=${character._id}`}>View Existing Templates</Link>
            {/* <button className="z-50 button text-xs absolute rounded-full border w-8 h-8 right-[-16px] top-[-16px]" onClick={() => setShowConfirmation(false)}><FontAwesomeIcon icon={faX} /></button> */}
          </div>
        </PopUp>}
    </div>
  )
}