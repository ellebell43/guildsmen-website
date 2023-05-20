import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guildsmen Bestiary | Police Officer",
  description: "Creature block for a Police Officer in Guildsmen TTRPG"
}

export default function PoliceOfficer() {
  return (
    <div className="creatureBlock">
      <h1 className="title">Police Officer (Deadly, +2)</h1>
      <div className="stats">
        <p>Tough +2 | Nimble +0 </p>
        <p>Competence +1 | Constitution +1</p>
        <p>Harm 7 | Armor 2</p>
      </div>
      <p className="description">Police Officers take their duty seriously. They protect the citizens and do their best to keep ruffians and thugs off the streets and maintain the peace. However, a few have been known to turn a blind eye for the right price…</p>
      <div className="actions">
        <p className="actionHead">Actions</p>

        <p><strong>Light Pistol</strong> (+3) - The Police Officer fires at you with their pistol.</p>

        <p><strong>Light Sword</strong> (+1) - The Police Officer slices with their sword when combat gets into close quarters.</p>

        <p><strong>Shock Rod</strong> (+3) - A light, melee weapon that most Police Officers carry. It causes intense electrical damage upon a successful hit, but drains a 1” Navidus Crystal. It also causes any affected creature to be <Link href="/rules/combat#conditions">Stunned</Link> for 10 seconds (1 combat round). This can be used on conductive surfaces to stun for 10 seconds and deal 3 Harm to anything touching the conductive surface.</p>

        <p><strong>Caltrops</strong> - The Police Officer lays a set of caltrops on the ground. Any soft footed creatures that walk through them must roll a Nimble check 10+ or get knocked down and take 1 Harm.</p>
      </div>
    </div>
  )
}