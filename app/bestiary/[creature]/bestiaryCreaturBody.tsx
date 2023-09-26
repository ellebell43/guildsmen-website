'use client'

import Spinner from "@/app/spinner";
import CreatureBlock from "@/app/creatureBlock";
import getOfficialCreature from "@/util/getOfficialCreature";

export default function BestiaryCreatureBody(props: { creatureName: string }) {
  const { data, isLoading, error } = getOfficialCreature(props.creatureName);
  return (
    <>
      {/* If loading, show a spinner */}
      {isLoading ? <Spinner /> :
        // If an error occurs from fetcher function, show error. Usually happens if there's a network error
        error ? <p className="error">An error has been encountered! - {String(error)}</p> :
          // If no data is returned, let the user know nothing exists yet
          !data ? <p>Nothing here yet!</p> :
            // If success is false from API, let user know. Usually happens from a timeout with the database communication
            !data.success ?
              <div className="max-w-full error">
                <p className="max-w-full">An error has been encountered. Please contact technical support.</p>
                <p className="max-w-full">{JSON.stringify(data.data)}</p>
              </div> :
              // Render the return data as a formatted creature block
              <CreatureBlock creature={JSON.parse(data.data)} />
      }
    </>
  )
}