import Link from "next/link";
import { Metadata } from "next";
import { linkClass } from "@/util/variables";

export const metadata: Metadata = {
  title: "Guildsmen Lore",
  description: "The starting point for exploring the lore of Thelius, the core world of Guildsmen"
}

export default function Lore() {
  const listClass = "list-none flex flex-col justify-center items-center gap-4 my-4"
  return (
    <article>
      <h1>Lore</h1>

      <p>Welcome to the beginning of an expansive journey through the lore of Guildsmen! From here, you can learn everything about the world of Guildsmen, known as Thelius.</p>

      <div className="md:grid md:grid-cols-2">
        <div>
          <h2>The World of Thelius</h2>
          <ul className={listClass}>
            <li className={linkClass}>The Atlas of Thelius</li>
            <li className={linkClass}>General World History</li>
          </ul>
        </div>

        <div>
          <h2>Sophonts of Thelius</h2>
          <ul className={listClass}>
            <li className={linkClass}>The Locess</li>
            <li className={linkClass}>The Mausca</li>
            <li className={linkClass}>The Orcs</li>
            <li className={linkClass}>The Matari</li>
            <li className={linkClass}>The Slated</li>
            <li className={linkClass}>The Ungal</li>
          </ul>
        </div>

        <div>
          <h2>The Ancestor City-States</h2>
          <ul className={listClass}>
            <li className={linkClass}><Link href="/lore/ancestor-cities/arbor">Arbor - City of the Locess</Link></li>
            <li className={linkClass}>Aquina - City of the Mausca</li>
            <li className={linkClass}>Corden - City of the Orcs</li>
            <li className={linkClass}>Inidom - City of the Matari</li>
            <li className={linkClass}>Kulasis - City of the Slated</li>
            <li className={linkClass}>Galus - City of the Ungal</li>
          </ul>
        </div>

        <div>
          <h2>Mythical Creatures and Navidus</h2>
          <ul className={listClass}>
            <li className={linkClass}>Mythical Biology</li>
            <li className={linkClass}>Navidus</li>
            <li className={linkClass}>Navidus Crystals</li>
            <li className={linkClass}>Navidus Energy</li>
            <li className={linkClass}>Myth</li>
            <li className={linkClass}>Cetrifuge Technology</li>
          </ul>
        </div>
      </div>

    </article>
  )
}