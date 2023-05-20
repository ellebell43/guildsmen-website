import Link from "next/link";
import { Metadata } from "next";
import { linkClass } from "../page";

export const metadata: Metadata = {
  title: "Guildsmen Bestiary | Beasts",
  description: "Various beast creatures in the Guilsmen TTRPG"
}

export default function Beasts() {
  return (
    <>
      <h1>Beasts</h1>
      <p>Beasts are common, naturally occurring creatures that you would easily find in the wilds such as bears, wolves, and elephants. They are generally much more powerful than common people but will always do whatever they can to ensure their survival. You cannot expect a beast to fight to the death unless cornered or somehow enraged. Many beasts are peaceful and will not attack unless greatly provoked, and even then, they will attack warningly at first, instead of trying to kill.</p>

      <div className="flex flex-col justify-center items-center gap-4 mt-8">
        <Link className={linkClass} href="/bestiary/beasts/crocodile">Crocodile</Link>
        <Link className={linkClass} href="/bestiary/beasts/grizzly-bear">Grizzly Bear</Link>
        <Link className={linkClass} href="/bestiary/beasts/dire-bear">Dire Bear</Link>
        <Link className={linkClass} href="/bestiary/beasts/hippo">Hippo</Link>
        <Link className={linkClass} href="/bestiary/beasts/lion">Lion</Link>
        <Link className={linkClass} href="/bestiary/beasts/mountain-lion">Mountain Lion</Link>
        <Link className={linkClass} href="/bestiary/beasts/shark">Shark</Link>
        <Link className={linkClass} href="/bestiary/beasts/wolf">Wolf</Link>
        <Link className={linkClass} href="/bestiary/beasts/dire-wolf">Dire Wolf</Link>
      </div>
    </>
  )
}