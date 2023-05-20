import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Guildsmen Bestiary | Thug",
  description: "Creature block for a Thug in Guildsmen TTRPG"
}

export default function Thug() {
  return (
    <div className="creatureBlock">
      <h1 className="title">Thug (Moderate, +0)</h1>
      <div className="stats">
        <p>Tough +2 | Nimble +1</p>
        <p>Competence +0 | Constitution +0</p>
        <p>Harm 7 | Armor 2</p>
      </div>
      <p className="description">Thugs are desperate people who have turned to theft, mugging, and killing to make money. These people could be hired, desperate, or unstable, so be wary. If you run into one, watch out - there's usually more than just one.</p>
      <div className="actions">
        <p className="actionHead">Actions</p>

        <p className="m-0"><strong>Light Knife</strong> (+1) - The Thug attacks with a long bladed knife to slice their victim.</p>
        <p className="or">or</p>

        <p className="m-0"><strong>Light Gun</strong> (+3 | disadvantage at long range, advantage at short range) - The Thug attacks from a distance with a cheap pistol they probably stole.</p>
        <p className="or">or</p>

        <p className="m-0"><strong>Light Club</strong> (+1) - The Thug attacks with a thick piece of wood, aggressively pushing their enemy to where they want them.</p>

        <p><strong>Choke Wire</strong> (+1) - Using choke wire gives them advantage to <Link href="/rules/combat#conditions">Grapple</Link> their victim, and to hold the grapple.</p>

        <p><strong>Caltrops</strong> - The Thug lays a set of caltrops on the ground. Any soft footed creatures that walk through them must roll a Nimble check 10+ or get <Link href="/rules/combat#conditions">Knocked Down</Link> and take 1 Harm.</p>
      </div>
    </div>
  )
}