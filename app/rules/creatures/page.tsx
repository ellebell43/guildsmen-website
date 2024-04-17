import Link from "next/link";
import NextButton from "../next-button";
import { Metadata } from "next";
import Contents from "@/util/components/contents";

export const metadata: Metadata = {
  title: "Guildsmen | Creatures",
  description: "Learn how creatures work and how to create your own in Guildsmen TTRPG"
}

export default function Creatures() {
  return (
    <article>
      <Contents />
      <h1>Creatures</h1>
      <p>Creatures in this game are designed with the idea that people are fragile and easily killed. For example, if a regular person ran at a bear, swinging a sword, trying to kill it, that person would most likely end up dead. When fighting creatures, the idea is to constantly be avoiding the creatures&apos; attacks, and the moment you mess up, you die. </p>

      <p>When encountering creatures of any type, remember to use what skills and stats your character is best at and to avoid ever going in alone. You can only take ten Harm before dying. Many creatures can deal that much Harm in one blow.</p>

      <p>For a comprehensive set of creatures, go to the <Link href="/bestiary">The Bestiary</Link>.</p>

      <section id="understanding-the-creature-block">
        <h2>Understanding the Creature Block</h2>
        <p>The creature block is how creatures&apos; stats, actions, and descriptions are outlined. They all appear like so:</p>

        <div className="creatureBlock">
          <p className="title">Grizzly Bear (Deadly, +0)</p>
          <div className="stats">
            <p>Tough +9 | Nimble +5</p>
            <p>Competence +0 | Constitution +4</p>
            <p>Harm 11 | Armor 2</p>
          </div>
          <p className="description">Grizzly bears are large sized creatures weighing up to 1,500lbs and sizing
            up to 8.5ft tall. These creatures travel on their own. Grizzly Bears are extremely territorial, attacking anything the feel like a threat. They are also generally active during the day.</p>
          <div className="actions">
            <p className="actionHead">Actions</p>
            <p><strong>Claw</strong> (+6) - The Grizzly Bear comes at you with its thick claws to maim your body.</p>
            <p><strong>Bite</strong> (+6) - The Grizzly Bear goes to take a huge bite out of you.</p>
            <p><strong>Maul</strong> (+9) - The Grizzly Bear furiously uses teeth and claws to decimate you.</p>
            <p><strong>Roar</strong> - The Grizzly Bear bellows out a powerful roar, <Link href="/rules/combat#conditions">Frightening</Link> all creatures within 20ft for as long as they
              are in combat with it.
            </p>
          </div>
        </div>

        <p>At the top of the creature block is the name, hazard word, and modifier of the creature. In this case we have a Grizzly Bear that is classified as a deadly hazard with a +0 modifier.</p>

        <p>A creature&apos;s hazard word is an indicator of how dangerous the creature is. Regular people never go beyond moderate, unless they are well equipped, so anything above moderate is cabable of being very dangerous to a person.</p>

        <p>A creature&apos;s modifier (in this case, +0) is the number that gets added to skill checks and actions. So, if this bear would attack you with its claws, it would roll 2d6 and add 0. If it were to investigate an area with its nose, it wouldn&apos;t add anything.</p>

        <p>The top-left box (top box on mobile screens) of the creature block outlines the creature&apos;s stats. The creature&apos;s Tough, Nimble, Competence, and Constitution are outlined here, as well as the amount of Harm they can take before dying and their Armor score.</p>

        <p>When a creature rolls a stat check, they will add their stat to the roll. So, if a character wanted to try and grapple a bear, both would roll 2d6. The character would get no more than a +3 to the roll, but the bear would get +14 to the roll, making it impossible to grapple the bear alone.</p>

        <p>The bottom-left box (center box on mobile screens) on the creature block gives a description of the creature. This generally outlines what the creature looks like, how it behaves, and other important information.</p>

        <p>The large, right box (bottom box on mobile screens) on the creature block outlines all the common actions that the creature would use. After the title of the action is a number in parenthesis. This is the Bonus to the attack that the creature has for that action. If the creature is successful when using the action, the Bonus is then added to the dice roll to determine damage.</p>

        <p>Creatures can perform actions outside of the listed actions. The actions outlined are all the regular, combat-oriented actions that the creature would use so that the Game Master has clear rules for how much Harm a creature could deal given a certain action.</p>
      </section>

      <section id="creating-custom-creatures">
        <h2>Creating Custom Creatures</h2>
        <p>The creatures outlined within in the Bestiary are just a sample of the wide variety of creatures that <em>could</em> be encountered, but there are many, many more in the world. If you want to create creatures of your own, there are two ways of doing it.
        </p>

        <p>You can (1) take a creature that is already made and use all its stats and actions for your custom creature, just changing the descriptions and titles for everything, or (2) use the charts below to create a creature from scratch.</p>

        <p>When choosing the second option, you&apos;ll first need to decide on a hazad word for your custom creature. These range from none to unsurvivable. Unsurvivable creatures are meant to be taken on by large groups of people or even entire armies. The following table outlines each hazard word with an example creature that would fall under that category.</p>

        <table>
          <thead>
            <tr>
              <th colSpan={2}>Hazard Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left alignLeft">None</td>
              <td className="bottom right alignRight">House Cat</td>
            </tr>
            <tr>
              <td className="bottom left alignLeft">Mild</td>
              <td className="bottom right alignRight">Common Person</td>
            </tr>
            <tr>
              <td className="bottom left alignLeft">Moderate</td>
              <td className="bottom right alignRight">Trained Fighter</td>
            </tr>
            <tr>
              <td className="bottom left alignLeft">Severe</td>
              <td className="bottom right alignRight">Wolf</td>
            </tr>
            <tr>
              <td className="bottom left alignLeft">Deadly</td>
              <td className="bottom right alignRight">Grizzly Bear</td>
            </tr>
            <tr>
              <td className="bottom left alignLeft">Deadly</td>
              <td className="bottom right alignRight">Hippo</td>
            </tr>
            <tr>
              <td className="bottom left alignLeft">Unsurvivable</td>
              <td className="bottom right alignRight">Maticore</td>
            </tr>
            <tr>
              <td className="bottom left alignLeft">Unsurvivable</td>
              <td className="bottom right alignRight">Cerberus</td>
            </tr>
            <tr>
              <td className="bottom left alignLeft">Unsurvivable</td>
              <td className="bottom right alignRight">Dragon</td>
            </tr>
          </tbody>
        </table>

        <p>From here, you can determine their stats, their Bonus when attacking, and the Harm they can take using the following chart.</p>

        <table>
          <thead>
            <tr>
              <th colSpan={4}>Custom Creature Stats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left alignLeft"><strong>Hazard</strong></td>
              <td className="bottom"><strong>Max Stat</strong></td>
              <td className="bottom"><strong>Bonus</strong></td>
              <td className="bottom right"><strong>Max Harm</strong></td>
            </tr>
            <tr>
              <td className="bottom left alignLeft"><em>Mild</em></td>
              <td className="bottom">+1</td>
              <td className="bottom">+0</td>
              <td className="bottom right">7</td>
            </tr>
            <tr>
              <td className="bottom left alignLeft"><em>Moderate</em></td>
              <td className="bottom">+3</td>
              <td className="bottom">+1 to +3</td>
              <td className="bottom right">10</td>
            </tr>
            <tr>
              <td className="bottom left alignLeft"><em>Severe</em></td>
              <td className="bottom">+6</td>
              <td className="bottom">+3 to +6</td>
              <td className="bottom right">15</td>
            </tr>
            <tr>
              <td className="bottom left alignLeft"><em>Deadly</em></td>
              <td className="bottom">+9</td>
              <td className="bottom">+6 to +9</td>
              <td className="bottom right">20</td>
            </tr>
            <tr>
              <td className="bottom left alignLeft"><em>Unsurvivalble</em></td>
              <td className="bottom">+12</td>
              <td className="bottom">+9 or more</td>
              <td className="bottom right">25</td>
            </tr>
          </tbody>
        </table>

        <p>Max stat is how high their Tough, Nimble, Competence, and Constitution stats can be. That does not mean they should be this high, only that they shouldn&apos;t be higher than what&apos;s listed. Bonus is the range that their Bonus should be when an attack is successful. Max Harm is the maximum amount of Harm that they can take before dying.</p>

        <p>When deciding a creatures modifier, remember that the modifier generally shows an amount of overall skill and knowledge. After all, the creature would add that number to any skill roll or action roll that they make. Generally only people and other smart creatures will have more than a +0 modifier. However, keep in mind that this is the general number. If it makes logical sense, a creature may get up to a +5 on a skill check that makes sense for them. For example, a Grizzly Bear might get a +2 or +3 to an <em>investigate</em> skill check  relies on smell since bears have an excellent sense of smell. This is completely up to Game Master discretion.</p>

        <p><strong><em>Note: The modifier a creature is given should subtract from the bonuses they would normally get on a successful attack. That is because the modifier gets added to actions and if it&apos;s successful, the bonus gets added as well, so the numbers stack.</em></strong></p>

        <p>All creatures should also have a specific size. The following is a chart to help determine the size of a creature:</p>

        <table>
          <thead>
            <tr>
              <th colSpan={2}>Size Reference</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left alignLeft">Tiny</td>
              <td className="bottom right alignRight">less than 5&quot;</td>
            </tr>
            <tr>
              <td className="bottom left alignLeft">Very Small</td>
              <td className="bottom right alignRight">5&quot;-1&apos;</td>
            </tr>
            <tr>
              <td className="bottom left alignLeft">Small</td>
              <td className="bottom right alignRight">1&apos;-3&apos;</td>
            </tr>
            <tr>
              <td className="bottom left alignLeft">Medium</td>
              <td className="bottom right alignRight">3&apos;-7&apos;</td>
            </tr>
            <tr>
              <td className="bottom left alignLeft">Large</td>
              <td className="bottom right alignRight">7&apos;-12&apos;</td>
            </tr>
            <tr>
              <td className="bottom left alignLeft">Very Large</td>
              <td className="bottom right alignRight">12&apos;-24&apos;</td>
            </tr>
            <tr>
              <td className="bottom left alignLeft">Giant</td>
              <td className="bottom right alignRight">24&apos;-50&apos;</td>
            </tr>
            <tr>
              <td className="bottom left alignLeft">Massive</td>
              <td className="bottom right alignRight">50&apos;-100&apos;</td>
            </tr>
            <tr>
              <td className="bottom left alignLeft">Colossal</td>
              <td className="bottom right alignRight">100&apos;-250&apos;</td>
            </tr>
            <tr>
              <td className="bottom left alignLeft">Titanic</td>
              <td className="bottom right alignRight">250&apos;-500&apos;</td>
            </tr>
          </tbody>
        </table>

        <p>From here, outline your creature with specific stats using the charts above and preset creatures as guidelines. Be sure to give them a good description and unique actions.</p>
      </section>
      <NextButton href="/rules/for-the-gm" />
    </article>
  )
}