import Image from "next/image"

export default function SpeciesDetails(props: { species: "Mausca" | "Locess" | "Isser" | "Slated" | "Matari" | "Ungal" }) {
  let getDescription = () => {
    switch (props.species) {
      case "Mausca":
        return "The Mausca (mah-SKAH) are small people, usually no taller than 3 to 4 feet, with slight frames. They hail from the southern swamps and their physical features mirror that landscape. Their hair is incredibly thick and course with a deep, dark green color and usually grown long, giving their hair the appearance of swamp vines that hang from the trees. Their skin is generally a dark shade of cool brown and they have deep creases all along their body that makes them appear as though they are made from wood. Their most baffling feature is their eyes. Looking as though they were cut from pearls, their eyes are small and shimmer with a milky-white color and an opalescent sheen."
      case "Locess":
        return "The Locess (lo-KESS) are bug-like creatures that stand about 6 feet tall. They come from the World Forest, a forest of trees that are as large as mountains. The most prominent features of the Locess are their exoskeleton and extra arms. Their exoskeleton comes in a variety of vibrant greens, light browns, and de-saturated reds. Their exoskeleton is also tough and covers every inch of their body, making it difficult to discern emotions in their face. Their heads are very lizard-like, with wide, square jaws that comes to a point at the chin. The overall shape of the head is wide, with their eyes set far apart. Their eyes are very large, usually a dark, neutral color, and are multifaceted. They feature 4 arms and pseudo-wings that hang from their backs. These wings are non-functional and mostly give the impression of a cape and are usually a dusty-gray color."
      case "Isser":
        return "The Isser originated in the frozen tundras of the north and are large, burly people that generally stand about 6 to 7 feet tall with thick white fur and large, owl-lke eyes. They have small boney protrusions on their jaw and brow. Their ears are long, pointed, and seated higher on their heads than the other species. Most adult Isser wear a shawl embroidered with images that tell stories of the individuals victories hunting great beasts or telling histories of the family and tribe they come from."
      case "Slated":
        return "The Slated (SLAY-ted) are creatures of the endless desert, and their bodies are adapted to that harsh environment. Standing no more than 6 feet tall, they have thick scales with a dull-gray color that cover their entire body. Along their back and on top of their head is a rounded shell. When crouching the down, the shell locks into a sphere shape that can keep sand out from impending sandstorms and is very durable against predators. Their eyes have two lids: a thin one for keeping out sand and a thick one for closing their eyes to light. Their culture is centered around invention and engineering. They celebrate failure and push the boundaries of what people think is possible."
      case "Matari":
        return "The Matari (mah-TAR-ee) come from a massive cliff overlooking an ocean where they have a city carved into the cliff wall. Their culture is a Matriarchy that celebrates childhood, giving their young a dedicated period of time to leave home and explore the world to choose what social role they grow into. Matari communities are generally very close-knit. They are the tallest of the species, standing anywhere from 6 to 8 feet tall, and have very blunt and broad features. Their skin is a marbling of crimson and tan-brown with no hair at all."
      case "Ungal":
        return "The Ungal (OON-gaul) are the most mysterious species. They come from deep within the World Forest, where light does not touch the forest floor. They stand no taller than 5 feet and are the least humanoid of the species. Their lower body is like the cap of an oyster mushroom flipped upside-down, the lip of which flows and ungulates to give them mobility. Their arms do not end in hands. Instead, they end in a tubular appendage that functions much like an elephants trunk to grab and manipulate objects. Their head has no face. Instead, they have a few optical stalks that grow around their entire head, giving a 360 degree field of view that registers mostly heat and also some light. On the top of their head grows a crown of small oyster-mushroom-like growths, which are used as both a symbol of age and wisdom as well as sensory organs to pick up sounds within both the normal and infrasonic rages. And along their entire body are small, plate-like growths that are constantly in motion, and the underside of these plates glows with a phosphorescence."
    }
  }

  let getImgSrc = () => {
    switch (props.species) {
      case "Mausca": return "/reference-images/mausca_reference.png"
      default: return null
    }
  }

  let stats = { nimble: "+0", tough: "+0", competence: "+0", constitution: "+0", spirit: "+0" }

  switch (props.species) {
    case "Mausca":
      stats.nimble = "+2"
      stats.tough = "-1"
      stats.competence = "+0"
      stats.constitution = "+1"
      stats.spirit = "-1"
      break;
    case "Locess":
      stats.nimble = "+2"
      stats.tough = "-1"
      stats.competence = "+0"
      stats.constitution = "+1"
      stats.spirit = "-1"
      break;
    case "Isser":
      stats.nimble = "+0"
      stats.tough = "+2"
      stats.competence = "+0"
      stats.constitution = "+0"
      stats.spirit = "-1"
      break;
    case "Slated":
      stats.nimble = "-1"
      stats.tough = "+0"
      stats.competence = "+2"
      stats.constitution = "+1"
      stats.spirit = "-1"
      break;
    case "Matari":
      stats.nimble = "-1"
      stats.tough = "+1"
      stats.competence = "+1"
      stats.constitution = "+0"
      stats.spirit = "-1"
      break;
    case "Ungal":
      stats.nimble = "+0"
      stats.tough = "-1"
      stats.competence = "+1"
      stats.constitution = "+2"
      stats.spirit = "-1"
      break;
  }

  return (
    <>
      <h3>{props.species}</h3>
      <p>{getDescription()}</p>

      <div className="flex w-fit mx-auto">
        {/* @ts-ignore */}
        {getImgSrc() ? <Image src={getImgSrc()} width={175} height={175} alt={`${props.species} head shot concept art by Harmony Brooks`} className="" /> : <></>}

        <table className="raceStatTable m-0">
          <thead>
            <tr>
              <th colSpan={1}>Stats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bottom left right"><em>{stats.nimble} Nimble</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>{stats.tough} Tough</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>{stats.competence} Competence</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>{stats.constitution} Constitution</em></td>
            </tr>
            <tr>
              <td className="bottom left right"><em>{stats.spirit} Spirit</em></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}