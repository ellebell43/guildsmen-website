'use client'

import { creatureType } from "@/util/types";
import getCreatureList from "@/util/getCreatureList";
import Spinner from "../spinner";
import Link from "next/link";
import { linkClass } from "@/util/variables";

export default function CreatureList(props: { creatureType: creatureType }) {
  const { data, isLoading, error } = getCreatureList(props.creatureType);

  return (
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
  )
}