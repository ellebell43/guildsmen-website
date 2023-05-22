'use client'

import Link from "next/link"
import { Metadata } from "next"
import { linkClass } from "@/util/variables"
import getCreatureList from "@/util/getCreatureList"
import Spinner from "@/app/spinner"

export const metadata: Metadata = {
  title: "Guildsmen Bestiary | People",
  description: "Various people creatures in the Guilsmen TTRPG"
}

export default function PeopleCreatures() {
  const { data, isLoading, error } = getCreatureList("person");

  return (
    <>
      <h1>People</h1>
      <p>Poeple are some of the most common things that you will end up in combat with. Whether it&apos;s a brawl, a duel, a mugging, or you&apos;re running from the law, people are everywhere, so we&apos;ve outlined some common people you may get into a fight with to help know what actions, stats, and equipment they would have. None of these people will be <em>significantly</em> more powerful than you, but some will be better equipped, and therefore have the upper hand. And remember: in combat, numbers matter. The largest group generally comes out on top.
      </p>

      <div className="flex flex-col justify-center items-center gap-4 mt-8">
        {isLoading ? <Spinner /> :
          error ? <p>{error}</p> :
            !data ? <p>Nothing here yet!</p> :
              data.data.map((el: { _el: any, name: string }, i: number) => {
                const parsedName = el.name.replace(/ /, "-")
                return <Link key={i} className={linkClass} href={`/bestiary/${parsedName}`}>{el.name}</Link>
              })
        }
      </div>
    </>
  )
}