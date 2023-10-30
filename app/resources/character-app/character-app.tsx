"use client"
import Banner from "./banner"
import { useState, useEffect } from "react"
import { Character } from "@/util/types"
import ChangesPending from "./changes-pending"
import PageFooter from "./page-footer"

export default function CharacterApp(props: { character: Character }) {
  let initCharacter = props.character

  const [updating, setUpdating] = useState(false)
  const [pendingChanges, setPendingChanges] = useState(false)
  const [character, setCharacter] = useState<Character>(props.character)
  const [page, setPage] = useState<"character" | "skills" | "gear" | "details" | "notes" | "settings">("character")

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
    <div className="relative bottom-[30px]">
      <Banner character={character} setCharacter={setCharacter} />
      <ChangesPending pending={pendingChanges} updating={updating} />
      <PageFooter active={page} setActive={setPage} />
    </div>
  )
}