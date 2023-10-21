'use client'

import Spinner from "@/app/spinner"
import getPrivateCharacterList from "@/util/getPrivateCharacterList"
import { projectedCharacter } from "@/util/types"
import Link from "next/link"

export default function CharacterList() {
  let { data, error, isLoading } = getPrivateCharacterList()

  if (isLoading) return <Spinner />
  if (error) return <p>{String(error)}</p>
  if (!(data && data.list)) return <p>Something went wrong!</p>

  const getDescription = (el: projectedCharacter): string => {
    if (el.demeanor && el.physique) return `A ${el.physique}, ${el.demeanor} ${el.species}`
    if (el.demeanor) return `A ${el.demeanor} ${el.species}`
    if (el.physique) return `A ${el.physique} ${el.species}`
    return el.species
  }

  const getDate = (el: projectedCharacter): string => {
    const date = new Date(el.dateCreated)
    console.log(date)
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  }

  return (
    <div>
      {data.list.map((el, i) => {
        return (
          <Link key={i} className="border p-4 shadow-lg not-italic no-underline w-full block hover:text-stone-800 dark:hover:text-stone-100" href={`/resources/characters/${el._id}`}>
            <p className="text-xl font-bold m-0">{el.name}</p>
            <p className="m-0 text-sm opacity-60">{getDescription(el)}</p>
            <p className="m-0 text-xs opacity-40">Created: {getDate(el)}</p>
          </Link>
        )
      })}
    </div>
  )
}