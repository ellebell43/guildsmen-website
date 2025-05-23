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
          date="04/20/2025"
          version="v0.8.0"
          entries={[
            "Characters can be made into templates for other users to use and make characters from",
            "Characters/templates can be marked as public to determine if other users can access them",
            "Account deletion also deletes owned characters and templates",
            "New resource page with community (public) templates",
            "All references to disadvantage in the Combat rules have been replaced with a -2 modifier since advantage/disadvantage were removed a couple updates back.",
            "Error message if redirected to sign in saying you need to sign in to view the page when attempting to access a restricted URL."
          ]}
        />
        <ChangelogEntry
          date="01/16/2025"
          version="v0.7.0"
          entries={[
            "Mythical creatures have been changed to Starborne creatures.",
            "An entry has been added to the lore page detailing a brief overview of the world of Thelius outlining the Starfall, the origin of Starborne creatures, and the founding of the ancestor city-states.",
            "Navidus Crystals are renamed to Star Gems.",
            "Mythic Hunters have been renamed to Starborne hunters."
          ]}
        />
        <ChangelogEntry
          date="11/25/2024"
          version="v0.6.1"
          entries={[
            "Advantage and disadvatage have been removed since degree of difficulty exists. Advantage and disadvantage seemed redundant when you could instead adjust the difficulty of the task.",
            "Fixed typo in character creation that mentioned orcs, which were replaced with the Isser. Thank you to @GoblinQuester@dice.camp for catching that.",
            "Fixed a typo in the description for Nightshade, changing the resistance trigger to every hour instead of every round. Thank you again to @GoblinQuester@dice.camp!",
            "Made wording more consistent by always using moderate for skill checks rather than switching between average and moderate.",
            "Paragraph about Navidus crystals having energy drained over time was removed from the Invention page. Lore-wise, I wanted to be able to create devices that didn't have this stipulation and since arrows/bullets aren't accounted for, neither should changing out crystals in powered devices."
          ]}
        />
        <ChangelogEntry
          date="09/26/2024"
          version="v0.6.0"
          entries={[
            "Orcs have been replaced with a new original species call Isser and included original art for the Isser.",
            "Guilds now just add 1 to the given skills rather than increasing to +1 if not there yet.",
            "Modified how the list of Guilds and Species are displayed on larger screens to better utilize screen space.",
            "Added some words about why players are joining guilds and now players may join separate guilds.",
            "Added some words about adding gear to your character, including a link to The Market."
          ]}
        />
        <ChangelogEntry
          date="08/30/2024"
          version="v0.5.4"
          entries={[
            "Fixed redirect issues with invalid user tokens when trying to access the profile page.",
            "Fixed spacing issues with the gear section in the character app."
          ]}
        />
        <ChangelogEntry
          date="08/30/2024"
          version="v0.5.3"
          entries={[
            "Created a print view for characters in the character app.",
            "Fixed issue where gear tab was no visible on medium screens in character app.",
            "Fixed paragraph wrapping and overflow issues in details tab of character app."
          ]}
        />
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