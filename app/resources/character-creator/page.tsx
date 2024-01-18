import { Metadata } from "next"
import CharacterForm from "./character-form"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { user } from "@/util/types"
import getCookieString from "@/util/getCookieString"

export const metadata: Metadata = { title: "Guildsmen | Character Creator" }

export default async function CharacterCreator() {
  const token = cookies().get("token")
  if (!token?.value) {
    redirect(`${process.env.NEXT_PUBLIC_HOST}/sign-in?return=/resources/character-creator`)
  } else {
    let user: user
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/profile/api`, { cache: "no-store", method: "GET", headers: { token: token.value, getUser: "true" }, credentials: "include" })
    if (!res.ok) {
      const data = await res.json()
      throw new Error(data.message)
    } else {
      user = await res.json()
    }
    return (
      <>
        <h1>Character Creator</h1>
        <CharacterForm user={user} />
      </>
    )
  }

}