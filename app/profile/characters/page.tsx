import Message from "@/util/components/message"
import CharacterList from "./character-list"
import { Metadata } from "next"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

export const metadata: Metadata = { title: "Guildsmen | My Characters" }

export default async function Characters() {
  const token = cookies().get("token")
  if (!token?.value) {
    redirect(`${process.env.NEXT_PUBLIC_HOST}/sign-in?return=/profile/characters`)
  } else {
    return (
      <>
        <h1>My Characters</h1>
        <Message good={true} />
        <CharacterList private={true} />
      </>
    )
  }
}