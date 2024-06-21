import { Metadata } from "next";
import NextButton from "../next-button";
import Link from "next/link";
import Contents from "@/util/components/contents";

export const metadata: Metadata = {
  title: "Guildsmen | Myth",
  description: "Learn how magic works through an addictive drug called Myth in Guildsmen TTRPG"
}

export default function Myth() {
  return (
    <article>
      <Contents />
      <h1>Myth</h1>
      <p>Magic in Guildsmen is performed in two ways: Myth and <Link href="/rules/runes">runes</Link>. Myth - a liquid that is created by refining the blood of Mythical creatures - is a highly addictive substance that allows users to manipulate the elements around them. In Guildsmen lore, this drug is generally illegal or at least highly restricted. It is administered by syringe and can be deadly for both the user and those around them.</p>

      <section id="the-first-dose">
        <h2>The First Dose</h2>
        <p>Upon first injecting yourself, you immediately get a taste of its seductive power. For the very first injection your character makes, you must raise your addiction level to the 1 mark on the addiction meter. This only happens on the very first injection your character ever does. If you choose the <em>myth</em> skill as a starting skill, you must begin the game with a level 1 addiction to Myth.</p>
      </section>

      <section id="myth-addiction">
        <h2>Myth Addiction</h2>
        <p>If your addiction meter is filled up to at least the 1 mark, then you are addicted to Myth. If you&apos;re addicted, any time you make a dice check of any kind your Need for more Myth grows. Starting from the right side of the addiction meter, fill in a bubble beneath the addiction meter every time you make a dice roll. Once the bubbles reach your addiction level, your Need is at its strongest and you <em>must</em> have more Myth.</p>

        <p>If you inject Myth into yourself at or before this time, your Need is reset. If your need reaches your addiction level, and you do not inject more Myth into yourself, then you take Harm equal to your addiction level. This can be halved with a Constitution stat check of 10 or more. Once the Harm is taken, your addiction goes down by one bar, your need is reset, and then you begin filling it in again.</p>

        <p>This means that the more addicted you are to Myth, the more often your need will arise, and the harder it will be to survive the rehabilitation process if you want to stop using Myth.</p>

        <p><em><strong>Myth must be used. If you finish filling in need bubbles and you have any Myth inside of you (any uses left - see Myth Quality below), then you not only take Harm equal to your addiction level, your magic also becomes restless. To control the magic inside you, you must make a <em>myth</em> skill check of 10 or more, otherwise the magic explodes out from you dealing Harm equal to twice the number of uses you have left to you and everything within 10 feet of you.</strong></em></p>
      </section>

      <section id="myth-quality">
        <h2>Myth Quality</h2>
        <p className="text-center">Each vial of Myth gives you a number of uses to cast spells, depending on its quality. </p>

        <table>
          <thead>
            <tr>
              <th colSpan={2}>Quality to Uses</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left alignLeft">Crude</td>
              <td className="bottom right alignRight">1</td>
            </tr>
            <tr>
              <td className="bottom left alignLeft">Average</td>
              <td className="bottom right alignRight">2</td>
            </tr>
            <tr>
              <td className="bottom left alignLeft">Good</td>
              <td className="bottom right alignRight">3</td>
            </tr>
            <tr>
              <td className="bottom left alignLeft">Excelent</td>
              <td className="bottom right alignRight">4</td>
            </tr>
          </tbody>
        </table>

        <p>You can inject yourself with more than one vial of Myth to increase the number of spells you can cast before needing to inject again, but that can be dangerous.</p>

        <p>Every time you inject yourself with Myth, you immediately fill bars on the addiction meter equal to the number of uses the Myth gives you. So, if you injected yourself with some average Myth, you would fill in 2 bars on the addiction meter in the Magic Addiction box on the character sheet.</p>

        <p>Each vial of Myth contains one type of Myth that gives you specific powers. Generally, it gives you power to manipulate a specific element. Mixing Myth types is deadly. If you inject two types of Myth into yourself or inject a vial of two types of Myth that have been combined, you immediately take Harm equal to the number of uses that the vial would&apos;ve given. This effect can be halved with a successful Constitution stat check of 10 or more.</p>

        <p>After that, the power is wild and unwieldy, and must be used right away. If you make any skill checks other than <em>myth</em> skill checks while two type of Myth flow through you, you must make a <em>myth</em> skill check of 12 or more to see if you can control the power. Otherwise, you lose control of the power the Myth gave you and raw power explodes outward from you dealing Harm equal to the three times the number of uses you have left to you and everything within 10 feet of you.</p>

        <p>So, if you were to inject yourself with good quality Myth (which gives 3 uses) that was actually two types of Myth combined, you would need to immediately roll a Constitution stat check to attempt to half the damage that you immediately take. Lets say you only roll a 9. However, needed a 10 or more, so you would take 3 Harm because good quality Myth give 3 uses. Then, let&apos;s say that you attempt to hold that power in and go do something else, like persuade a police officer that, “no officer, I was not just doing drugs”. You would then roll another <em>myth</em> skill check to try to container the power inside of you. Say you only roll a 5 but the goal was a 12. The magic in your viens would explode out from you dealing 9 Harm (3 multiplied by all 3 uses, since you never used any of it) to you and everything within 10 feet of you, leaving you and the guard very nearly dead.</p>

        <p><strong><em>If you ever attempt to hold more than 6 uses of Myth at once, you will die. Your fragile body gets overloaded with power, and you explode, dealing 18 Harm to everything within 15 feet.</em></strong></p>
      </section>

      <section id="using-myth">
        <h2>Using Myth</h2>
        <p>Once injected, you have a number of uses that can be used to manipulate the element of your Myth. To manipulate the element, you simply roll a <em>myth</em> skill. The Game Master will decide how difficult the skill check will be based on the effect you&apos;re trying to achieve.</p>

        <p>For example: trying to cause sparks or make a candle flame sway in a specific way would be very easy but trying to spontaneously cause your opponent to combust or redirect a wildfire would be very difficult.</p>
      </section>

      <section id="myth-types">
        <h2>Myth Types</h2>
        <p>There are a wide variety of Myth types to choose from, each coming from a specific Mythical creature. When refining Mythical blood into Myth, the power that the drug offers is similar to the power the creature had before it died. So Myth made from a Pheonix would give manipulation over fire. Myth made from an Abominable Ram would give manipulation over water and ice.</p>

        <p>The following is an outline of the common types of Myth, each of which can be specialized in (see the <Link href="/rules/skills.html#specialties"><em>Skills Chapter</em></Link>). Myth can be used to manipulate it&apos;s element in any way you can think of, the only thing that changes is the difficulty of the skill check.
        </p>

        <p>To determine what constitutes very easy versus very difficult, consider the quantity of the element being manipulated and the percision that it&apos;s being manipulated with. For example, creating a breeze to waft a smell in a particular direction would be very easy to do. It&apos;s not a very percise movement, and all it takes is a little push. But creating a vaccuum around an individual to suffocate them or creating an intense wind storm would be very difficult. The vaccuum is very percise and localized, and the wind storm would need to cover a very large area and require a lot of energy to have the effect of a full wind storm.</p>

        <table>
          <thead>
            <tr>
              <th colSpan={1}>Common Types<br />of Myth</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left right"><em>Air</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Fire</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Lightning</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Metal</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Stone</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Water</em></td>
            </tr>
          </tbody>
        </table>
      </section>
      <NextButton href="/rules/crafting" />
    </article>
  )
}