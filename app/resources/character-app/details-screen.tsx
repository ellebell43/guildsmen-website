import PopUp from "@/util/components/pop-up";
import { TextAreaInput } from "@/util/input-components/input-elements";
import { Character } from "@/util/types";
import { faCheck, faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function DetailsScreen(props: { character: Character, setCharacter: Function, edit: boolean }) {
  let [detailToEdit, setDetailToEdit] = useState<"flaws" | "goals" | "morals" | "connections">()
  let [text, setText] = useState("")

  const Detail = (props: { type: "Goals & Motives" | "Flaws & Weaknesses" | "Personal Morals" | "Important Connections", character: Character, edit: boolean }) => {
    let text: string
    let editArg: "flaws" | "goals" | "morals" | "connections"

    switch (props.type) {
      case "Goals & Motives": text = props.character.goalsAndMotive; editArg = "goals"; break;
      case "Flaws & Weaknesses": text = props.character.flawsAndWeaknesses; editArg = "flaws"; break;
      case "Personal Morals": text = props.character.personalMorals; editArg = "morals"; break;
      case "Important Connections": text = props.character.importantConnections; editArg = "connections"; break;
    }

    const getCharacterProp = (type: "Goals & Motives" | "Flaws & Weaknesses" | "Personal Morals" | "Important Connections") => {
      switch (type) {
        case "Goals & Motives": return props.character.goalsAndMotive
        case "Flaws & Weaknesses": return props.character.flawsAndWeaknesses
        case "Personal Morals": return props.character.personalMorals
        case "Important Connections": return props.character.importantConnections
      }
    }

    return (
      <div className="border rounded px-4 py-2 mb-6 relative">
        <button
          className={`button border rounded-full shadow w-[20px] h-[20px] p-4 flex justify-center items-center absolute -bottom-4 -right-4 bg-stone-100 dark:bg-stone-700 ${props.edit ? "" : "hidden"}`}
          onClick={e => { setDetailToEdit(editArg); setText(getCharacterProp(props.type)) }}
        >
          <FontAwesomeIcon icon={faPencil} />
        </button>
        <h2 className="bg-stone-100 dark:bg-stone-700 text-base px-2 py-1 absolute -top-8 left-2">{props.type}</h2>
        <p className="whitespace-pre-wrap h-[150px] lg:h-[300px] overflow-y-scroll overflow-x-clip">{getCharacterProp(props.type)}</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 gap-4 pt-4">

      <Detail type="Goals & Motives" character={props.character} edit={props.edit} />
      <Detail type="Flaws & Weaknesses" character={props.character} edit={props.edit} />
      <Detail type="Personal Morals" character={props.character} edit={props.edit} />
      <Detail type="Important Connections" character={props.character} edit={props.edit} />

      {/* == EDIT POP UP == */}

      {!detailToEdit ? <></> : <div className="fixed inset-0 bg-opacity-70 bg-stone-100 dark:bg-stone-600 flex justify-center items-center flex-col z-30">
        <div className="relative bg-stone-100 dark:bg-stone-700">
          <button
            className={`button border rounded-full shadow w-[20px] h-[20px] p-4 flex justify-center items-center absolute -bottom-4 -left-4 bg-stone-100 dark:bg-stone-700 z-30`}
            onClick={e => {
              setDetailToEdit(undefined)
              setText("")
            }}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
          <TextAreaInput label="Edit Detail" required={false} id="editor" setState={setText} state={text} />
          <button
            className={`button border rounded-full shadow w-[20px] h-[20px] p-4 flex justify-center items-center absolute -bottom-4 -right-4 bg-stone-100 dark:bg-stone-700 z-30`}
            onClick={e => {
              let newCharacter = { ...props.character }
              switch (detailToEdit) {
                case "connections":
                  newCharacter.importantConnections = text
                  break
                case "flaws":
                  newCharacter.flawsAndWeaknesses = text
                  break
                case "goals":
                  newCharacter.goalsAndMotive = text
                  break
                case "morals":
                  newCharacter.personalMorals = text
                  break
              }
              props.setCharacter(newCharacter)
              setDetailToEdit(undefined)
              setText("")
            }}
          >
            <FontAwesomeIcon icon={faCheck} />
          </button>
        </div>
      </div>}
    </div>
  )
}