import { Metadata } from "next"
import CreatureList from "../creatureList"

export const metadata: Metadata = {
  title: "Guildsmen Bestiary | People",
  description: "Various people creatures in the Guilsmen TTRPG"
}

export default function PeopleCreatures() {
  return (
    <>
      <h1>People</h1>
      <p>Poeple are some of the most common things that you will end up in combat with. Whether it&apos;s a brawl, a duel, a mugging, or you&apos;re running from the law, people are everywhere, so we&apos;ve outlined some common people you may get into a fight with to help know what actions, stats, and equipment they would have. None of these people will be <em>significantly</em> more powerful than you, but some will be better equipped, and therefore have the upper hand. And remember: in combat, numbers matter. The largest group generally comes out on top.
      </p>

      <CreatureList creatureType="person" />
    </>
  )
}