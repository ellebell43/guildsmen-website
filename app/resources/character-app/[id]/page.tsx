import type { Metadata, ResolvingMetadata } from 'next'
import CharacterApp from '../character-app'
import { Character } from '@/util/types'

type Props = { params: { id: string } }

export const metadata: Metadata = { title: "Guildsmen | Character App" }

export default async function Page(props: Props) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/resources/character-app/api`, { cache: "no-store", method: "GET", headers: { id: props.params.id } })
  if (!res.ok) {
    throw new Error("Failed to fetch API data")
  }
  const character: Character = await res.json()
  return (
    <>
      <CharacterApp character={character} />
    </>
  )
}