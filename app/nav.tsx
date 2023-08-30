import Link from "next/link"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faGripLines, faUserAlt } from "@fortawesome/free-solid-svg-icons";


export default function Nav() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("isDark") || localStorage.getItem("isDark") != "true") {
      document.getElementById("html")?.classList.remove("dark");
    }
  }, [])

  // Toggle dark mode via html element class list
  const toggleDarkMode = () => {
    document.getElementById("html")?.classList.toggle("dark");
    const isDark = !!(document.getElementById("html")?.classList.contains("dark"));
    localStorage.setItem("isDark", isDark.toString());
    setIsDark(isDark);
  }

  const navLinkClass = "hover:text-slate-600 transition-all hover:scale-110 relative no-underline not-italic tracking-widest lg:border-b border-b-stone-600 dark:border-b-stone-100"

  return (
    <header className="flex justify-between items-center px-4 py-2 fixed top-0 left-0 right-0 dark:bg-stone-600 transition-all" id="header">
      <Link href="/" className="text-3xl font-bold not-italic no-underline tracking-widest hover:text-slate-600 transition-all">Guildsmen</Link>
      <div className="flex justify-center items-center gap-4">
        <nav className={`${menuVisible ? "scale-100" : "scale-0 lg:scale-100"} absolute lg:relative flex flex-col justify-center items-center top-20 lg:top-0 text-2xl right-10 lg:right-0 p-5 gap-2 transition-all origin-top-right z-50 lg:shadow-none lg:flex-row lg:gap-4 lg:text-xl dark:bg-stone-600 lg:py-3`}>
          <Link className={navLinkClass} href="/rules" onClick={e => setMenuVisible(false)}>Rules</Link>
          <Link className={navLinkClass} href="/lore" onClick={e => setMenuVisible(false)}>Lore</Link>
          <Link className={navLinkClass} href="/bestiary" onClick={e => setMenuVisible(false)}>Bestiary</Link>
          {/* <Link className={navLinkClass} href="/resources" onClick={e => setMenuVisible(false)}>Resources</Link> */}
          {/* <Link className={navLinkClass} href="/community" onClick={e => setMenuVisible(false)}>Community</Link> */}
        </nav>
        <Link href="/sign-in" className="hover:scale-110 border rounded-full w-8 h-8 flex justify-center items-center">
          <FontAwesomeIcon icon={faUserAlt} className="w-5 h-5" />
        </Link>
        {/* Theme Switch Button */}
        <button type="button" onClick={e => toggleDarkMode()} className="hover:scale-110 transition-all lg:mr-6 flex items-center">
          <FontAwesomeIcon icon={isDark ? faMoon : faSun} className="w-5 h-5" />
        </button>
        {/* Menu Toggle */}
        <button type="button" onClick={e => setMenuVisible(!menuVisible)} className="hover:scale-110 transition-all lg:hidden">
          <FontAwesomeIcon icon={faGripLines} className="w-5 h-5" />
        </button>
      </div>
    </header >
  )
}