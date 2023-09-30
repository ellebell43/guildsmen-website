import Link from "next/link"

export default function Community() {
  const discordLink = "https://discord.gg/6zE4chEVQQ"
  const redditLink = "https://www.reddit.com/r/Guildsmen/"
  const githubLink = "https://github.com/rutherfordaaron/guildsmen-website"
  return (
    <article>
      <h1>Community</h1>
      <p>Looking to join the community? We're excited to have you! Below, you can find information of finding groups to play with, how to contribute to the core content of the game, or browse community content. To stay engaged with us, join our <Link href={discordLink}>Discord</Link> and our <Link href={redditLink}>Reddit Community</Link> to meet other players, talk all things Guildsmen, and make some friends.</p>

      <h2>Finding a Group to Play With</h2>
      <p>Looking for players or a game master? The best place to find those is at the <Link href={discordLink}>Guildsmen Discord server</Link>. Go to the <span className="italic">#looking-for-players</span> channel, introduce yourself, and let us know what you're looking for!</p>

      <h2>Community Content</h2>
      <p></p>

      <h2>Contributing to the Game</h2>
      <h2></h2>
    </article>
  )
}