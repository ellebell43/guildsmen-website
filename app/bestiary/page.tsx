import { faDragon, faGem, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Bestiary() {
  return (
    <article>
      <h1>The Bestiary</h1>
      <p>The world of Guildsmen has a wide variety of creatures to interact with, and the creatures outlined in the
        following sections are shown with stats and abilities to enhance your options for encounters and combat
        situations. These creatures fall into 3 distinct categories: people, beasts, and mythical.</p>

      <p>People are.. well.. people. We include them here to give quick references to stats and abilities of common types
        of people you might end up in combat with. Beasts are normal everyday animals that would pose a danger to players.
        This includes bears, sharks, and wolves. Mythical creatures are special, magic creatures that pose a significant
        threat. All of them have magical abilities and have a Navidus Crystal somewhere inside of them. </p>
      <div className="flex flex-col justify-center items-center gap-4 my-8">
        <Link href="/bestiary/mythical-creatures" className="button w-[250px] py-4">
          <FontAwesomeIcon icon={faGem} />
          Mythical Creatures
        </Link>
        <Link href="/bestiary/people" className="button w-[250px] py-4">
          <FontAwesomeIcon icon={faPerson} />
          People
        </Link>
        <Link href="/bestiary/beasts" className="button w-[250px] py-4">
          <FontAwesomeIcon icon={faDragon} />
          Beasts
        </Link>
      </div>
    </article>
  )
}