import { faDice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rollDie } from "./die";

export default function DiceRollWrapper(props: { children: React.ReactNode, mod?: number, modLabel?: string, setShowDice: Function, die1ID: string, die2ID: string, setRollMessage: Function }) {

  const getModifier = () => {
    if (props.mod != undefined) {
      if (props.mod >= 0) return `+${props.mod}`
      return props.mod
    }
    return ""
  }

  const getModifierString = () => {
    if (props.mod != undefined) {
      if (props.mod >= 0) return ` with a ${getModifier()}`
      return ` with a ${props.mod}`
    }
    return ""
  }

  const getModifierLabelString = () => {
    if (props.modLabel) {
      return ` from ${props.modLabel}`
    }
    return ""
  }

  return (
    <div className="flex justify-center items-center gap-2 relative w-fit">
      <button
        className="self-end relative bottom-[4px] opacity-50 hover:opacity-75 transition-all"
        onClick={e => {
          props.setShowDice(true)
          setTimeout(() => {
            let num1 = rollDie(props.die1ID)
            let num2 = rollDie(props.die2ID)
            let total = num1 + num2
            if (props.mod) total += props.mod
            props.setRollMessage(<>
              <p className="text-center m-0">({num1}+{num2}){getModifier()}</p>
              <p className="text-center font-bold text-[32px] m-0">{total}</p>
              <p className="text-xs italic opacity-70 text-center m-0">You rolled {num1} and {num2}{getModifierString()}{getModifierLabelString()} for a total of {total}</p>
            </>, 100)
          })
        }}
      >
        <FontAwesomeIcon icon={faDice} />
      </button>
      {props.children}
    </div>
  )
}