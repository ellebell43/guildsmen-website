import { creatureType } from "@/util/types";
import Link from "next/link";
import { linkClass } from "@/util/variables";

export default async function CreatureList(props: { creatureType: creatureType }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/bestiary/api`, { method: "GET", headers: { "creature-type": props.creatureType } })
  if (!res.ok) {
    let data = await res.json()
    throw new Error(data.message)
  }

  const list = await res.json()

  if (!Array.isArray(list)) {
    return (
      <div className="flex flex-col justify-center items-center gap-4 mt-8">
        <p className="text-blue-500 dark:text-blue-200 font-bold">{list}</p>
      </div>
    )
  } else {
    return (
      <div className="flex flex-col justify-center items-center gap-4 mt-8">
        {list.map((el: { _el: any, name: string }, i: number) => {
          const parsedName = el.name.replace(/ /, "-")
          return <Link key={i} className={linkClass} href={`/bestiary/${parsedName}`}>{el.name}</Link>
        })}
      </div>
    )
  }
}