import { faDragon, faGem, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import Link from "next/link";
import { linkClass } from "@/util/variables";

export const metadata: Metadata = {
  title: "Guildsmen | Bestiary",
  description: "Explore the various creatures of Guildsmen TTRPG"
}

export default function Bestiary() {
  return (
    <article>
      <h1>The Bestiary</h1>
      <p>The world of Guildsmen has a wide variety of creatures to interact with, and the creatures outlined in the following sections are shown with stats and abilities to enhance your options for encounters and combat situations. These creatures fall into 3 distinct categories: people, beasts, and starborne.</p>

      <p>People are.. well.. people. We include them here to give quick references to stats and abilities of common types of people you might end up in combat with. Beasts are normal everyday animals (or at least normal and everyday for the world of Thelius) that would pose a danger to players. This includes bears, sharks, and wolves. Starborne creatures are special, magic creatures that pose a significant threat. All of them have magical abilities and have a Star Gem somewhere inside of them. To learn more about Starborne creatures, visit the <Link href="/lore">Lore</Link> page.</p>

      <div className="flex flex-col justify-center items-center gap-4 my-8">
        <Link href="/bestiary/starborne" className={linkClass}>
          <FontAwesomeIcon icon={faGem} />
          Starborne
        </Link>
        <Link href="/bestiary/people" className={linkClass}>
          <FontAwesomeIcon icon={faPerson} />
          People
        </Link>
        <Link href="/bestiary/beasts" className={linkClass}>
          <FontAwesomeIcon icon={faDragon} />
          Beasts
        </Link>
      </div>
    </article>
  )
}