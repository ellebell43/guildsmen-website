import Link from "next/link";
import { Metadata } from "next";
import { linkClass } from "@/util/variables";

export const metadata: Metadata = {
  title: "Guildsmen | Lore",
  description: "The starting point for exploring the lore of Thelius, the core world of Guildsmen"
}

export default function Lore() {
  const inactiveLinkClass = "px-10 py-2 w-[330px] border text-center line-through bg-stone-200 text-stone-400 border-stone-400 dark:bg-stone-500"
  const listClass = "list-none flex flex-col justify-center items-center gap-4 my-4"
  return (
    <article>
      <h1>Lore</h1>

      <p>Welcome to the beginning of an expansive journey through the lore of Guildsmen! From here, you can learn everything about the world of Guildsmen, known as Thelius.</p>

      <div className="md:grid md:grid-cols-2">
        <div>
          <h2>The World of Thelius</h2>
          <ul className={listClass}>
            <li className={inactiveLinkClass}>The Atlas of Thelius</li>
            <li><Link href="/lore/the-world-of-thelius/general-world-history" className={linkClass}>General World Histroy</Link></li>
          </ul>
        </div>

        <div>
          <h2>Sophonts of Thelius</h2>
          <ul className={listClass}>
            <li className={inactiveLinkClass}>The Locess</li>
            <li className={inactiveLinkClass}>The Mausca</li>
            <li className={inactiveLinkClass}>The Orcs</li>
            <li className={inactiveLinkClass}>The Matari</li>
            <li className={inactiveLinkClass}>The Slated</li>
            <li className={inactiveLinkClass}>The Ungal</li>
          </ul>
        </div>

        <div>
          <h2>The Ancestor City-States</h2>
          <ul className={listClass}>
            <li><Link href="/lore/ancestor-cities/arbor" className={linkClass}>Arbor - City of the Locess</Link></li>
            <li className={inactiveLinkClass}>Aquina - City of the Mausca</li>
            <li className={inactiveLinkClass}>Corden - City of the Orcs</li>
            <li className={inactiveLinkClass}>Inidom - City of the Matari</li>
            <li className={inactiveLinkClass}>Kulasis - City of the Slated</li>
            <li className={inactiveLinkClass}>Galus - City of the Ungal</li>
          </ul>
        </div>

        <div>
          <h2>Mythical Creatures and Navidus</h2>
          <ul className={listClass}>
            <li className={inactiveLinkClass}>Mythical Biology</li>
            <li className={inactiveLinkClass}>Navidus</li>
            <li className={inactiveLinkClass}>Navidus Crystals</li>
            <li className={inactiveLinkClass}>Navidus Energy</li>
            <li className={inactiveLinkClass}>Myth</li>
            <li className={inactiveLinkClass}>Myth & Sophont Anatomy</li>
            <li className={inactiveLinkClass}>Centrifuge Technology</li>
          </ul>
        </div>

        <div>
          <h2>Types of Mythical Creatures</h2>
          <ul className={listClass}>
            <li><Link href="/lore/types-of-mythical-creatures/fictus-arboreus" className={linkClass}>Fictus Arboreus (Hunting Tree)</Link></li>

          </ul>
        </div>
      </div>

    </article>
  )
}