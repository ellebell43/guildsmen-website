'use client'

import Link from "next/link";
import { Metadata } from "next";
import { linkClass } from "@/util/variables"
import getCreatureList from "@/util/getCreatureList";
import Spinner from "@/app/spinner";

export const metadata: Metadata = {
  title: "Guildsmen Bestiary | Beasts",
  description: "Various beast creatures in the Guilsmen TTRPG"
}

export default function Beasts() {
  const { data, isLoading, error } = getCreatureList("beast");

  return (
    <>
      <h1>Beasts</h1>
      <p>Beasts are common, naturally occurring creatures that you would easily find in the wilds such as bears, wolves, and elephants. They are generally much more powerful than common people but will always do whatever they can to ensure their survival. You cannot expect a beast to fight to the death unless cornered or somehow enraged. Many beasts are peaceful and will not attack unless greatly provoked, and even then, they will attack warningly at first, instead of trying to kill.</p>

      <div className="flex flex-col justify-center items-center gap-4 mt-8">
        {isLoading ? <Spinner /> :
          error ? <p>{error}</p> :
            !data ? <p>Nothing here yet!</p> :
              data.data.map((el: { _el: any, name: string }, i: number) => {
                const parsedName = el.name.replace(/ /, "-")
                return <Link key="i" className={linkClass} href={`/bestiary/${parsedName}`}>{el.name}</Link>
              })
        }
      </div>
    </>
  )
}