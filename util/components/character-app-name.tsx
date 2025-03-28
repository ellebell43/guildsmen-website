import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Character, guild } from "../types";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

export default function CharacterAppName(props: { character: Character, setCharacter: Function, edit: boolean }) {
  const { character, setCharacter } = props

  const getDescription = (el: Character): string => {
    if (el.demeanor && el.physique) return `A ${el.physique}, ${el.demeanor} ${el.species}`
    if (el.demeanor) return `A ${el.demeanor} ${el.species}`
    if (el.physique) return `A ${el.physique} ${el.species}`
    return el.species
  }

  return (
    <div className="border-red-500 border pr-10">
      {/* ${props.edit ? "" : "hidden"} */}
      <button
        className={`button border rounded-full shadow w-[20px] h-[20px] p-4 top-[58px] flex justify-center items-center absolute bg-stone-100 dark:bg-stone-700 `}
        onClick={e => { }}
      >
        <FontAwesomeIcon icon={faPencil} />
      </button>
      <p className="overflow-clip whitespace-nowrap m-0 text-xl font-bold">{character.name}</p>
      <p className="overflow-clip whitespace-nowrap m-0 text-xs opacity-75 italic">{getDescription(character)}</p>
      <p className="overflow-clip whitespace-nowrap m-0 text-xs opacity-60">{character.guild} Guild</p>
    </div>
  )
}