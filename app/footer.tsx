import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReddit, faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const socialLinkClass = "h-8 w-8"
  return (
    <footer className="mt-8 bg-stone-200 py-8 px-4 text-center dark:bg-stone-600 transition-all lg:grid grid-cols-3">
      <div className="flex justify-center items-center gap-5 mb-8 center lg:gap-10">
        <Link href="https://www.reddit.com/r/Guildsmen/">
          <FontAwesomeIcon icon={faReddit} className="w-10 h-10 hover:text-stone-600 dark:hover:text-stone-300 text-[48px]" />
        </Link>
        <Link href="https://discord.gg/6zE4chEVQQ">
          <FontAwesomeIcon icon={faDiscord} className="w-10 h-10 hover:text-stone-600 dark:hover:text-stone-300 text-[48px]" />
        </Link>
        <Link href="https://github.com/rutherfordaaron/guildsmen-website">
          <FontAwesomeIcon icon={faGithub} className="w-10 h-10 hover:text-stone-600 dark:hover:text-stone-300 text-[48px]" />
        </Link>
      </div>

      <div className="left lg:text-left">
        <p>Conceptualized by Harmony Brooks<br className="break" />and written by Aaron Rutherford</p>
        <p>&copy; 2022 Harmony Brooks and Aaron Rutherford</p>
        <p>Edited by Hyrum Blanchard</p>
      </div>
      <div className="right lg:text-right">
        <p>License - <Link href="https://opensource.org/licenses/GPL-3.0">GPL-3.0</Link></p>
        <p>Site programming by <Link href="https://aaronrutherford.dev">Aaron Rutherford</Link></p>
        <p><Link href="/changelog">Change log and road map</Link></p>
        <p>v0.3.3</p>
      </div>
    </footer>
  )
}