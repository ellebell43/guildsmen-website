import { useState } from "react"
import { Character, addictionRange, craftSpecialty, investigateSpecialty, leadershipSpecialty, luckRange, medicSpecialty, modRange, mythSpecialty, natureSpecialty, performanceSpecialty, skillName, sneakySpecialty, socialSpecialty, techSpecialty, throwdownSpecialty } from "../types"
import DiceRollWrapper from "./dice/dice-roll-wrapper"
import PopUp from "./pop-up"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from "@fortawesome/free-solid-svg-icons"

const labelStyle = "m-0"
const borderStyle = "border rounded-lg border-stone-400 shadow-sm p-2 pt-2 flex flex-col justify-center"
const headerStyle = "m-0 text-[24px]"
const modifierStyle = "text-xs m-0"

// ========== WRITE-IN LINE WITH LABEL COMPONENT =========
export function LabelAndLine(props: { label: string }) {
  return (
    <div className="flex gap-2">
      <p className="m-0">{props.label}:</p>
      <div className="border-b w-full border-stone-800" />
    </div>
  )
}

// -- BUBBLE COMPONENT --
export function Bubble(props: { filled?: boolean, red?: boolean }) {
  return (
    <div className={`border rounded-full w-[15px] h-[15px] ${props.red ? "border-red-600" : "border-stone-600"} ${props.filled ? "bg-stone-600 dark:bg-stone-400" : ""}`} />
  )
}

// -- BUBBLE ROW COMPONENT --
export function BubbleRow(props: { length: number, fill: number, customFlex?: string }) {
  const bubbleLoop = () => {
    let arr = []
    let i = 0;
    while (i < props.length) {
      arr.push(<Bubble filled={i < props.fill} key={i} />)
      i++
    }
    return arr
  }

  return (
    <div className={`${props.length == 5 ? "w-[1in] justify-between items-center" : props.customFlex ? props.customFlex : "gap-1 justify-center items-center"} flex`}>
      {bubbleLoop().map((el, i) => {
        return el
      })}
    </div>
  )
}

// -- STAT ROW COMPONENT --
export function StatRow(props: { stat: string, top?: boolean, value?: modRange }) {
  if (!props.top) {
    return (
      <div className="flex gap-2 justify-end items-center">
        <p className={labelStyle}>{props.stat}:</p>
        <BubbleRow length={5} fill={props.value != undefined ? props.value + 2 : 1} />
      </div>
    )
  } else {
    return (
      <div>
        <div className="flex justify-end items-center gap-[6px] pr-1">
          {["-1", "+0", "+1", "+2", "+3"].map(
            (el, i) => <p className={modifierStyle} key={i}>{el}</p>
          )}
        </div>
        <div className="flex gap-2 justify-end items-center">
          <p className={labelStyle}>{props.stat}:</p>
          <BubbleRow length={5} fill={props.value != undefined ? props.value + 2 : 1} />
        </div>
      </div>
    )
  }
}

// -- MYTH ADDICTION BAR COMPONENT --
export function MythBar(props: { value?: addictionRange }) {
  let arr = []
  let i = 1
  while (i <= 8 * 3) {
    arr.push(
      i % 3 == 0 ?
        <div key={i} className={`border w-2 h-4 border-r-2 relative ${props.value && props.value >= i ? "bg-stone-600 dark:bg-stone-400" : ""}`}>
          <div className="absolute w-[3px] h-5 bg-stone-800 dark:bg-stone-200 bottom-0 right-[-3px]" />
          <p className="relative left-1 bottom-[40px]">{i / 3}</p>
        </div>
        : <div key={i} className={`border w-2 h-4  ${props.value && props.value >= i ? "bg-stone-600 dark:bg-stone-400" : ""}`} />
    )
    i++
  }
  return (
    <div className="flex mt-5">
      {arr.map((el, i) => el)}
    </div>
  )
}

