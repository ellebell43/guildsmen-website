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
      {/* If loading, show a spinner */}
      {isLoading ? <Spinner /> :
        // If an error occurs from fetcher function, show error. Usually happens if there's a network error
        error ? <p>An error has been encountered! - {String(error)}</p> :
          // If no data is returned, let the user know nothing exists yet
          !data ? <p>Nothing here yet!</p> :
            // If success is false from API, let user know. Usually happens from a timeout with the database communication
            !data.success ?
              <div className="max-w-full error">
                <p className="max-w-full">An error has been encountered. Please contact technical support.</p>
                <p className="max-w-full">{JSON.stringify(data.data)}</p>
              </div> :
              // Render the return data array as a list of links
              data.data.map((el: { _el: any, name: string }, i: number) => {
                const parsedName = el.name.replace(/ /, "-")
                return <Link key={i} className={linkClass} href={`/bestiary/${parsedName}`}>{el.name}</Link>
              })
      }
    </div>
  )
}