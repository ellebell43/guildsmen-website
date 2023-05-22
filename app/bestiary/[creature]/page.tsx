'use client'

import CreatureBlock from "@/app/creatureBlock"
import { Metadata } from "next";
import getOfficialCreature from "@/util/getOfficialCreature";
import Spinner from "@/app/spinner";

export async function generateMetadata({ params }: { params: { creature: string } }): Promise<Metadata> {
  const parsedSlug = params.creature.replace(/-/, " ");
  return {
    title: `Guildsmen Bestiary | ${parsedSlug}`,
    description: `Creature block for the ${parsedSlug} in Guildsmen TTRPG`
  }
}

export default function BestiaryCreature({ params }: { params: { creature: string } }) {
  const parsedSlug = params.creature.replace(/-/, " ");
  const { data, isLoading, error } = getOfficialCreature(parsedSlug);
  if (isLoading) return <Spinner />
  if (error) return <p>Something went wrong! {error.message}</p>
  if (data && !data.success) return <p>Something went wrong! {data.data}</p>
  if (data && data.success) return <CreatureBlock creature={JSON.parse(data.data)} />
  return <p>Something went wrong!</p>
}