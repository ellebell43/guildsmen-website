import { species } from "@/util/types";
import TextInputWithInfo from "@/util/input-components/text-with-info";
import BulletDropList from "@/util/input-components/bullet-drop-list";
import Details from "./details";

type props = {
  name: string | undefined, setName: Function,
  species: species | undefined, setSpecies: Function,
  demeanor: string | undefined, setDemeanor: Function,
  physique: string | undefined, setPhysique: Function
}

export default function BasicInfo(props: props) {
  const getSpeciesInfo = () => {
    switch (props.species) {
      case "Locess":
        return (
          <>
            <h3>Locess</h3>
            <p>The Locess (lo-KESS) are bug-like creatures that stand about 6 feet tall. They come from the World Forest, a forest of trees that are as large as mountains. The most prominent features of the Locess are their exoskeleton and extra arms. Their exoskeleton comes in a variety of vibrant greens, light browns, and de-saturated reds. Their exoskeleton is also tough and covers every inch of their body, making it difficult to discern emotions in their face. Their heads are very lizard-like, with wide, square jaws that comes to a point at the chin. The overall shape of the head is wide, with their eyes set far apart. Their eyes are very large, usually a dark, neutral color, and are multifaceted. They feature 4 arms and pseudo-wings that hang from their backs. These wings are non-functional and mostly give the impression of a cape and are usually a dusty-gray color.</p>

            <table className="raceStatTable">
              <thead>
                <tr>
                  <th colSpan={1}>Stats</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bottom left right"><em>+2 Nimble</em></td>
                </tr>
                <tr>
                  <td className="bottom left right"><em>-1 Tough</em></td>
                </tr>
                <tr>
                  <td className="bottom left right"><em>+1 Competence</em></td>
                </tr>
                <tr>
                  <td className="bottom left right"><em>+0 Constitution</em></td>
                </tr>
              </tbody>
            </table>
          </>
        )
      case "Matari":
        return (
          <>
            <h3>Matari</h3>
            <p>The Matari (mah-TAR-ee) come from a massive cliff overlooking an ocean where they have a city carved into the cliff wall. Their culture is a Matriarchy that celebrates childhood, giving their young a dedicated period of time to leave home and explore the world to choose what social role they grow into. Matari communities are generally very close-knit. They are the tallest of the species, standing anywhere from 6 to 8 feet tall, and have very blunt and broad features. Their skin is a marbling of crimson and tan-brown with no hair at all.</p>

            <table className="raceStatTable">
              <thead>
                <tr>
                  <th colSpan={1}>Stats</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bottom left right"><em>-1 Nimble</em></td>
                </tr>
                <tr>
                  <td className="bottom left right"><em>+1 Tough</em></td>
                </tr>
                <tr>
                  <td className="bottom left right"><em>+1 Competence</em></td>
                </tr>
                <tr>
                  <td className="bottom left right"><em>+0 Constitution</em></td>
                </tr>
              </tbody>
            </table>
          </>
        )
      case "Mausca":
        return (
          <>
            <h3>Mausca</h3>
            <p>The Mausca (mah-SKAH) are small people, usually no taller than 3 to 4 feet, with slight frames. They hail from the southern swamps and their physical features mirror that landscape. Their hair is incredibly thick and course with a deep, dark green color and usually grown long, giving their hair the appearance of swamp vines that hang from the trees. Their skin is generally a dark shade of cool brown and they have deep, vertical creases all along their body that makes them appear as though they are made from wood. Their most baffling feature is their eyes. Looking as though they were cut from pearls, their eyes are small and deeply set with a milky-white color and an opalescent sheen.</p>

            <table className="raceStatTable">
              <thead>
                <tr>
                  <th colSpan={1}>Stats</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bottom left right"><em>+2 Nimble</em></td>
                </tr>
                <tr>
                  <td className="bottom left right"><em>-1 Tough</em></td>
                </tr>
                <tr>
                  <td className="bottom left right"><em>+0 Competence</em></td>
                </tr>
                <tr>
                  <td className="bottom left right"><em>+1 Constitution</em></td>
                </tr>
              </tbody>
            </table>
          </>
        )
      case "Orc":
        return (
          <>
            <h3>Orcs</h3>
            <p>The Orcs originated in the frozen tundras of the north and are large, burly people that generally stand about 6 to 7 feet tall with skin tones that come in light blues and grays. They have small tusks protruding through their skin on their jaw bone and chin. Their ears are long, pointed, and seated higher on their heads than the other species. Their hair grows only from the very top of their head and is usual black, white, or gray. Tribal tattoos generally covers their bodies, telling stories of the individuals victories hunting great beasts or telling histories of the family and tribe they come from.</p>

            <table className="raceStatTable">
              <thead>
                <tr>
                  <th colSpan={1}>Stats</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bottom left right"><em>+0 Nimble</em></td>
                </tr>
                <tr>
                  <td className="bottom left right"><em>+2 Tough</em></td>
                </tr>
                <tr>
                  <td className="bottom left right"><em>+0 Competence</em></td>
                </tr>
                <tr>
                  <td className="bottom left right"><em>+0 Constitution</em></td>
                </tr>
              </tbody>
            </table>
          </>
        )
      case "Slated":
        return (
          <>
            <h3>Slated</h3>
            <p>The Slated (SLAY-ted) are creatures of the endless desert, and their bodies are adapted to that harsh environment. Standing no more than 6 feet tall, they have thick scales with a dull-gray color that cover their entire body. Along their back and on top of their head is a rounded shell. When crouching the down, the shell locks into a sphere shape that can keep sand out from impending sandstorms and is very durable against predators. Their eyes have two lids: a thin one for keeping out sand and a thick one for closing their eyes to light. Their culture is centered around invention and engineering. They celebrate failure and push the boundaries of what people think is possible.</p>

            <table className="raceStatTable">
              <thead>
                <tr>
                  <th colSpan={1}>Stats</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bottom left right"><em>-1 Nimble</em></td>
                </tr>
                <tr>
                  <td className="bottom left right"><em>+0 Tough</em></td>
                </tr>
                <tr>
                  <td className="bottom left right"><em>+2 Competence</em></td>
                </tr>
                <tr>
                  <td className="bottom left right"><em>+1 Constitution</em></td>
                </tr>
              </tbody>
            </table>
          </>
        )
      case "Ungal":
        return (
          <>
            <h3>Ungal</h3>
            <p>The Ungal (OON-gaul) are the most mysterious species. They come from deep within the World Forest, where light does not touch the forest floor. They stand no taller than 5 feet and are the least humanoid of the species. Their lower body is like the cap of an oyster mushroom flipped upside-down, the lip of which flows and ungulates to give them mobility. Their arms do not end in hands. Instead, they end in a tubular appendage that functions much like an elephants trunk to grab and manipulate objects. Their head has no face. Instead, they have a few optical stalks that register mostly heat but also some light that grow around the entire head, giving a 360 degree field of view. On the top of their head grows a crown of small oyster-mushroom-like growths, which are used as both a symbol of age and wisdom as well as sensory organs to pick up sounds within both the normal and infrasonic rages. And along their entire body are this small plate-like growths that are constantly in motion, and the underside of the plates glows with a phosphorescence. These plates are use to communicate using the sounds that they make as they move.</p>

            <p>Due to their inability to speak with a mouth, they cannot make the same sounds as the other species and cannot verbalize any language other than their own. This sets them apart from the other species. This, coupled with their appearance, makes them something that most other individuals don&apos;t understand, which means the Ungal people are generally discriminated against and feared.</p>

            <table className="raceStatTable">
              <thead>
                <tr>
                  <th colSpan={1}>Stats</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bottom left right"><em>+0 Nimble</em></td>
                </tr>
                <tr>
                  <td className="bottom left right"><em>-1 Tough</em></td>
                </tr>
                <tr>
                  <td className="bottom left right"><em>+1 Competence</em></td>
                </tr>
                <tr>
                  <td className="bottom left right"><em>+2 Constitution</em></td>
                </tr>
              </tbody>
            </table>
          </>
        )
    }
  }

  return (
    <>
      <h2>Basic Information</h2>
      <Details>
        <p>The first step for creating a character is to determine your name, demeanor, physique, and species.</p>

        <p><strong>Name</strong> is your character&apos;s name. This is what other players will call you during the game. It can be anything, but make sure it sounds epic. Like Bob. Bob is always a great name for a character.</p>

        <p><strong>Species</strong> is your character&apos;s Species. In this game, there are six unique races for you to choose from: Locess, Mausca, Orcs, Matari, Slated, and Ungal. A list of these races with descriptions is further down.</p>

        <p><strong>Demeanor</strong> is how your character presents their self in most situations. Write in an adjective like cocky, excitable, confident, etc. This adjective is a tool to help you act as your character would.</p>

        <p><strong>Physique</strong> is how your character is built physically. Write in an adjective like fat, thin, lean, strong, etc. This adjective is a tool to help guide what other characters in the world would see at a glance.</p>

        <p>By combining these four fields, you can create a brief description of your character. For example: A fat, jovial Mausca named Bob.</p>

        <p>Selecting a species will determine your stats. Your stats are four terms located at the top-right of your character sheet: Nimble, Tough, Competence, and Constitution.</p>

        <p><strong>Nimble</strong> defines your character&apos;s agility. Nimble is used to move quickly, jump over objects, dodge, and for any other actions that require more finesse.</p>

        <p><strong>Tough</strong> defines your character&apos;s physical strength. Tough is used to lift and move heavy objects, wrestle other creatures, and for any other actions that require more strength.</p>

        <p><strong>Competence</strong> defines your character&apos;s ability to act under pressure, read situations, and see things that other people wouldn&apos;t. It will be used in moments of pressure and crisis.</p>

        <p><strong>Constitution</strong> defines your ability to endure stress. It us used to fend off poisons, resist disease and addiction, to exert yourself for extended periods of time, and for any other actions that require resistance or endurance.</p>

        <p>When you pick a species, you are given a modifier next to each stat. Fill in the corresponding bubbles on your character sheet to match the modifiers given.</p>
      </Details>

      <TextInputWithInfo label="Name" id="name" required={true} state={props.name} setState={props.setName}>
        <p><strong>Name</strong> is your character&apos;s name. This is what other players will call you during the game. It can be anything, but make sure it sounds epic. Like Bob. Bob is always a great name for a character.</p>
      </TextInputWithInfo>

      <TextInputWithInfo label="Demeanor" id="demeanor" required={true} state={props.demeanor} setState={props.setDemeanor}>
        <p><strong>Demeanor</strong> is how your character presents their self in most situations. Write in an adjective like cocky, excitable, confident, etc. This adjective is a tool to help you act as your character would.</p>
      </TextInputWithInfo>

      <TextInputWithInfo label="Physique" id="physique" required={true} state={props.physique} setState={props.setPhysique}>
        <p><strong>Physique</strong> is how your character is built physically. Write in an adjective like fat, thin, lean, strong, etc. This adjective is a tool to help guide what other characters in the world would see at a glance.</p>
      </TextInputWithInfo>

      <BulletDropList entries={["Locess", "Mausca", "Orc", "Matari", "Slated", "Ungal"]} state={props.species} setState={props.setSpecies} placeholder="Species" />

      {props.species ?
        <div className="border shadow-lg p-4 mx-auto">
          {getSpeciesInfo()}
        </div> : <></>}
    </>
  )
}