// -- SKILL COMPONENT --
export function Skill(props: { name: string, value?: modRange, doubleCol?: boolean, primarySpecialty?: string, secondarySpecialty?: string }) {
  return (
    <div className={`${props.doubleCol ? "col-span-2" : ""}`}>
      <p className="m-0 italic text-center">{props.name}</p>
      <div className="flex justify-center items-center flex-col-reverse md:flex-col">
        <div className="flex justify-center flex-col md:flex-row items-center">
          <div className="border border-stone-400 w-[100px] h-[25px] pt-[1px] pl-[2px]">
            <p className="text-[8px] text-stone-400 m-0">Primary (+2):</p>
          </div>
          <div className="border border-stone-400 w-[100px] h-[25px] pt-[1px] pl-[2px]">
            <p className="text-[8px] text-stone-400 m-0">Secondary (+1):</p>
          </div>
        </div>
        <div className="mb-1">
          <div className="flex justify-center items-center gap-[6px] pr-1">
            {["-1", "+0", "+1", "+2", "+3"].map(
              (el, i) => <p className={modifierStyle} key={i}>{el}</p>
            )}
          </div>
          <div className="flex gap-2 justify-center items-center">
            <BubbleRow length={5} fill={props.value != undefined ? props.value + 2 : 1} />
          </div>
        </div>
      </div>
    </div>
  )
}

