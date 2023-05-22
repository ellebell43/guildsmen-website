import { Metadata } from "next";
import BestiaryCreatureBody from "./bestiaryCreaturBody";

export async function generateMetadata({ params }: { params: { creature: string } }): Promise<Metadata> {
  const parsedSlug = params.creature.replace(/-/, " ");
  return {
    title: `Guildsmen Bestiary | ${parsedSlug}`,
    description: `Creature block for the ${parsedSlug} in Guildsmen TTRPG`
  }
}

export default function BestiaryCreature({ params }: { params: { creature: string } }) {
  const parsedSlug = params.creature.replace(/-/, " ");
  return <BestiaryCreatureBody creatureName={parsedSlug} />
}