import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Guildsmen TTRPG | Home",
  description: "A public, free and open source, steampunk, fantasy-esque, pen and paper, table-top roleplaying game."
}

export default function Home() {
  return (
    <>
      <h1>Welcome to Guildsmen!</h1>
      <p>Welcome to Guildsmen! A steampunk, fantasy-esque, pen and paper, table-top roleplaying game. Here, you will create a character and interact with the fantastic world of Thelius. This game is a “theater of the mind” experience where one player (known as the Game Master) will create an adventure that the other players will play through as characters in that adventure. All you'll need to play this game is this website! Characters can be created and used through the <Link href="/resources/characters">character creator</Link> in the Resources tab</p>

      <p><em>If you've never played a table-top roleplay game before, you're in for a treat! </em></p>

      <p>A table-top roleplay game (TTRPG) is an interactive adventure that is guided by you and those you play with. Every player in the group helps narrate the story and make the decisions for their characters.</p>

      <h3>The Players</h3>
      <p>As a player, you are the protagonist of a great adventure! You will be given a story to go through where you can explore places, talk with people, discover secrets, and become the hero. How this story plays out is completely up to you. You make the decisions, and the Guild Master narratively describes the results of your actions.</p>

      <p>This is a story that you are writing with each of the other players. The end is not set, and your actions determine everything in this world - and you can do anything! Be it starting a business, inventing the bicycle, killing a dragon, overthrowing the government, or exploring the wilderness.</p>

      <p>This book is full of mechanics that will help determine the outcome of your actions.</p>

      <h3>The Game Master</h3>
      <p>As the Game Master, you are the great storyteller. You weave the players, places, and people together to create memorable adventures. It is your job to narrate the story and judge the outcome of the players' actions.</p>

      <p>You will create a story and guide your players through it.</p>

      <h2>The World</h2>
      <p>The world of Guildsmen is known as Thelius. This is a world of many races, wild places, and great invention. However, the story you weave can take place in any world you want. But there are a few rules that must remain constant in order for the rules in this book to work.</p>

      <ol className="max-w-[700px] mx-auto">
        <li>Mythical creatures exist and have Navidus Crystals inside of them (see the <Link href="/rules/creatures"><em>Creatures chapter</em></Link>).</li>
        <li>The world is somewhat technologically advanced, and Navidus Crystals are beginning to be used to power devices (see the <Link href="/rules/invention"><em>Invention chapter</em></Link> for details).</li>
        <li>Guilds are common establishments throughout the world.</li>
        <li>Magic exists and is performed through a drug known as Myth (see the <Link href="/rules/myth"><em>Myth chapter</em></Link>).</li>
      </ol>

      <p>Beyond these 4 simple rules, the time era and world you set your game in is completely up to you. If you don't know where to start, feel free to use the <Link href="/lore"><em>world of Thelius</em></Link> as your world of play.
      </p>

      <h2>Using This Website</h2>
      <p>This website is separated into 5 pages: Rules, Lore, Bestiary, Resources, and Community.</p>
      <ul className="max-w-[700px] mx-auto">
        <li><Link href="/rules"><em>Rules</em></Link> outlines all the core rules of the TTRPG and is organized into chapters.</li>
        <li><Link href="/lore"><em>Lore</em></Link> is where all the information for the world of Thelius is, the core world of Guildsmen.</li>
        <li><Link href="/bestiary"><em>Bestiary</em></Link> is where you go to learn about all the fantastic creatures we have to offer.</li>
        <li><Link href="/resources"><em>Resources</em></Link> is where you can find all the resources you can use with this game, such as the character sheets, a quick reference guide, and an online character web app!</li>
        <li><Link href="/community"><em>Community</em></Link> has links to all our social areas and
          information on contributing to this game.</li>
      </ul>

      <p>Your next step from here will be to go to the Rules page.</p>

      <p>The first part of the rules outlines how to build a character. This part is for all the players. Then, we will explain how the game works and which mechanics are at the players' disposal. If you are the Game Master, you need to read through all of the rules so that you can guide your players through the game. Players only need to read the Character Creation and Skills chapters as well as whatever seems relevant to their character.</p>

      <p>At the end of the rules is a chapter titled <Link href="/rules/for-the-gm"><em>For the Game Master</em></Link>. This chapter teaches you how to govern the game as well as how to create your own stories.
      </p>

      <p>So now, go to the rules section and enter <em>the world of Guildsmen!</em></p>

      <Link href="/rules" className="button block w-fit mx-auto py-2 px-8 text-2xl mt-8">Rules</Link>
    </>
  )
}