// -- ADD SPECIALTY BUTTON --
export const AddSpecialty = (props: { type: "primary" | "secondary", skill: skillName, character: Character, setCharacter: Function, className: string }) => {
  const { type, skill, character, setCharacter, className } = props
  let [showDialogue, setShowDialogue] = useState(false)

  const setSpecialty = (specialty?: craftSpecialty | investigateSpecialty | leadershipSpecialty | medicSpecialty | mythSpecialty | natureSpecialty | performanceSpecialty | socialSpecialty | sneakySpecialty | throwdownSpecialty | techSpecialty) => {
    let newCharacter = { ...character }
    if (type == "primary" && specialty) {
      newCharacter.specialties[skill].primary = specialty
    } else if (type == "secondary" && specialty) {
      newCharacter.specialties[skill].secondary = specialty
    } else if (type == "primary") {
      newCharacter.specialties[skill].primary = undefined
    } else {
      newCharacter.specialties[skill].secondary = undefined
    }
    setCharacter(newCharacter)
  }

  const SpecialtyInput = (props: { name: string }) => {
    let disabled = type == "primary" ? character.specialties[skill].secondary == props.name : character.specialties[skill].primary == props.name
    return (
      <div className="flex gap-2 items-center">
        <input type="radio" name="specialty" value={props.name} id={props.name} onClick={e => { setSpecialty(props.name) }} checked={type == "primary" ? character.specialties[skill].primary == props.name : character.specialties[skill].secondary == props.name} disabled={disabled} className="disabled:opacity-40 disabled:line-through" />
        <label htmlFor={props.name} className={`${disabled ? "opacity-40 line-through" : ""}`}>{props.name}</label>
      </div>
    )
  }

  const getInputs = () => {
    switch (skill) {
      case "craft":
        // clay, fabric, metal, stone, wood
        return <>
          <SpecialtyInput name="Clay" />
          <SpecialtyInput name="Fabric" />
          <SpecialtyInput name="Metal" />
          <SpecialtyInput name="Stone" />
          <SpecialtyInput name="Wood" />
        </>
      case "investigate":
        // awareness, searching, situational, tracking
        return <>
          <SpecialtyInput name="Awareness" />
          <SpecialtyInput name="Searching" />
          <SpecialtyInput name="Situational" />
          <SpecialtyInput name="Tracking" />
        </>
      case "leadership":
        // business, government, group
        return <>
          <SpecialtyInput name="Business" />
          <SpecialtyInput name="Government" />
          <SpecialtyInput name="Group" />
        </>
      case "medic":
        // beasts, people
        return <>
          <SpecialtyInput name="Beasts" />
          <SpecialtyInput name="People" />
        </>
      case "myth":
        // refinement, air, fire, lightning, metal, stone, water, other
        return <>
          <SpecialtyInput name="Refinement" />
          <SpecialtyInput name="Air" />
          <SpecialtyInput name="Fire" />
          <SpecialtyInput name="Lightning" />
          <SpecialtyInput name="Metal" />
          <SpecialtyInput name="Stone" />
          <SpecialtyInput name="Water" />
        </>
      case "nature":
        // animals, geography, plants, survival
        return <>
          <SpecialtyInput name="Animals" />
          <SpecialtyInput name="Geography" />
          <SpecialtyInput name="Plants" />
          <SpecialtyInput name="Survival" />
        </>
      case "performance":
        // acrobatics, acting, contortion, music
        return <>
          <SpecialtyInput name="Acrobatics" />
          <SpecialtyInput name="Acting" />
          <SpecialtyInput name="Contortion" />
          <SpecialtyInput name="Music" />
        </>
      case "sneaky":
        // hiding, lock-picking, pick-pocketing, sleight-of-hand
        return <>
          <SpecialtyInput name="Hiding" />
          <SpecialtyInput name="Lock-Picking" />
          <SpecialtyInput name="Pick-Pocketing" />
          <SpecialtyInput name="Sleight-of-Hand" />
        </>
      case "social":
        // deception, intimidation, persuasion
        return <>
          <SpecialtyInput name="Deception" />
          <SpecialtyInput name="Intimidation" />
          <SpecialtyInput name="Persuasion" />
        </>
      case "tech":
        // biological, personal, large, vehicle
        return <>
          <SpecialtyInput name="Biological" />
          <SpecialtyInput name="Personal" />
          <SpecialtyInput name="Large" />
          <SpecialtyInput name="Vehicle" />
        </>
      case "throwdown":
        // melee, personal, ranged
        return <>
          <SpecialtyInput name="Melee" />
          <SpecialtyInput name="Personal" />
          <SpecialtyInput name="Ranged" />
        </>
    }
  }

  return (
    <>
      <button className={className} onClick={e => setShowDialogue(true)}>
        <FontAwesomeIcon icon={faEdit} />
      </button>
      {showDialogue ?
        <PopUp>
          <p className="text-center font-bold text-lg mt-0">{skill.charAt(0).toUpperCase() + skill.slice(1)} {type == "primary" ? "primary" : "secondary"} specialty</p>
          <div className="flex flex-col w-fit mx-auto mb-4">
            <div className="flex gap-2 items-center">
              <input type="radio" name="specialty" value={undefined} id="none" checked={type == "primary" ? character.specialties[skill].primary == undefined : character.specialties[skill].secondary == undefined} onClick={e => { setSpecialty() }} />
              <label htmlFor="none">None</label>
            </div>
            {getInputs()}
          </div>

          <button className="button rounded px-4 py-1" onClick={e => setShowDialogue(false)}>
            Done
          </button>
        </PopUp> : <></>}
    </>
  )
}

