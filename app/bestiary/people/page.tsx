import Link from "next/link"
import { Metadata } from "next"
import { linkClass } from "../page"

export const metadata: Metadata = {
  title: "Guildsmen Bestiary | People",
  description: "Various people creatures in the Guilsmen TTRPG"
}

export default function PeopleCreatures() {
  return (
    <>
      <h1>People</h1>
      <p>Poeple are some of the most common things that you will end up in combat with. Whether it's a brawl, a duel, a mugging, or you're running from the law, people are everywhere, so we've outlined some common people you may get into a fight with to help know what actions, stats, and equipment they would have. None of these people will be <em>significantly</em> more powerful than you, but some will be better equipped, and therefore have the upper hand. And remember: in combat, numbers matter. The largest group generally comes out on top.
      </p>

      <div className="flex flex-col justify-center items-center gap-4 mt-8">
        <Link className={linkClass} href="/bestiary/people/assassin">Assassin</Link>
        <Link className={linkClass} href="/bestiary/people/elite-bodyguard">Elite Bodyguard</Link>
        <Link className={linkClass} href="/bestiary/people/mercenary">Mercenary</Link>
        <Link className={linkClass} href="/bestiary/people/police-captain">Police Captain</Link>
        <Link className={linkClass} href="/bestiary/people/police-officer">Police Officer</Link>
        <Link className={linkClass} href="/bestiary/people/thug">Thug</Link>
      </div>
    </>
  )
}