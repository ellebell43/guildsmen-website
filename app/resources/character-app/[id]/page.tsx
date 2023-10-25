import type { Metadata, ResolvingMetadata } from 'next'
import CharacterApp from '../character-app'

type Props = { params: { id: string } }

export const metadata: Metadata = { title: "Guildsmen | Character App" }

export default function Page(props: Props) {
  return (
    <>
      <CharacterApp id={props.params.id} />
    </>
  )
}