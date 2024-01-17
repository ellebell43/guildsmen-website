import { Metadata } from "next"
import CharacterForm from "./character-form"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

export const metadata: Metadata = { title: "Guildsmen | Character Creator" }

export default function CharacterCreator() {
  const token = cookies().get("token")
  if (!token?.value) {
    redirect(`${process.env.NEXT_PUBLIC_HOST}/sign-in?return=/resources/character-creator`)
  } else {
    return (
      <>
        <h1>Character Creator</h1>
        <CharacterForm />
      </>
    )
  }

}