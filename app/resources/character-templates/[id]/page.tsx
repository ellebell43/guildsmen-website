import { characterTemplate } from "@/util/types";
import { Metadata } from "next";
import { cookies } from "next/headers";
import CharacterApp from "../../character-app/character-app";

type Props = { params: { id: string } }
type ApiResponse = { template: characterTemplate, isOwner: boolean }

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/resources/character-templates/api`, { cache: "no-store", method: "GET", headers: { id: params.id }, credentials: "include" })
  if (!res.ok) {
    return { title: `Guildsmen | Character Not Found` }
  } else {
    const response: ApiResponse = await res.json()
    const template = response.template
    return { title: `Guildsmen | ${template.character.name}` }
  }
}

export default async function Page(props: Props) {
  // Get the template and ownership status and pass to template app
  const token = cookies().get("token")
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/resources/character-templates/api`, { cache: "no-store", method: "GET", headers: { id: props.params.id, token: token ? token.value : "" }, credentials: "include" })
  if (!res.ok) {
    throw new Error(res.statusText)
  } else {
    const response: ApiResponse = await res.json()
    const template: characterTemplate = response.template
    const isOwner: boolean = response.isOwner
    return <CharacterApp template={template} isOwner={isOwner} character={template.character} />
  }
}