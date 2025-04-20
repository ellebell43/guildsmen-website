import { TextAreaInput } from "@/util/input-components/input-elements";
import { Character } from "@/util/types";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function NotesScreen(props: { character: Character, setCharacter: Function, isTemplate?: boolean, edit?: boolean }) {
  const [showNewNoteForm, setShowNewNoteForm] = useState(false)
  const [newNote, setNewNote] = useState("")
  const [edit, setEdit] = useState(false)
  const [index, setIndex] = useState(0)
  return (
    <div className="grid grid-cols-2 gap-2 max-w-[1000px] mx-auto">
      {/* Notes grid */}
      {props.character.notes.length > 0 ? props.character.notes.map((el, i) =>
        <button
          onClick={e => {
            setNewNote(el)
            setShowNewNoteForm(true)
            setEdit(true)
            setIndex(i)
          }}
          className="border w-full h-[210px] rounded shadow-xl p-2 text-left flex items-start relative" key={i}>
          <p className="overflow-hidden text-ellipsis m-0 h-full w-full">{el}</p>
          <div className="w-full absolute bottom-0 right-0 h-10 bg-gradient-to-t from-stone-100 dark:from-stone-700 to-transparent" />
        </button>) :
        <p>No notes yet!</p>}
      {/* Add note button */}
      <button
        onClick={e => setShowNewNoteForm(true)}
        className={`button border-2 border-stone-700 dark:border-stone-400 rounded-full shadow-lg w-[60px] h-[60px] flex justify-center items-center fixed bottom-20 right-6 ${props.isTemplate && !props.edit ? "hidden" : ""}`}
      >
        <FontAwesomeIcon icon={faPlus} className="text-[32px]" />
      </button>
      {/* New note form */}
      {!showNewNoteForm ? <></> :
        <div className="fixed inset-0 bg-stone-200 dark:bg-stone-700 bg-opacity-75 dark:bg-opacity-75 flex justify-center items-center">
          <div className="bg-stone-200 dark:bg-stone-700 border rounded shadow p-4 pt-6">
            <TextAreaInput label={"New note"} required={false} id={"new note"} setState={setNewNote} state={newNote} />
            <div className="flex justify-center items-center gap-4 mt-4">
              <button className="button border shadow w-[120px] text-center py-2 rounded" onClick={e => { setShowNewNoteForm(false); setNewNote("") }}>Cancel</button>
              <button
                className="button border shadow w-[120px] text-center py-2 rounded"
                onClick={e => {
                  let newCharacter = { ...props.character }
                  if (!edit) {
                    newCharacter.notes.push(newNote)
                    setNewNote("")
                    setShowNewNoteForm(false)
                  } else {
                    newCharacter.notes[index] = newNote
                    setNewNote("")
                    setEdit(false)
                    setShowNewNoteForm(false)
                  }
                  props.setCharacter(newCharacter)
                }}
              >
                Save
              </button>

            </div>
            {!edit ? <></> :
              <button
                className="button border shadow w-[120px] text-center py-2 rounded mt-2"
                onClick={e => {
                  let newCharacter = { ...props.character }
                  newCharacter.notes.splice(index, 1)
                  setEdit(false)
                  setShowNewNoteForm(false)
                  setNewNote("")
                  props.setCharacter(newCharacter)
                }}
              >
                Delete
              </button>}
          </div>
        </div>}
    </div>
  )
}