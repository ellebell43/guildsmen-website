import { Character } from "@/util/types";
import Banner from "./banner";
import { Skill, BubbleRow, RollableSkill } from "@/util/components/character-sheet-components";
import DiceRollWrapper from "@/util/components/dice/dice-roll-wrapper";

export default function SkillsScreen(props: { character: Character, setCharacter: Function, setMessage: Function, setMessageGood: Function, containerClass: string, headerClass: string, setShowDice: Function, setRollMessage: Function }) {
  const { character, setCharacter, setMessage, setMessageGood, containerClass, headerClass, setShowDice, setRollMessage } = props

  return (
    <div>
      <Banner character={character} setCharacter={setCharacter} />
      <div className={`${containerClass} pb-6 w-full max-w-[500px] mx-auto mt-4 block`}>
        <h2 className={headerClass}>Skills</h2>

        {/* 
        === TODO ===
      [ ] - Add specialty character values
        */}

        <div className="grid grid-cols-2 gap-x-2 gap-y-6">
          <RollableSkill value={character.skills.craft} name="Craft" setRollMessage={setRollMessage} setShowDice={setShowDice} primarySpecialty={character.specialties.craft.primary} secondarySpecialty={character.specialties.craft.secondary} die1ID="die1" die2ID="die2" />
          <RollableSkill value={character.skills.investigate} name="Investigate" setRollMessage={setRollMessage} setShowDice={setShowDice} primarySpecialty={character.specialties.investigate.primary} secondarySpecialty={character.specialties.investigate.secondary} die1ID="die1" die2ID="die2" />
          <RollableSkill value={character.skills.leadership} name="Leadership" setRollMessage={setRollMessage} setShowDice={setShowDice} primarySpecialty={character.specialties.leadership.primary} secondarySpecialty={character.specialties.leadership.secondary} die1ID="die1" die2ID="die2" />
          <RollableSkill value={character.skills.medic} name="Medic" setRollMessage={setRollMessage} setShowDice={setShowDice} primarySpecialty={character.specialties.medic.primary} secondarySpecialty={character.specialties.medic.secondary} die1ID="die1" die2ID="die2" />
          <RollableSkill value={character.skills.myth} name="Myth" setRollMessage={setRollMessage} setShowDice={setShowDice} primarySpecialty={character.specialties.myth.primary} secondarySpecialty={character.specialties.myth.secondary} die1ID="die1" die2ID="die2" />
          <RollableSkill value={character.skills.nature} name="Nature" setRollMessage={setRollMessage} setShowDice={setShowDice} primarySpecialty={character.specialties.nature.primary} secondarySpecialty={character.specialties.nature.secondary} die1ID="die1" die2ID="die2" />
          <RollableSkill value={character.skills.performance} name="Performance" setRollMessage={setRollMessage} setShowDice={setShowDice} primarySpecialty={character.specialties.performance.primary} secondarySpecialty={character.specialties.performance.secondary} die1ID="die1" die2ID="die2" />
          <RollableSkill value={character.skills.social} name="Social" setRollMessage={setRollMessage} setShowDice={setShowDice} primarySpecialty={character.specialties.social.primary} secondarySpecialty={character.specialties.social.secondary} die1ID="die1" die2ID="die2" />
          <RollableSkill value={character.skills.sneaky} name="Sneaky" setRollMessage={setRollMessage} setShowDice={setShowDice} primarySpecialty={character.specialties.sneaky.primary} secondarySpecialty={character.specialties.sneaky.secondary} die1ID="die1" die2ID="die2" />
          <RollableSkill value={character.skills.tech} name="Tech" setRollMessage={setRollMessage} setShowDice={setShowDice} primarySpecialty={character.specialties.tech.primary} secondarySpecialty={character.specialties.tech.secondary} die1ID="die1" die2ID="die2" />
          <RollableSkill value={character.skills.throwdown} name="Throwdown" setRollMessage={setRollMessage} setShowDice={setShowDice} primarySpecialty={character.specialties.throwdown.primary} secondarySpecialty={character.specialties.throwdown.secondary} die1ID="die1" die2ID="die2" doubleCol={true} />
        </div>
      </div>
    </div>
  )
}