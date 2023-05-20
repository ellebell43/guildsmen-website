import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guildsmen Bestiary | Elite Bodygaurd",
  description: "Creature block of an Elite Bodyguard for Guildsmen TTRPG"
}

export default function ElitBodyguard() {
  return (
    <div className="creatureBlock">
      <h1 className="title">Elite Bodyguard (Deadly, +3)</h1>

      <div className="stats">
        <p>Tough +3 | Nimble +2 </p>
        <p>Competence +2 | Constitution +2</p>
        <p>Harm 7 | Armor 4</p>
      </div>

      <p className="description">An Elite Bodyguard protects the highest of nobility and other political figures. They are aggressive and severe with anyone that looks even remotely like they might cause trouble. They take their duties very seriously and they have been trained extensively in combat. Their honor is everything to them and all their honor lies in their duty to protect the person they&apos;ve been sworn to protect.</p>

      <div className="actions">
        <p className="actionHead">Actions</p>

        <p><strong>Improved Light Knife</strong> (+2) - The Elite Bodyguard swings a very large knife.</p>

        <p><strong>Improved Heavy Rifle</strong> (+8) - The Elite Bodyguard wields a specialized rifle.</p>

        <p><strong>Improved Light Pistol</strong> (+4) - The Elite Bodyguard fires at you with their pistol.</p>

        <p><strong>Caltrops</strong> - The Elite Bodyguard lays a set of caltrops on the ground. Any soft footed creatures that walk through them must roll a Nimble check 10+ or get <Link href="/rules/combat#conditions">Knocked Down</Link> and take 1 Harm.</p>

        <p>Bola - The Elite Bodyguard throws a bola at their victim. If successful, the victim becomes <Link href="/rules/combat#conditions">Entangled</Link> for 20 seconds (2 combat rounds).</p>

        <p><strong>1 Health Elixir</strong> - The Elite Bodyguard takes a swig of this special elixir that heals 2 Harm.</p>
      </div>
    </div>
  )
}