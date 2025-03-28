import { Character } from "@/util/types";
import Banner from "./banner";
import DiceRollWrapper from "@/util/components/dice/dice-roll-wrapper";
import { StatRow, Luck, Bubble, BubbleRow, StardewBar, RollableStatRow } from "@/util/components/character-sheet-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faArrowLeftRotate } from "@fortawesome/free-solid-svg-icons";

export default function CharacterScreen(props: { character: Character, setCharacter: Function, setRollMessage: Function, rollMessage: React.ReactNode, setShowDice: Function, headerClass: string, containerClass: string, setMessage: Function, setMessageGood: Function, edit: boolean, banner: boolean }) {
  const { character, setCharacter, setRollMessage, rollMessage, setShowDice, headerClass, containerClass, setMessage, setMessageGood, edit, banner } = props

  return (
    <div className="flex flex-col items-center mt-4 gap-4">
      {banner ? <Banner character={character} setCharacter={setCharacter} edit={props.edit} /> : <></>}

      {/* ========== STATS ========== */}

      <div className={`${containerClass} flex flex-col justify-center items-end`}>
        <p className={`${headerClass} self-center`}>Stats</p>
        <RollableStatRow stat={"tough"} value={character.stats.tough} edit={edit} setShowDice={setShowDice} setRollMessage={setRollMessage} die1ID={"die1"} die2ID={"die2"} character={character} setCharacter={setCharacter} top={true} />
        <RollableStatRow stat={"nimble"} value={character.stats.nimble} edit={edit} setShowDice={setShowDice} setRollMessage={setRollMessage} die1ID={"die1"} die2ID={"die2"} character={character} setCharacter={setCharacter} />
        <RollableStatRow stat={"competence"} value={character.stats.competence} edit={edit} setShowDice={setShowDice} setRollMessage={setRollMessage} die1ID={"die1"} die2ID={"die2"} character={character} setCharacter={setCharacter} />
        <RollableStatRow stat={"constitution"} value={character.stats.constitution} edit={edit} setShowDice={setShowDice} setRollMessage={setRollMessage} die1ID={"die1"} die2ID={"die2"} character={character} setCharacter={setCharacter} />
        <RollableStatRow stat={"spirit"} value={character.stats.spirit} edit={edit} setShowDice={setShowDice} setRollMessage={setRollMessage} die1ID={"die1"} die2ID={"die2"} character={character} setCharacter={setCharacter} />
      </div>
      <div className="flex justify-center items-center gap-4">

        {/* ========== LUCK ========== */}

        <div className={containerClass}>
          <DiceRollWrapper mod={character.luck} modLabel="Luck" setShowDice={setShowDice} setRollMessage={setRollMessage} die1ID="die1" die2ID="die2">
            <div className="flex justify-center items-center gap-2">
              {edit ? <button
                className="opacity-25"
                onClick={e => {
                  if (character.luck < 3) {
                    let newCharacter = { ...character }
                    newCharacter.luck++
                    if (newCharacter.luck == 0) newCharacter.luck++
                    setCharacter(newCharacter)
                  }
                }}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button> : <></>}
              <p className={headerClass}>Luck</p>
              {edit ? <button
                className="opacity-25"
                onClick={e => {
                  if (character.luck > -3) {
                    let newCharacter = { ...character }
                    newCharacter.luck--
                    if (newCharacter.luck == 0) newCharacter.luck--
                    setCharacter(newCharacter)
                  }
                }}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button> : <></>}
            </div>
          </DiceRollWrapper>
          <Luck value={character.luck} />
        </div>

        {/* ========== WEALTH ========== */}

        <div className={`${containerClass} px-6`}>
          <div className="flex justify-center items-center gap-2">
            {edit ? <button
              className="opacity-25"
              onClick={e => {
                if (character.wealth < 4) {
                  let newCharacter = { ...character }
                  newCharacter.wealth++
                  setCharacter(newCharacter)
                }
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button> : <></>}
            <p className={headerClass}>Wealth</p>
            {edit ? <button
              className="opacity-25"
              onClick={e => {
                if (character.wealth > 0) {
                  let newCharacter = { ...character }
                  newCharacter.wealth--
                  setCharacter(newCharacter)
                }
              }}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button> : <></>}
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
      <div className={`${containerClass} relative h-fit w-fit`}>
        <h2 className={headerClass}>Stardew Addiction</h2>
        <div className="flex justify-center items-center gap-2">
          {/* === Addiction Meter === */}
          <button
            className="opacity-25"
            onClick={e => {
              if (character.addiction < 24) {
                let newCharacter = { ...character }
                newCharacter.addiction++
                if (newCharacter.addiction == 3) {
                  setMessage("You are now addicted to stardew.")
                  setMessageGood(false)
                }
                setCharacter(newCharacter)
              }
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <p className="text-center m-0">Level</p>
          <button
            className="opacity-25"
            onClick={e => {
              if (character.addiction > 0) {
                let newCharacter = { ...character }
                newCharacter.addiction--
                setCharacter(newCharacter)
              }
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
        <StardewBar value={character.addiction} />
        {/* === Need Meter === */}
        <div className="mt-1 relative left-[17px] mr-4">
          <BubbleRow length={8} fill={character.need ? character.need : 0} customFlex="justify-end items-center gap-[9px] flex-row-reverse  " />
        </div>
        <div className="flex gap-2 justify-center items-center relative">
          <p className="m-0 text-center">Need</p>
          <button className="opacity-25 text-sm absolute right-16" onClick={e => {
            let newCharacter = { ...character }
            newCharacter.need = 0
            setCharacter(newCharacter)
          }}>
            <FontAwesomeIcon icon={faArrowLeftRotate} />
          </button>
        </div>
        <div className="absolute bottom-[35px] right-[4px]">
          <p className="text-center text-xs m-0">&#x25B2;</p>
          <p className="text-center text-[10px] relative bottom-1 m-0">Start</p>
        </div>
        {/* === Uses Available === */}
        <div className="flex gap-2 items-center justify-center mt-2">
          <p className="text-xs m-0">Uses Available</p>
          <div className="flex justify-center items-center gap-2">
            <button
              className="opacity-25 text-xs"
              onClick={e => {
                if (character.stardewUses < 6) {
                  let newCharacter = { ...character }
                  newCharacter.addiction++
                  newCharacter.stardewUses++
                  if (newCharacter.addiction == 3) {
                    setMessage("You are now addicted to Stardew.")
                    setMessageGood(false)
                  }
                  setCharacter(newCharacter)
                } else if (character.stardewUses == 6) {
                  let newCharacter = { ...character }
                  newCharacter.harm = 10
                  newCharacter.dying = true
                  setCharacter(newCharacter)
                }
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <div className="border w-[30px] h-[25px] flex justify-center items-center" >
              <p className="m-0 text-center">{character.stardewUses}</p>
            </div>
            <button
              className="opacity-25 text-xs"
              onClick={e => {
                if (character.stardewUses > 0) {
                  let newCharacter = { ...character }
                  newCharacter.stardewUses--
                  setCharacter(newCharacter)
                }
              }}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}