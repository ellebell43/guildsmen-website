"use client"

import { Character } from "@/util/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Banner(props: { character: Character, setCharacter: Function }) {
  const { character } = props

  const getDescription = (el: Character): string => {
    if (el.demeanor && el.physique) return `A ${el.physique}, ${el.demeanor} ${el.species}`
    if (el.demeanor) return `A ${el.demeanor} ${el.species}`
    if (el.physique) return `A ${el.physique} ${el.species}`
    return el.species
  }

  return (
    <div className="flex justify-between border-b-2 pb-4 w-[95%]">
      {/*  -- NAME AND DESCRIPTION -- */}
      <div>
        <p className="overflow-clip whitespace-nowrap m-0 text-xl font-bold">{character.name}</p>
        <p className="overflow-clip whitespace-nowrap m-0 text-xs opacity-75 italic">{getDescription(character)}</p>
        <p className="overflow-clip whitespace-nowrap m-0 text-xs opacity-60">{character.guild} Guild</p>
      </div>
      <div className="pr-4 relative">
        {/* -- HARM TRACKER -- */}
        <p className="m-0 text-center border-b border-stone-800 dark:border-stone-300 w-fit mx-auto">Harm</p>
        <div className="flex justify-center items-center gap-2">
          <button
            className="opacity-25"
            onClick={e => {
              if (character.harm < 10) {
                let newCharacter = { ...character }
                newCharacter.harm++
                props.setCharacter(newCharacter)
              }
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <p className="m-0 text-center text-2xl">{character.harm}/10</p>
          <button
            className="opacity-25"
            onClick={e => {
              if (character.harm > 0) {
                let newCharacter = { ...character }
                newCharacter.harm--
                props.setCharacter(newCharacter)
              }
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
        <button
          className={`text-xs m-0 flex justify-center items-center gap-1 text-center mx-auto ${character.dying ? "text-red-800 dark:text-red-300" : ""}`}
          onClick={e => {
            let newCharacter = { ...character }
            newCharacter.dying = !newCharacter.dying
            props.setCharacter(newCharacter)
          }}
        >
          Dying<div className={`border rounded-full w-[10px] h-[10px] ${character.dying ? "bg-red-800 dark:bg-red-300 border-red-800 dark:border-red-300 " : ""}`} />
        </button>
      </div>
    </div>
  )
}