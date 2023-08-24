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

          <h3 className={styles.h3}>Revamp CC Descriptions of the Species</h3>
          <ul>
            <RoadmapEntry text="A complete overhaul of the descriptions of the species in the Character Creation chapter that are much more detailed with more imagery." completed={false} />
          </ul>

          <h3 className={styles.h3}>Recreate the Character Sheet in JSX code</h3>
          <ul>
            <RoadmapEntry text="Recreate the character sheet in JSX for easier editing, more precise creation, and to be able to use it when users can create characters on the site." completed={false} />
          </ul>

          <h3 className={styles.h3}>Create Pages for Resources and Community</h3>
          <ul>
            <RoadmapEntry text="A Resource page where users can access the character sheet and establishment sheet. This will also be the home for user created content in the future." completed={false} />
            <RoadmapEntry text="A Community page with links to Reddit and Discord. Will also outline how contributing to Guildsmen works and feature blog posts " completed={false} />
            <RoadmapEntry text="Both Resources and Community will have links in the header navigation bar" completed={false} />
          </ul>

          <h3 className={styles.h3}>User Accounts</h3>
          <ul>
            <RoadmapEntry text="Users will be able to create an account via a sign up page by providing a username, email, and password" completed={false} />
            <RoadmapEntry text="Users will need to check a box that says they have read the terms and conditions and privacy policy to create their account" completed={false} />
            <RoadmapEntry text="Users will be able to log in to their accounts via a login page." completed={false} />
            <RoadmapEntry text="Login session will last 24 hours or indefinitely if the user selects 'keep me logged in'" completed={false} />
            <RoadmapEntry text="Users will be able to access a user page that shows their username and allows them to set a custom avatar, create a bio, and see their account age" completed={false} />
            <RoadmapEntry text="From the user page, users will be able to change their password, logout, and delete their account. Both changing the password and deleting the account will require retyping in the password" completed={false} />
            <RoadmapEntry text="Users can recover their password via the login screen, which directs them to email me personally as a temporary solution until I can afford buying a custom domain with a custom email to automate the process. Have this fact disclaimed when creating an account and when you go to recover your password" completed={false} />
          </ul>

          <h3 className={styles.h3}>Character Creator</h3>
          <ul>
            <RoadmapEntry text="Logged in users can create a character using an in-browser tool that walks them through CC, via a multi-step form." completed={false} />
            <RoadmapEntry text="Users will then be able to view access and view characters they've created via the character creator page, or their user page. This view will be very mobile friendly" completed={false} />
            <RoadmapEntry text="Users can interact with the character sheet to roll dice for specific skills which shows wa 3d animation of rolling dice that adds up modifiers for them in useful messages" completed={false} />
            <RoadmapEntry text="Experience automatically accumulates" completed={false} />
            <RoadmapEntry text="Characters can increase stats and skills by spending experience" completed={false} />
            <RoadmapEntry text="Characters can increase or decrease harm." completed={false} />
            <RoadmapEntry text="If dying is marked, apply a red border around the screen" completed={false} />
            <RoadmapEntry text="Character can die and become 'unusable' with a black border around the screen. There will be a revive button to reset the characters harm and continue using." completed={false} />
            <RoadmapEntry text="Characters will have editable details such as personal connections and morals, have an editable section to write out backstory, and an editable section for writing out notes" completed={false} />
            <RoadmapEntry text="The character will update changes to the database every 60 seconds, when you exit the characters details, when you press a specific save button, or when you press 'ctrl + s'. Updates only actually occur if changes have been made" completed={false} />
            <RoadmapEntry text="Character list will have a card for each character that shows basic details: name, demeanor, physique, and species; the date it was created; and the date it was most recently updated." completed={false} />
            <RoadmapEntry text="Users can view a printer-friendly version of their character for printing purposes" completed={false} />
            <RoadmapEntry text="Characters will have an inventory and can insert items directly from the Market Chapter, or be able to insert custom items on the fly." completed={false} />
          </ul>

          <h3 className={styles.h3}>Annotations</h3>
          <ul>
            <RoadmapEntry text="Users can highlight specific passages of text and pick from a set of 3-4 colors" completed={false} />
            <RoadmapEntry text="Users can create named bookmarks that instantly take them to marked paragraphs" completed={false} />
            <RoadmapEntry text="Users can create notes and attach them to specific paragraphs" completed={false} />
            <RoadmapEntry text="Users can view their note by clicking on a small note icon where they placed the note" completed={false} />
            <RoadmapEntry text="Users can view all of their annotations from their user page" completed={false} />
            <RoadmapEntry text="Users can use their notes as hyperlinks to quickly get to pages that they have annotated" completed={false} />
            <RoadmapEntry text="Annotations should only work on the core rule pages" completed={false} />
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