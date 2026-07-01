import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import NextButton from "../next-button";
import { Metadata } from "next";
import Contents from "@/util/components/contents";
import Image from "next/image";
import SpeciesDetails from "./species-details";
import GuildDetails from "./guild-details";

export const metadata: Metadata = {
  title: "Guildsmen | Character Creation",
  description: "Learn how to create a character for Guildsmen TTRPG"
}

export default function CharacterCreation() {
  return (
    <article>
      <Contents />
      <h1>Character Creation</h1>
      <p>Your character is a persona you take on as you play the game. This is the protagonist that will be making decisions and affecting the world around you. To begin making a character, print out a character sheet using the link below and follow along with this chapter. Or, you can make an account and use our online character management tool!</p>

      <div className="flex flex-col gap-4 md:flex-row items-center justify-center">
        <div className="downloadContainer">
          <Link className="button py-2 px-8" href="/cs-sheet.pdf" download="guildsmen-character-sheet" target="_blank">
            Download the character sheet
            <FontAwesomeIcon icon={faDownload} className="" />
          </Link>
        </div>

        <div className="downloadContainer">
          <Link className="button py-2 px-8" href="/resources/character-creator">
            Online Character Creator
          </Link>
        </div>
      </div>

      <section id="joining-a-guild">
        <h2>Joining a Guild</h2>
        <p>To kick off character creation, you're going to join a guild to join. This should be done as a group, as the guild you join will determine the type of adventures you will go on and the type of character you're inspired to create.</p>

        <p>There are five common guilds, each will train your character in a specific set of skills. The idea behind joining a guild during character creation is that it allows the players to understand the mechanics of their party from the very beginning. All the players being in the same guild inherently means that they are all on the same job together and at the very least have a "coworker" relationship.</p>

        <p>It is entirely acceptable for players to be part of a variety of guilds, but it's generally recommended that all players be of the same guild. Being part of the same guild generally means that players are working together on a guild job and easily bypasses the awkward "we meet in a tavern" scene that is a common trope in role play games. Being part of separate guilds means you're on a job that needs multiple disciplines and the connection between players might be more tenuous. The guilds help establish some very basic character relationships right from the beginning.</p>

        <p>Each guild has a list of starting skills. Beneath each skill in the skills box on your character sheet is a row of bubbles that marks how much of that skill your character has. The more bubbles you have filled in, the better you will be when you try to do something related to that task (see the <a href="/rules/skills"><em>Skills chapter</em></a> for details).</p>

        <p>Once a guild has been chosen, all players will increase the skills listed by that guild by one. Congratulations! You're now employed.</p>

        <div className="md:grid grid-cols-2 gap-4">
          <GuildDetails guild="Assassins" />
          <GuildDetails guild="Starborne Hunters" />
          <GuildDetails guild="Explorers" />
          <GuildDetails guild="Mercenaries" />
          <GuildDetails guild="Thieves" />
        </div>

      </section>

      <section id="your-character">
        <h2>Your Character</h2>
        <p>Next, we need to define the most basic attributes of who your character is. At the top-right of your character sheet are 4 fields: name, race, physique, and demeanor.</p>

        <p><strong>Name</strong> is your character&apos;s name and it is how you will be referred to during the game. It can be anything, but make sure it sounds epic. Like Bob. Bob is always a great name for a character.</p>

        <p><strong>Species</strong> is your character&apos;s Species. In this game, there are six unique races for you to choose from: Locess, Mausca, Isser, Matari, Slated, and Ungal. A list of these races with descriptions and their starting stats is <Link href="#the-species">further down.</Link></p>

        <p><strong>Demeanor</strong> is how your character presents their self in most situations. Write in an adjective like cocky, excitable, confident, etc. This adjective is a tool to help you act as your character would.</p>

        <p><strong>Physique</strong> is how your character is built physically. Write in an adjective like fat, thin, lean, strong, etc. This adjective is a tool to help guide what other characters in the world would see at a glance.</p>

        <p>By combining these four fields, you can create a brief description of your character. For example: A fat, jovial Mausca named Bob.</p>
      </section>

      <h3>The Species</h3>
      <p>Selecting a species will determine the stats that your character starts with. Your stats are five terms located at the top-right of your character sheet: Nimble, Tough, Competence, Constitution, and Spirit.</p>

      <p><strong>Nimble</strong> defines your character&apos;s agility. Nimble is used to move quickly, jump over objects, dodge, and for any other actions that require an amount of finesse.</p>

      <p><strong>Tough</strong> defines your character&apos;s physical strength. Tough is used to lift and move heavy objects, wrestle other creatures, and for any other actions that require an amount of strength.</p>

      <p><strong>Competence</strong> defines your character&apos;s ability to act under pressure, read situations, and see things that other people wouldn&apos;t. It will be used in moments of pressure and crisis.</p>

      <p><strong>Constitution</strong> defines your ability to endure stress. It us used to fend off poisons, resist disease and addiction, to exert yourself for extended periods of time, and for any other actions that require resistance or endurance.</p>

      <p><strong>Spirit</strong> defines how strong and willful your character&apos;s soul is. Spirit is used to activate magical <Link href="/rules/runes">runes</Link> and to deflect <Link href="/rules/combat#spirit-shields">incoming spells</Link>.</p>

      <p>Beside each term is a row of bubbles that mark how much of that stat your character has. The more bubbles you have filled in, the better you will be when you try to do something related to that task (see the <a href="/rules/skills"><em>Skills chapter</em></a> for details).</p>

      <p>When you pick a species, you are given a modifier next to each stat. Fill in the corresponding bubbles on your character sheet to match the modifiers given.</p>
      <div className="md:grid grid-cols-2 gap-4">
        <SpeciesDetails species="Locess" />
        <SpeciesDetails species="Mausca" />
        <SpeciesDetails species="Isser" />
        <SpeciesDetails species="Matari" />
        <SpeciesDetails species="Slated" />
        <SpeciesDetails species="Ungal" />
      </div>

      <section id="filling-in-the-gaps">
        <h2>Filling in the Gaps</h2>

        <p>The next step is to round out your character with flavor text. All characters need a past that defines them. On the back of the character sheet are four large boxes labeled Goals & Motives, Personal Morals, Flaws & Weaknesses, and Important Connections.</p>

        <p>These four boxes help define who your character really is, the relationships that define their past, and they inform how your character makes decision and. In each box, jot down one or two brief sentences to add some depth to your character. If you can&apos;t think of anything right away, that&apos;s okay. You can slowly fill these out during play. As situations arise, try to decide why your character would do what you want them to do. Then see if that reason would fall under one of these four categories. If it does, then jot down a quick note so you remember in the future.</p>

        <p>Try to keep these somewhat general. Trying to be too specific can make it much harder to find things to put here. Working on this with your fellow players is highly encouraged! Bounce ideas off of each other, use each other's characters as plot points, and see if you can forge a connected story.</p>

        <p><strong>Goals & Motives</strong> are what drive your character. Perhaps they want to be the greatest thief that ever lived, or perhaps their family is motivating them to take on any job just to provide for them. Perhaps they&apos;re seeking revenge on someone and it's all they can think about, or they want to open up a small business and settle down, but need to take on jobs until their life is in a spot that allows that. The world is your oyster here and anything you think of can work.</p>

        <p><strong>Personal Morals</strong> are your character&apos;s personal code of ethics. Perhaps they are completely against all violence, or maybe they think that there&apos;s a certain amount of moral grey era and getting the job done is ultimately what matters. Maybe their okay with stealing, or maybe they&apos;re very rigid about following the law.</p>

        <p><strong>Flaws & Weaknesses</strong> are the things that your character struggles with. Perhaps they&apos;re terrified of fire. Perhaps they will always do what an attractive person wants them to do, or maybe they&apos;re easily distracted. These can be as serious or non-serious as you want. It's all about just adding a little bit of detail that will be fun to play off of in the game.</p>

        <p><strong>Important Connections</strong> are connections from your past. These can be tutors, trainers, parents, professors, criminal contacts, and other important connections your character could have made in their past. This is primarily useful for the Game Master so that they can tie connections from the past into the game, but it's also a great way to create a shared backstory with your fellow player. Perhaps you&apos;ve done a job together before, but it ended catastrophe. Maybe you're old friends and have done jobs on and off together for years.</p>

        <p>Once you&apos;ve gotten some things put in each box, consider writing out a full backstory, if you&apos;re feeling ambitious or inspired. This is where you describe their life and what they&apos;ve gone through up to the point when the game starts. It&apos;s entirely optional and it&apos;s where you can give specific reasons for what you put in those four boxes.</p>
      </section>

      <section id="starting-skills">
        <h2>Starting Skills</h2>

        <p>From here, you need to give your character some additional skills. This is after filling in some character details because picking your starting skills can be overwhelming. Lean on what you&apos;ve written out for your characters details to choose skills that feel like they just <em>fit</em> your character. Or, you can do the inverse if you're struggling to find things to put in your details! Pick out your starting skills and use that to inform who your character is.</p>

        <p> You get four skill bubbles to fill in. That means that you may increase your skills 4 times. You can increase 4 skills once, you can condense them into just a couple skills, or any combination of that kind, as long as you only increase your skills 4 times. <em>However, you cannot increase any skill past +2 during character creation.</em></p>

        <p>Each bubble represents your level of skill for that particular skill. All skills start at -1, meaning your character has no experience with that skill. You're guild will increase a few sills to +0. And now you essentially have four skill points to distribute however you&apos;d like. For details on what skill do and how they're used, see the <Link href="/rules/skills">Skills Chapter.</Link></p>

        <p className="text-center"><strong><em>Do not start with the Stardew skill before reading through the <Link href="/rules/Stardew">Stardew chapter</Link></em></strong></p>
      </section>

      <section id="wealth-and-luck">
        <h2>Wealth and Luck</h2>
        <p>As a final step, you need to decide how wealthy your character is and how lucky they are. Wealth describes how wealthy your character is on average and is a general descriptive term. In Guildsmen, you will not be keeping track of your specific amount of currency. Instead, your character gets a wealth adjective that describes their overall ability to by goods and services. If you wrote in some character details or a backstory, go with whatever makes the most sense for what you wrote. Otherwise, it's generally suggested to with Moderate</p>

        <p>Pick an adjective and fill in the corresponding bubble in the Wealth box.</p>

        <table className="raceStatTable">
          <thead>
            <tr>
              <th colSpan={1}>Wealth Adjectives</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left right"><em>Destitute</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Poor</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Moderate</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Wealthy</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>Exquisite</em></td>
            </tr>
          </tbody>
        </table>

        <p>While you&apos;re on your adventure, you may end up buying more things than your wealth can sustain. When this happens, your Wealth may go down to a lower adjective. More details on this can be found in <a href="/rules/the-market"><em>The Market Chapter</em></a>.</p>

        <p>Once you&apos;ve determined what your wealth is, you&apos;ll need to determine how lucky your character is. Roll 1d6 (1, 6-sided die) and consult the table below. Fill in the corresponding bubble in the Luck box on your character sheet.</p>

        <p>Whenever you do something or want something to happen that would rely on luck, you will roll 2d6 (2, 6-sided dice) and add the number that is in your luck box. The higher the total number, the better the outcome. This same principle is how skills work (see the <a href="/rules/skills"><em>Skills chapter</em></a> for details).</p>

        <table className="raceStatTable">
          <thead>
            <tr>
              <th colSpan={2}>Luck</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left">1</td>
              <td className="bottom right">-3</td>
            </tr>
            <tr>
              <td className="bottom left">2</td>
              <td className="bottom right">-2</td>
            </tr>
            <tr>
              <td className="bottom left">3</td>
              <td className="bottom right">-1</td>
            </tr>
            <tr>
              <td className="bottom left">4</td>
              <td className="bottom right">+1</td>
            </tr>
            <tr>
              <td className="bottom left">5</td>
              <td className="bottom right">+2</td>
            </tr>
            <tr>
              <td className="bottom left">6</td>
              <td className="bottom right">+3</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="going-forward">
        <h2>Going Forward</h2>
        <p>Now that you have a character, give your character whatever items make sense for them to have due to your skills, background, and guild. These are items you should just write in. <Link href="/rules/the-market">The Market</Link> chapter outlines a few items that are special to this world or require special rules to use. Feel free to use this list to add items to your character and also feel free to write in whatever items you can think of that would make narrative sense for your character. The Game Master may veto any items if they wish. Next, go on to the next chapter to learn about skills, what they are, what they can do, and how to increase them.</p>

        <p>We suggest you read all of the rule chapters in their entirety to get a good grasp of the game and its mechanics. It's not necessary but it will teach you what&apos;s possible with the systems of this game.</p>

        <p>There's so much you can do with the mechanics we&apos;ve created for you, and we think you&apos;ll really enjoy using them. And if you don't care about the mechanics but want some good world lore to read, go through the <a href="/lore"><em>Lore</em></a> section and the <a href="/bestiary"><em>Bestiary</em></a>. Everything here is a work in progress and feedback is always welcome! Message @ellebell43 on the discord or send me message at <Link href="mailto:hello@guildsmenrpg.com">hello@guildsmenrpg.com</Link></p>

        <p>As you move forward through the game, we hope that you find a love for role play and enjoy the systems of the game as much as we do.</p>

        <p><em>Good luck!</em></p>
      </section>

      <NextButton href="/rules/skills" />
    </article>
  )
}