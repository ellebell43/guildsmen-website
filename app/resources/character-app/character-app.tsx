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
import { faX, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"

export default function CharacterApp(props: { character: Character }) {
  let initCharacter = props.character

  const [updating, setUpdating] = useState(false)
  const [pendingChanges, setPendingChanges] = useState(false)
  const [character, setCharacter] = useState<Character>(props.character)
  const [page, setPage] = useState<"character" | "skills" | "gear" | "details" | "notes" | "settings">("character")
  const [showDice, setShowDice] = useState(false)
  const [rollMessage, setRollMessage] = useState<React.ReactNode>()

  useEffect(() => {
    if (JSON.stringify(initCharacter) !== JSON.stringify(character)) setPendingChanges(true)
  }, [character])

  useEffect(() => {
    if (pendingChanges) {
      setPendingChanges(false)
      updateCharacter()
    }
  }, [pendingChanges])

  const updateCharacter = () => {
    if (pendingChanges) {
      console.log("updating character")
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
        return <div className="flex flex-col items-center justify-center gap-4">
          <Banner character={character} setCharacter={setCharacter} />

          {/* ========== STATS ========== */}

          <div className={`${containerClass} flex flex-col justify-center items-end`}>
            <p className={`${headerClass} self-center`}>Stats</p>
            <DiceRollWrapper mod={character.stats.tough} modLabel="Tough" setShowDice={setShowDice} setRollMessage={setRollMessage} die1ID="die1" die2ID="die2">
              <StatRow stat="Tough" top={true} value={character.stats.tough} />
            </DiceRollWrapper>
            <DiceRollWrapper mod={character.stats.nimble} modLabel="Nimble" setShowDice={setShowDice} setRollMessage={setRollMessage} die1ID="die1" die2ID="die2">
              <StatRow stat="Nimble" top={true} value={character.stats.nimble} />
            </DiceRollWrapper>
            <DiceRollWrapper mod={character.stats.competence} modLabel="Competence" setShowDice={setShowDice} setRollMessage={setRollMessage} die1ID="die1" die2ID="die2">
              <StatRow stat="Competence" top={true} value={character.stats.competence} />
            </DiceRollWrapper>
            <DiceRollWrapper mod={character.stats.constitution} modLabel="Constitution" setShowDice={setShowDice} setRollMessage={setRollMessage} die1ID="die1" die2ID="die2">
              <StatRow stat="Constitution" top={true} value={character.stats.constitution} />
            </DiceRollWrapper>
          </div>
          <div className="flex justify-center items-center gap-4">

            {/* ========== LUCK ========== */}

            <div className={containerClass}>
              <DiceRollWrapper mod={character.luck} modLabel="Luck" setShowDice={setShowDice} setRollMessage={setRollMessage} die1ID="die1" die2ID="die2">
                <p className={headerClass}>Luck</p>
              </DiceRollWrapper>
              <Luck value={character.luck} />
            </div>

            {/* ========== WEALTH ========== */}

            <div className={`${containerClass} px-6`}>
              <div className="flex justify-center items-center gap-2">
                <button
                  className="opacity-50"
                  onClick={e => {
                    if (character.wealth < 4) {
                      let newCharacter = { ...character }
                      newCharacter.wealth++
                      // @ts-expect-error
                      setCharacter(newCharacter)
                    }
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <p className={headerClass}>Wealth</p>
                <button
                  className="opacity-50"
                  onClick={e => {
                    if (character.wealth > 0) {
                      let newCharacter = { ...character }
                      newCharacter.wealth--
                      // @ts-expect-error
                      setCharacter(newCharacter)
                    }
                  }}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
              </div>
              {["Destitute", "Poor", "Moderate", "Wealthy", "Exquisite"].map((el, i) => {
                return (
                  <div className="flex gap-2 items-center" key={i}>
                    <Bubble filled={i == character.wealth} />
                    <p className="m-0">{el}</p>
                  </div>
                )
              })}
            </div>
          </div>
          {/* ========== ADDICTION ========== */}
        </div>
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
      <ChangesPending pending={pendingChanges} updating={updating} />
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
    </div>
  )
}