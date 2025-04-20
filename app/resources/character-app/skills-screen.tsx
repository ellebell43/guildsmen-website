import { Character } from "@/util/types";
import Banner from "./banner";
import { Skill, BubbleRow, RollableSkill } from "@/util/components/character-sheet-components";
import DiceRollWrapper from "@/util/components/dice/dice-roll-wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function SkillsScreen(props: { character: Character, setCharacter: Function, setMessage: Function, setMessageGood: Function, containerClass: string, headerClass: string, setShowDice: Function, setRollMessage: Function, edit: boolean, isTemplate?: boolean }) {
  const { character, setCharacter, setMessage, setMessageGood, containerClass, headerClass, setShowDice, setRollMessage, edit, isTemplate } = props

  return (
    <div className="flex flex-col md:flex-col-reverse justify-center items-center gap-4">
      {/* Experience */}
      <div className={isTemplate ? "hidden" : ""}>
        <div className={`${containerClass}`}>
          <h2 className={headerClass}>Experience</h2>
          <div className="border border-black rounded-[100%] w-1/2 flex flex-col justify-center items-start h-10 my-2 mx-auto relative">
            <p className="text-[10px] text-stone-400 m-0 mt-1 text-center mx-auto">Points</p>
            <p className="m-0 text-center w-full relative bottom-1">{character.experience}</p>
            <button
              className="opacity-25 absolute -right-5"
              onClick={e => {
                let newCharacter = { ...character }
                if (character.experience > 0) {
                  newCharacter.experience--
                  setCharacter(newCharacter)
                }
              }}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </div>
          <div className="flex gap-2">
            <button
              className="opacity-25"
              onClick={e => {
                let newCharacter = { ...character }
                if (newCharacter.experienceProgress < 3) {
                  newCharacter.experienceProgress++
                  setCharacter(newCharacter)
                } else {
                  newCharacter.experience++
                  newCharacter.experienceProgress = 0
                  setCharacter(newCharacter)
                }
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <BubbleRow length={4} fill={character.experienceProgress} />
            <button
              className="opacity-25"
              onClick={e => {
                let newCharacter = { ...character }
                if (newCharacter.experienceProgress > 0) {
                  newCharacter.experienceProgress--
                  setCharacter(newCharacter)
                }
              }}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </div>
        </div>
      </div>

      <div className={`${containerClass} pb-6 w-full max-w-[500px] mx-auto mt-4 block`}>
        <h2 className={headerClass}>Skills</h2>
        <div className="grid grid-cols-2 gap-x-2 gap-y-6 w-full">
          <RollableSkill value={character.skills.craft} name="craft" setRollMessage={setRollMessage} setShowDice={setShowDice} primarySpecialty={character.specialties.craft.primary} secondarySpecialty={character.specialties.craft.secondary} die1ID="die1" die2ID="die2" character={character} setCharacter={setCharacter} edit={edit} isTemplate={isTemplate} />
          <RollableSkill value={character.skills.investigate} name="investigate" setRollMessage={setRollMessage} setShowDice={setShowDice} primarySpecialty={character.specialties.investigate.primary} secondarySpecialty={character.specialties.investigate.secondary} die1ID="die1" die2ID="die2" character={character} setCharacter={setCharacter} edit={edit} isTemplate={isTemplate} />
          <RollableSkill value={character.skills.leadership} name="leadership" setRollMessage={setRollMessage} setShowDice={setShowDice} primarySpecialty={character.specialties.leadership.primary} secondarySpecialty={character.specialties.leadership.secondary} die1ID="die1" die2ID="die2" character={character} setCharacter={setCharacter} edit={edit} isTemplate={isTemplate} />
          <RollableSkill value={character.skills.medic} name="medic" setRollMessage={setRollMessage} setShowDice={setShowDice} primarySpecialty={character.specialties.medic.primary} secondarySpecialty={character.specialties.medic.secondary} die1ID="die1" die2ID="die2" character={character} setCharacter={setCharacter} edit={edit} isTemplate={isTemplate} />
          <RollableSkill value={character.skills.nature} name="nature" setRollMessage={setRollMessage} setShowDice={setShowDice} primarySpecialty={character.specialties.nature.primary} secondarySpecialty={character.specialties.nature.secondary} die1ID="die1" die2ID="die2" character={character} setCharacter={setCharacter} edit={edit} isTemplate={isTemplate} />
          <RollableSkill value={character.skills.performance} name="performance" setRollMessage={setRollMessage} setShowDice={setShowDice} primarySpecialty={character.specialties.performance.primary} secondarySpecialty={character.specialties.performance.secondary} die1ID="die1" die2ID="die2" character={character} setCharacter={setCharacter} edit={edit} isTemplate={isTemplate} />
          <RollableSkill value={character.skills.social} name="social" setRollMessage={setRollMessage} setShowDice={setShowDice} primarySpecialty={character.specialties.social.primary} secondarySpecialty={character.specialties.social.secondary} die1ID="die1" die2ID="die2" character={character} setCharacter={setCharacter} edit={edit} isTemplate={isTemplate} />
          <RollableSkill value={character.skills.sneaky} name="sneaky" setRollMessage={setRollMessage} setShowDice={setShowDice} primarySpecialty={character.specialties.sneaky.primary} secondarySpecialty={character.specialties.sneaky.secondary} die1ID="die1" die2ID="die2" character={character} setCharacter={setCharacter} edit={edit} isTemplate={isTemplate} />
          <RollableSkill value={character.skills.stardew} name="stardew" setRollMessage={setRollMessage} setShowDice={setShowDice} primarySpecialty={character.specialties.stardew.primary} secondarySpecialty={character.specialties.stardew.secondary} die1ID="die1" die2ID="die2" character={character} setCharacter={setCharacter} edit={edit} isTemplate={isTemplate} />
          <RollableSkill value={character.skills.tech} name="tech" setRollMessage={setRollMessage} setShowDice={setShowDice} primarySpecialty={character.specialties.tech.primary} secondarySpecialty={character.specialties.tech.secondary} die1ID="die1" die2ID="die2" character={character} setCharacter={setCharacter} edit={edit} isTemplate={isTemplate} />
          <RollableSkill value={character.skills.throwdown} name="throwdown" setRollMessage={setRollMessage} setShowDice={setShowDice} primarySpecialty={character.specialties.throwdown.primary} secondarySpecialty={character.specialties.throwdown.secondary} die1ID="die1" die2ID="die2" doubleCol={true} character={character} setCharacter={setCharacter} edit={edit} isTemplate={isTemplate} />
        </div>
      </div>
    </div>
  )
}