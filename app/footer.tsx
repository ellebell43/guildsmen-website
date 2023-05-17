import Link from "next/link"

export default function Footer() {
  const socialLinkClass = "h-8 w-8"
  return (
    <footer className="mt-8 bg-stone-200 py-8 px-4 text-center dark:bg-stone-600 transition-all lg:grid grid-cols-3">
      <div className='flex justify-center items-center gap-5 mb-8 center lg:gap-10'>
        <Link href='https://discord.gg/6zE4chEVQQ'>
          <img src='/icons/discord-brands.svg' alt='Discord link' className='w-10 h-10 dark:filter dark:invert hover:invert-[35%] dark:hover:invert-[75%]' />
        </Link>
        <Link href='https://www.reddit.com/r/Guildsmen/'>
          <img src='/icons/reddit-brands.svg' alt='Reddit link' className='w-10 h-10 dark:filter dark:invert hover:invert-[35%] dark:hover:invert-[75%]' />
        </Link>
        <Link href='https://github.com/rutherfordaaron/guildsmen-website'>
          <img src='/icons/github-brands.svg' alt='Reddit link' className='w-10 h-10 dark:filter dark:invert hover:invert-[35%] dark:hover:invert-[75%]' />
        </Link>
      </div>

      <div className='left lg:text-left'>
        <p>Conceptualized by Harmony Brooks<br className='break' />and written by Aaron Rutherford</p>
        <p>Edited by Hyrum Blanchard</p>
      </div>
      <div className='right lg:text-right'>
        <p>&copy; 2022 Harmony Brooks and Aaron Rutherford</p>
        <p>License - <Link href='https://opensource.org/licenses/GPL-3.0'>GPL-3.0</Link></p>
        <p>Coded by <Link href="https://github.com/hazipan">Aaron Rutherford</Link></p>
      </div>
    </footer>
  )
}