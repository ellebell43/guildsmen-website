import type { Metadata } from 'next'
import CharacterApp from '../character-app'
import { Character } from '@/util/types'
import getCookieString from '@/util/getCookieString'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

type Props = { params: { id: string } }
type ApiResponse = { character: Character, isOwner: boolean }

// Fetch character name to use dynamically as page title
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/resources/character-app/api`, { cache: "no-store", method: "GET", headers: { id: params.id }, credentials: "include" })
  if (!res.ok) {
    return { title: `Guildsmen | Character Not Found` }
  } else {
    const response: ApiResponse = await res.json()
    const character = response.character
    return { title: `Guildsmen | ${character.name}` }
  }
}

export default async function Page(props: Props) {
  // Get the character and ownership status and pass to character app
  const token = cookies().get("token")
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/resources/character-app/api`, { cache: "no-store", method: "GET", headers: { id: props.params.id, token: token ? token.value : "" }, credentials: "include" })
  if (!res.ok) {
    return <p>This item couldn't be found! This could be a technical difficulty or it may have been deleted. Try refreshing the page.</p>
  } else {
    const response: ApiResponse = await res.json()
    const character = response.character
    const isOwner = response.isOwner
    return <CharacterApp character={character} isOwner={isOwner} />
  }
}