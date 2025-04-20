'use client'

import Spinner from "@/app/spinner"
import PopUp from "@/util/components/pop-up"
import { Character, characterTemplate, projectedCharacter } from "@/util/types"
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CharacterList(props: { list: Character[] | characterTemplate[], private?: boolean, isTemplate?: boolean, public?: boolean }) {
  // state variables
  let [showConfirmation, setShowConfirmation] = useState(false)
  let [deleteId, setDeleteId] = useState("")
  let [deleteLoading, setDeleteLoading] = useState(false)
  const isTemplate = props.isTemplate

  let router = useRouter()

  // parse description string from character properties
  const getDescription = (el: projectedCharacter): string => {
    if (el.demeanor && el.physique) return `A ${el.physique}, ${el.demeanor} ${el.species}`
    if (el.demeanor) return `A ${el.demeanor} ${el.species}`
    if (el.physique) return `A ${el.physique} ${el.species}`
    return el.species
  }

  // Parse date
  const getDate = (date: Date): string => {
    return date.toDateString()
  }

  // delete character/template
  const deleteCharacter = () => {
    const api = isTemplate ? "/profile/templates/api" : "/profile/characters/api"
    let ok = true
    setDeleteLoading(true)
    fetch(api, { method: "DELETE", headers: { id: deleteId } })
      .then(res => {
        if (!res.ok) ok = false
        return res.json()
      })
      .then(data => {
        setDeleteLoading(false)
        if (!ok) {
          throw new Error(data.message)
        } else {
          router.refresh()
        }
      })

  }

  return (
    <div className="sm:grid grid-cols-2 md:grid-cols-3 flex flex-col gap-4 justify-center items-center">
      {isTemplate && !props.list[0] ? <p>Nothing here yet!</p> : <></>}
      {!isTemplate ?
        <div className="border p-4 shadow-lg w-full h-[118px] flex justify-between items-center hover:bg-stone-200 dark:hover:bg-stone-600 transition-all">
          <Link href="/resources/character-creator" className="flex justify-center items-center w-full h-full">
            <FontAwesomeIcon icon={faPlus} className="h-[75%]" />
          </Link>
        </div> : <></>}
      {/* Map over list */}
      {props.list.map((el, i) => {

        // ================== CHARACTER LIST MAP ======================

        if (!isTemplate) return (
          <div key={i} className="border p-4 h-[118px] shadow-lg w-full flex justify-between items-center hover:bg-stone-200 dark:hover:bg-stone-600 transition-all">
            <Link href={`/resources/character-app/${el._id}`} className="not-italic no-underline hover:text-stone-800 dark:hover:text-stone-100 w-full">
              {/* @ts-expect-error */}
              <p className="text-xl font-bold m-0 overflow-clip whitespace-nowrap">{el.name}</p>
              {/* @ts-expect-error */}
              <p className="m-0 text-sm opacity-60 overflow-clip whitespace-nowrap">{getDescription(el)}</p>
              {/* @ts-expect-error */}
              <p className="m-0 text-sm opacity-60 overflow-clip whitespace-nowrap">{el.guild} Guild</p>
              <p className="m-0 text-xs opacity-40 overflow-clip whitespace-nowrap">Created: {getDate(new Date(el.dateCreated))}</p>
            </Link>
            <button
              className="text-xl h-[50px] w-[50px] flex justify-center items-center hover:opacity-50 transition-all"
              onClick={e => { setShowConfirmation(true); setDeleteId(String(el._id)) }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        )

        // ================== TEMPLATES LIST MAP ======================

        return (
          <div key={i} className="border p-4 h-[118px] shadow-lg w-full flex justify-between items-center hover:bg-stone-200 dark:hover:bg-stone-600 transition-all">
            <Link href={`/resources/character-templates/${el._id}`} className="not-italic no-underline hover:text-stone-800 dark:hover:text-stone-100 w-full">
              {/* @ts-expect-error */}
              <p className="text-xl font-bold m-0 overflow-clip whitespace-nowrap">{el.character.name}</p>
              {/* @ts-expect-error */}
              <p className="m-0 text-sm opacity-60 overflow-clip whitespace-nowrap">{getDescription(el.character)}</p>
              <p className="m-0 text-sm opacity-60 overflow-clip whitespace-nowrap">Published by <em>{el.owner}</em></p>
              {/* @ts-expect-error */}
              <p className="m-0 text-sm opacity-60 overflow-clip whitespace-nowrap">Character originally by <em>{el.referenceOwner}</em></p>
              <p className="m-0 text-xs opacity-40 overflow-clip whitespace-nowrap">Created: {getDate(new Date(el.dateCreated))}</p>
            </Link>
            {/* Delete button */}
            {props.public ? <></> :
              <button
                className="text-xl h-[50px] w-[50px] flex justify-center items-center hover:opacity-50 transition-all"
                onClick={e => { setShowConfirmation(true); setDeleteId(String(el._id)) }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>}
          </div>
        )
      })}

      {/* ====================== DELETION CONFIRMATION POPUP =========================== */}

      {showConfirmation ?
        <PopUp>
          <p className="text-center text-xl">Are you sure you want to delete this item?</p>
          <p className="text-center text-xl font-bold mb-8">This cannot be undone!</p>
          <div className="flex flex-col justify-center items-center gap-4">
            <button
              className="button w-[225px] py-2 rounded bg-green-200 text-green-800 border-green-800 dark:bg-green-800 dark:text-green-100 dark:border-green-200 hover:text-green-100 hover:bg-green-800 hover:border-green-200 dark:hover:bg-green-200 dark:hover:text-green-800 dark:hover:border-green-800 transition-all"
              onClick={e => setShowConfirmation(false)}
            >
              Do not delete this item.
            </button>
            <button
              className="button w-[225px] py-2 rounded bg-red-200 text-red-800 border-red-800 dark:bg-red-800 dark:text-red-100 dark:border-red-200 hover:text-red-100 hover:bg-red-800 hover:border-red-200 dark:hover:bg-red-200 dark:hover:text-red-800 dark:hover:border-red-800 transition-all"
              onClick={e => { deleteCharacter(); setShowConfirmation(false) }}
            >
              Delete this item.
              {deleteLoading ?
                <div className="absolute right-4">
                  <Spinner />
                </div> : <></>}
            </button>
          </div>
        </PopUp> : <></>}
    </div>
  )
}