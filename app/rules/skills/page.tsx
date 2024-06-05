import Link from "next/link"
import NextButton from "../next-button"
import { Metadata } from "next"
import Contents from "@/util/components/contents"

export const metadata: Metadata = {
  title: "Guildsmen | Skills",
  description: "Learn about the various skills in Guildsmen TTRPG and how to use them"
}

export default function Skills() {
  return (
    <article>
      <Contents />
      <h1>Skills</h1>
      <p>Skills are the fundamental mechanic underlying all of Guildsmen. Skills are used to perform most tasks, and the better your skills are, the easier it is for you to perform tasks.</p>

      <p>The character sheet outlines 11 distinct categories of skill, each with their own specialties. Specialties are special modifiers you gain through experience which are explained later.</p>

      <section id="skill-categories,-defined">
        <h2>Skill Categories, Defined</h2>
        <p><strong>Craft</strong> is your ability to take materials and then skillfully and artistically create items from them.</p>

        <p><strong>Investigate</strong> is your ability to discover and examine hidden things in the world around you. This can be searching for hidden doors, looking for items, etc. It also allows you to survey the area around you and track creatures.</p>

        <p><strong>Leadership</strong> is your ability to guide groups or establishments and be a figure of authority. It is used primarily in Establishments (see the <Link href="/rules/establishments"><em>Establishments chapter</em></Link>), but can also be used to be an authority to NPCs (non-player characters)</p>

        <p><strong>Medic</strong> is your ability to heal and care for injured creatures. This is used to restore Harm and remove combat conditions (see the <a href="/rules/combat"><em>Combat chapter</em></a>).</p>

        <p><strong>Myth</strong> is your ability to use and control the powers that come from Myth, an addictive drug refined from the blood of magical creatures. It is also used to refined raw mythical blood into Myth (see the <a href="/rules/myth"><em>Myth chapter</em></a>).</p>

        <p><strong>Nature</strong> is your knowledge of the natural world and ability to survive in the wild effectively. This can be used to track wild creatures, navigate through uncivilized areas, and to perform basic survival actions in the wild.</p>

        <p><strong>Performance</strong> is your ability to perform to a crowd. This include speeches, acrobatic stunts, pretending to be another person, and many other scenarios. Anytime you are showing off to an outside party, you would be performing.</p>

        <p><strong>Social</strong> is your ability to navigate social situations. Whenever you are interacting with a creature socially and attempting to get a specific reaction or outcome, the social skill would be used.</p>

        <p><strong>Sneaky</strong> is your ability to perform sneaky actions. This includes pickpocketing, lockpicking, hiding, and simple “magic” tricks.</p>

        <p><strong>Tech</strong> is your ability to design contraptions and machines, as well as use them. This is used to invent things - creating blueprints, then prototypes, then devices to create things that wouldn&apos;t normally exist in the game world.</p>

        <p><strong>Throwdown</strong> is your ability to fight. The higher this skill is, the more damage you can deal in one blow.</p>
      </section>
      <section id="using-skills">
        <h2>Using Skills</h2>
        <p>Using your skills is the core of Guildsmen. Every time a situation arises that you want to perform an action that would require some amount of skill to successfully do, you will roll dice (2d6; 2, 6-sided dice) to determine your level of success. This is called a <em>skill check</em>.</p>

        <p><strong>Skills Checks</strong> are how you apply your skills in- game. You first determine which skill category applies to the action you want to do. For example, if you wanted to hide from some thugs that are chasing you, that action would fall under the <em>sneaky</em> skill category.</p>

        <p>Next, you roll dice (2, 6-sided dice) and add your skill modifier to determine if you succeed. The bubbles that are filled in underneath the skill represent the modifier. So, if I have my bubbles filled in up to +2 in the <em>sneaky</em> skill, then I would add +2 to my dice roll.</p>

        <p>If the total number is high enough, you succeed with what you&apos;re trying to do.</p>

        <p>When you perform a task that doesn&apos;t necessarily require skill, but does rely on your physical or mental capabilities, you&apos;ll use a <em>stat check</em> instead.</p>

        <p><strong>Stat Checks</strong> work the same as skill checks. You determine if the task relies on Tough, Nimble, Competence, or Constitution, then roll dice and add the corresponding modifier.</p>

        <p><strong>Luck Checks</strong> work on the exact same concept, except they don&apos;t rely on any skill or stat. They are used when the outcome should be very uncertain, and the result should be the product of complete chance.</p>

        <p>More often than not, a skill will require a roll of 8 or more in order to be successful. However, the Game Master can decide if a task will be more or less difficult than average. Each level of difficulty has its own target number to be rolled.</p>

        <table>
          <thead>
            <tr>
              <th colSpan={2}>Task Difficulty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left text-left">Very Easy</td>
              <td className="bottom right text-right">4+</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Easy</td>
              <td className="bottom right text-right">6+</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Moderate</td>
              <td className="bottom right text-right">8+</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Difficult</td>
              <td className="bottom right text-right">10+</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Very Difficult</td>
              <td className="bottom right text-right">12+</td>
            </tr>
          </tbody>
        </table>

        <p>Each skill and stat can be leveled to make dice checks easier. If your skill is leveled, then you get a modifier to your dice roll equal to the number above the furthest bubble filled in. So, if I have all 5 bubbles filled in on a skill, then I would get +3 to my dice roll whenever I use that skill.</p>

        <p>When you and another player or NPC (Non-Player Character) are trying to do something at the same time that conflicts, an <strong>Opposed Check</strong> will happen. When two actions conflict, both participants roll for whatever they were trying to do. Whoever gets the highest number gets to do what they wanted. Ties are rerolled.</p>

        <p><em>For example</em>: you want to tackle a bandit as he&apos;s trying to run away. You would make a Tough check to tackle them, and the bandit would make a Nimble check to run away. If the bandit gets the higher number, then he successfully runs away. But if you get the higher number, then you tackle the bandit to the ground.</p>

        <p>And this works for countless other encounters. Say you wanted to throw a rock to knock out the bandit instead. Then you would use a <em>throwdown</em> skill check against his Nimble stat check instead. So, look for a way to play to what Skills and Stats you have.</p>

        <p>In addition to whether or not you succeed, the Game Master may also consider the degree of your success. This is determined by the difference between the number you rolled and the number you needed to roll or by how much higher your roll was the other person&apos;s roll.</p>

        <table>
          <thead>
            <tr>
              <th colSpan={2}>Degree of Success</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left text-left">Extreme Fail</td>
              <td className="bottom right text-right">-4</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Fail</td>
              <td className="bottom right text-right">-2</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Mixed Success</td>
              <td className="bottom right text-right">-1</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Success</td>
              <td className="bottom right text-right">0</td>
            </tr>
            <tr>
              <td className="bottom left text-left">Extreme Success</td>
              <td className="bottom right text-right">+4</td>
            </tr>
          </tbody>
        </table>

        <p>An <strong>Extreme Fail</strong> means you fail at your task, any negative consequences that should happen would happen, and some other negative thing happens because of your fail.</p>

        <p>A <strong>Fail</strong> means you fail at your task and any negative consequence that should happen would happen.</p>

        <p>A <strong>Mixed Success</strong> means you succeed at your task and any consequences that sould happen would happen, but something negative still happens.</p>

        <p>A <strong>Success</strong> means you succeed at your task and any consequences that should happen would happen.</p>

        <p>An <strong>Extreme Success</strong> means you succeed at your task, any consequences that should happen would happen, and some other positive thing happens because of your success.</p>

        <p><em>For example</em>: say you are trying to notice nearby clues to track someone, and you have +3 <em>investigate</em>. You roll 2d6 and get a 10. You add another 3 to the roll since you have +3 <em>investigate</em> and the total number become 13. The Game Master decides that this was an average difficulty skill check, and the goal was to get an 8.</p>

        <p>Normally, you would simply be able to notice any common clues, such as footprints. However, the goal was to roll an 8, but you managed to roll a 13. The Game Master decided to take the Degree of Success into account: 13 - 8 = 5. The difference between the rolled number and the goal is 5, making this an Extreme Success.</p>

        <p>So, instead of just simply noticing footprints, maybe the Game Master will also let you know that there is a bystander that might know something or give you additional information on what you are trying to track that you wouldn&apos;t have gotten otherwise.</p>

        <p><em>The Game Master doesn&apos;t have to consider the degree of success, it&apos;s completely optional.</em></p>
      </section>
      <section id="advantage-&-disadvantage">
        <h2>Advantage & Disadvantage</h2>
        <p>At times, you may find yourself in a situation where you are in a position to do something better than you normally would, due to circumstance. For example, you&apos;re trying to sneak past a guard but it&apos;s dark and the guard has their back to you, so it will be easier to sneak past than normal. In a situation like this, you would have Advantage.</p>

        <p><strong>Advantage</strong> is when you have the upper hand in a situation. When this happens, you get to <em>Roll with Advantage</em>. This is where you make your dice check twice and use the higher result. </p>

        <p>But on the other hand, there may be a situation where you would do worse instead. For example, you&apos;re trying to sneak past a guard but it&apos;s broad daylight and they&apos;re looking directly at where you plan to sneak through. In a situation like this, you would have disadvantage.</p>

        <p><strong>Disadvantage</strong> is where you have the lower hand in a situation. When this happens, you <em>Roll with Disadvantage</em>. This is where you make your dice check twice and use the lower result. </p>
      </section>
      <section id="experience">
        <h2>Experience</h2>
        <p>Experience is used to increase skills and stats, unlock specialties, and it is earned whenever you successfully roll a skill check. Whenever a skill check is successful, you fill in a bubble in the experience box. Once you fill up all of the bubbles (4 successful skill checks) you gain 1 experience point.</p>

        <p><em>You only gain experience from skill checks. Not stat checks or luck checks - only skill checks.</em></p>

        <p>To increase a skill, you must spend Experience points equal to the modifier you want plus 2. So, if you want to increase from +1 to +2 on a skill, it will cost 4 experience points.</p>

        <p>You can also spend experience points to unlock specialties. Specialties are additional modifiers you can add to your skill rolls in specific situations. You can get a primary and a secondary specialty. A primary specialty adds +2 to the skill roll when the specialty is relevant. A secondary specialty adds +1 when the specialty is relevant.</p>

        <p>A primary specialty costs 5 experience points to unlock, and a secondary specialty costs 4 experience points, but requires that you already have a primary specialty for that skill.</p>
      </section>
      <section id="specialties">
        <h2>Specialties</h2>
        <p>Specialties are extra skill modifiers that are unlocked with experience points. See the previous section for more information.</p>

        <h3>Craft Specialties</h3>
        <p><strong>Clay</strong> - you specialize in crafting items using clay as the primary material. This generally means pottery.</p>

        <p><strong>Fabric</strong> - you specialize in crafting items using fabric as the primary material. This generally means tailoring.</p>

        <p><strong>Metal</strong> - you specialize in crafting items using metal as the primary material. This generally means the use of a forge and smithy or industrial fabrication and molding tools.</p>

        <p><strong>Stone</strong> - you specialize in crafting items using stone as the primary material. This mainly includes sculpture and masonry.</p>

        <p><strong>Wood</strong> - you specialize in crafting items using wood as the primary material. This includes bows, cabinets, chairs, simple toys, and other forms of woodworking</p>

        <h3>Investigate Specialties</h3>
        <p><strong>Awareness</strong> - you specialize in investigation by passive observation. You are more aware of your surrounding than others and you take in information that is given by the environment you’re in.</p>

        <p><strong>Searching</strong> - you specialize in investigation by intentional observation. You can find things easier than others when searching for something specifically.</p>

        <p><strong>Situational</strong> - you specialize in investigation under pressure. This is used whenever a situation is especially time sensitive or otherwise stressful, such as finding a way to escape, a tool to turn the tide of combat, and more.</p>

        <p><strong>Tracking</strong> - you specialize in investigation by tracking. You can sleuth out where someone or something has gone by investigating the environment. This is also used to figure out what has happened in an area recently before you arrived.</p>

        <h3>Leadership Specialties</h3>
        <p><strong>Business</strong> - you specialize in leading businesses. You have more skill making business decisions and guiding a business than others would.</p>

        <p><strong>Government</strong> - you specialize in leading governments and are politically skilled. You know how to make decisions that will be accepted by your people and move your government forward.</p>

        <p><strong>Group</strong> - you specialize in leading small groups of people. Whenever a group is unsure of what to do, it is you that they look to for leadership. This is used to command groups of NPCs that are friendly toward you.</p>

        <h3>Medic Specialties</h3>
        <p><strong>Beasts</strong> - You specialize in healing beasts. You are a veterinarian and know how to heal creatures better than you know how to heal people.</p>

        <p><strong>People</strong> - You specialize in healing people. You know about the anatomy and physiology of all the various races and how best to help them when injured or sick.</p>

        <h3>Myth Specialties</h3>
        <p><strong>Refinement</strong> - You specialize in the actual refinement of Myth: taking raw blood from magical creatures and refining it into the drug.</p>

        <p><strong>Types</strong> - In the <a href="/rules/myth"><em>Myth chapter</em></a>, the various types of Myth are outlined. You can specialize in any of those types.</p>

        <h3>Nature Specialties</h3>
        <p><strong>Animals</strong> - You specialize in knowing the creatures that roam the wilds, how they behave, and how to find them. You are skilled at tracking animals, as well as interacting with them.</p>

        <p><strong>Geography</strong> - You specialize in the land itself. You know how to find landmarks and how to navigate in a way that you won&apos;t get lost. You can navigate through the wilds easily and you know the general dangers.</p>

        <p><strong>Plants</strong> - You specialize in knowing the plants of the wild. You know which plants are safe and which ones aren&apos;t. You also know the various medicinal uses of plants.</p>

        <p><strong>Survival</strong> - You specialize in surviving in the wild. You know how to find or build shelter, start fires with little to no tools, and how to find needed resources.</p>

        <h3>Performance Specialties</h3>
        <p><strong>Acrobatics</strong> - You specialize in acrobatic performance. You are skilled in parkour and balance. You can jump higher and further than others would and hold you balance better.</p>

        <p><strong>Acting</strong> - You specialize in performance acting. You are skilled at pretending to be another person and telling stories that enthrall audiences.</p>

        <p><strong>Contortion</strong> - You specialize in contortion performance. You are skilled at manipulating your body in mesmerizing and unnatural ways. You can also cram your body into smaller spaces than other people would.</p>

        <p><strong>Music</strong> - You specialize in musical performance. You know how to play one or more instruments and how to get peoples&apos; attention with it.</p>

        <h3>Social Specialties</h3>
        <p><strong>Deception</strong> - You specialize in deception in social situations. You are skilled at lying and not getting caught in it. The things you say are always convincing and believable.</p>

        <p><strong>Intimidation</strong> - You specialize in intimidation in social situations. You are skilled at making others fear you and you use that to control others.</p>

        <p><strong>Persuasion</strong> - You specialize in persuasion in social situations. You are skilled at using logic and emotion to control situations. You do not lie, but you convince in other ways.</p>

        <h3>Sneaky Specialties</h3>
        <p><strong>Hiding</strong> - You specialize at hiding sneakily. You are skilled at knowing where to be in order to go unnoticed. You hide in the shadows, and this allows you to get to places others cannot go.</p>

        <p><strong>Lock-Picking</strong> - You specialize in picking locks. You are skilled at opening doors that aren&apos;t meant to be opened. You know how locks work and how to make them stop working. </p>

        <p><strong>Pocket-Picking</strong> - you specialize at picking pockets sneakily. You are skilled at pilfering items from peoples&apos; pockets to take their possessions.</p>

        <p><strong>Sleight-of-Hand</strong> - You specialize at sleight-of-hand tricks. You are skilled in simple tricks that are designed to both baffle and distract.</p>

        <h3>Tech Specialties</h3>
        <p><strong>Biological Devices</strong> - you specialize in inventing and using devices that interface or incorporate biology. This includes devices like prosthetics and augmentations.</p>

        <p><strong>Large Devices</strong> - you specialize in inventing and using larger devices that cannot be easily carried by an individual. These devices are things like refrigerators, catapults, generators, etc.</p>

        <p><strong>Personal Devices</strong> - you specialize in inventing and using devices that can easily be held and carried by a person such as radios, pistols, audio recorders, drones, etc.</p>

        <p><strong>Vehicles</strong> - you specialize in inventing vehicles such as gliders, powered carriages, air ships, trains, etc.</p>

        <h3>Throwdown Specialties</h3>
        <p><strong>Melee</strong> - You specialize in melee combat. You are skilled in hand-held weapons such as the sword, club, and knife.</p>

        <p><strong>Personal</strong> - You specialize in getting close and personal. You are skilled in wrestling and boxing. You know how to grapple opponents and use their strength against them.</p>

        <p><strong>Ranged</strong> - You specialize in ranged combat. You are skilled in long-distance weapons such as guns, bows, and crossbows.</p>
      </section>
      <NextButton href="/rules/combat" />
    </article>
  )
}