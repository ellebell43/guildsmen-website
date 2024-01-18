import type { Metadata } from 'next'
import CharacterApp from '../character-app'
import { Character } from '@/util/types'
import getCookieString from '@/util/getCookieString'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

type Props = { params: { id: string } }

export const metadata: Metadata = { title: "Guildsmen | Character App" }

export default async function Page(props: Props) {
  const token = cookies().get("token")
  if (!token?.value) {
    redirect(`${process.env.NEXT_PUBLIC_HOST}/sign-in?return=/resources/character-app/${props.params.id}`)
  } else {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/resources/character-app/api`, { cache: "no-store", method: "GET", headers: { id: props.params.id, token: token.value }, credentials: "include" })
    if (!res.ok) {
      throw new Error(res.statusText)
    } else {
      const character: Character = await res.json()
      return <CharacterApp character={character} />
    }
  }
}