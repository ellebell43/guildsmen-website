import Switch from "@/util/components/switch";
import { Character } from "@/util/types";
import Link from "next/link";

export default function Settings(props: { setEdit: Function, edit: boolean, character: Character, setCharacter: Function, isOwner: boolean }) {
  let { setEdit, edit, character, setCharacter, isOwner } = props

  if (!isOwner) return <p>You don't own this character.</p>

  return (
    <div className="flex justify-center flex-col w-fit gap-y-4 mx-auto">
      <Switch attribute={edit} setAttribute={setEdit} label="Edit Mode" />
      <Switch attribute={character.public} setAttribute={setCharacter} attributeIsForObject={true} object={character} attributeTag="public" label="Public" />
      <Link href={`/resources/character-sheet/${character._id}`} className="button px-6 py-2">Print View</Link>
    </div>
  )
}