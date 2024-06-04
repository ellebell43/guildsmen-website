import { Metadata } from "next"
import styles from "./styles.module.css"
import ChangelogEntry from "./changelog-entry"
import RoadmapEntry from "./roadmap-entry"

export const metadata: Metadata = {
  title: "Guildsmen | Changelog and Road Map",
  description: "View changes that have been made and see progress updates on upcoming features to Guildsmen."
}

export default function Changelog() {
  return (
    <article>
      <h1>Changelog & Road Map</h1>
      <section>
        <h2 className={styles.h2}>Road Map</h2>

        <div className="border-l-2 my-2 px-2 border-r-2">
          <p className="italic text-center">Features are listed in order of priority.</p>

          <h3 className={styles.h3}>Create Pages for Resources and Community</h3>
          <ul>
            <RoadmapEntry text="A Resource page where users can access the character sheet and establishment sheet. This will also be the home for user created content in the future." completed={false} />
            <RoadmapEntry text="A Community page with links to Reddit and Discord. Will also outline how contributing to Guildsmen works and feature blog posts." completed={false} />
            <RoadmapEntry text="Both Resources and Community will have links in the header navigation bar." completed={false} />
          </ul>

          <h3 className={styles.h3}>Annotations</h3>
          <ul>
            <RoadmapEntry text="Users can highlight specific passages of text and pick from a set of 3-4 colors." completed={false} />
            <RoadmapEntry text="Users can create named bookmarks that instantly take them to marked paragraphs." completed={false} />
            <RoadmapEntry text="Users can create notes and attach them to specific paragraphs." completed={false} />
            <RoadmapEntry text="Users can view their note by clicking on a small note icon where they placed the note." completed={false} />
            <RoadmapEntry text="Users can view all of their annotations from their user page." completed={false} />
            <RoadmapEntry text="Users can use their notes as hyperlinks to quickly get to pages that they have annotated." completed={false} />
            <RoadmapEntry text="Annotations should only work on the core rule pages." completed={false} />
          </ul>

          <h3 className={styles.h3}>Creature Creator</h3>

          <h3 className={styles.h3}>Public Forum for Player-made Creatures and Characters</h3>

          <h3 className={styles.h3}>Custom Market Items</h3>
        </div>
      </section>

      <section>
        <h2 className={styles.h2}>Changelog</h2>
        <ul>
          <ChangelogEntry
            date="06/04/2024"
            version="v0.4.0"
            entries={[
              "Fixed a typo that said successful skill checks give experience. It now says that unsuccessful checks give experience.",
              "Added a tab that opens up a table of contents that is dynamically created on the page for easier navigation"
            ]}
          />
          <ChangelogEntry
            date="02/02/2024"
            version="v0.3.3"
            entries={[
              "Updated layout of the character app to be more responsive and feel better on larger screens."
            ]}
          />
          <ChangelogEntry
            date="01/20/2024"
            version="v0.3.2"
            entries={[
              "Fixed sign out bug where the sign out button would redirect but not actually clear authentication token",
              "Fixed bug where the confirmation pop up to delete character would not disappear when actually deleting the character."
            ]}
          />
          <ChangelogEntry
            date="01/20/2024"
            version="v0.3.1"
            entries={[
              "Error pages now have a try again button",
              "Error pages no longer give an odd generic error, and just say that something went wrong.",
              "Fixed user avatar icon not rendering and not updating when signing in/out"
            ]}
          />
          <ChangelogEntry
            date="01/17/2024"
            version="v0.3.0"
            entries={[
              "Moved all data fetching to the server. You shouldn't ever have to watch a spinner while you wait for content to load.",
              "New character creator application that allows you to create characters and use a virtual character sheet to roll skills, edit stats, and more.",
              "Fixed some issues with the sign-in button not redirecting you to where you need to go.",
              "Fixed some issues where the sign-out button would cause errors"
            ]}
          />
          <ChangelogEntry
            date="09/22/2023"
            version="v0.2.1"
            entries={[
              "Fixed issue with users being unable to login due to missing environment variables.",
              "Removed 'muff' from the list of bad words.",
              "Fixed bio card width on user profiles when the bio is empty.",
              "Fixed the size of the default user avatar on the profile page.",
              "Fixed the styling of links on the lore page."
            ]}
          />
          <ChangelogEntry
            date="09/22/2023"
            version="v0.2.0"
            entries={[
              "User Account feature added.",
              "Users can now create, edit, and delete profiles.",
              "Users can select user avatars from a list to customize their profile.",
              "Users can edit their email and password.",
              "Users can reset their password via email.",
              "Users can edit a bio to be featured on their profile page."
            ]}
          />
          <ChangelogEntry
            date="08/30/2023"
            version="v0.1.2"
            entries={[
              "Descriptions of all the species were overhauled in the Character Creation chapter to be significantly more descriptive.",
              "Periods were added to previous changelog and roadmap entries because it was really bugging me.",
              "A reference and link to the character creator on the home page was removed since that feature does not exist yet."
            ]}
          />
          <ChangelogEntry
            date="08/24/2023"
            version="v0.1.1"
            entries={[
              "Character sheet was recreated (and improved visually) by using JSX code instead of Microsoft Word.",
              "The PDF downloaded from Character Creation has been updated to this latest version.",
              "The character sheet can be previewed at the '/resources/character-sheet' URL. There are no actual links to this page, but it can be navigated to manually."
            ]}
          />
          <ChangelogEntry
            date="08/21/2023"
            version="v0.1.0"
            entries={[
              "Changelog begins with dedicated version control.",
              "This page was added and was linked in the footer. The footer was rearranged to accommodate a link to this page and to include the current version number of Guildsmen."
            ]}
          />
        </ul>
      </section>
    </article>
  )
}