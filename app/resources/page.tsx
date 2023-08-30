import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guildsmen | Resources",
  description: "Access resources used with Guildsmen TTRPG"
}

export default function Resources() {
  return (
    <article>
      <h1>Resources</h1>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="downloadContainer">
          <Link className="button py-2 px-8" href="/cs-sheet.pdf" download="guildsmen-character-sheet" target="_blank">
            Character sheet
            <FontAwesomeIcon icon={faDownload} className="" />
          </Link>
        </div>

        <div className="downloadContainer">
          <Link className="button py-2 px-8" href="/es-sheet.pdf" download="guildsmen-establishment-sheet" target="_blank">
            Establishment sheet
            <FontAwesomeIcon icon={faDownload} className="" />
          </Link>
        </div>
      </div>
    </article>
  )
}