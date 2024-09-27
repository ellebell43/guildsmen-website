export default function GuildDetails(props: { guild: "Assassins" | "Mythic Hunters" | "Explorers" | "Mercenaries" | "Thieves" }) {
  let getDescription = () => {
    switch (props.guild) {
      case "Assassins":
        return "Assassins are those that believe anyone is worthy of death… for the right price. Assassins lurk in the dark and strike when least expected. They are efficient killers and know how to get in, spill blood, and get out as quickly as possible."
      case "Mythic Hunters":
        return "Mythic Hunters are those that thrill in hunting the most dangerous beasts of the wilds. Their main goal is to kill Mythical creatures, harvest Navidus Crystals from them, and bring the crystals back to the guild. Occasionally, they will get hired to kill Mythical creatures that are causing a nuisance, or to help defend smaller towns from Mythical creature attacks."
      case "Explorers":
        return "Explorers desire to bring the unknown world into the light and to solve the mysteries of the world. They go beyond the borders of the map to discover lands that no one has ever experienced and they know that the answers to the worlds greatest questions can be found, if you can only look in the right spot."
      case "Mercenaries":
        return "Mercenaries are those who use their strength to make a profit. They are loyal defenders – if they get paid. They are masters of martial skills and make formidable opponents."
      case "Thieves":
        return "Thieves understand the concept of value. They know that a fortune can only be made when working outside the law. Nothing is beyond their grasp and no place is prohibited to them – if they can be sneaky enough."
    }
  }

  let skills: string[]
  switch (props.guild) {
    case "Assassins":
      skills = ["Investigate", "Sneaky", "Social", "Throwdown"]
      break;
    case "Mythic Hunters":
      skills = ["Investigate", "Medic", "Nature", "Throwdown"]
      break;
    case "Explorers":
      skills = ["Craft", "Investigate", "Medic", "Throwdown"]
      break;
    case "Mercenaries":
      skills = ["Craft", "Investigate", "Medic", "Throwdown"]
      break;
    case "Thieves":
      skills = ["Investigate", "Performance", "Sneaky", "Throwdown"]
      break;
  }

  return (
    <div className={`${props.guild == "Thieves" ? "col-span-2 w-1/2 mx-auto" : ""} md:border-opacity-30 dark:md:border-opacity-30 md:border md:px-4`}>
      <h3>{props.guild} Guild</h3>
      <p>{getDescription()}</p>

      <table className="raceStatTable">
        <thead>
          <tr>
            <th colSpan={1}>Guild Skills</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bottom left right"><em>{skills[0]}</em></td>
          </tr>
          <tr>
            <td className="bottom left right"><em>{skills[1]}</em></td>
          </tr>
          <tr>
            <td className="bottom left right"><em>{skills[2]}</em></td>
          </tr>
          <tr>
            <td className="bottom left right"><em>{skills[3]}</em></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}