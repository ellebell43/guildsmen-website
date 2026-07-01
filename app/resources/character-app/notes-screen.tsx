import { TextAreaInput } from "@/util/input-components/input-elements";
import { Character } from "@/util/types";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Markdown from "react-markdown"

export default function NotesScreen(props: { character: Character, setCharacter: Function, isTemplate?: boolean, edit?: boolean }) {
  const [showNewNoteForm, setShowNewNoteForm] = useState(false)
  const [newNote, setNewNote] = useState("")
  const [markdownView, setMarkdownView] = useState(false)
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
            setMarkdownView(true)
            setEdit(true)
            setIndex(i)
          }}
          className="border w-full h-[210px] rounded shadow-xl p-2 text-left items-start relative overflow-hidden" key={i}>
          <Markdown>{el}</Markdown>
          {/* <p className="overflow-hidden text-ellipsis m-0 h-full w-full">{el}</p> */}
          <div className="w-full absolute bottom-0 right-0 h-10 bg-gradient-to-t from-stone-100 dark:from-stone-700 to-transparent" />
        </button>) :
        <p>No notes yet!</p>}

      {/* Add note button */}
      <button
        onClick={e => { setShowNewNoteForm(true); setMarkdownView(false) }}
        className={`button border-2 border-stone-700 dark:border-stone-400 rounded-full shadow-lg w-[60px] h-[60px] flex justify-center items-center fixed bottom-20 right-6 ${props.isTemplate && !props.edit ? "hidden" : ""}`}
      >
        <FontAwesomeIcon icon={faPlus} className="text-[32px]" />
      </button>

      {/* New note form */}
      {!showNewNoteForm ? <></> :
        // Shadow box
        <div className="fixed inset-0 bg-stone-200 dark:bg-stone-700 bg-opacity-75 dark:bg-opacity-75 flex justify-center items-center">
          {/* Content container */}
          <div className="bg-stone-200 dark:bg-stone-700 border rounded shadow p-4 pt-6 w-3/4 h-3/4">
            <div className="h-3/4">
              {markdownView ?
                <div className="border text-inherit bg-inherit shadow-sm rounded w-full h-full overflow-scroll p-2">
                  <Markdown>{newNote}</Markdown>
                </div> :
                <TextAreaInput label={"New note"} required={false} id={"new note"} setState={setNewNote} state={newNote} maximized={true} />
              }
            </div>

            {/* buttons container */}
            <div className="h-1/4 mt-4">
              <div className="flex justify-center items-center gap-4 w-fit mx-auto">
                <button className="button border shadow w-[120px] text-center py-2 rounded" onClick={e => { setShowNewNoteForm(false); setNewNote("") }}>Cancel</button>
                <button
                  className="button border shadow w-[120px] text-center py-2 rounded"
                  onClick={e => {
                    if (markdownView) {
                      setMarkdownView(false)
                      return
                    }
                    let newCharacter = { ...props.character }
                    if (!edit) {
                      newCharacter.notes.push(newNote)
                      setMarkdownView(true)
                    } else {
                      newCharacter.notes[index] = newNote
                      setEdit(false)
                      setMarkdownView(true)
                    }
                    props.setCharacter(newCharacter)
                  }}
                >
                  {markdownView ? "Edit" : "Save"}
                </button>
              </div>

              {markdownView || !edit ? <></> :
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
          </div>
        </div>}
    </div>
  )
}