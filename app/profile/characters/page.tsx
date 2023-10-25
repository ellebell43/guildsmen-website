import Message from "@/util/components/message"
import CharacterList from "./character-list"
import { Metadata } from "next"

export const metadata: Metadata = { title: "Guildsmen | My Characters" }

export default function Characters() {
  return (
    <>
      <h1>My Characters</h1>
      <Message good={true} />
      <CharacterList private={true} />
    </>
  )
}