// -- ROLLABLE SKILL --
export const RollableSkill = (props: { doubleCol?: boolean, primarySpecialty?: string, secondarySpecialty?: string, name: skillName, value: number, setShowDice: Function, setRollMessage: Function, die1ID: string, die2ID: string, character: Character, setCharacter: Function }) => {
  const modifierStyle = "text-xs m-0"
  return (
    <div className={`${props.doubleCol ? "col-span-2" : ""}`}>
      {/* Skill name */}
      <p className="m-0 italic text-center">{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</p>
      <div className="flex justify-center items-center flex-col-reverse md:flex-col">

        {/* Specialties */}

        <div className="flex justify-center flex-col md:flex-row items-center">
          {props.primarySpecialty ?
            <DiceRollWrapper die1ID={props.die1ID} die2ID={props.die2ID} mod={2 + props.value} modLabel={`${props.name} and ${props.primarySpecialty}`} setShowDice={props.setShowDice} setRollMessage={props.setRollMessage} absolute={true}>
              <div className="border border-stone-400 w-[100px] h-[25px] pt-[1px] pl-[2px] relative">
                <p className="text-[8px] text-stone-400 m-0 relative">Primary (+2):</p>
                <p className="m-0 text-[12px] absolute top-2 left-1">{props.primarySpecialty}</p>
                <AddSpecialty character={props.character} setCharacter={props.setCharacter} type="primary" className="absolute right-1 opacity-30 bottom-0" skill={props.name} />
              </div>
            </DiceRollWrapper> :
            <div className="border border-stone-400 w-[100px] h-[25px] pt-[1px] pl-[2px] relative">
              <p className="text-[8px] text-stone-400 m-0">Primary (+2):</p>
              <AddSpecialty character={props.character} setCharacter={props.setCharacter} type="primary" className="absolute right-1 opacity-30 bottom-0" skill={props.name} />
            </div>}
          {props.secondarySpecialty ?
            <DiceRollWrapper die1ID={props.die1ID} die2ID={props.die2ID} mod={1 + props.value} modLabel={`${props.name} and ${props.primarySpecialty}`} setShowDice={props.setShowDice} setRollMessage={props.setRollMessage} absolute={true}>
              <div className="border border-stone-400 w-[100px] h-[25px] pt-[1px] pl-[2px] relative">
                <p className="text-[8px] text-stone-400 m-0 relative">Secondary (+1):</p>
                <p className="m-0 text-[12px] absolute top-2 left-1">{props.secondarySpecialty}</p>
                <AddSpecialty character={props.character} setCharacter={props.setCharacter} type="secondary" className="absolute right-1 opacity-30 bottom-0" skill={props.name} />
              </div>
            </DiceRollWrapper> :
            <div className="border border-stone-400 w-[100px] h-[25px] pt-[1px] pl-[2px] relative">
              <p className="text-[8px] text-stone-400 m-0">Secondary (+1):</p>
              <AddSpecialty character={props.character} setCharacter={props.setCharacter} type="secondary" className="absolute right-1 opacity-30 bottom-0" skill={props.name} />
            </div>}
        </div>

        {/* Bubble row */}

        <DiceRollWrapper die1ID={props.die1ID} die2ID={props.die2ID} mod={props.value} modLabel={props.name} setShowDice={props.setShowDice} setRollMessage={props.setRollMessage}>
          <div className="mb-1">
            <div className="flex justify-center items-center gap-[6px] pr-1">
              {["-1", "+0", "+1", "+2", "+3"].map(
                (el, i) => <p className={modifierStyle} key={i}>{el}</p>
              )}
            </div>
            <div className="flex gap-2 justify-center items-center">
              <BubbleRow length={5} fill={props.value != undefined ? props.value + 2 : 1} />
            </div>
          </div>
        </DiceRollWrapper>
      </div>
    </div>
  )
}

// -- LUCK COMPONENT --
export function Luck(props: { value?: luckRange }) {
  let fill: number | undefined = undefined
  if (props.value && props.value > 0) {
    fill = props.value + 3
  } else if (props.value && props.value < 0) {
    fill = props.value + 4
  }
  return (
    <div>
      <div className="flex justify-between items-center px-1">
        {["-3", "-2", "-1", "+1", "+2", "+3"].map(
          (el, i) => <p key={i} className={modifierStyle}>{el}</p>
        )}
      </div>
      <BubbleRow length={6} fill={fill ? fill : 1} />
    </div>
  )
}

export function LineColumn(props: { lines: number }) {
  let arr = []
  let i = 1
  while (i <= props.lines) {
    arr.push(<div key={i} className="w-full border-b border-black h-[20px]" />)
    i++
  }
  return (
    <>
      {arr.map((el, i) => el)}
    </>
  )
}