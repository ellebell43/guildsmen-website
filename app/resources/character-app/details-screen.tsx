import PopUp from "@/util/components/pop-up";
import { TextAreaInput } from "@/util/input-components/input-elements";
import { Character } from "@/util/types";
import { faCheck, faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function DetailsScreen(props: { character: Character, setCharacter: Function, edit: boolean }) {
  let [detailToEdit, setDetailToEdit] = useState<"flaws" | "goals" | "morals" | "connections">()
  let [text, setText] = useState("")

  return (
    <div className="grid md:grid-cols-2">
      <div className="border rounded px-4 py-2 mb-6 relative">
        <button
          className={`button border rounded-full shadow w-[20px] h-[20px] p-4 flex justify-center items-center absolute -bottom-4 -right-4 bg-stone-100 dark:bg-stone-700 ${props.edit ? "" : "hidden"}`}
          onClick={e => { setDetailToEdit("goals"); setText(props.character.goalsAndMotive) }}
        >
          <FontAwesomeIcon icon={faPencil} />
        </button>
        <h2 className="bg-stone-100 dark:bg-stone-700 text-base px-2 py-1 absolute -top-8 left-2">Goals & Motives</h2>
        <p>{props.character.goalsAndMotive}</p>
      </div>
      <div className="border rounded px-4 py-2 mb-6 relative">
        <button
          className={`button border rounded-full shadow w-[20px] h-[20px] p-4 flex justify-center items-center absolute -bottom-4 -right-4 bg-stone-100 dark:bg-stone-700 ${props.edit ? "" : "hidden"}`}
          onClick={e => { setDetailToEdit("flaws"); setText(props.character.flawsAndWeaknesses) }}
        >
          <FontAwesomeIcon icon={faPencil} />
        </button>
        <h2 className="bg-stone-100 dark:bg-stone-700 text-base px-2 py-1 absolute -top-8 left-2">Flaws & Weaknesses</h2>
        <p>{props.character.flawsAndWeaknesses}</p>
      </div>
      <div className="border rounded px-4 py-2 mb-6 relative">
        <button
          className={`button border rounded-full shadow w-[20px] h-[20px] p-4 flex justify-center items-center absolute -bottom-4 -right-4 bg-stone-100 dark:bg-stone-700 ${props.edit ? "" : "hidden"}`}
          onClick={e => { setDetailToEdit("morals"); setText(props.character.personalMorals) }}
        >
          <FontAwesomeIcon icon={faPencil} />
        </button>
        <h2 className="bg-stone-100 dark:bg-stone-700 text-base px-2 py-1 absolute -top-8 left-2">Personal Morals</h2>
        <p>{props.character.personalMorals}</p>
      </div>
      <div className="border rounded px-4 py-2 mb-6 relative">
        <button
          className={`button border rounded-full shadow w-[20px] h-[20px] p-4 flex justify-center items-center absolute -bottom-4 -right-4 bg-stone-100 dark:bg-stone-700 ${props.edit ? "" : "hidden"}`}
          onClick={e => { setDetailToEdit("connections"); setText(props.character.importantConnections) }}
        >
          <FontAwesomeIcon icon={faPencil} />
        </button>
        <h2 className="bg-stone-100 dark:bg-stone-700 text-base px-2 py-1 absolute -top-8 left-2">Important Connections</h2>
        <p>{props.character.importantConnections}</p>
      </div>

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