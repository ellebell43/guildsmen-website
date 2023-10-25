"use client"

import { useRouter } from "next/router"
import getCharacter from "@/util/getCharacter"
import Spinner from "@/app/spinner"

export default function CharacterApp(props: { id: string }) {
  const { data, isLoading, error } = getCharacter(props.id)

  if (isLoading) return <Spinner />
  if (error) return <p>{String(error)}</p>
  if (!data?.character) return <p>No character found with provided id.</p>
  return (
    <h1>{data.character.name}</h1>
  )
}