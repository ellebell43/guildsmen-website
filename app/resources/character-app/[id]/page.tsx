import type { Metadata } from 'next'
import CharacterApp from '../character-app'
import { Character } from '@/util/types'
import PrivateRoute from '@/util/components/private-route'
import { cookies } from 'next/dist/client/components/headers'

type Props = { params: { id: string } }

export const metadata: Metadata = { title: "Guildsmen | Character App" }

export default async function Page(props: Props) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/resources/character-app/api`, { cache: "no-store", method: "GET", headers: { id: props.params.id, Cookie: cookies().toString() }, credentials: "include" })
  if (!res.ok) {
    const data = await res.json()
    throw new Error(data.error)
  }
  const character: Character = await res.json()
  return (
    <PrivateRoute>
      <CharacterApp character={character} />
    </PrivateRoute>
  )
}