import { Metadata } from "next"
import PrivateRoute from "@/util/components/private-route"

export const metadata: Metadata = { title: "Guildsmen | Character Creator" }

export default function CharacterCreator() {
  return (
    <>
      <h1>Character Creator</h1>
      <PrivateRoute>
        <p>test</p>
      </PrivateRoute>
    </>
  )
}