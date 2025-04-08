import Message from "@/util/components/message";
import Switch from "@/util/components/switch";
import { Info } from "@/util/input-components/input-elements";
import { Character, characterTemplate, user } from "@/util/types";
import { ObjectId } from "mongodb";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Settings(props: { setEdit: Function, edit: boolean, character: Character, setCharacter: Function, isOwner: boolean }) {
  let { setEdit, edit, character, setCharacter, isOwner } = props
  const [error, setError] = useState("")
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
    const template: characterTemplate = {
      _id: new ObjectId,
      reference: character._id,
      referenceOwner: character.owner,
      created: new Date,
      public: true,
      owner: user.username,
      character
    }


    // ---=== TODO: ENSURE TEMPLATE ISN'T A COPY (CHECK REF ID AND OWNER USERNAME) ===---


    // POST template
    const POSTres = await fetch(`/resources/character-templates/api`, { method: "POST", headers: { template: JSON.stringify(template) } })
    if (!POSTres.ok) {
      setError("Something went wrong! Please try again later.")
      throw (error)
    } else {
      router.push("/profile/templates")
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
    </div>
  )
}