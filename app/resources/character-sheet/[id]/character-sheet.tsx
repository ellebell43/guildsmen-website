"use client"

import { useEffect } from "react"
import { LabelAndLine, StatRow, Bubble, BubbleRow, MythBar, Skill, LineColumn } from "@/util/components/character-sheet-components"
import { useSearchParams } from "next/navigation"
import { Character } from "@/util/types"
import ErrorMessage from "@/app/error-message"

const labelStyle = "m-0"
const borderStyle = "border rounded-lg border-stone-400 shadow-sm p-2 pt-2 flex flex-col justify-center"
const headerStyle = "m-0 text-[24px]"
const modifierStyle = "text-xs m-0"

export default function CharacterSheet(props: { character?: Character, error?: string }) {
  useEffect(() => {
    document.getElementById("header")?.classList.add("hidden")
    document.getElementById("footer")?.classList.add("hidden")
    document.getElementById("footer")?.classList.remove("lg:grid")
    document.getElementById("main")?.classList.add("m-0", "p-0")
    document.getElementById("main")?.classList.remove("pt-5",)
  }, [])

  const character = props.character

  return (
    <div className="flex flex-col justify-center items-center w-fit">
      {props.error ? <ErrorMessage message={props.error} /> : <></>}

      {/* First page */}
      <div className="bg-white w-[8.5in] h-[11in] mx-auto border-stone-300 border relative shadow-xl p-[.5in]">
        <h1 className="m-0 text-[48px] text-center mb-8">Guildsmen</h1>

        <div className="flex justify-center gap-4 mb-4">
          {/* ========== CHARACTER ========== */}

          <div className={`w-[3in] ${borderStyle}`}>
            <h2 className={headerStyle}>Character</h2>
            <LabelAndLine label="Name" contents={character ? character.name : ""} />
            <LabelAndLine label="Species" contents={character ? character.species : ""} />
            <LabelAndLine label="Physique" contents={character ? character.physique : ""} />
            <LabelAndLine label="Demeanor" contents={character ? character.demeanor : ""} />
          </div>

          {/* ========== STATS ========== */}

          <div className={`${borderStyle}`}>
            <h2 className={headerStyle}>Stats</h2>
            <div>
              <StatRow stat="Tough" top={true} value={character ? character.stats.tough : undefined} />
              <StatRow stat="Nimble" value={character ? character.stats.nimble : undefined} />
              <StatRow stat="Competence" value={character ? character.stats.competence : undefined} />
              <StatRow stat="Constitution" value={character ? character.stats.constitution : undefined} />
              <StatRow stat="Spirit" value={character ? character.stats.spirit : undefined} />
            </div>
          </div>

          {/* ========== WEALTH ========== */}

          <div className={`${borderStyle} px-6`}>
            <h2 className={headerStyle}>Wealth</h2>
            {["Destitute", "Poor", "Moderate", "Wealthy", "Exquisite"].map((el, i) => {
              let wealthMod = character?.wealth
              let wealth: "Destitute" | "Poor" | "Moderate" | "Wealthy" | "Exquisite"

              switch (wealthMod) {
                case 0: wealth = "Destitute"; break;
                case 1: wealth = "Poor"; break;
                case 2: wealth = "Moderate"; break;
                case 3: wealth = "Wealthy"; break;
                case 4: wealth = "Exquisite"; break;
                default: wealth = "Destitute"
              }

              return (
                <div className="flex gap-2 items-center" key={i}>
                  <Bubble filled={el === wealth} />
                  <p className="m-0">{el}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex flex-row-reverse gap-4 justify-center">
          <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-row-reverse justify-center items-center gap-4">
              {/* ========== HARM ========== */}

              <div className={`${borderStyle} flex flex-col justify-center items-center gap-2 h-fit`}>
                <h2 className={headerStyle}>Harm</h2>
                <BubbleRow length={5} fill={0} />
                <BubbleRow length={5} fill={0} />
                <div className="flex gap-2 justify-center items-center">
                  <p className="text-xs text-red-600 m-0">Dying</p>
                  <Bubble red={true} />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {/* ========== LUCK ========== */}

                <div className={` ${borderStyle}`}>
                  <h2 className={headerStyle}>Luck</h2>
                  <div>
                    <div className="flex justify-between items-center px-1">
                      {["-3", "-2", "-1", "+1", "+2", "+3"].map(
                        (el, i) => <p key={i} className={modifierStyle}>{el}</p>
                      )}
                    </div>
                    <BubbleRow length={6} fill={!character ? 1 : character.luck < 0 ? character.luck + 4 : character.luck + 3}
                      fillOne={true} />
                  </div>
                </div>

                {/* ========== EXPERIENCE ========== */}

                <div className={`${borderStyle}`}>
                  <h2 className={headerStyle}>Experience</h2>
                  <div className="border border-black rounded-[100%] w-1/2 flex justify-center items-start h-10 mb-2 mx-auto">
                    <p className="text-[10px] text-stone-400 m-0 mt-1">Points</p>
                  </div>
                  <BubbleRow length={4} fill={0} />
                </div>

              </div>
            </div>

            {/* ========== ADDICTION ========== */}

            <div className={`${borderStyle} relative h-fit w-fit`}>
              <h2 className={headerStyle}>Myth Addiction</h2>
              <p className="text-center m-0">Level</p>
              <MythBar />
              <div className="mt-1 relative left-[17px] mr-4">
                <BubbleRow length={8} fill={0} customFlex="justify-end items-center gap-[9px]" />
              </div>
              <p className="m-0 text-center">Need</p>
              <div className="absolute bottom-[35px] right-[4px]">
                <p className="text-center text-xs m-0">&#x25B2;</p>
                <p className="text-center text-[10px] relative bottom-1 m-0">Start</p>
              </div>
              <div className="flex gap-2 items-center justify-center mt-2">
                <p className="text-xs m-0">Uses Available</p>
                <div className="border w-[30px] h-[25px]" />
              </div>
            </div>
          </div>

          {/* ========== SKILLS ========== */}

          <div className={`${borderStyle} pb-6`}>
            <h2 className={headerStyle}>Skills</h2>

            <div className="grid grid-cols-2 gap-x-2 gap-y-6">
              <Skill name="Craft" value={character ? character.skills.craft : undefined} primarySpecialty={character ? character.specialties.craft.primary : undefined} secondarySpecialty={character ? character.specialties.craft.secondary : undefined} />
              <Skill name="Investigate" value={character ? character.skills.investigate : undefined} primarySpecialty={character ? character.specialties.investigate.primary : undefined} secondarySpecialty={character ? character.specialties.investigate.secondary : undefined} />
              <Skill name="Leadership" value={character ? character.skills.leadership : undefined} primarySpecialty={character ? character.specialties.leadership.primary : undefined} secondarySpecialty={character ? character.specialties.leadership.secondary : undefined} />
              <Skill name="Medic" value={character ? character.skills.medic : undefined} primarySpecialty={character ? character.specialties.medic.primary : undefined} secondarySpecialty={character ? character.specialties.medic.secondary : undefined} />
              <Skill name="Myth" value={character ? character.skills.myth : undefined} primarySpecialty={character ? character.specialties.myth.primary : undefined} secondarySpecialty={character ? character.specialties.myth.secondary : undefined} />
              <Skill name="Nature" value={character ? character.skills.nature : undefined} primarySpecialty={character ? character.specialties.nature.primary : undefined} secondarySpecialty={character ? character.specialties.nature.secondary : undefined} />
              <Skill name="Performance" value={character ? character.skills.performance : undefined} primarySpecialty={character ? character.specialties.performance.primary : undefined} secondarySpecialty={character ? character.specialties.performance.secondary : undefined} />
              <Skill name="Social" value={character ? character.skills.social : undefined} primarySpecialty={character ? character.specialties.social.primary : undefined} secondarySpecialty={character ? character.specialties.social.secondary : undefined} />
              <Skill name="Sneaky" value={character ? character.skills.sneaky : undefined} primarySpecialty={character ? character.specialties.sneaky.primary : undefined} secondarySpecialty={character ? character.specialties.sneaky.secondary : undefined} />
              <Skill name="Tech" value={character ? character.skills.tech : undefined} primarySpecialty={character ? character.specialties.tech.primary : undefined} secondarySpecialty={character ? character.specialties.tech.secondary : undefined} />
              <Skill name="Throwdown" value={character ? character.skills.throwdown : undefined} primarySpecialty={character ? character.specialties.throwdown.primary : undefined} secondarySpecialty={character ? character.specialties.throwdown.secondary : undefined} doubleCol={true} />
            </div>
          </div>
        </div>
      </div>

      {/* Second Page */}

      <div className="bg-white w-[8.5in] h-[11in] p-[.5in] mx-auto border-stone-300 border relative shadow-xl">
        <div className="flex gap-4 justify-center">
          {/* ========== GOALS & MOTIVES ========== */}

          <div className={`${borderStyle} w-full border-2 relative`}>
            <h2 className={headerStyle}>Goals and Motives</h2>
            <LineColumn lines={10} contents={character ? character.goalsAndMotive : undefined} />
          </div>

          {/* ========== FLAWS & WEAKNESSES ========== */}

          <div className={`${borderStyle} w-full border-2 relative`}>
            <h2 className={headerStyle}>Flaws and Weaknesses</h2>
            <LineColumn lines={10} contents={character ? character.flawsAndWeaknesses : undefined} />
          </div>
        </div>

        <div className="flex gap-4 justify-center mt-4 relative">

          {/* ========== PERSONAL MORALS ========== */}

          <div className={`${borderStyle} w-full border-2 relative`}>
            <h2 className={headerStyle}>Personal Morals</h2>
            <LineColumn lines={10} contents={character ? character.personalMorals : undefined} />
          </div>

          {/* ========== IMPORTANT CONNECTIONS ========== */}

          <div className={`${borderStyle} w-full border-2 relative`}>
            <h2 className={headerStyle}>Important Connections</h2>
            <LineColumn lines={10} contents={character ? character.importantConnections : undefined} />
          </div>
        </div>

        {/* ========== GEAR ========== */}

        <div className={`mt-8 ${borderStyle} relative`}>
          <h2 className={headerStyle}>Gear</h2>
          <div className="grid grid-cols-3 gap-x-4">
            <LineColumn lines={18} contents={character ? character.gear : undefined} gear={true} />
          </div>
        </div>

        {/* ========== NOTES ========== */}
        <div className={`${borderStyle} w-full mt-4`}>
          <h2 className={headerStyle}>Notes</h2>
          <div className="grid grid-cols-2 gap-x-4">
            <LineColumn lines={16} />
          </div>
        </div>
      </div>
    </div>
  )
}