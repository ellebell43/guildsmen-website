import { species } from "@/util/types";
import TextInputWithInfo from "@/util/input-components/text-with-info";
import BulletDropList from "@/util/input-components/bullet-drop-list";
import SpeciesDetails from "@/app/rules/character-creation/species-details";
import { TextAreaWithInfo } from "@/util/input-components/input-elements";

type props = {
  name: string | undefined, setName: Function,
  species: species | undefined, setSpecies: Function,
  demeanor: string | undefined, setDemeanor: Function,
  physique: string | undefined, setPhysique: Function,
  description: string | undefined, setDescription: Function
}

export default function BasicInfo(props: props) {
  const getSpeciesInfo = () => {
    switch (props.species) {
      case "Locess": return <SpeciesDetails species="Locess" />
      case "Matari": return <SpeciesDetails species="Matari" />
      case "Mausca": return <SpeciesDetails species="Mausca" />
      case "Isser": return <SpeciesDetails species="Isser" />
      case "Slated": return <SpeciesDetails species="Slated" />
      case "Ungal": return <SpeciesDetails species="Ungal" />
    }
  }

  return (
    <>
      <h2>Basic Information</h2>

      <p>To begin making your character, let&apos;s decide on the most basic information: name, demeanor, physique, and species. Click the info buttons to learn more.</p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12">
        <div className="flex flex-col justify-center items-center">
          <TextInputWithInfo label="Name*" id="name" required={true} state={props.name} setState={props.setName}>
            <p><strong>Name</strong> is your character&apos;s name. This is what other players will call you during the game. It can be anything, but make sure it sounds epic. Like Bob. Bob is always a great name for a character.</p>
          </TextInputWithInfo>

          <TextInputWithInfo label="Demeanor" id="demeanor" required={true} state={props.demeanor} setState={props.setDemeanor}>
            <p><strong>Demeanor</strong> is how your character presents their self in most situations. Write in an adjective like cocky, excitable, confident, etc. This adjective is a tool to help you act as your character would.</p>
          </TextInputWithInfo>

          <TextInputWithInfo label="Physique" id="physique" required={true} state={props.physique} setState={props.setPhysique}>
            <p><strong>Physique</strong> is how your character is built physically. Write in an adjective like fat, thin, lean, strong, etc. This adjective is a tool to help guide what other characters in the world would see at a glance.</p>
          </TextInputWithInfo>

        </div>
        <TextAreaWithInfo label="Description" id="description" required={false} state={props.description} setState={props.setDescription}>
          <p>This area is for writing out a description of what your character looks like.</p>
        </TextAreaWithInfo>
      </div>

      <BulletDropList entries={["Locess", "Mausca", "Isser", "Matari", "Slated", "Ungal"]} state={props.species} setState={props.setSpecies} placeholder="Species*" info={<>
        <p>Selecting a species will determine your stats. There are four stats: Nimble, Tough, Competence, and Constitution.</p>

        <p><strong>Nimble</strong> defines your character&apos;s agility. Nimble is used to move quickly, jump over objects, dodge, and for any other actions that require more finesse.</p>

        <p><strong>Tough</strong> defines your character&apos;s physical strength. Tough is used to lift and move heavy objects, wrestle other creatures, and for any other actions that require more strength.</p>

        <p><strong>Competence</strong> defines your character&apos;s ability to act under pressure, read situations, and see things that other people wouldn&apos;t. It will be used in moments of pressure and crisis.</p>

        <p><strong>Constitution</strong> defines your ability to endure stress. It us used to fend off poisons, resist disease and addiction, to exert yourself for extended periods of time, and for any other actions that require resistance or endurance.</p></>} />

      {props.species ?
        <div className="border shadow-lg p-4 mx-auto">
          {getSpeciesInfo()}
        </div> : <></>}
    </>
  )
}