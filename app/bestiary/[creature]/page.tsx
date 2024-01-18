import { Metadata } from "next";
import CreatureBlock from "@/app/creatureBlock";
import { creature } from "@/util/types";

export async function generateMetadata({ params }: { params: { creature: string } }): Promise<Metadata> {
  const parsedSlug = params.creature.replace(/-/, " ");
  return {
    title: `Guildsmen Bestiary | ${parsedSlug}`,
    description: `Creature block for the ${parsedSlug} in Guildsmen TTRPG`
  }
}



export default async function BestiaryCreature({ params }: { params: { creature: string } }) {
  const parsedSlug = params.creature.replace(/-/, " ");

  let creature: creature
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/bestiary/${params.creature}/api`, { cache: "no-store", method: "GET", headers: { "creature-name": parsedSlug } })
  if (!res.ok) {
    const data = await res.json()
    throw new Error(data.message)
  } else {
    creature = await res.json()
  }

  return <CreatureBlock creature={creature} />
}