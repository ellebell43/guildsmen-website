import GuildDetails from "@/app/rules/character-creation/guild-details";
import BulletDropList from "@/util/input-components/bullet-drop-list";
import { guild } from "@/util/types";
import { useEffect } from "react";

export default function GuildSelect(props: { guild: guild | undefined, setGuild: Function }) {
  const info = <>
    <p>This final part of character creation should be done with all players present, because this decision will affect everyone.</p>

    <p>You now need to decide where your character is going. You and everyone else in your party are joining a guild, and from here the grand adventures the Game Master has in store for you will begin. There are five common guilds, each will train your players in a specific set of skills.</p>

    <p>Once you choose a guild, all players will increase the skills listed to +1 if those skills are not already there.</p>
  </>

  const getGuildDetails = () => {
    switch (props.guild) {
      case "Assassins": return <GuildDetails guild="Assassins" />
      case "Explorers": return <GuildDetails guild="Explorers" />
      case "Mercenaries": return <GuildDetails guild="Mercenaries" />
      case "Mythic Hunters": return <GuildDetails guild="Mythic Hunters" />
      case "Thieves": return <GuildDetails guild="Thieves" />
      default: return <></>
    }
  }
  return (
    <div>
      <h2>Join a Guild</h2>
      <BulletDropList entries={["Assassins", "Mythic Hunters", "Explorers", "Mercenaries", "Thieves"]} state={props.guild} setState={props.setGuild} placeholder="Guild" info={info} />
      {props.guild ?
        <div className="border shadow-lg p-4 mx-auto">
          {getGuildDetails()}
        </div> : <></>}
    </div>
  )
}