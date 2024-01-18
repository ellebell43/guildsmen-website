"use client"
import Banner from "./banner"
import { useState, useEffect } from "react"
import { Character } from "@/util/types"
import PageFooter from "./page-footer"
import Die, { resetDie } from "@/util/components/dice/die"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"
import CharacterScreen from "./character-screen"
import Message from "@/util/components/message"
import SkillsScreen from "./skills-screen"
import Settings from "./settings"
import GearScreen from "./gear-screen"
import DetailsScreen from "./details-screen"
import NotesScreen from "./notes-screen"
import getCookieString from "@/util/getCookieString"

export default function CharacterApp(props: { character: Character }) {
  // I changed the initial reference array to the notes property to be a brand new object manually here since 
  // for some reason the initial reference and the actual character object notes array reference were the same object
  // even though init is set to a brand new object.
  let init = { ...props.character }
  init.notes = [...init.notes]

  const [character, setCharacter] = useState<Character>(props.character)
  const [page, setPage] = useState<"character" | "skills" | "gear" | "details" | "notes" | "settings">("character")
  const [showDice, setShowDice] = useState(false)
  const [rollMessage, setRollMessage] = useState<React.ReactNode>()
  const [message, setMessage] = useState<string>()
  const [messageGood, setMessageGood] = useState(false)
  const [edit, setEdit] = useState(false)

  // Update character in the database anytime a change is made to the character data
  useEffect(() => {
    let ok = true
    fetch(`${process.env.NEXT_PUBLIC_HOST}/resources/character-app/api`, { method: "PATCH", headers: { characterToUpdate: JSON.stringify(character) } })
      .then(res => {
        if (!res.ok) ok = false
        return res.json()
      })
      .then(data => {
        if (!ok) throw new Error(data.message)
      })
    if (character.dying) { setMessage("You are dying!"); setMessageGood(false) }
    if (character.harm == 10) { setMessage("You have died..."); setMessageGood(false) }
  }, [character])

  // Automatically increase addiction meter if character is addicted to myth anytime the dice are rolled
  useEffect(() => {
    if (rollMessage && character.addiction >= 3) {
      let maxNeed: number = 8 - Math.floor(character.addiction / 3) + 1
      let newCharacter = { ...character }
      if (!character.need) {
        newCharacter.need = 1
        //@ts-expect-error
        setCharacter(newCharacter)
      } else if (character.need < maxNeed) {
        setMessage("Increasing addiction need.")
        setMessageGood(false)
        newCharacter.need++
        // @ts-expect-error
        setCharacter(newCharacter)
      } else if (character.need >= maxNeed) {
        setMessage("Maximum addiction need exceeded. Please see the Myth chapter for details.")
        setMessageGood(false)
      }
    }
  }, [rollMessage])

  const headerClass = "text-center text-xl m-0 font-bold"
  const containerClass = "w-fit border p-2 rounded border-stone-400"

  const getPage = () => {
    switch (page) {
      case "character":
        return <CharacterScreen setCharacter={setCharacter} character={character} setRollMessage={setRollMessage} rollMessage={rollMessage} setShowDice={setShowDice} headerClass={headerClass} containerClass={containerClass} setMessage={setMessage} setMessageGood={setMessageGood} edit={edit} />
      case "details":
        return <>
          <DetailsScreen character={character} setCharacter={setCharacter} edit={edit} />
        </>
      case "gear":
        return <>
          <Banner character={character} setCharacter={setCharacter} />
          <GearScreen character={character} setCharacter={setCharacter} />
        </>
      case "notes":
        return <>
          <NotesScreen character={character} setCharacter={setCharacter} />
        </>
      case "settings":
        return <>
          <Settings edit={edit} setEdit={setEdit} />
        </>
      case "skills":
        return <>
          <SkillsScreen character={character} setCharacter={setCharacter} setMessage={setMessage} setMessageGood={setMessageGood} containerClass={containerClass} headerClass={headerClass} setShowDice={setShowDice} setRollMessage={setRollMessage} edit={edit} />
        </>
      default:
        return <></>
    }
  }

  return (
    < div className="relative bottom-[30px] min-h-[calc(100vh-2px)] lg:pt-10 pt-5" >
      {/* -- DEATH/DYING VIGNETTE -- */}
      <div className={`${!character.dying && character.harm != 10 ? "hidden" : ""} fixed inset-0 ${character.harm == 10 ? "from-transparent to-stone-800 dark:to-stone-300 via-transparent" : "from-transparent to-red-300 dark:to-red-800 via-transparent"} bg-gradient-radial opacity-50 transition-all`} />
      {/* -- ACTIVE SCREEN -- */}
      {getPage()}
      {/* -- DICE CONTAINER --   */}
      <div className={`fixed inset-0 bg-stone-500 bg-opacity-50 flex justify-center items-center ${showDice ? "" : "hidden"}`}>
        <div className="bg-stone-100 dark:bg-stone-700 w-[325px] h-[300px] border rounded shadow-lg relative px-2">
          {/* -- DICE CONTAINER CLOSE BUTTON */}
          <button
            className=" button rounded-full border w-9 h-9 absolute -top-4 -right-4 shadow"
            onClick={e => {
              setShowDice(false)
              resetDie("die1")
              resetDie("die2")
            }}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
          {/* -- THE DICE -- */}
          <div className="flex justify-between px-10 mb-8 pt-12">
            <Die id="die1" />
            <Die id="die2" />
          </div>
          {rollMessage}
        </div>
      </div>
      <PageFooter active={page} setActive={setPage} />
      <Message message={message} setMessage={setMessage} good={messageGood} />
    </div >
  )
}