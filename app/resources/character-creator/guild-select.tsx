import GuildDetails from "@/app/rules/character-creation/guild-details";
import BulletDropList from "@/util/input-components/bullet-drop-list";
import { guild } from "@/util/types";
import { useEffect } from "react";

export default function GuildSelect(props: { guild: guild | undefined, setGuild: Function }) {
  const info = <>
    <p>There are five common guilds, each will train your character in a specific set of skills. The idea behind joining a guild during character creation is that it allows the players to understand the mechanics of their party from the very beginning. All the players being in the same guild inherently means that they are all on the same job together and at the very least have a "coworker" relationship.</p>
  </>

  const getGuildDetails = () => {
    switch (props.guild) {
      case "Assassins": return <GuildDetails guild="Assassins" />
      case "Explorers": return <GuildDetails guild="Explorers" />
      case "Mercenaries": return <GuildDetails guild="Mercenaries" />
      case "Starborne Hunters": return <GuildDetails guild="Starborne Hunters" />
      case "Thieves": return <GuildDetails guild="Thieves" />
      default: return <></>
    }
  }
  return (
    <div>
      <h2>Join a Guild</h2>

      <p>To kick off character creation, you're going to join a guild to join. This should be done as a group, as the guild you join will determine the type of adventures you will go on and the type of character you're inspired to create.</p>

      <BulletDropList entries={["Assassins", "Starborne Hunters", "Explorers", "Mercenaries", "Thieves"]} state={props.guild} setState={props.setGuild} placeholder="Guild" info={info} />
      {props.guild ?
        <div className="border shadow-lg p-4 mx-auto">
          {getGuildDetails()}
        </div> : <></>}
    </div>
  )
}