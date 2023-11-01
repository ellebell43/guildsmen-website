import { addictionRange, luckRange, modRange } from "../types"

const labelStyle = "m-0"
const borderStyle = "border rounded-lg border-stone-400 shadow-sm p-2 pt-2 flex flex-col justify-center"
const headerStyle = "m-0 text-[24px]"
const modifierStyle = "text-xs m-0"

// ========== WRITE-IN LINE WITH LABEL COMPONENT =========
export function LabelAndLine(props: { label: string }) {
  return (
    <div className="flex gap-2">
      <p className="m-0">{props.label}:</p>
      <div className="border-b w-full border-black" />
    </div>
  )
}

// -- BUBBLE COMPONENT --
export function Bubble(props: { filled?: boolean, red?: boolean }) {
  return (
    <div className={`border rounded-full w-[15px] h-[15px] ${props.red ? "border-red-600" : "border-black"} ${props.filled ? "bg-black" : ""}`} />
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
        <div key={i} className={`border w-2 h-4 border-r-2 relative ${props.value && props.value >= i ? "bg-black" : ""}`}>
          <div className="absolute w-[3px] h-5 bg-black bottom-0 right-[-3px]" />
          <p className="relative left-1 bottom-[40px]">{i / 3}</p>
        </div>
        : <div key={i} className={`border w-2 h-4  ${props.value && props.value >= i ? "bg-black" : ""}`} />
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
export function Skill(props: { name: string, value?: modRange, doubleCol?: boolean }) {
  return (
    <div className={props.doubleCol ? "col-span-2" : ""}>
      <p className="m-0 italic text-center">{props.name}</p>
      <div className="flex justify-center">
        <div className="border border-stone-400 w-[100px] h-[25px] pt-[1px] pl-[2px]">
          <p className="text-[8px] text-stone-400 m-0">Primary (+2):</p>
        </div>
        <div className="border border-stone-400 w-[100px] h-[25px] pt-[1px] pl-[2px]">
          <p className="text-[8px] text-stone-400 m-0">Secondary (+1):</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[6px] pr-1">
        {["-1", "+0", "+1", "+2", "+3"].map(
          (el, i) => <p className={modifierStyle} key={i}>{el}</p>
        )}
      </div>
      <div className="flex gap-2 justify-center items-center">
        <BubbleRow length={5} fill={props.value != undefined ? props.value + 2 : 1} />
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