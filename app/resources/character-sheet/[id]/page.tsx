import type { Metadata } from 'next'
import CharacterSheet from './character-sheet'
import { Character } from '@/util/types'
import getCookieString from '@/util/getCookieString'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

type Props = { params: { id: string } }

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const token = cookies().get("token")
  if (!token) return { title: `Character Sheet | Not Found` }

  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/resources/character-app/api`, { cache: "no-store", method: "GET", headers: { id: params.id, token: token.value }, credentials: "include" })
  if (!res.ok) {
    return { title: `Character Sheet | Not Found` }
  } else {
    const character: Character = await res.json()
    return { title: `Character Sheet | ${character.name}` }
  }
}

export default async function Page(props: Props) {
  const token = cookies().get("token")
  if (!token?.value) {
    redirect(`${process.env.NEXT_PUBLIC_HOST}/sign-in?return=/resources/character-app/${props.params.id}`)
  } else {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/resources/character-app/api`, { cache: "no-store", method: "GET", headers: { id: props.params.id, token: token.value }, credentials: "include" })
    if (!res.ok) {
      return <CharacterSheet error="Character not found" />
    } else {
      const character: Character = await res.json()
      return <CharacterSheet character={character} />
    }
  }
}