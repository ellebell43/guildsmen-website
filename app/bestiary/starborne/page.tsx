import { Metadata } from "next"
import CreatureList from "../creatureList"

export const metadata: Metadata = {
  title: "Guildsmen Bestiary | Starborne Creatures",
  description: "Various Starborne Creatures in the Guilsmen TTRPG"
}

export default function MythicalCreatures() {
  return (
    <>
      <h1>Starborne Creatures</h1>
      <p>Starborne creatures are creatures that have Navidus Crystals inside of them. They are inherently magical and can be extremely dangerous. The danger of Starborne Creatures lies in their insatiable hunger. A Starborne Creature uses the energy from a Navidus Crystal the same way common creatures use calories - they use it to move and act. But with Navidus Energy, the body deteriorates much faster than normal, so a Starborne Creature must eat constantly to replenish their bodies.</p>

      <p>Not only that, but the Navidus Crystal inside them never stops growing. Because of this, Starborne Creatures must constantly eat in order for their bodies to be able to grow to accommodate the crystal. So, the older the Starborne Creature, the larger they are. The larger they are, the more food they need.</p>

      <p>At a certain point, Starborne creatures will become so large, their bodies cannot be sustained. When this happens, a Starborne creature becomes ravenous. This is when they are most dangerous. The creature will focus on eating whatever crosses it&apos;s path, because if it does not eat, it will die. So, all instinct of survival and self preservation are overridden by an insatiable hunger. When encountering a ravenous Starborne Creature, it is best to leave the area as quickly and quietly as possible, or face the hunger of a nearly unstoppable force.
      </p>

      {/* @ts-expect-error */}
      <CreatureList creatureType="mythical" />
    </>
  )
}