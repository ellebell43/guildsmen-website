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
      case "Assassins":
        return <>
          <h3>Assassins Guild</h3>
          <p>Assassins are those that believe anyone is worthy of death… for the right price. Assassins lurk in the dark and strike when least expected. They are efficient killers and know how to get in, spill blood, and get out as quickly as possible.</p>

          <table className="raceStatTable">
            <thead>
              <tr>
                <th colSpan={1}>Guild Skills</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bottom left right"><em>Investigate</em></td>
              </tr>
              <tr>
                <td className="bottom left right"><em>Sneaky</em></td>
              </tr>
              <tr>
                <td className="bottom left right"><em>Social</em></td>
              </tr>
              <tr>
                <td className="bottom left right"><em>Throwdown</em></td>
              </tr>
            </tbody>
          </table></>
      case "Explorers":
        return <>
          <h3>Explorers Guild</h3>
          <p>Explorers desire to bring the unknown world into the light. They go beyond the borders of the map to discover lands that no race has ever experienced. They know that the wonders of the world are beyond the borders of current maps.</p>

          <table className="raceStatTable">
            <thead>
              <tr>
                <th colSpan={1}>Guild Skills</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bottom left right"><em>Craft</em></td>
              </tr>
              <tr>
                <td className="bottom left right"><em>Investigate</em></td>
              </tr>
              <tr>
                <td className="bottom left right"><em>Medic</em></td>
              </tr>
              <tr>
                <td className="bottom left right"><em>Throwdown</em></td>
              </tr>
            </tbody>
          </table></>
      case "Mercenaries":
        return <>
          <h3>Mercenaries Guild</h3>
          <p>Mercenaries are those who use their strength to make a profit. They are loyal defenders – if they get paid. They are masters of martial skills and make formidable opponents.</p>

          <table className="raceStatTable">
            <thead>
              <tr>
                <th colSpan={1}>Guild Skills</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bottom left right"><em>Craft</em></td>
              </tr>
              <tr>
                <td className="bottom left right"><em>Investigate</em></td>
              </tr>
              <tr>
                <td className="bottom left right"><em>Medic</em></td>
              </tr>
              <tr>
                <td className="bottom left right"><em>Throwdown</em></td>
              </tr>
            </tbody>
          </table></>
      case "Mythic Hunters":
        return <>
          <h3>Mythic Hunters Guild</h3>
          <p>Mythic Hunters are those that thrill in hunting the most dangerous beasts of the wilds. Their main goal is to kill Mythical creatures, harvest Navidus Crystals from them, and bring the crystals back to the guild. Occasionally, they will get hired to kill Mythical creatures that are causing a nuisance, or to help defend smaller towns from Mythical creature attacks.</p>

          <table className="raceStatTable">
            <thead>
              <tr>
                <th colSpan={1}>Guild Skills</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bottom left right"><em>Investigate</em></td>
              </tr>
              <tr>
                <td className="bottom left right"><em>Medic</em></td>
              </tr>
              <tr>
                <td className="bottom left right"><em>Nature</em></td>
              </tr>
              <tr>
                <td className="bottom left right"><em>Throwdown</em></td>
              </tr>
            </tbody>
          </table></>
      case "Thieves":
        return <>
          <h3>Thieves Guild</h3>
          <p>Thieves understand the concept of value. They know that a fortune can only be made when working outside the law. Nothing is beyond their grasp and no place is prohibited to them – if they can be sneaky enough.</p>

          <table className="raceStatTable">
            <thead>
              <tr>
                <th colSpan={1}>Guild Skills</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bottom left right"><em>Investigate</em></td>
              </tr>
              <tr>
                <td className="bottom left right"><em>Performance</em></td>
              </tr>
              <tr>
                <td className="bottom left right"><em>Sneaky</em></td>
              </tr>
              <tr>
                <td className="bottom left right"><em>Throwdown</em></td>
              </tr>
            </tbody>
          </table></>
      default:
        return <></>
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