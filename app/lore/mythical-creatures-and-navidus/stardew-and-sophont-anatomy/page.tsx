import Contents from "@/util/components/contents";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Guildsmen | Myth and Sophont Anatomy" }

export default function MythAndSophontAnatomy() {
  return (
    <article>
      <Contents />
      <section>
        <h1>Myth and Sophont Anatomy</h1>
        {/* === NOTES ===
        - If mythical creatures use navidus energy to charge their blood, and that's how they perform magic, how do the sophonts use Myth as a magical drug to manipulate elements?
          - What if Myth becomes charged during refinement, but it's mild and stable
            - Charges from ambient Navidus Energy in the air
          - When used, it mixes with materials in the blood and becomes unstable
          - the brain is somehow able to use this unstable, refined version of Mythical blood to consciously manipulate the elements/energy that the myth corresponds to.
         */}
      </section>
    </article>
  )
}