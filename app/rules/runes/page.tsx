import Link from "next/link";
import NextButton from "../next-button";
import { Metadata } from "next";
import Contents from "@/util/components/contents";

export const metadata: Metadata = {
  title: "Guildsmen | Runes",
  description: "Learn how to use runes, inscribe items with them, and perform spells."
}

export default function Invention() {
  return (
    <article>
      <Contents />
      <h1>Runes</h1>

      <p>Beyond using Stardew to perform magic, all creatures also have a Spirit stat that allows them to cast spells via runes. Runes are mystical symbols that are inscribed onto items that define a spell. When holding an inscribed object, you can push your spiritual energy into the item and any runes on the item are activated and their spells are cast. Anyone can attempt to use any rune that they are touching or is on and item that is on their person. Using runes requires a Spirit stat check to determine success. On a failure, nothing happens - the caster simply failed to push enough Spirit through the rune to make the spell work</p>

      <section id="inscribing-runes">
        <h2>Inscribing Runes</h2>

        <p>Inscribing a rune onto an item is the safest and most common way to use magic. All items can be inscribed by carving a rune into it via a <em>craft</em> skill check that matches the difficulty of the spell. The rune can then be charged at any time to cast the designated spell by rolling a Spirit stat check that also matches the spells difficulty. So, if a spell has a Moderate difficulty, then you must roll 8 or more to successfully inscribe the rune and then roll an 8 or more again every time you charge the rune to cast the spell</p>

        <p>An item can be inscribed with multiple runes, but when pushing your spiritual energy into the item, all the runes that are on the item will be charged at the same time, which increases the difficulty of using the item. Two or three runes of the same difficulty raises the difficulty to use the item by one. So two or three Easy spells on one item would make the item of Moderate difficulty to use, but 4 would raise the difficulty to Difficult.</p>

        <table className="raceStatTable">
          <thead>
            <tr>
              <th colSpan={2}>Runes to Difficulty of Use Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left text-left">2 Moderate Runes</td>
              <td className="bottom right text-right"><em>Difficult</em></td>
            </tr>
            <tr>
              <td className="bottom left text-left">1 Moderate and 2 Easy Runes</td>
              <td className="bottom right text-right"><em>Difficult</em></td>
            </tr>
            <tr>
              <td className="bottom left text-left">3 Difficult Runes</td>
              <td className="bottom right text-right"><em>Very Difficult</em></td>
            </tr>
            <tr>
              <td className="bottom left text-left">4 Difficult Runes</td>
              <td className="bottom right text-right"><em>Impossible</em></td>
            </tr>
          </tbody>
        </table>

        <p>The difficulty level of a spell is determined by the Game Master in the same way that actions using Stardew are. The difficulty should reflect the complexity and power of the effect you want the spell to have. For example, a spell the simply conjures sparks would be Very Easy (requiring a 4 or more to succeed), whereas a spell that conjures a feast on a long table from the air should be Difficult, maybe even Very Difficult (requiring a 10 or a 12 or more to succeed). See the <Link href="/rules/skills#using-skills">Skills Chapter</Link> for more details on task difficulty.</p>

        <p>The difficulty to inscribe the spell and the difficulty to cast the spell are generally the same.</p>
      </section>

      <section id="inscription-materials">
        <h2>Inscription Materials</h2>

        <p>An items material determines how much power it can handle. If an item is made out of the wrong material, the item will be destroyed when charged.</p>

        <table className="raceStatTable">
          <thead>
            <tr>
              <th colSpan={2}>Material Type to Spell Capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left text-left">Common</td>
              <td className="bottom right text-right">Easy</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Uncommon</td>
              <td className="bottom right text-right">Moderate</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Rare</td>
              <td className="bottom right text-right">Difficult</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Exotic</td>
              <td className="bottom right text-right">Very Difficult</td>
            </tr>
          </tbody>
        </table>

        <p>The materials that are common, uncommon, rare, or exotic are determined by the Game Master, but should also be agreed upon with the players.</p>

        <p>Common materials would generally be found easily in nature such as iron, wood, bone, hide, unrefined ores, clay, and stones. Uncommon materials are generally less common or refined version of common materials such as steel, leather, glass, and copper. Rare materials are rare but natural resources like gems, silver, and gold. Exotic materials are extremely rare or difficult to harvest like diamond, aluminum, and others.</p>
      </section>

      <section id="magical-attacks">
        <h2>Magical Attacks</h2>

        <p>When inscribing a rune that is intended for combat, the damage bonus that you add to the spell on a successful use depends on the difficulty of the spell. This damage bonus functions in the same way that weapon damage bonuses work (see the <Link href="/rules/combat#dealing-harm">Combat chapter</Link> for details).</p>

        <table className="raceStatTable">
          <thead>
            <tr>
              <th colSpan={2}>Bonus to Spell Difficulty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left text-center">-1</td>
              <td className="bottom right text-right">Very Easy</td>
            </tr>
            <tr>
              <td className="bottom left text-center">+0</td>
              <td className="bottom right text-right">Easy</td>
            </tr>
            <tr>
              <td className="bottom left text-center">+1</td>
              <td className="bottom right text-right">Moderate</td>
            </tr>
            <tr>
              <td className="bottom left text-center">+2</td>
              <td className="bottom right text-right">Difficult</td>
            </tr>
            <tr>
              <td className="bottom left text-center">+3</td>
              <td className="bottom right text-right">Very Difficult</td>
            </tr>
          </tbody>
        </table>

        <p>You must roll higher than the spell difficulty for the spell to happen at all. If you roll less than the spell difficulty, nothing happens, even if your target rolled a reaction and got a number less than you.</p>
      </section>

      <section id="linking">
        <h2>Linking</h2>

        <p>Some spells go beyond the scope of Very Difficult, such as resurrection or spells that affect very large areas. When this happens, the Game Master can decide on a target number that is greater that 12 that must be rolled in order for the spell casting to succeed. However, even though the target number to cast the spell can be considerably higher that 12, the inscription difficulty should not go beyond a target number of 14, two more above the Very Difficult target.</p>

        <p>When a spell is too difficult for you to cast, you can link with other people to attempt to perform the spell. However, this can be dangerous.</p>

        <p>Linking requires 2 or more willing participants to either be touching the object that is inscribed or each other. Then, all participants must roll a Spirit check. On a 10 or more, the linking is successful and all linked individuals can access the others&apos; Spirit modifier. When you go to cast a spell as part of a linked group, you add the Spirit modifier of all linked individuals.</p>

        <p>However, if a linked Spirit check fails, then all members of the linking takes Harm equal to the difference between the target number and the rolled number.</p>

        <p>So, if a group of five has a member die and they have an item inscribed with a resurrection rune that requires a Spirit check of 18 or more to use, they can all link together. Say the four alive have a +1, +1, +2, and +3 in Spirit, then any individual in the group has a total of +7 on a Spirit check to attempt the spell. One member rolls and gets a 5. With a +7, that&apos;s a total of 12 which is 6 less that the target of 18, meaning that all members of the linking take 6 Harm.</p>
      </section>

      <section id="spirit-shields">
        <h2>Spirit Shields</h2>

        <p>If you are the target of a spell, it can be deflected by a reaction known as Spirit Shielding. This is where you push your Spirit out of yourself briefly to rebuff incoming spiritual energy, negating the effects of an incoming spell.</p>

        <p>When a spell is targeted at you from another creature or individual you can roll a Spirit stat check as a reaction. If the roll is greater than your opponent &apos;s, then the spell is deflected completely and no effect happens. If you&apos;re Spirit stat check is less that your opponent &apos;s but still greater than the difficulty of the spell (i.e. 8 or more for a Moderate spell), then you take half of the effect of the spell. If less than your opponent&apos;s check and less than the difficulty of the spell, then you take the full effect of the spell.</p>

        <p>If the spell is triggered by a device and no roll is used to cast the spell, you can still react to the spell with a Spirit Shield. The target number to successfully react will be the difficulty of the spell. On a mixed success (1 less than the target number), only half the effect of the spell happens.</p>

        <p>Spirit shields also work against attacks coming from a Stardew user.</p>
      </section>

      <NextButton href="/rules/crafting" />
    </article>
  )
}