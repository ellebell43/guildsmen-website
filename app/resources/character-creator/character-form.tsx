'use client'

import { useState, useEffect } from "react"
import { Character, species, skills, stats, wealthRange, luckRange, guild, modRange } from "@/util/types";
import ErrorMessage from "@/app/error-message";
import getUserByToken from "@/util/getUserByToken";
import BasicInfo from "./basic-info";
import BackgroundInfo from "./background-info";
import StartingSkills from "./starting-skills";
import LuckAndWealth from "./luck-and-wealth";

// Initial variables for creating character skills and stats
const initSkills: skills = {
  craft: -1,
  leadership: -1,
  myth: -1,
  performance: -1,
  sneaky: -1,
  investigate: -1,
  medic: -1,
  nature: -1,
  social: -1,
  tech: -1,
  throwdown: -1
}
const initStats = { tough: -1, nimble: -1, competence: -1, constitution: -1 }

export default function CharacterForm() {
  const [page, setPage] = useState(1);
  const [validationError, setValidationError] = useState("")
  const PAGE_COUNT = 5

  // Clear error every 5 seconds if error hasn't been cleared
  useEffect(() => {
    if (validationError) setTimeout(() => setValidationError(""), 5000)
  }, [validationError])

  // new character state
  const [name, setName] = useState<string>()
  const [species, setSpecies] = useState<species>()
  const [demeanor, setDemeanor] = useState<string>()
  const [physique, setPhysique] = useState<string>()
  const [skills, setSkills] = useState<skills>(initSkills)
  const [wealth, setWealth] = useState<wealthRange>()
  const [luck, setLuck] = useState<luckRange>()
  const [guild, setGuild] = useState<guild>()
  const [addiction, setAddiction] = useState<number>()
  const [goalsAndMotives, setGoalsAndMotives] = useState<string>()
  const [flawsAndWeaknesses, setFlawsAndWeaknesses] = useState<string>()
  const [personalMorals, setPersonalMorals] = useState<string>()
  const [importantConnections, setImportantConnections] = useState<string>()
  const [backstory, setBackstory] = useState<string>()
  const [gear, setGear] = useState<string[]>([])

  // get user data
  const { data, isLoading, error } = getUserByToken()

  const getPage = () => {
    switch (page) {
      case 1:
        return <BasicInfo name={name} setName={setName} species={species} setSpecies={setSpecies} demeanor={demeanor} setDemeanor={setDemeanor} physique={physique} setPhysique={setPhysique} />
      case 2:
        return <BackgroundInfo flawsAndWeaknesses={flawsAndWeaknesses} setFlawsAndWeaknesses={setFlawsAndWeaknesses} personalMorals={personalMorals} setPersonalMorals={setPersonalMorals} importantConnections={importantConnections} setImportantConnections={setImportantConnections} goalsAndMotives={goalsAndMotives} setGoalsAndMotives={setGoalsAndMotives} />
      case 3:
        return <StartingSkills skills={skills} setSkills={setSkills} setError={setValidationError} />
      case 4:
        return <LuckAndWealth luck={luck} setLuck={setLuck} wealth={wealth} setWealth={setWealth} />
    }
  }

  const validate = () => {
    switch (page) {
      case 1:
        if (!name || !species) {
          setValidationError("Your character must have a name and species.")
          return false
        }
        return true
      case 2:
        // No validation needed on this page as all fields are completely optional
        return true
      case 3:
        let total = 0
        let keys = Object.keys(skills)
        keys.forEach(element => {
          //@ts-ignore
          total += skills[element]
        });
        if (total !== -7) {
          setValidationError("You must fill in a total of four bubbles to continue.")
          return false
        }
        return true
      case 4:
        if (!luck || wealth == undefined) {
          setValidationError("You must select your wealth and determine your luck to continue.")
          return false
        }
        return true
      default:
        return false
    }
  }

  // Create a line of bubbles as long as the PAGE_COUNT
  const getProgressBar = () => {
    let pages = []
    for (let i = 1; i <= PAGE_COUNT; i++) {
      pages.push(i)
    }
    return <div className="flex gap-1 justify-center my-2">
      {pages.map((el, i) => {
        return <div key={i} className={`border rounded-full w-4 h-4 ${el <= page ? "bg-stone-400" : "bg-stone-200"}`} />
      })}
    </div>
  }

  const submit = () => {
    return
  }

  return (
    <>
      {getPage()}
      {/* === Navigation Buttons === */}
      <div className="flex gap-4 justify-center items-center my-4">
        {/* prev */}
        <button
          className={`button m-0 w-[100px] py-2 rounded ${page == 1 ? "hidden" : ""}`}
          onClick={e => { setPage(page - 1) }}
        >
          Prev
        </button>
        {/* next */}
        <button
          className="button m-0 w-[100px] py-2 rounded"
          onClick={e => {
            if (page != PAGE_COUNT && validate()) {
              setPage(page + 1)
            } else {
              submit()
            }
          }}
        >
          {page == PAGE_COUNT ? "Submit" : "Next"}
        </button>
      </div>
      {getProgressBar()}
      <ErrorMessage message={validationError} />
    </>
  )
}