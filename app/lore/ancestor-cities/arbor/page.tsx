import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Guildsmen Lore | Arbor",
  description: "Guildsmen world lore about Arbor, the Ancestor City-State of the Locess"
}

export default function Arbor() {
  return (
    <article>
      <section>
        <h1>Arbor</h1>
        <p>Arbor is built in the boughs of the great trees that make up the World Forest. These trees (World Trees) are incredibly massive. They can grow up to ~1.2 miles tall and their branches stretch out ~0.5 miles from the trunks. The structure of these trees is like an old, gnarled oak tree. On a full-grown World Tree, their longest and strongest branches begin about ~0.5 miles off the ground. Because of how high up these branches are, Arbor has a natural protection against the various predators that roam the forest floor.</p>

        {/* REFERENCE IMAGE OF TREE HERE */}

        <p>The City-State of Arbor is split into roughly three levels: the residential level, the business and government level, and the agricultural level. The residential districts are on the lower branches of the forest canopy since these branches extend the furthest out and houses are most of the buildings in the city. The business and government districts take up the middle branches of the canopy. The agricultural districts are on the highest branches, so that their crops receive the sunlight that they need, and they receive the first of any rainfall.</p>
      </section>
      <section id="agriculture">
        <h2>Agriculture</h2>
        <p>Agriculture in Arbor is ancient, tricky, and central to the Locess way of life. Since the Locess live in trees and rarely descend to the ground, the plants that they grow are direct descendants of the plants their ancestors took with them when they ascended into the trees to flee from the growing threat of Mythical creatures. One of the biggest problems with growing crops at the top of a tree is obtaining soil.</p>

        <p>When the Locess first ascended into the trees, food was scarce. They often had to send foraging parties to the ground, but this was incredibly dangerous, and lives and resources were lost regularly. So, they needed to devise a way to bring edible plants up into the trees with them. Getting the plants there was easy but growing them and keeping them alive was much more difficult. At first, the Locess couldn&apos;t do anything more than create garden boxes and haul soil up by hand, until the advent of the pulley.</p>

        <p>With the pulley, they were able to construct a system where workers would fill a tarp with topsoil from the forest floor and connect them to incredibly long ropes. Then, workers up in the canopy of the trees would spin a large wheel to wind up the ropes, like retracting an anchor on a ship. This was enough to slowly pull up enough soil to create entire fields up near the tops of the trees, where their crops could get enough sunlight to thrive. With the recent advent of the steam-powered engine, hauling loads up and down the World Trees has become significantly easier.</p>

        <p>Another issue the Locess ran into with their agriculture was water control. At the tops of the trees, it&apos;s extremely easy for your plants to receive too much water, and therefore drown. So, the Locess built roofs over their crops and devised a way to control water flow throughout all of Arbor.</p>

        <p>At the tops of the World Trees that they live in, the Locess built large structures to catch rainwater. Throughout the canopy of the trees, they carved runoff canals that carry the water that lands on the branches to cisterns that have been carved into the trunks of the trees. From here, the water is redirected into piping that ends in valves that control the flow of water. This way, their crops get as much water as they deem necessary, and the residents of Arbor enjoy the luxury of indoor plumbing.</p>

        <p>Agriculture is the focus of Locess society because the Locess cannot forage effectively due to the natural predators and Mythical Creatures that roam the forest floor. Because of this, their primary source of food is the crops that they grow. The difficulties associated with agriculture atop a tree have led to some of their most important technological advancement: it’s the main reason they discovered steam power and plumbing.</p>
      </section>
      <section id="natural-resources">
        <h2>Natrural Resources</h2>
      </section>
      <section id="technological advancements">
        <h2>Technological Advancements</h2>
      </section>
      <section id="civil engineering">
        <h2>Civil Engineering</h2>
      </section>
      <section id="architecture">
        <h2>Architecture</h2>
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