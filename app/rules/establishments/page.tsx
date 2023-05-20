import Link from "next/link";
import NextButton from "../next-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guidlsmen | Establishments",
  description: "Learn how to start a buisness or take over the world by using Establishments in Guildsmen TTRPG"
}

export default function Establishments() {
  return (
    <article>
      <h1>Establishments</h1>
      <p>Establishments are public institutions or business organizations. They can be anywhere from the size of a ent. Whatever your establishment is and what its goals are, are completely up to you. This mechanic has very little dice rolling and is based heavily in roleplay.</p>

      <p>Before we dive in, it&apos;s important to understand that this mechanic is something that could easily become the focus of play. Before trying to use it, make sure everyone at the table is interested and wants to try it. It's easy to start up and play with.</p>

      <p>When players appear to start building or taking over an Establishment, the Game Master will be able to quickly fill out an Establishment Sheet to help them gauge how the players&apos; establishment is doing, as well as keep track of a few other rival establishments.</p>

      <Link className="button px-8 py-2" href='/est-sheet.pdf' download='guildsmen-establishment-sheet' target="_blank">
        Download the Establishment Sheet
        <FontAwesomeIcon icon={faDownload} />
      </Link>

      <section id="stats">
        <h2>Stats</h2>
        <p>Stats are the most important aspects of your Establishment. They outline 6 attributes that detail how well your Establishment is functioning: Health, Innovation, Might, Morale, Order, and Wealth</p>

        <p>How well these stats are doing is represented by a word to give a narrative tool for the GM. They can range anywhere from Poor to Exquisite.</p>

        <p><strong>Health</strong> is very straightforward. It represents the health of your Establishment. This can be interpreted as cleanliness and a lack of disease. In the context of a simple tavern, a higher health score would represent a very clean tavern with no rodents or dust. In the context of a city, a higher health score would mean quality city sanitation and low disease rates.</p>

        <p><strong>Innovation</strong> represents how creative, original, and advanced your Establishment is versus rival Establishments. This can be interpreted as your level of technology or your originality that draws people to your Establishments instead of your competitors. In the context of a tavern, a higher Innovation score would represent higher quality entertainment and drinks, private rooms, and luxurious suites that are better than your competitors. In the context of a city, a higher Innovation score would represent a higher level of technology, quality of education, and original civil projects that the people support.</p>

        <p><strong>Might</strong> represents how strong your Establishment is compared to others. This can be interpreted as more troops, technologically superior weapons, or blackmail material against your competitors. In the context of a tavern, a higher Might score would represents more bouncers, bouncers that are more intimidating, or some information you can hold over the heads of your competitors. In the context of a city, a higher Might score would represent a better policing force or militia, higher political power than other cities, or access to powerful allies.</p>

        <p><strong>Morale</strong> represents the happiness and motivation of the people under your Establishment. This can be interpreted as how well your people get along with each other and how happy your people are in general. In the context of a tavern, a higher Morale score would represent how well behaved your patrons are and how much your employees like their job. In the context of a city, a higher morale score would represent a lower crime rate, bustling businesses, and overall happier citizens.</p>

        <p><strong>Order</strong> represents the efficiency and organization of your Establishment. This can be interpreted as how well the pieces of your Establishment work together. In the context of a tavern, a higher Order score would represent an efficient serving team and a good system to keep your merchandise sorted and accounted for. In the context of a city, a higher Order score would mean deep traditions, respected officials, and an efficient political system.</p>

        <p><strong>Wealth</strong> represents the amount of resources and money your Establishment has. This can be interpreted as your level of money, financial stability, and mercantile opportunities. In the context of a tavern, a higher Wealth score would represent higher income, access to unique merchandise, or connections to buy goods at a discount. In the context of a city, a higher Wealth score would represent access to mineral deposits, good trade deals, or a higher output of goods.</p>

        <p>These 6 stats are the core of Establishments. As players make decisions through their roleplay, the Game Master will decide how their player's decisions would affect their Establishment's stats and adjust them accordingly. The GM has no obligation to let their player know which stats are being changed unless the player asks, and the Game Master should only let their player know how their stats are doing through the narrative of the game.</p>
      </section>

      <section id="power">
        <h2>Power</h2>
        <p>Each stat level corresponds with both a narrative word and a set number (i.e., Moderate is 3 and Exquisite is 10). Your Power is the sum of all 6 of your stats and is a block number to give you a good idea on how your Establishment is doing overall. So, if I had all my establishment stats at Moderate, than my power would be 18. Any rival Establishments will also have a Power score.</p>

        <p>The Power score is mainly used to compare your Establishment with others. The Establishment with the highest power score is in control. Being in control means that your Establishment is the top in the area. Being in control allows you to attempt to grow the size of your Establishment by absorbing your competitors.</p>

        <h2>Establishment Size</h2>
        <p>Any Establishment that would be bigger than your Establishment would have control over you. For example, the city that your Establishment is in can create laws that directly affect your Establishment.</p>

        <p>On the Establishment Sheet, there is a small field for your Establishment's size. This is just a simple word that lets you understand the scope of your Establishment. Some examples of sizes would be city, village, tavern, gang, guild, etc. and for most Establishments this size will never change. However, a few Establishments will dream bigger. They'll want to grow their size to gain more and more power.</p>

        <p>In order to grow your Establishment size, you'll need to first be in control by having the highest power score. Then, you'll need to decide if growing your Establishment means absorbing your competitors or toppling them.</p>

        <p>For business-like Establishments, you'll want to absorb your competitors, which would be Establishments of your same size. To absorb competitors, you'll need to roleplay any plans that you have buy out your competition. If this is successful, you'll have to average your stats with their stats. So, if you have Exquisite (10) Wealth, but they only have Poor (1) Wealth, then your new Wealth score will be Good (5). When the average number doesn't settle on a specific stat level, just pick to go up or go down.</p>

        <p>For rebellion-like Establishments, you'll want to topple your competitor, which will be a bigger size Establishment than you. For this, you'll need heavy amounts of roleplay. You'll need to make plans to hurt specific stats of the Establishment you're trying to take down. Then make plans to depose and usurp them to take over their position. But be careful. When you topple an Establishment, you take over their exact stats. So, if you had a Great in Innovation, but you caused your target to drop down to Poor Innovation, then when you take control, your Innovation will drop to Poor.</p>
      </section>

      <section id="starting-an-establishment">
        <h2>Starting an Establishment</h2>
        <p>When players start an establishment, quickly grab an establishment sheet, and fill it out with whatever makes sense. If it seems they should start with all their stats at good, then do so.</p>

        <p>Be sure to roleplay how you get there.</p>

        <p>Also, if it seems like the players are outing most of their energy into their Establishment, then this becomes the focus mechanic, instead of something in the background.</p>
      </section>

      <section id="growing-your-establishment">
        <h2>Growing Your Establishment</h2>
        <p>You can grow your Establishments by simply roleplaying. Make decisions, find ways to do what you want, and your actions will alter your stats and Establishment size. Keep in mind that what you do can affect multiple stats; it might raise some stats and lower others. And of course, some things will happen that are completely out of your control.</p>

        <p>Whenever you want to consciously increase a stat, you may roleplay how you want to make that happen and then roll a lead skill check to see how well you did. Failing this skill check can cause the stat to go down instead.</p>
      </section>

      <section id="events-and-competitors">
        <h2>Events & Competitors</h2>
        <p>Events are happening around your Establishment all the time, and they will affect your Establishment. At any time, the Game Master may have an event happen to your Establishment. Events can be good or bad and they can impact your stats and party size in a variety of ways. For example, a famine is almost guaranteed to lower your Health score.</p>

        <p>Then, of course, there are other Establishments. Periodically, they may try to affect your stats or even crush you completely. All of which is up to the Game Master to decide.</p>
      </section>

      <section id="keeping-track-of-other-establishments">
        <h2>Keeping Track of Other Establishments</h2>
        <p>For convenience, we made it so that you can keep track of 4 Establishments on one Establishment sheet. This way, you can keep track of up to 3 other Establishments. Only keep track of ones that players will actually be interacting with. Otherwise, it's a waste of energy on your part.</p>

        <p>As players interact with other Establishments, be sure to let the stats of the NPC Establishment fluctuate.</p>
      </section>

      <section id="war">
        <h2>War</h2>
        <h3>Preparing for War</h3>
        <p>When in Control or struggling to gain Control, you may find yourself in need of a war. If so, here is a way to go about preparing, and then waging, war.</p>

        <p>The first thing you need to do is establish your troops. If you're currently preparing for war, you'll need to roleplay your Establishment as you build your army. Increase you Might score as much as possible, and when you're ready, figure out how many troops you have.</p>

        <p>If the war wasn't necessarily planned, then you might find that you haven't needed to know your troop count until now.</p>

        <p>To find your troop count, multiply the number of your Might stat with the size of your Establishment. Look at the following chart and use whatever size seems closest to your establishment.</p>

        <table>
          <thead>
            <tr>
              <th colSpan={2}>Size Multiplier</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='bottom left alignLeft'>Village</td>
              <td className='bottom right alignRight'>x10</td>
            </tr>
            <tr>
              <td className='bottom left alignLeft'>Town</td>
              <td className='bottom right alignRight'>x100</td>
            </tr>
            <tr>
              <td className='bottom left alignLeft'>City</td>
              <td className='bottom right alignRight'>x1,000</td>
            </tr>
            <tr>
              <td className='bottom left alignLeft'>Country</td>
              <td className='bottom right alignRight'>x10,000</td>
            </tr>
            <tr>
              <td className='bottom left alignLeft'>Emppire</td>
              <td className='bottom right alignRight'>x100,000</td>
            </tr>
          </tbody>
        </table>

        <p>So, if I have a Might stat of Great (8) and my Establishment is roughly the size of city (x1,000), then my troop count would be 8,0000</p>

        <p>You can also decrease your Wealth stat to increase your Might stat. This can represent buying technologically superior weapons, training more troops, etc.</p>

        <p>Once you have your troop count established, you're ready to start waging war.</p>

        <h3>Waging War</h3>
        <p>Waging war is very similar to combat between two people. In war, you take actions, and your opponent reacts, then vice versa. Except in war, it's on a much larger scale and takes time.</p>

        <p>When you attack, you choose how to attack and roll an opposed <em>lead</em> skill check against the opponents <em>lead</em> skill check. The loser takes 50% of the enemies' troop count as a troop loss to the troops they were defending with. So, if I attack with 8,000 troops and my enemy defends with 8,000 troops and I win the dice roll, then the enemy will take 50% of my troop count as damage. 50% of 8,000 is 4,000, so the enemy's troops will drop by 4,000, bringing it down to 4,000.</p>

        <p>Remember that you can do a lot more than just simply attack with your troops: you're still an Establishment after all. You can go on the defensive and only react to attacks, making any allies you have more likely to help your troops out. You can parley with the enemy leaders to make peace treaties. Or you can lay siege to the enemy and cut off their supplies. The more creative you get, the better.</p>

        <h3>Avoiding Troop Loss</h3>
        <p>If you find yourself in a situation where you're not very confident in winning the opposed skill check, consider taking an evasive action instead of attacking. This generally means some sort of retreat. When you do this, you are guaranteed to lose the dice check, but you'll only take half the troop loss. So, if you were going to take 4,000 troop losses, then you would only lose 2,000 instead.</p>

        <h3>More Than the Fight</h3>
        <p>It's important to remember that there's a lot more to war than the actual battles. As you command troops, you should have breaks between attacks where you are role-playing your Establishment.</p>

        <p>As you make actions in your Establishment, you can make them war oriented, and the GM should give you bonuses in war for the decisions you make. This can be +1 or +2 to your dice roll, giving the enemy disadvantage, or adding to your troop counts.</p>
      </section>
      <NextButton href="/rules/creatures" />
    </article>
  )
}