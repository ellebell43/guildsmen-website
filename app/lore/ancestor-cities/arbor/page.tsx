// cSpell:ignore locess, couldn, guildsmen

import CaptionedImg from "@/app/captioned-img"
import Contents from "@/util/components/contents"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Guildsmen Lore | Arbor",
  description: "Guildsmen world lore about Arbor, the Ancestor City-State of the Locess"
}

export default function Arbor() {
  return (
    <article>
      <Contents />
      <section>
        <h1>Arbor</h1>
        <div className="md:flex gap-5 items-center justify-between">
          <div>
            <p>Arbor is the ancestral city-state of the Locess. It is built in the boughs of the great trees that make up the World Forest. These trees (known as World Trees) are incredibly massive. They can grow up to about one mile tall and their branches stretch out roughly two miles from the trunks. The structure of these trees is like an old, gnarled oak tree with incredibly long branches. On a full-grown World Tree, their longest and strongest branches begin about a half a mile off the ground, but have a tendency to dip down and hover only a quarter mile off the ground. Because of how high up these branches are, Arbor has a natural protection against the various Mythical creatures that roam the forest floor, but they still have to defend themselves against tree-dwelling Mythical creatures.</p>

            <p>The World Forest is a rain forest at the base of a mountain range known as the Dragon Spine. It receives nearly perpetual rainfall that varies in intensity from a drizzle to a deluge. It&apos;s common knowledge that the branches of Arbor are never dry.</p>
          </div>

          <div className="min-w-[300px]">
            <CaptionedImg src="/reference-images/world-tree.jpg" alt="Angel Oak tree from John's Island, South Carolina to represent how a world tree might look" width={200} height={200} />
          </div>
        </div>

        <p>The City-State of Arbor is split into roughly three sections: a residential and business section, a religious and government section, and an agricultural section. The residential and business districts are generally on the lower branches of the forest canopy since these branches extend the furthest out and these buildings make up most of the the city. The religious and government districts are generally built directly into the trunk of the World Trees. The agricultural districts are always on the highest branches, so that crops receive the sunlight that they need, the first of any rainfall, and it&apos;s far easier to transport crops down than up. Having their agricultural fields above all the citizens also carries important symbolic meaning in Locess society.</p>
      </section>
      <section id="agriculture">
        <h2>Agriculture</h2>
        <p>Agriculture in Arbor is religious, tricky, and central to the Locess way of life. Since the Locess live in trees and rarely descend to the ground, many of the plants that they grow are direct descendants of the plants that their ancestors took with them when they ascended into the trees to flee from the growing threat of Mythical creatures. This connection alone gives agriculture a religious quality to the Locess since it&apos;s a direct line to their ancestors and many major figures of their history are heros that descended to the ground to obtain seeds and a vast majority of their technological achievements were achieved in the pursuit of improving their agricultural system.</p>

        <h3>History of Locess Agriculture</h3>

        <p>When the Locess first ascended into the trees, food was scarce. At first they primarily sustained themselves off the many plants that grow on the surface of the World Trees, but these plants were generally not fruit bearing or any type of grain, making long-term food sustainability impossible. The Locess people often had to send foraging parties to the ground to obtain more sustainable foods, but this was incredibly dangerous, and lives and resources were lost regularly. So, they needed to devise a way to bring more edible plants up into the trees with them. Getting the plants there was easy but growing them and keeping them alive was much more difficult.</p>

        <p>At first, the Locess couldn&apos;t do anything more than create garden boxes and haul soil up by hand.Eventually, they devised a system where workers would fill a tarp made from the leaves of the great World Trees with topsoil from the forest floor and connect them to incredibly long ropes. Workers up in the canopy of the trees would spin a large wheel to pull the load up, like retracting an anchor on a ship. This allowed them to slowly pull up enough soil to create entire fields up near the tops of the trees, where their crops could get enough sunlight and rain water to thrive. The modern method of hauling loads up and down the trees uses steam power and steel cables, making the job significantly easier in the modern era.</p>

        <p>Another issue the Locess ran into with their agriculture was water control. At the tops of the trees, it&apos;s extremely easy for your plants to receive too much water, and therefore drown. So, the Locess built roofs over their crops using the leaves of the World Trees and they caught rain water in buckets to control the amount of water their crops receive and distribute drinking water to citizens.</p>

        <p>Overtime, the Locess devised a way to better capture and control the plentiful rainwater. At the tops of the World Trees that they live in, they carved runoff canals that carry the water that lands on the branches to cisterns that have been carved into the trunks of the trees. From here, the water is redirected into piping that runs through the branches of the tree which end in valves that control the flow of water. This way, their crops get as much water as they deem necessary, and the residents of Arbor enjoy the luxury of indoor plumbing.</p>

        {/* <h3>Religious Agriculture</h3> */}
      </section>
      <section id="natural-resources">
        <h2>Natural Resources</h2>

        {/* === NOTES ===
        - Metal for devices and structures is extracted from the Dragon Spine mountains
          - It's very dangerous to do so because of the Mythical creatures, but it's their only way to get stone and metal
          - It's less dangerous than other options though since the Dragon Spine mountains are where dragons live and they are the only natural predators of Mythical creatures */}
      </section>
      <section id="technological-advancements">
        <h2>Technological Advancements</h2>
      </section>
      <section id="civil-engineering">
        <h2>Civil Engineering</h2>
        {/* === NOTES ===
        - Water towers at the tops of the trees
          - Grooves are cut into the branches to collect rainfall in cisterns
          - Cisterns are created by hollowing out sections of trunk
          - Arbor has indoor plumbing
        - Public transportation
          - Steam powered trolleys for navigating the city */}
      </section>
      <section id="architecture">
        <h2>Architecture</h2>
        {/* === NOTES ===
        - Buildings are built in a variety of ways:
          - Carved directly into the tree
          - On top of the branches
          - On platforms that extend off and across branches
          - Hanging???
        - World tree leaves are very big and thick, making them useful as a cloth-like material for canopies and clothing
        - Buildings are made with metal, stone, wood, and tree leaves. */}
      </section>
      <section id="family-units">
        <h2>Family Unites</h2>
      </section>
      <section id="culture">
        <h2>Culture</h2>
      </section>
    </article>
  )
}