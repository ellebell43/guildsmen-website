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

      <section id="who-are-you">
        <h2>Who are You?</h2>
        <p>At the top-right of your character sheet are 4 fields: name, race, physique, and demeanor.</p>

        <p><strong>Name</strong> is your character&apos;s name. This is what other players will call you during the game. It can be anything, but make sure it sounds epic. Like Bob. Bob is always a great name for a character.</p>

        <p><strong>Species</strong> is your character&apos;s Species. In this game, there are six unique races for you to choose from: Locess, Mausca, Isser, Matari, Slated, and Ungal. A list of these races with descriptions is further down.</p>

        <p><strong>Demeanor</strong> is how your character presents their self in most situations. Write in an adjective like cocky, excitable, confident, etc. This adjective is a tool to help you act as your character would.</p>

        <p><strong>Physique</strong> is how your character is built physically. Write in an adjective like fat, thin, lean, strong, etc. This adjective is a tool to help guide what other characters in the world would see at a glance.</p>

        <p>By combining these four fields, you can create a brief description of your character. For example: A fat, jovial Mausca named Bob.</p>
      </section>
      <section id="the-species">
        <h2>The Species</h2>
        <p>Selecting a species will determine your stats. Your stats are four terms located at the top-right of your character sheet: Nimble, Tough, Competence, and Constitution.</p>

        <p><strong>Nimble</strong> defines your character&apos;s agility. Nimble is used to move quickly, jump over objects, dodge, and for any other actions that require more finesse.</p>

        <p><strong>Tough</strong> defines your character&apos;s physical strength. Tough is used to lift and move heavy objects, wrestle other creatures, and for any other actions that require more strength.</p>

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

      </section>
      <section id="who-where-you">
        <h2>Who Where You?</h2>
        <p>All characters need a past that defines them. This will help you understand how your character would act in the game. On the back of the character sheet are four large boxes labeled Goals & Motives, Personal Morals, Flaws & Weaknesses, and Important Connections.</p>

        <p>These four boxes help define how your character would behave. In each box, jot down one or two brief sentences that work for your character. If you can&apos;t think of anything right away, that&apos;s okay. You can slowly fill these out during play. As situations arise, try to decide why your character would do what you want them to do. Then see if that reason would fall under one of these four categories. If it does, then jot down a quick note so you remember in the future.</p>

        <p>Try to keep these somewhat general. Trying to be too specific can make it much harder to find things to put here.</p>

        <p><strong>Goals & Motives</strong> are what drive your character. Perhaps they want to be the greatest thief that ever lived, or perhaps their family is motivating them to go out and make some money to send back to them. Perhaps they&apos;re seeking revenge on someone, or they want to open up a small business and settle down. The world is your oyster here and anything you think of can work.</p>

        <p><strong>Personal Morals</strong> are your character&apos;s personal code of ethics. Perhaps they are completely against all violence. Or maybe they think killing a person they don&apos;t know is completely okay. Maybe their okay with stealing, or maybe they&apos;re very rigid about following the law. </p>

        <p><strong>Flaws & Weaknesses</strong> are the things that your character struggles with. Perhaps they&apos;re a kleptomaniac (impulsively steals things), or maybe they&apos;re terrified of fire. Perhaps they will always do what an attractive person wants them to do, or they&apos;re easily distracted.</p>

        <p><strong>Important Connections</strong> are connections from your past. These can be tutors, trainers, parents, professors, criminal contacts, and other important connections your character could have made in their past. This is primarily useful for the Game Master so that they can tie connections from the past into the game.</p>

        <p>Once you&apos;ve got some things put in each box, consider writing out a full backstory if you&apos;re feeling ambitious. This is where you describe their life and what they&apos;ve gone through up to the point when the game starts. This is where you can give specific reasons for what you put in those 4 boxes.</p>

        <p>From here, you need to give your character some skills. Fill in 4 bubbles on the skills chart. Each bubble represents your level of skill for that particular skill. All skills start at -1, meaning your character has no experience with that skill. Starting from the -1 mark, you my increase your skills 4 times. You can increase 4 skills once (up to +0), you can condense them into just a couple skills (2 skills at +1), or any combination of that kind, as long as you only increase your skills 4 times. However, you cannot increase any skill past +2 at this time.</p>

        <p><em>Do not start with the Stardew skill before reading through the <a href="/rules/Stardew">Stardew chapter</a></em></p>

        <p>If you&apos;ve made a backstory, try to consider what skills would make sense for your backstory. If you haven&apos;t made a backstory, feel free to pick whatever skills you think would work for your character.</p>

        <p>Finally, you need to select a wealth adjective. This describes how wealthy your character is on average. If you wrote a backstory, go with whatever makes the most sense for your backstory. If not, you should probably go with Moderate.</p>

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

        <p>Pick an adjective and fill in the corresponding bubble in the Wealth box.</p>

        <p>While you&apos;re on your adventure, you may end up buying more items than your character generally carries around. When this happens, your Wealth may go down. More details on this in <a href="/rules/the-market"><em>The Market chapter</em></a>.</p>

        <p>After that, you will need to determine how lucky your character is. Roll 1d6 (1, 6-sided die) and consult the table. Fill in the corresponding bubble in the Luck box on your character sheet.</p>

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

        <p>Whenever you do something or want something to happen that would rely on luck, you will roll 2d6 (2, 6-sided dice) and add the number that is in your luck box. The higher the total number, the better the outcome.</p>

        <p>This same principle is how skills work (see the <a href="/rules/skills"><em>Skills chapter</em></a> for details).</p>
      </section>
      <section id="where-are-you-going">
        <h2>Where are You Going?</h2>
        <p>This final part of character creation should be done with all players present, because this decision may affect everyone.</p>

        <p>You now need to decide where your character is going. You and everyone else in your party are joining a guild, and from here the grand adventures the Game Master has in store for you will begin. There are five common guilds, each will train your players in a specific set of skills. The idea behind joining a guild during character creation is that it allows the players to understand the mechanics of their party from the get go. All the players being in a guild inherently means that they are all on the same job together. Being part of the same guild would generally mean that players are working together on a guild job. Being part of separate guilds means you're on a job that needs multiple disciplines. The guilds help establish some very basic character relationships right from the beginning.</p>

        <p>Once you choose a guild, all players will increase the skills listed under their desired guild by 1. Congratulations! You're now employed.</p>

        <div className="md:grid grid-cols-2 gap-4">
          <GuildDetails guild="Assassins" />
          <GuildDetails guild="Starborne Hunters" />
          <GuildDetails guild="Explorers" />
          <GuildDetails guild="Mercenaries" />
          <GuildDetails guild="Thieves" />
        </div>

      </section>
      <section id="going-forward">
        <h2>Going Forward</h2>
        <p>Now that you have a character, give your character whatever items make sense for them to have due to your skills, background, and guild. These are items you should just write in. <Link href="/rules/the-market">The Market</Link> chapter outlines a few items that are special to this world or require special rules to use. Feel free to use this list to add items to your character and also feel free to write in whatever items you can think of that would make narrative sense for your character. Next, go on to the next chapter to learn about skills, what they are, what they can do, and how to increase them.</p>

        <p>We suggest you read the rest of the rule chapters in their entirety to get a good grasp of the game and its mechanics. It's not necessary but it might be good to see what can be accomplished.</p>

        <p>There's so much you can do with the mechanics we've created for you, and we think you'll really enjoy using them. And if you don't care about the mechanics but want some good world lore to read, go through the <a href="/lore"><em>Lore</em></a> section and the <a href="/bestiary"><em>Bestiary</em></a>.</p>

        <p>As you move forward through the game, we hope that you find a love for role play and enjoy the systems of the game as much as we do.</p>

        <p><em>Good luck!</em></p>
      </section>
      <NextButton href="/rules/skills" />
    </article>
  )
}