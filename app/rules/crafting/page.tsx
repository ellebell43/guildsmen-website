import { Metadata } from "next";
import NextButton from "../next-button";

export const metadata: Metadata = {
  title: "Guildsmen | Crafting",
  description: "Learn how crafting things works in Guildsmen TTRPG"
}

export default function Crafting() {
  return (
    <article>
      <h1>Crafting</h1>

      <p>Crafting requires both the proper materials and the proper tools to work with. After all, a carpenter is
        useless if you hand them a chisel and a sculptor is equally useless if you give them an anvil.</p>

      <section id="crafting-in-general">
        <h2>Crafting in General</h2>
        <p>You can craft anything you desire, so long as it is within your means. If you have Poor wealth, you cannot craft things from gold, good steel, or even simple iron. This chart will help you identify what kind of goods and materials are available to you. </p>

        <table>
          <thead>
            <tr>
              <th colSpan={2}>Materials vs.<br />Wealth Needed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='bottom left alignLeft'>Common</td>
              <td className='bottom right alignRight'>Moderate</td>
            </tr>
            <tr>
              <td className='bottom left alignLeft'>Uncommon</td>
              <td className='bottom right alignRight'>Wealthy</td>
            </tr>
            <tr>
              <td className='bottom left alignLeft'>Rare</td>
              <td className='bottom right alignRight'>Exquisite</td>
            </tr>
            <tr>
              <td className='bottom left alignLeft'>Exotic</td>
              <td className='bottom right alignRight'>Exquisite+</td>
            </tr>
          </tbody>
        </table>

        <p>Keep in mind that your coin purse is not bottomless. Just because you can afford Rare items and materials,mdoes not mean you can walk into a shop and buy out absolutely everything that is rare, uncommon, and common.</p>

        <p>A good rule of thumb is that you can buy materials in small abundance that match your wealth and very sparingly one step above your wealth. This means that a person with Moderate wealth can buy uncommon materials vey sparingly and common materials in small abundance. Anything outside of that is out of budget. Anything at your wealth in rarity can be bought in some abundance, and anything less rare than that can be bought in great abundance.</p>

        <p>So, a Wealthy person can buy uncommon materials in some abundance, rare materials sparingly, and common materials in great abundance.</p>

        <p>Wealth and the purchase of materials for crafting are supposed to be narrative tools that guide interactions with merchants.</p>

        <p>When obtaining resources to craft with, you will generally only be able to afford small projects: crafting a clock, some clothing, or a childs toy. But to make something bigger - an engine, a ship, a building, etc. - you won't be able to afford the resources and manpower all on you own. You'll need a sponsor.</p>
      </section>

      <section id="sponsors">
        <h2>Sponsors</h2>
        <p>Any aspiring crafter or inventor needs a sponsor. Sponsors will pay for your materials, workspace, manpower, and anything else you require to turn your dreams into reality.</p>

        <p>Sponsors are NPCs (non-player characters) that the Game Master ultimately controls. At times they may approach you and let you know that they want to sponsor you, and other times you must approach them and try to convince them to sponsor you. It is ultimately up to the narrative on if you get a sponsor and how getting a sponsor will play out.</p>

        <p>All sponsors will have conditions of their sponsorship. It will generally include what kind of items you may craft or invent, how much you can spend before you overreach, and if you or the sponsor gets to own the crafted items and inventions.</p>

        <p>If you don't have any grand plans when it comes to crafting and invention, then you generally will not need a sponsor.</p>
      </section>

      <section id="crafting-items">
        <h2>Crafting Items</h2>
        <p>You can craft any item listed in the Market chapter and beyond if you have the means to do it. This is useful if you cannot afford to outright buy the item that you want. When you go to craft items, first consider what wealth category it is in. Crafting items allows you to roll a craft skill check to bring the price of the item down by one wealth category. So, if you were Poor, a sword (which requires a wealth of Wealthy) would be completely out of your budget. Attempting to craft the sword instead would bring its wealth requirement down to Moderate, which you could sparingly buy at, but there is some risk.</p>

        <p>When crafting any item, the Guild Master will decide on a difficulty level based on what you're trying to craft. Then, they should take the Degree of Success into account and use the following guidelines.</p>

        <p>On an <strong>Extreme Success</strong>, your item turns out far better than you anticipate. Your wealth remains the same, and the item you craft is so finely done that if you sell it, your wealth will go up (i.e., from moderate to wealthy).</p>

        <p>On a <strong>Success</strong>, your wealth remains the same and the item you craft comes out as anticipated. </p>

        <p>On a <strong>Mixed Success</strong>, you find that the item took more resources than anticipated. The item comes out just fine but if you do not sell it, your wealth will go down (i.e., from moderate to poor).</p>

        <p>On a <strong>Fail</strong>, your item doesn't turn out at all and you produce nothing worthwhile.</p>

        <p>On an <strong>Extreme Fail</strong>, your time and resources are completely wasted. The item that comes out is completely useless and your wealth goes down.</p>
      </section>

      <section id="improvement">
        <h2>Improvement</h2>
        <p>You can toughen your weapons and armor through a process called Improvement. Imporvement will increase the Bonus of your weapon or score of your armor by 1. Imporvement can be done up to 3 times to an item and requires a wealth equal to the material it's made of (i.e., a steel sword would require you to be Average to afford the common material of steel).</p>

        <p>However, if you attempt to Improve your item and you fail at the <em>craft</em> skill check, you ruin your item and it becomes useless.</p>

        <p>Improvement can also make common items stronger, more resistant, and more effective.</p>
      </section>
      <NextButton href="/rules/invention" />
    </article>
  )
}