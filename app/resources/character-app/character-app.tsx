"use client"
import Banner from "./banner"
import { useState, useEffect } from "react"
import { Character } from "@/util/types"
import ChangesPending from "./changes-pending"
import PageFooter from "./page-footer"
import { LabelAndLine, StatRow, Bubble, BubbleRow, MythBar, Skill, LineColumn, Luck } from "@/util/components/character-sheet-components"
import DiceRollWrapper from "@/util/components/dice/dice-roll-wrapper"
import Die, { resetDie } from "@/util/components/dice/die"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX, faPlus, faMinus, faArrowLeftRotate } from "@fortawesome/free-solid-svg-icons"
import CharacterScreen from "./character-screen"
import Message from "@/util/components/message"

export default function CharacterApp(props: { character: Character }) {
  let initCharacter = props.character

  const [updating, setUpdating] = useState(false)
  const [pendingChanges, setPendingChanges] = useState(false)
  const [character, setCharacter] = useState<Character>(props.character)
  const [page, setPage] = useState<"character" | "skills" | "gear" | "details" | "notes" | "settings">("character")
  const [showDice, setShowDice] = useState(false)
  const [rollMessage, setRollMessage] = useState<React.ReactNode>()
  const [message, setMessage] = useState<string>()
  const [messageGood, setMessageGood] = useState(false)

  useEffect(() => {
    if (JSON.stringify(initCharacter) !== JSON.stringify(character)) setPendingChanges(true)
    if (character.dying) { setMessage("You are dying!"); setMessageGood(false) }
    if (character.harm == 10) { setMessage("You have died..."); setMessageGood(false) }
  }, [character])

  useEffect(() => {
    if (pendingChanges) {
      setPendingChanges(false)
      updateCharacter()
    }
  }, [pendingChanges])

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

  const updateCharacter = () => {
    if (pendingChanges) {
      setUpdating(true)
      fetch(`${process.env.NEXT_PUBLIC_HOST}/resources/character-app/api`, { method: "PATCH", headers: { characterToUpdate: JSON.stringify(character) } })
        .then(res => res.json())
        .then(data => {
          setUpdating(false)
          setPendingChanges(false)
          initCharacter = character
        })
    }
  }

  const headerClass = "text-center text-xl m-0 font-bold"
  const containerClass = "w-fit border p-2 rounded border-stone-400"

  const getPage = () => {
    switch (page) {
      case "character":
        return <CharacterScreen setCharacter={setCharacter} character={character} setRollMessage={setRollMessage} rollMessage={rollMessage} setShowDice={setShowDice} headerClass={headerClass} containerClass={containerClass} />
      case "details":
        return <>
          <Banner character={character} setCharacter={setCharacter} />
          <p>Details</p>
        </>
      case "gear":
        return <>
          <Banner character={character} setCharacter={setCharacter} />
          <p>Gear</p>
        </>
      case "notes":
        return <>
          <p>Notes</p>
        </>
      case "settings":
        return <>
          <p>Settings</p>
        </>
      case "skills":
        return <>
          <Banner character={character} setCharacter={setCharacter} />
          <p>Skills</p>
        </>
      default:
        return <></>
    }
  }

  return (
    /*
     * == MOBILE DISPLAY ==
     * - Banner with basic info across the top (name, description, guild, harm [x/10], and dying).
     * - Banner stays the same across all views
     * - If dying, have a red vignette around the screen and change harm text to bold and red
     * - 5 pages: stats, wealth, and luck; skills, exp, and addiction; gear; character backstory; notes
     * - == DESKTOP DISPLAY ==
     * - 
     */
    <div className="relative bottom-[30px] h-[calc(100vh-2px)]">
      <div className={`${!character.dying && character.harm != 10 ? "hidden" : ""} fixed inset-0 ${character.harm == 10 ? "from-transparent to-stone-800 dark:to-stone-300 via-transparent" : "from-transparent to-red-300 dark:to-red-800 via-transparent"} bg-gradient-radial opacity-50 transition-all`} />
      {getPage()}
      {/* -- DICE CONTAINER --   */}
      <div className={`fixed inset-0 bg-stone-500 bg-opacity-50 flex justify-center items-center ${showDice ? "" : "hidden"}`}>
        <div className="bg-stone-100 dark:bg-stone-700 w-[325px] h-[300px] border rounded shadow-lg relative px-2">
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
          <div className="flex justify-between px-10 mb-8 pt-12">
            <Die id="die1" />
            <Die id="die2" />
          </div>
          {rollMessage}
        </div>
      </div>
      <PageFooter active={page} setActive={setPage} />
      <Message message={message} setMessage={setMessage} good={messageGood} />
      {/* -- Dying Border -- */}
      <ChangesPending pending={pendingChanges} updating={updating} />
    </div>
  )
}