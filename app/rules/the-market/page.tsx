import Link from "next/link";
import NextButton from "../next-button";
import { Metadata } from "next";
import Contents from "@/util/components/contents";

export const metadata: Metadata = {
  title: "Guildsmen | The Market",
  description: "Learn how buying items works and see a list of possible world items in Guildsmen TTRPG"
}

export default function TheMarket() {
  return (
    <article>
      <Contents />
      <h1>The Market</h1>
      <p>Welcome to the Market! Here we outline how buying equipment works and some common place items that you would generally find in shopping areas. Shop till you drop!</p>

      <section id="buying-items">
        <h2>Buying Items</h2>
        <p>Knowing what you can and cannot buy is easy. If it is within your wealth category, you can buy those items in some abundance. If it is one wealthy category above yours, you can buy those items sparingly. If it is below your wealth category, you can buy those items in great abundance.</p>

        <p>What items are in what wealth category is entirely up to Game Master discretion. If the Game Master doesn&apos;t think your character should be able to buy the item, then your character cannot buy the item. The Game Master can also put items in the Exquisite+ category, which is one category above Exquisite.</p>

        <p>If you come to a situation where a specific item would be useful, maybe your character would reasonably have the item. If you can argue that they would reasonably have the item, and the Game Master agrees with your argument, then you would have the item.</p>

        <p>When it comes to buying weapons, its best to assume that they would fall under the Wealthy category and certain others (such as guns) would fall under the Exquisite category. Remember that all weapons either have a damage bonus of +1 or +2 (light weapons get +1 and heavy weapons get +2), except for bows and guns (see the <Link href="/rules/combat#weapons"><em>Combat chapter</em></Link>).</p>

        <p>The following is a guide to useful and mentioned items where the wealth category they fall into may not be inherently understood, as well as items that require special description, or items that may not be thought of to exist. Anything not on this list is decided on-the-fly, during play whether or not the item exists and what wealth category it would fall into.</p>
      </section>

      <section id="consumables">
        <h2>Consumables</h2>
        <p className="text-center">Consumables are items that a character can consume and gain an effect. Some harm, other heal. Some do a bit of both.</p>

        <div className="item">
          <p className="itemName">Health Elixer</p>
          <p className="itemCost">Wealthy</p>
        </div>
        <p className="itemDescription">A foul tasting liquid that restores 2 Harm on consumption.</p>

        <div className="item">
          <p className="itemName">Mandrake Root Powder</p>
          <p className="itemCost">Wealthy</p>
        </div>
        <p className="itemDescription">Causes a creature to sleep for 2d6 hours on consumption. Can be resisted with a Constitution check of 10 or more.</p>

        <div className="item">
          <p className="itemName">Narcotics</p>
          <p className="itemCost">Wealthy</p>
        </div>
        <p className="itemDescription">Causes all stats to drop to -1 for 1d6 hours on consumption. The more often this is used, the more the creature will become addicted to it.</p>

        <div className="item">
          <p className="itemName">Net Root Sap</p>
          <p className="itemCost">Wealthy</p>
        </div>
        <p className="itemDescription">A quick poison that is absorbed through the skin and causes 1 Harm every combat-round (10 seconds) until cured. Can be coated on weapons but requires a Nimble stat check of 8 or more to apply without poisoning yourself. Can be resisted with a Tough check of 10 or more. Resisted only prevents Harm from being taken that round. The poison will still be ongoing.</p>

        <div className="item">
          <p className="itemName">Nightshade</p>
          <p className="itemCost">Wealthy</p>
        </div>
        <p className="itemDescription">A slow poison that causes 1 Harm every in-game hour when ingested, until cured. Can  be resisted with a Tough check of 10 or more. Resisted only prevents Harm from being taken that round. The poison will still be ongoing.</p>

        <div className="item">
          <p className="itemName">Stimulants</p>
          <p className="itemCost">Wealthy</p>
        </div>
        <p className="itemDescription">Temporarily sets Tough to +3 and Nimble, Competence, and Constitution to -1 for 1d6 in-game hours on consumption.</p>

        <div className="item">
          <p className="itemName">Whiteroot</p>
          <p className="itemCost">Wealthy</p>
        </div>
        <p className="itemDescription">Relieves any poisoned condition on consumption.</p>
      </section>

      <section id="devices">
        <h2>Devices</h2>
        <p className="text-center">Devices are tech items that are generally powered by Navidus Crystals.</p>

        <div className="item">
          <p className="itemName">Beam Light</p>
          <p className="itemCost">Moderate</p>
        </div>
        <p className="itemDescription">A device that magnifies the light from a 1” Navidus Crystal to create a beam of light to illuminate dark spaces. Doesn&apos;t run out of charge, since the light is just magnified from the Crystal</p>

        <div className="item">
          <p className="itemName">Camera</p>
          <p className="itemCost">Wealthy</p>
        </div>
        <p className="itemDescription">Used to capture images. This stores the images on a film canister that must be
          developed before the pictures can be seen. Images come out as black and white.</p>

        <div className="item">
          <p className="itemName">Courier</p>
          <p className="itemCost">Wealthy</p>
        </div>
        <p className="itemDescription">A small bird Mech that can send and bring back telegram-like messages. Each round-trip flight takes a 2” Navidus Crystal. The bird also only travels to specific, known locations.</p>

        <div className="item">
          <p className="itemName">Gas Mask</p>
          <p className="itemCost">Moderate</p>
        </div>
        <p className="itemDescription">Used to negate the effects of noxious gases.</p>

        <div className="item">
          <p className="itemName">Recorder</p>
          <p className="itemCost">Wealthy</p>
        </div>
        <p className="itemDescription">A device that can store and replay up to 10 minutes of audio. Can record or play audio 4 time before needing a new 1” Navidus Crystal.</p>

        <div className="item">
          <p className="itemName">Smoker</p>
          <p className="itemCost">Wealthy</p>
        </div>
        <p className="itemDescription">A canister that, when activated, waits 20 seconds (2 combat rounds) then fills a 20-foot by 20-foot area with smoke. All creatures taking actions within the smoke have disadvantage if the action relies on sight.</p>
      </section>

      <section id="navidus-crystals">
        <h2>Navidus Crystals</h2>
        <p className="text-center">Navidus Crystlas are used to power tech devices.</p>

        <div className="item crystal">
          <p className="itemName">Tiny Navidus Crystal (0.5&quot;)</p>
          <p className="itemCost">Moderate</p>
        </div>

        <div className="item crystal">
          <p className="itemName">Small Navidus Crystal (1&quot;)</p>
          <p className="itemCost">Wealthy</p>
        </div>

        <div className="item crystal">
          <p className="itemName">Medium Navidus Crystal (2&quot;)</p>
          <p className="itemCost">Exquisite</p>
        </div>

        <div className="item crystal">
          <p className="itemName">Large Navidus Crystal (3&quot;)</p>
          <p className="itemCost">Exquisite+</p>
        </div>
      </section>

      <section id="weapons">
        <h2>Weapons</h2>
        <p className="text-center">Weapons are... well, used to kill things. Or maybe you&apos;re just eccentric.</p>

        <div className="item">
          <p className="itemName">Fumation</p>
          <p className="itemCost">Exquisite</p>
        </div>
        <p className="itemDescription">A toxic gas held within a canister. When activated, it waits 20 seconds (2 combat rounds) then it fills a 20-foot by 20-foot area with toxic gas. Any creatures standing in the area will take 2 Harm every combat round (10 seconds), until they leave the area. A gas mask can negate the effects.</p>

        <div className="item">
          <p className="itemName">Shock Rod</p>
          <p className="itemCost">Exquisite</p>
        </div>
        <p className="itemDescription">A light, melee weapon that also causes 3 Harm of electric damage upon a successful hit but drains a 1&quot; Navidus Crystal. Also causes any affected creature to be stunned for 10 seconds (1 combat round). This can be used on conductive surfaces to stun for 10 seconds and deal 3 Harm to anything touching the conductive surface.</p>
      </section>
      <NextButton href="/rules/establishments" />
    </article>
  )
}