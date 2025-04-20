import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Character, guild, species } from "../types";
import { faCheck, faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { TextInput } from "../input-components/input-elements";
import Message from "./message";
import BulletDropList from "../input-components/bullet-drop-list";

export default function CharacterAppName(props: { character: Character, setCharacter: Function, edit: boolean }) {
  const { character, setCharacter, edit } = props

  // global state variables
  let [showEditBox, setShowEditBox] = useState(false)
  let [message, setMessage] = useState<string>()

  // Construct description string
  const getDescription = (el: Character): string => {
    if (el.demeanor.trim() && el.physique.trim()) return `A ${el.physique.trim()}, ${el.demeanor.trim()} ${el.species}`
    if (el.demeanor.trim()) return `A ${el.demeanor.trim()} ${el.species}`
    if (el.physique.trim()) return `A ${el.physique.trim()} ${el.species}`
    return el.species
  }

  // Edit pop-up for name, description, and guild changes
  const EditBox = () => {
    // Local state variables
    let [nameInput, setNameInput] = useState(character.name)
    let [demeanorInput, setDemeanorInput] = useState(character.demeanor)
    let [physiqueInput, setPhysiqueInput] = useState(character.physique)
    let [guildInput, setGuildInput] = useState<guild>(character.guild)
    let [speciesInput, setSpeciesInput] = useState<species>(character.species)
    let [error, setError] = useState("")

    // Clear inputs from the edit box
    const clearInputs = () => {
      setNameInput(character.name)
      setDemeanorInput(character.demeanor)
      setPhysiqueInput(character.physique)
      setGuildInput(character.guild)
    }

    if (!showEditBox) return <></>
    return (
      <div className="fixed inset-0 bg-opacity-70 bg-stone-100 dark:bg-stone-600 flex justify-center items-center flex-col z-30">
        <div className="relative bg-stone-100 dark:bg-stone-700 border rounded p-8">
          {/* Cancel button, hide edit and clear inputs */}
          <button
            className={`button border rounded-full shadow w-[20px] h-[20px] p-4 flex justify-center items-center absolute -bottom-4 -left-4 bg-stone-100 dark:bg-stone-700 z-30`}
            onClick={e => { setShowEditBox(false); clearInputs(); }}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
          {/* Inputs for editing */}
          <TextInput label="Name" required={false} id="nameInput" setState={setNameInput} state={nameInput} />
          <TextInput label="Demeanor" required={false} id="demeanorInput" setState={setDemeanorInput} state={demeanorInput} />
          <TextInput label="Physique" required={false} id="physiqueInput" setState={setPhysiqueInput} state={physiqueInput} />
          <BulletDropList entries={["Assassins", "Starborne Hunters", "Explorers", "Mercenaries", "Thieves"]} state={guildInput} setState={setGuildInput} placeholder="Guild" />
          <BulletDropList entries={["Locess", "Mausca", "Isser", "Matari", "Slated", "Ungal"]} state={speciesInput} setState={setSpeciesInput} placeholder="Species" />
          {/* Confirm Button, hide edit and push inputs */}
          <button
            className={`button border rounded-full shadow w-[20px] h-[20px] p-4 flex justify-center items-center absolute -bottom-4 -right-4 bg-stone-100 dark:bg-stone-700 z-30`}
            onClick={e => {
              // Check for blank names
              if (!Boolean(nameInput.trim())) {
                setError("Your character must have a name.")
              } else {
                let newCharacter = { ...character }

                newCharacter.name = nameInput
                newCharacter.demeanor = demeanorInput
                newCharacter.physique = physiqueInput
                newCharacter.guild = guildInput
                newCharacter.species = speciesInput

                setCharacter(newCharacter)
                setShowEditBox(false)
              }
            }}
          >
            <FontAwesomeIcon icon={faCheck} />
          </button>
        </div>

        <Message good={false} message={error} setMessage={setError} />
      </div>
    )
  }

  const EditButton = (props: { edit: boolean }) => {
    const { edit } = props
    if (!edit) return <></>
    return (
      <button
        className={`button border rounded-full shadow w-[30px] h-[30px] left-[50px] flex justify-center items-center bg-stone-100 dark:bg-stone-700`}
        onClick={e => { setShowEditBox(true) }}
      >
        <FontAwesomeIcon icon={faPencil} />
      </button>
    )
  }

  return (
    <div className="flex flex-row-reverse items-center">
      <EditButton edit={edit} />
      <div className="pr-6">
        <p className="overflow-clip whitespace-nowrap m-0 text-xl font-bold">{character.name}</p>
        <p className="overflow-clip whitespace-nowrap m-0 text-xs opacity-75 italic">{getDescription(character)}</p>
        <p className="overflow-clip whitespace-nowrap m-0 text-xs opacity-60">{character.guild} Guild</p>
      </div>
      <EditBox />
    </div>
  )
}