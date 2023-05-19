import Link from "next/link";
import NextButton from "../next-button";

export default function Invention() {
  return (
    <article>
      <h1>Invention</h1>

      <p>Invention is how complex machines and devices are designed. Everything from light bulbs, to guns, to impressive architecture, to cannons, to flying vehicles and ground vehicles are all designed through invention. </p>

      <section id="the-power-of-invention">
        <h2>The Power of Invention</h2>
        <p>Invention is a multi-step process. First, you design the item you want to make, then you need to gather the resources and manpower to create the item, and finally, you'll actually create the item - first with a prototype, then onward to a fully functioning version.</p>

        <p>Designing an item takes a simple <em>tech</em> skill check. This skill check will vary in difficulty based on how futuristic the invention is as well as how complex the invention is. You will then add a blueprint to your gear. You cannot attempt to make the item without that blueprint. If this blueprint is lost, you must remake the design and someone else may make your design if they find the lost blueprint.</p>

        <p>After the design has been made, you must gather the proper resources and manpower to create the invention. This will vary greatly depending on the thing you're creating and will generally require a fair amount of wealth and role play (see Sponsers in the <Link href="/rules/crafting"><em>Crafting chapter</em></Link>).</p>

        <p>Once you've done all of that, you'll need to craft a prototype. The harder the item is to create, the more <em>craft</em> skill checks it will take in order to successfully create the first prototype. If you fail any of these skill checks, then your prototype fails, and you must restart the invention process, but you'll get to roll with advantage to create the new blueprint.</p>

        <table>
          <thead>
            <tr>
              <th colSpan={2}>Skill Checks Needed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='bottom left alignLeft'>Very Easy</td>
              <td className='bottom right alignRight'>1</td>
            </tr>
            <tr>
              <td className='bottom left alignLeft'>Easy</td>
              <td className='bottom right alignRight'>2</td>
            </tr>
            <tr>
              <td className='bottom left alignLeft'>Moderate</td>
              <td className='bottom right alignRight'>3</td>
            </tr>
            <tr>
              <td className='bottom left alignLeft'>Difficult</td>
              <td className='bottom right alignRight'>4</td>
            </tr>
            <tr>
              <td className='bottom left alignLeft'>Very Difficult</td>
              <td className='bottom right alignRight'>5</td>
            </tr>
          </tbody>
        </table>

        <p>If you want, you may also pay a craftsman to build your prototype for you if you want, but this will cause your wealth to go down by two categories (from Wealthy to Poor, for example).</p>

        <p>Once you have a working prototype, you can then craft a fully functioning version. You can do this by either paying people to create it for you or by your own <em>craft</em> skill check of 10 or more with all the necessary materials and equipment.</p>

        <p>If you want to reverse engineer an item, you will have to do the same process, just backwards.</p>
      </section>

      <section id="navidus-crystals">
        <h2>Navidus Crystals</h2>
        <p>Navidus Crystals are a powerful material that are only found inside of Mythical creatures. They are naturally occurring power sources with a lot of potential. They are used to power trains, elevators, Mechs, and other complex devices. However, they are also very dangerous.</p>

        <p>If a Crystal cracks or breaks in any way, the energy stored inside the Crystal will release explosively. This causes Harm equal to 3 times the size of the Crystal in a radius also equal to 3 times the size of the Crystal measured in feet. So, a crystal of 3 inches could explode to deal 9 Harm to everything within 9 feet if damaged.</p>

        <p>Since Navidus Crystals are used to power complex devices, whenever you invent something that requires a source of power (such as a light bulb, a motor, etc.) you must use a Navidus Crystal in the design. This will allow the device to be powered but will also give it an important weakness. Any device powered by Navidus energy has a potential to explode violently, making the invention of complex and futuristic technology dangerous if handled poorly.</p>

        <p>Navidus Crystals only hold so much energy. When powering a device, all the crystals used will need to be replaced every 3 in-game days when the device is regularly used. Also, the larger a device is or the more work the device is able to perform, the larger the crystal powering it needs to be.</p>

        <table>
          <thead>
            <tr>
              <th colSpan={2}>Device Size to Crystal Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='bottom left alignLeft'>Tiny</td>
              <td className='bottom right alignRight'>1"-2"</td>
            </tr>
            <tr>
              <td className='bottom left alignLeft'>Very Small</td>
              <td className='bottom right alignRight'>2"-3"</td>
            </tr>
            <tr>
              <td className='bottom left alignLeft'>Small</td>
              <td className='bottom right alignRight'>3"-4"</td>
            </tr>
            <tr>
              <td className='bottom left alignLeft'>Medium</td>
              <td className='bottom right alignRight'>4"-5"</td>
            </tr>
            <tr>
              <td className='bottom left alignLeft'>Large</td>
              <td className='bottom right alignRight'>5"-6"</td>
            </tr>
            <tr>
              <td className='bottom left alignLeft'>Very Large</td>
              <td className='bottom right alignRight'>6"-7"</td>
            </tr>
          </tbody>
        </table>

        <p>For exact dimensions for device sizes, see the table for Mech stats lower down.</p>

        <p>Since Navidus Crystals can be hunted down by anyone with the resources to kill a Mythic, black market devices are common, making a wide variety of odd and dangerous devices available to those that have the right connections.</p>

        <p>Navidus Crystals crack and break as easily as hollow glass orbs and are fully charged when first harvested from a Mythical creature.</p>
      </section>

      <section id="mechs">
        <h2>Mechs</h2>
        <p>Mechs are semi-autonomous metal creations that serve singular purposes and are designed to automate very specific tasks so regular people don't have to do them. They are used as civil protectors, to perform extreme labor, or to serve their creators in whatever way they deem necessary.</p>

        <p>Mechs are designed for any purpose their creator wishes and are generally designed with the form of a living creature in mind. Mechs can be created by anyone through the invention process as long as they have the right resources.</p>

        <p>The size of the Mech will help determine your mechs physical stats.</p>

        <table>
          <thead>
            <tr>
              <th colSpan={5}>Mech Stats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='bottom left alignLeft'><strong>Class</strong></td>
              <td className='bottom'><strong>Size</strong></td>
              <td className='bottom'><strong>Tough</strong></td>
              <td className='bottom'><strong>Nimble</strong></td>
              <td className='bottom right'><strong>Harm</strong></td>
            </tr>
            <tr>
              <td className='bottom left alignLeft'>Very Small</td>
              <td className='bottom'>4"-1'</td>
              <td className='bottom'>+0</td>
              <td className='bottom'>+5</td>
              <td className='bottom right'>5</td>
            </tr>
            <tr>
              <td className='bottom left alignLeft'>Small</td>
              <td className='bottom'>1'-3'</td>
              <td className='bottom'>+5</td>
              <td className='bottom'>+3</td>
              <td className='bottom right'>10</td>
            </tr>
            <tr>
              <td className='bottom left alignLeft'>Medium</td>
              <td className='bottom'>3'-7'</td>
              <td className='bottom'>+10</td>
              <td className='bottom'>+1</td>
              <td className='bottom right'>15</td>
            </tr>
            <tr>
              <td className='bottom left alignLeft'>Large</td>
              <td className='bottom'>7'-12'</td>
              <td className='bottom'>+15</td>
              <td className='bottom'>-1</td>
              <td className='bottom right'>20</td>
            </tr>
            <tr>
              <td className='bottom left alignLeft'>Very Large</td>
              <td className='bottom'>12'-20'</td>
              <td className='bottom'>+20</td>
              <td className='bottom'>-1</td>
              <td className='bottom right'>25</td>
            </tr>
          </tbody>
        </table>

        <p>Harm represents how much Harm your mech can take before being broken or destroyed. A Mech will have a Competence and Constitution score of 0, meaning they cannot use those stats.</p>

        <p>All mechs are powered by Navidus Crystals. They will power a mech for 3 days before needing to be replaced.</p>

        <table>
          <thead>
            <tr>
              <th colSpan={2}>Mech Size to Crystal Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='bottom left alignLeft'>Tiny</td>
              <td className='bottom right alignRight'>1"-2"</td>
            </tr>
            <tr>
              <td className='bottom left alignLeft'>Very Small</td>
              <td className='bottom right alignRight'>2"-3"</td>
            </tr>
            <tr>
              <td className='bottom left alignLeft'>Small</td>
              <td className='bottom right alignRight'>3"-4"</td>
            </tr>
            <tr>
              <td className='bottom left alignLeft'>Medium</td>
              <td className='bottom right alignRight'>4"-5"</td>
            </tr>
            <tr>
              <td className='bottom left alignLeft'>Large</td>
              <td className='bottom right alignRight'>5"-6"</td>
            </tr>
            <tr>
              <td className='bottom left alignLeft'>Very Large</td>
              <td className='bottom right alignRight'>6"-7"</td>
            </tr>
          </tbody>
        </table>

        <p>Notice that this is the same as devices, that is because devices follow the same dimensions for tiny, very small, small, etc.</p>

        <p>Once a Mech takes its maximum amount of Harm, your Mech is no longer functional. Mechs cannot be healed through normal means. They must be repaired. A crafting check of 10 or more with the right materials can restore 2 Harm from the Mech. If a Mechs power source is damaged, it explodes violently.</p>

        <p>You can add as many limbs and devices to your Mech as you deem necessary. However, if you are trying to add devices to your Mech that wouldn't normally exist, you must go through a separate invention process for each device that wouldn't normally exist.</p>

        <p>If your Mech is built for combat, its damage bonus will be however much its weapon would normally do as well as its Tough score. So, if you have a Large Mech that is wielding a heavy weapon, it will have a +17 Bonus in total (+2 for the heavy weapon and +15 for the Tough stat of the Mech).</p>

        <p>The Mech does not add its Tough score if the weapon being used is a ranged weapon such as a bow or gun. The standard damage bonus is applied.</p>

        <p>You can control you mech either by creating a cock pit where you control it from inside the Mech or through some invented controller.</p>
      </section>

      <section id="prosthetics">
        <h2>Prosthetics</h2>
        <p>With the <em>tech</em> skill, you can create artificial limbs. You'll need to go through the invention process if prosthetics wouldn't normally exist. Then you can simply attach it to the injured creature. However, it will be similar to a peg leg when it comes to mobility and original functionality. But you can insert various gadgets and devices into a prosthetic for functionality, convenience, and to easily hide them.</p>
      </section>
      <NextButton href="/rules/the-market" />
    </article>
  )
}