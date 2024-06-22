import Link from "next/link";
import NextButton from "../next-button";
import { Metadata } from "next";
import Contents from "@/util/components/contents";

export const metadata: Metadata = {
  title: "Guildsmen | Invention",
  description: "Learn how to create items that wouldn't normally exist in your game world for Guildsmen TTRPG"
}

export default function Invention() {
  return (
    <article>
      <Contents />
      <h1>Invention</h1>

      <p>Invention is how complex machines and devices are designed. Everything from light bulbs, to guns, to impressive architecture, to cannons, to flying vehicles and ground vehicles are all designed through invention. </p>

      <section id="the-process-of-invention">
        <h2>The Process of Invention</h2>
        <p>Invention is a multi-step process. First, you design the item you want to make, then you need to gather the resources and manpower to create the item, and finally, you&apos;ll actually create the item - first with a prototype, then onward to a fully functioning version.</p>

        <p>Designing an item takes a simple <em>tech</em> skill check. This skill check will vary in difficulty based on how futuristic the invention is as well as how complex the invention is. You will then add a blueprint to your gear. You cannot attempt to make the item without that blueprint. If this blueprint is lost, you must remake the design and someone else may make your design if they find the lost blueprint.</p>

        <p>After the design has been made, you must gather the proper resources and manpower to create the invention. This will vary greatly depending on the thing you&apos;re creating and will generally require a fair amount of wealth and role play (see Sponsers in the <Link href="/rules/crafting"><em>Crafting chapter</em></Link>).</p>

        <p>Once you&apos;ve done all of that, you&apos;ll need to craft a prototype. The harder the item is to create, the more <em>craft</em> skill checks it will take in order to successfully create the first prototype. If you fail any of these skill checks, then your prototype fails, and you must restart the invention process, but you&apos;ll get to roll with advantage to create the new blueprint.</p>

        <table>
          <thead>
            <tr>
              <th colSpan={2}>Skill Checks Needed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left text-left">Very Easy</td>
              <td className="bottom right text-right">1</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Easy</td>
              <td className="bottom right text-right">2</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Moderate</td>
              <td className="bottom right text-right">3</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Difficult</td>
              <td className="bottom right text-right">4</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Very Difficult</td>
              <td className="bottom right text-right">5</td>
            </tr>
          </tbody>
        </table>

        <p>If you want, you may also pay a craftsman to build your prototype for you if you want, but this will cause your wealth to go down by two categories (from Wealthy to Poor, for example).</p>

        <p>Once you have a working prototype, you can then craft a fully functioning version. You can do this by either paying people to create it for you or by your own <em>craft</em> skill check of 10 or more with all the necessary materials and equipment.</p>

        <p>If you want to reverse engineer an item, you will have to do the same process, just backwards.</p>
      </section>

      <section id="navidus-crystals">
        <h2>Navidus Crystals</h2>

        <p>Navidus Crystals are a powerful material that are only found inside of Mythical creatures. As such, they can be used to power all kinds of devices. This is done by attaching the crystal to an object with incomplete runes, then using a mechanical button or switch that completes the rune when used. This allows a rune to be charged without the need of a person using their Spirit (see the <Link href="/rules/runes">Runes chapter</Link> for details). And with some clever engineering, very complex devices can be made.</p>

        <p>When creating a magical device, you must follow all the rules of inscription found in the <Link href="/rules/runes">Runes chapter</Link> to inscribe all the spells you want your device to do. When creating devices, the difficulty of the spell determines what size of Navidus crystal you need to power the device.</p>

        <table className="raceStatTable">
          <thead>
            <tr>
              <th colSpan={2}>Spell Difficulty to Crystal Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left text-left">Very Easy</td>
              <td className="bottom right text-center">1&quot;</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Easy</td>
              <td className="bottom right text-center">2&quot;</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Average</td>
              <td className="bottom right text-center">3&quot;</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Difficult</td>
              <td className="bottom right text-center">4&quot;</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Very Difficult</td>
              <td className="bottom right text-center">5&quot;</td>
            </tr>
          </tbody>
        </table>

        <p>All devices, by default have 10 uses. Every inch of extra crystal doubles the amount of uses. So, if you have a device that does very easy spells, using a 1&quot; crystal would give the item 10 uses, using a 2&quot; crystal would give the item 20 uses, using a 3&quot; crystal would give the item 40 uses, and so on. Once a crystal is depleted, it can be replaced just like a battery.</p>

        <p>Whenever you invent something that requires a source of power (such as a light bulb, a motor, etc.) you must use a Navidus Crystal in the design unless otherwise stated by the Game Master. This will allow the device to be powered but will also give it an important weakness within the game. You see, such powerful items also present a powerful hazard. If a Crystal cracks or breaks in any way, the energy stored inside the Crystal will release explosively. This causes Harm equal to 3 times the size of the Crystal in a radius also equal to 3 times the size of the Crystal measured in feet. So, a crystal of 3 inches could explode to deal 9 Harm to everything within 9 feet if damaged. Navidus Crystals crack and break as easily as a glass jar and are fully charged when first harvested from a Mythical creature, giving any device powered by Navidus crystals the potential to explode violently.</p>

        <p>We understand that there are other possible types of power for devices in the world such as steam, electricity, gas, and so on. These sources of power will probably exist within your game world. We decided not to allow those power sources when players invent an item on a base game level, due to the fact that it would be extremely easy for persistent players to create items that would derail the game by giving them too much power within the world. Navidus Crystals are a good way to regulate that, since they come with a certain amount of inherent danger. Of course, the Game Master can override this at any time.</p>

        <p>If you want access to inventing devices that have alternate power sources, have a discussion with your Game Master. They get the last say when it comes to inventing items.</p>
      </section>

      <section id="mechs">
        <h2>Mechs</h2>
        <p>Mechs are essentially robots that are designed to carryout specific tasks and usually incorporate features and forms from the natural world. There are mechs for moving heavy object, for transportation, for show, for play, and much more. Creating them is difficult and complex, requiring a strong knowledge of runes. When creating a mech, you need to first establish the purpose of the mech and the tasks it will be capable. From there, you&apos;ll pick a size that fits the mech&apos;s needs.</p>

        <table>
          <thead>
            <tr>
              <th colSpan={2}>Mech Sizes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left text-left">Very Small</td>
              <td className="bottom right text-right">&lt;1&apos;</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Small</td>
              <td className="bottom right text-right">1&apos; - 2&apos;</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Medium</td>
              <td className="bottom right text-right">2&apos; - 4&apos;</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Large</td>
              <td className="bottom right text-right">4&apos; - 8&apos;</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Very Large</td>
              <td className="bottom right text-right">8&apos; - 12&apos;</td>
            </tr>
          </tbody>
        </table>

        <p>The size of the mech determines how difficult the mech will be to invent and what it will take to power the mech. This will correspond to the skill checks needed to invent the mech as seen in <Link href="/rules/invention#the-process-of-invention">The Process of Invention</Link> section.</p>

        <div className="flex justify-center gap-10">
          <table className="mx-0">
            <thead>
              <tr>
                <th colSpan={2}>Mech Size to Difficulty</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bottom left text-left">Very Small</td>
                <td className="bottom right text-right">Easy</td>
              </tr>
              <tr>
                <td className="bottom left text-left">Small</td>
                <td className="bottom right text-right">Average</td>
              </tr>
              <tr>
                <td className="bottom left text-left">Medium</td>
                <td className="bottom right text-right">Difficult</td>
              </tr>
              <tr>
                <td className="bottom left text-left">Large</td>
                <td className="bottom right text-right">Very Difficult</td>
              </tr>
              <tr>
                <td className="bottom left text-left">Very Large</td>
                <td className="bottom right text-right">Super Difficult</td>
              </tr>
            </tbody>
          </table>

          <table className="mx-0">
            <thead>
              <tr>
                <th colSpan={2}>Mech Size to Required Power</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bottom left text-left">Very Small</td>
                <td className="bottom right text-right">1 Medium Crystal</td>
              </tr>
              <tr>
                <td className="bottom left text-left">Small</td>
                <td className="bottom right text-right">1 Large Crystal</td>
              </tr>
              <tr>
                <td className="bottom left text-left">Medium</td>
                <td className="bottom right text-right">1 Very Large Crystal</td>
              </tr>
              <tr>
                <td className="bottom left text-left">Large</td>
                <td className="bottom right text-right">2 Very Large Crystals</td>
              </tr>
              <tr>
                <td className="bottom left text-left">Very Large</td>
                <td className="bottom right text-right">3 Very Large Crystals</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Once created, the size of the mech also determines the machine&apos;s stats, just incase the mech is used in combat or someone attempts to destroy it.</p>

        <table>
          <thead>
            <tr>
              <th colSpan={5}>Mech Stats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left text-left"><strong>Class</strong></td>
              <td className="bottom"><strong>Size</strong></td>
              <td className="bottom"><strong>Tough</strong></td>
              <td className="bottom"><strong>Nimble</strong></td>
              <td className="bottom right"><strong>Harm</strong></td>
            </tr>
            <tr>
              <td className="bottom left text-left">Very Small</td>
              <td className="bottom">&lt;1&apos;</td>
              <td className="bottom">+0</td>
              <td className="bottom">+5</td>
              <td className="bottom right">5</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Small</td>
              <td className="bottom">1&apos; - 2&apos;</td>
              <td className="bottom">+5</td>
              <td className="bottom">+3</td>
              <td className="bottom right">10</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Medium</td>
              <td className="bottom">2&apos; - 4&apos;</td>
              <td className="bottom">+10</td>
              <td className="bottom">+1</td>
              <td className="bottom right">15</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Large</td>
              <td className="bottom">4&apos; - 8&apos;</td>
              <td className="bottom">+15</td>
              <td className="bottom">-1</td>
              <td className="bottom right">20</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Very Large</td>
              <td className="bottom">8&apos; - 12&apos;</td>
              <td className="bottom">+20</td>
              <td className="bottom">-1</td>
              <td className="bottom right">25</td>
            </tr>
          </tbody>
        </table>

        <p>Harm represents how much Harm your mech can take before being broken or destroyed. A Mech will not have a Competence and Constitution score, meaning they cannot use those stats. Once a Mech takes its maximum amount of Harm, your Mech is no longer functional and cannot be healed the same way as a person can. Instead, they must be repaired. A crafting check of 10 or more with the right materials can restore 2 Harm from the Mech. If a Mechs power source is damaged, it explodes violently.</p>

        <p>You can add as many limbs and devices to your Mech as you deem necessary. However, if you are trying to add devices to your Mech that wouldn&apos;t normally exist, you must go through a separate invention process for each device that wouldn&apos;t normally exist.</p>

        <p>If your Mech is built for combat, its damage bonus will be however much its weapon would normally do as well as its Tough score. So, if you have a Large Mech that is wielding a heavy weapon, it will have a +17 Bonus in total (+2 for the heavy weapon and +15 for the Tough stat of the Mech). The Mech does not add its Tough score if the weapon being used is a ranged weapon such as a bow or gun. The standard damage bonus is applied.</p>

        <p>Small mechs are generally controlled through some external device and larger mechs are usually built with a cockpit for a person to drive the mech from the inside.</p>
      </section>
      <NextButton href="/rules/the-market" />
    </article>
  )
}