import Link from "next/link"
import { useState } from "react"

export default function Nav() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const sunIcon = "/icons/sun-solid.svg"
  const moonIcon = "/icons/moon-solid.svg"

  // Toggle dark mode via html element class list
  const toggleDarkMode = () => {
    document.getElementById("html")?.classList.toggle("dark");
    const isDark = !!(document.getElementById('html')?.classList.contains("dark"));
    setIsDark(isDark);
  }

  const navLinkClass = "hover:text-slate-600 transition-all hover:scale-110 relative no-underline not-italic tracking-widest lg:border-b border-b-stone-600 dark:border-b-stone-100"

  return (
    <header className='flex justify-between items-center px-4 py-2 fixed top-0 left-0 right-0 dark:bg-stone-600 transition-all'>
      <Link href='/' className='text-3xl font-bold not-italic no-underline tracking-widest hover:text-slate-600 transition-all'>Guildsmen</Link>
      <div className="flex justify-center items-center gap-4">
        <nav className={`${menuVisible ? "scale-100" : "scale-0 lg:scale-100"} absolute lg:relative flex flex-col justify-center items-center top-20 lg:top-0 text-2xl right-10 lg:right-0 p-5 gap-2 transition-all origin-top-right z-50 lg:shadow-none lg:flex-row lg:gap-4 lg:text-lg dark:bg-stone-600 lg:py-3`}>
          <Link className={navLinkClass} href="/rules">Rules</Link>
          <Link className={navLinkClass} href="/lore">Lore</Link>
          <Link className={navLinkClass} href='/bestiary'>Bestiary</Link>
          <Link className={navLinkClass} href="/resources">Resources</Link>
          <Link className={navLinkClass} href='/community'>Community</Link>
        </nav>
        {/* Theme Switch Button */}
        <button type="button" onClick={e => toggleDarkMode()} className="hover:scale-110 transition-all lg:mr-6">
          <img src={isDark ? moonIcon : sunIcon} alt="" className="w-5 h-5 dark:filter dark:invert hover:invert-[35%] dark:hover:invert-[75%]" />
        </button>
        {/* Menu Toggle */}
        <button type="button" onClick={e => setMenuVisible(!menuVisible)} className="hover:scale-110 transition-all lg:hidden">
          <img src="/icons/bars-solid.svg" alt="" className="w-5 h-5 dark:filter dark:invert hover:invert-[35%] dark:hover:invert-[75%]" />
        </button>
      </div>
    </header >
  )
}