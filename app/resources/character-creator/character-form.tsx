'use client'

import { useState } from "react"
import { Character, species, skills, stats, wealthRange, luckRange, guild } from "@/util/types";
import getUserByToken from "@/util/getUserByToken";
import BasicInfo from "./basic-info";
import BackgroundInfo from "./background-info";

export default function CharacterForm() {
  const [page, setPage] = useState(1);

  // new character state
  const [name, setName] = useState<string>()
  const [species, setSpecies] = useState<species>()
  const [demeanor, setDemeanor] = useState<string>()
  const [physique, setPhysique] = useState<string>()
  const [skills, setSkills] = useState<skills>()
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

  // Initial variables for creating character skills and stats
  const initSkills = {
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

  const getPage = () => {
    switch (page) {
      case 1:
        return <BasicInfo name={name} setName={setName} species={species} setSpecies={setSpecies} demeanor={demeanor} setDemeanor={setDemeanor} physique={physique} setPhysique={setPhysique} />
      case 2:
        return <BackgroundInfo flawsAndWeaknesses={flawsAndWeaknesses} setFlawsAndWeaknesses={setFlawsAndWeaknesses} personalMorals={personalMorals} setPersonalMorals={setPersonalMorals} importantConnections={importantConnections} setImportantConnections={setImportantConnections} goalsAndMotives={goalsAndMotives} setGoalsAndMotives={setGoalsAndMotives} />
    }
  }

  return (
    <>
      {getPage()}
    </>
  )
}