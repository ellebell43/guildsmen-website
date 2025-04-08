import Switch from "@/util/components/switch";
import { Info } from "@/util/input-components/input-elements";
import { Character } from "@/util/types";
import Link from "next/link";

export default function Settings(props: { setEdit: Function, edit: boolean, character: Character, setCharacter: Function, isOwner: boolean }) {
  let { setEdit, edit, character, setCharacter, isOwner } = props

  if (!isOwner) return <p>You don't own this character.</p>

  return (
    <div className="flex justify-center flex-col w-fit gap-y-4 mx-auto">
      <div className="relative">
        <Info><p>Toggling this on allows you to adjust all the details of your character: name, skill levels, wealth, etc.</p></Info>
        <Switch attribute={edit} setAttribute={setEdit} label="Edit Mode" />
      </div>
      <div className="relative">
        <Info><p>Toggling this on allows other players to view your character (but not change it) if they have a link to it.</p></Info>
        <Switch attribute={character.public} setAttribute={setCharacter} attributeIsForObject={true} object={character} attributeTag="public" label="Public" />
      </div>
      <Link href={`/resources/character-sheet/${character._id}`} className="button px-6 py-2">Print View</Link>
    </div>
  )
}