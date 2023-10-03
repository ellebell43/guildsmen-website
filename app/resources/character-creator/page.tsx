import { Metadata } from "next"
import PrivateRoute from "@/util/components/private-route"
import CharacterForm from "./character-form"

export const metadata: Metadata = { title: "Guildsmen | Character Creator" }

export default function CharacterCreator() {
  return (
    <>
      <h1>Character Creator</h1>
      <PrivateRoute>
        <CharacterForm />
      </PrivateRoute>
    </>
  )
}