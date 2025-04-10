import Message from "@/util/components/message"
import CharacterList from "../../../util/components/character-list"
import { Metadata } from "next"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { Character } from "@/util/types"
import getCookieString from "@/util/getCookieString"

export const metadata: Metadata = { title: "Guildsmen | My Characters" }

export default async function Characters() {
  const token = cookies().get("token")
  if (!token?.value) {
    redirect(`${process.env.NEXT_PUBLIC_HOST}/sign-in?return=/profile/characters`)
  } else {
    let list: Character[]
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/profile/characters/api`, { cache: "no-store", method: "GET", headers: { token: token.value }, credentials: "include" })
    if (!res.ok) {
      const data = await res.json()
      throw new Error(data.message)
    } else {
      list = await res.json()
      return (
        <>
          <h1>My Characters</h1>
          <Message good={true} />
          <CharacterList list={list} />
        </>
      )
    }
  }
}