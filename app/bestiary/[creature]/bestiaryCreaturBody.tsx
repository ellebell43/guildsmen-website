'use client'

import Spinner from "@/app/spinner";
import CreatureBlock from "@/app/creatureBlock";
import getOfficialCreature from "@/util/getOfficialCreature";

export default function BestiaryCreatureBody(props: { creatureName: string }) {
  const { data, isLoading, error } = getOfficialCreature(props.creatureName);
  if (isLoading) return <Spinner />
  if (error) return <p>Something went wrong! {error.message}</p>
  if (data && !data.success) return <p>Something went wrong! {data.data}</p>
  if (data && data.success) return <CreatureBlock creature={JSON.parse(data.data)} />
  return <p>Something went wrong!</p>
}