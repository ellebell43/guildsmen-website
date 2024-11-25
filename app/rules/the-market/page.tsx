import Link from "next/link";
import NextButton from "../next-button";
import { Metadata } from "next";
import Contents from "@/util/components/contents";
import MarketItem from "./market-item";

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

      {/* ====== CONSUMABLES ====== */}

      <section id="consumables">
        <h2>Consumables</h2>
        <p className="text-center">Consumables are items that a character can consume and gain an effect. Some harm, other heal. Some do a bit of both.</p>

        <MarketItem name="Health Elixir" cost="Wealthy" description="A foul tasting liquid that restores 2 Harm on consumption." />
        <MarketItem name="Mandrake Root Powder" cost="Wealthy" description="Causes a creature to sleep fro 2d6 hours on consumption. Can be resisted with a Constitution stat check of 10 or more." />
        <MarketItem name="Narcotics" cost="Wealthy" description="Causes all stats to drop 10 -1 for 1d6 hours on consumption. The more often this is used, the more the creature will become addicted to it." />
        <MarketItem name="Net Root Sap" cost="Exquisite" description="A quick poison that is absorbed through the skin and causes 1 Harm every combat-round (10 seconds) until cured. Can be coated on weapons but requires a Nimble stat check of 8 or more to apply without poisoning yourself. Can be resisted with a Tough check of 10 or more. Resisted only prevents Harm from being taken that round. The poison will still be ongoing." />
        <MarketItem name="Nightshade" cost="Wealthy" description="A slow poison that causes 1 Harm every in-game hour when ingested, until cured. Can  be resisted with a Tough check of 10 or more. Resisted only prevents Harm from being taken that hour. The poison will still be ongoing" />
        <MarketItem name="Stimulants" cost="Wealthy" description="Temporarily sets Tough to +3 and Nimble, Competence, and Constitution to -1 for 1d6 in-game hours on consumption." />
        <MarketItem name="Whiteroot" cost="Wealthy" description="Relieves any poisoned condition on consumption." />
      </section>

      {/* ====== DEVICES ====== */}

      <section id="devices">
        <h2>Devices</h2>
        <p className="text-center">Devices are tech items that are generally powered by Navidus Crystals.</p>

        <MarketItem name="Beam Light" cost="Moderate" description="A device that magnifies the light from a 1” Navidus Crystal to create a beam of light to illuminate dark spaces. Doesn't run out of charge, since the light is just magnified from the Crystal" />
        <MarketItem name="Camera" cost="Wealthy" description="Used to capture images. This stores the images on a film canister that must be developed before the pictures can be seen. Images come out as black and white." />
        <MarketItem name="Courier" cost="Wealthy" description="A small bird Mech that can send and bring back telegram-like messages. A round-trip flight takes one large Navidus Crystal and a one-way flight takes one medium Navidus Crystal. It must be pre-programmed with one specific location that it will have the ability to deliver messages to, then it will return to the spot it was sent from." />
        <MarketItem name="Foam Wall" cost="Wealthy" description="A canister that, when thrown, creates a sudden barrier that measures 10 feet wide, 5 feet tall, and 1 foot thick. It can take up to 3 Harm before being destroyed and turning to powder." />
        <MarketItem name="Gas Mask" cost="Moderate" description="Used to negate the effects of noxious gases." />
        <MarketItem name="Recorder" cost="Wealthy" description="A device that can store and replay up to 10 minutes of audio. Can record or play audio 10 time before needing a new small Navidus Crystal." />
        <MarketItem name="Smoker" cost="Wealthy" description="A canister that, when activated, waits 20 seconds (2 combat rounds) then fill a 20-foot by 20-foot radius with smoke. All creatures taking actions within or through the smoke have disadvantage if the action relies on sight." />
        <MarketItem name="Sticky Bomb" cost="Wealthy" description="A small orb that when thrown will release a sticky substance in a 1 foot radius around the impact spot. Anything that touches the stickiness will become Entangled. The stickiness lasts for 10 minutes. After that, the sticky substance hardens and anything that was stuck remains stuck and nothing new can become stuck to it." />
      </section>

      {/* ====== NAVIDUS CRYSTALS ====== */}

      <section id="navidus-crystals">
        <h2>Navidus Crystals</h2>
        <p className="text-center">Navidus Crystals are used to power tech devices.</p>

        <MarketItem name='Tiny Navidus Crystal (0.5")' cost="Moderate" crystal={true} />
        <MarketItem name='Small Navidus Crystal (1")' cost="Wealthy" crystal={true} />
        <MarketItem name='Medium Navidus Crystal (2")' cost="Exquisite" crystal={true} />
        <MarketItem name='Large Navidus Crystal (3")' cost="Exquisite+" crystal={true} />
      </section>

      {/* ====== MAGIC ITEMS ====== */}

      <section id="magic-items">
        <h2>Magic Items</h2>
        <p className="text-center">The following items are inscribed with <Link href="/rules/runes">runes</Link> and can be used to perform spells.</p>

        <MarketItem name="Backpack of Refuge" cost="Exquisite+" spellDifficulty="Very Hard" description="On a Spirit check of 12 or more, the largest pouch in the bag becomes a portal that leads to a cavern or storage room somewhere in the world somewhere. The portal remains open for 5 minutes and can be reactivated from either side." />
        <MarketItem name="Ball of Aging" cost="Exquisite+" spellDifficulty="Very Hard" description="On a Spirit check of 12 or more, there is a 10 second delay, then anything within 3 feet of the ball ages 5 years over the course of 5 minutes. If something moves within the area of effect while the spell is active, then they take part of the effect. For example, if an item is placed in the area for 2 minutes, than it ages 2 years." />
        <MarketItem name="Cloth of Binding" cost="Wealthy" spellDifficulty="Hard" description="Tie this cloth around a limb of someone who is taking an oath. When they take the oath, make a Spirit check of 10 or more. If successful, the cloth cannot be removed from the individual and if their oath is broken, they cloth constricts until their limb is cut off. The cloth cannot be cut or damaged easily once activated." />
        <MarketItem name="Glasses of Detection" cost="Exquisite" spellDifficulty="Moderate" description="On a Spirit check of 8 or more, all traditional weapons within 25 feet of you will appear as a glowing red haze when looked at through the lenses of the glasses. This effect works through clothing, walls, and all other obstructions." />
        <MarketItem name="Gloves of Deft Hands" cost="Exquisite" spellDifficulty="Moderate" description="On a Spirit check of 8 or more, the gloves become imperceptible to other creatures sense of touch and they cannot feel the gloves or any changes they make to the persons clothing. This primarily give the use advantage on sneaky skill checks when pick-pocketing." />
        <MarketItem name="Hat of the Forgetful Face" cost="Exquisite+" spellDifficulty="Hard" description="On a Spirit check of 10 or more, you become forgettable for 20 minutes. So long as you don't draw an excessive amount of attention to yourself, no one will be able to remember what you look like for the duration of the spell. If questioned later, they will not be able to recall any defining features about you." />
        <MarketItem name="Necklace of Silence" cost="Exquisite" spellDifficulty="Hard" description="On a Spirit check of 10 or more, the area within 3 feet of the necklace becomes completely silent for 10 minutes. This will silence all noises such as creaking doors, footsteps, and conversation." />
        <MarketItem name="Ring of Detect Thoughts" cost="Wealthy" spellDifficulty="Moderate" description="On a Spirit check of 8 or more, you can hear the thoughts of all sentient creatures within 25 feet for 5 minutes. To single out any specific thoughts out of the murmur of many thoughts, you must roll a Competence skill check." />
        <MarketItem name="Telescope of Blinking" cost="Exquisite+" spellDifficulty="Hard" description="On a Spirit check of 10 or more, you teleport to a spot that is clearly visible through the lens of the telescope." />
      </section>

      {/* ====== WEAPONS ====== */}

      <section id="weapons">
        <h2>Weapons</h2>
        <p className="text-center">Weapons are... well, used to kill things. Or maybe you&apos;re just eccentric.</p>

        <MarketItem name="Fumation" cost="Exquisite" description="A toxic gas held within a canister. When activated, it waits 20 seconds (2 combat rounds) then it fills a 20-foot by 20-foot area with toxic gas. Any creatures standing in the area will take 2 Harm every combat round (10 seconds), until they leave the area. A gas mask can negate the effects." />
        <MarketItem name="Shock Rod" cost="Wealthy" description="A light, melee weapon that causes 1 additional Harm of electric damage upon a successful hit and has 10 uses before it needs a new tiny Navidus Crystal. Also causes any affected creature to be stunned for 10 seconds (1 combat round). This can be used on conductive surfaces to stun for 10 seconds and deal 2 Harm to anything touching the conductive surface." />
      </section>
      <NextButton href="/rules/establishments" />
    </article>
  )
}