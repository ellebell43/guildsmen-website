import type { Metadata } from 'next'
import CharacterSheet from './character-sheet'
import { Character } from '@/util/types'
import getCookieString from '@/util/getCookieString'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

type Props = { params: { id: string } }
type ApiResponse = { character: Character, isOwner: boolean }

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/resources/character-app/api`, { cache: "no-store", method: "GET", headers: { id: params.id }, credentials: "include" })
  if (!res.ok) {
    return { title: `Character Sheet | Not Found` }
  } else {
    const response: ApiResponse = await res.json()
    const character = response.character
    return { title: `Character Sheet | ${character.name}` }
  }
}

export default async function Page(props: Props) {
  const token = cookies().get("token")
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/resources/character-app/api`, { cache: "no-store", method: "GET", headers: { id: props.params.id, token: token ? token.value : "" }, credentials: "include" })
  if (!res.ok) {
    return <CharacterSheet error="Character not found" />
  } else {
    const response: ApiResponse = await res.json()
    const character = response.character
    return <CharacterSheet character={character} />
  }
}