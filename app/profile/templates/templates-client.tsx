"use client"

import CharacterList from "@/util/components/character-list"
import Message from "@/util/components/message"
import { characterTemplate } from "@/util/types"
import { useParams } from "next/navigation"
import { useSearchParams } from "next/navigation"

export default function TemplatesClient(props: { list: characterTemplate[] }) {
  const params = useSearchParams()
  const message = params.get("message")

  return (
    <>
      <h1>My Templates</h1>
      <CharacterList list={props.list} isTemplate={true} />
      <Message good={true} message={message ? message : ""} />
    </>
  )
}