import { Metadata } from "next"
import styles from "./styles.module.css"
import ChangelogEntry from "./changelog-entry"

export const metadata: Metadata = {
  title: "Guildsmen | Changelog and Road Map",
  description: "View changes that have been made and see progress updates on upcoming features to Guildsmen."
}

export default function Changelog() {
  return (
    <article>
      <h1 className={styles.h2}>Changelog</h1>
      <ul>
        <ChangelogEntry
          date="08/17/2024"
          version="v0.5.2"
          entries={[
            "Revised reactions to be more understandable.",
            "Added in un-reactive opponents to better establish when opponents get reactions.",
            "Added reactivity statuses to creatures to indicate if a creature would normally get a reaction or not.",
            "Updated Mausca description to be a bit less off-putting and added in a piece of concept art for the Mausca.",
            "Small revision to the Explorer's guild description."
          ]}
        />
        <ChangelogEntry
          date="07/27/2024"
          version="v0.5.1"
          entries={["Fixed character creation app validation error where selecting destitute for wealth would make the form invalid."]}
        />
        <ChangelogEntry
          date="07/11/2024"
          version="v0.5.0"
          entries={[
            "Added a new chapter called Runes detailing another system of magic besides Myth.",
            "A new character stat called Spirit has been added. It is used to charge runes.",
            "Reworked the Invention chapter to incorporate runes. Magic items can now be invented and crafted and mechs have been reworked as well.",
            "Myth chapter intro paragraphs have been updated to mention runes.",
            "Navidus crystals have more definite sizes now",
            "A new level of difficulty (Super Difficult) has been added to the Skills chapter",
            "All rules pages now have a table of contents pullout component for easier navigation",
            "Added character sheet and establishment sheet to the Resources page for easier access",
            "Experienced is now gained on failed skill checks rather than successful skill checks",
            "Ungal description was modified to remove the inherent discrimination concept",
            "Added a section to the creatures page about types of creatures",
            "Added magic items and a couple new devices to the Market and fixed some spelling mistakes"
          ]}
        />
        <ChangelogEntry
          date="06/04/2024"
          version="v0.4.0"
          entries={[
            "Added a tab that opens up a table of contents that is dynamically created on the page for easier navigation",
            "Fixed an issue where gear was not added to the character after submitting the character creation form"
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
    </article>
  )
}