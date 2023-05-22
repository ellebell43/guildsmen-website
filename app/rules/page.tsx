import Link from "next/link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPersonHiking, faUserNinja, faGem, faHammer, faScrewdriverWrench, faLandmark, faDragon, faGraduationCap, faStore } from "@fortawesome/free-solid-svg-icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guildsmen TTRPG | Rules",
  description: "Table of contents for the various rule chapters of Guildsmen"
}

export default function Rules() {
  const iconClass = "h-4 w-4";
  const linkClass = "px-10 py-2 w-[330px] button justify-start"
  return (
    <>
      <h1>Guildsmen Core Rules</h1>
      <h2 className="pt-10">Contents</h2>
      <div className="flex flex-col justify-center items-center gap-4 pt-4">
        <Link href="/rules/character-creation" className={`${linkClass} text-sm py-3`}>
          <FontAwesomeIcon className={iconClass} icon={faBook} />
          Chapter 1: Character Creation
        </Link>
        <Link href="/rules/skills" className={linkClass}>
          <FontAwesomeIcon className={iconClass} icon={faPersonHiking} />
          Chapter 2: Skills
        </Link>
        <Link href="/rules/combat" className={linkClass}>
          <FontAwesomeIcon className={iconClass} icon={faUserNinja} />
          Chapter 3: Combat
        </Link>
        <Link href="/rules/myth" className={linkClass}>
          <FontAwesomeIcon className={iconClass} icon={faGem} />
          Chapter 4: Myth
        </Link>
        <Link href="/rules/crafting" className={linkClass}>
          <FontAwesomeIcon className={iconClass} icon={faHammer} />
          Chapter 5: Crafting
        </Link>
        <Link href="/rules/invention" className={linkClass}>
          <FontAwesomeIcon className={iconClass} icon={faScrewdriverWrench} />
          Chapter 6: Invention
        </Link>
        <Link href="/rules/the-market" className={linkClass}>
          <FontAwesomeIcon className={iconClass} icon={faStore} />
          Chapter 7: The Market
        </Link>
        <Link href="/rules/establishments" className={linkClass}>
          <FontAwesomeIcon className={iconClass} icon={faLandmark} />
          Chapter 8: Establishemnts
        </Link>
        <Link href="/rules/creatures" className={linkClass}>
          <FontAwesomeIcon className={iconClass} icon={faDragon} />
          Chapter 9: Creatures
        </Link>
        <Link href="/rules/for-the-gm" className={`${linkClass} text-sm py-3`}>
          <FontAwesomeIcon className={iconClass} icon={faGraduationCap} />
          Chapter 10: For the Game Master
        </Link>
      </div>
    </>
  )
}