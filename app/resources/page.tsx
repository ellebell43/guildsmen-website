import { linkClass } from "@/util/variables";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guildsmen | Resources",
  description: "Quick access links to various Guildsmen tools and sheets."
}

export default function Page() {
  return (
    <>
      <h1>Resources</h1>
      <div className="flex flex-col gap-4">
        <Link className={linkClass} href="/resources/character-creator">
          Character Creator
        </Link>
        <Link className={linkClass} href="/cs-sheet.pdf" download="guildsmen-character-sheet" target="_blank">
          Character Sheet
        </Link>
        <Link className={linkClass} href="/est-sheet.pdf" download="guildsmen-establishment-sheet" target="_blank">
          Character Sheet
        </Link>
      </div>
    </>
  )
}