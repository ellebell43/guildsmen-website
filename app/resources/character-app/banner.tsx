"use client"

import { Character } from "@/util/types";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
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

  const updateCharacter = () => {

  }


  return (
    <div className="fixed inset-x-0 top-[52px] shadow bg-stone-200 dark:bg-stone-600 p-4 z-[49] flex justify-between">

      <div>
        <p className="overflow-clip whitespace-nowrap m-0 text-xl font-bold">{character.name}</p>
        <p className="overflow-clip whitespace-nowrap m-0 text-xs opacity-75 italic">{getDescription(character)}</p>
        <p className="overflow-clip whitespace-nowrap m-0 text-xs opacity-60">{character.guild} Guild</p>
      </div>
      <div className="pr-4 relative">
        <p className="m-0 text-center border-b border-stone-800 dark:border-stone-300 w-fit mx-auto">Harm</p>
        <div className="flex justify-center items-center gap-2">
          <button onClick={e => {
            let newCharacter = { ...character }
            newCharacter.harm++
            props.setCharacter(newCharacter)
          }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <p className="m-0 text-center text-2xl">{character.harm}/10</p>
          <button
            onClick={e => {
              let newCharacter = { ...character }
              newCharacter.harm--
              props.setCharacter(newCharacter)
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
      </div>
    </div>
  )
}