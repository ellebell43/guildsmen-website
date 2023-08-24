"use client"

import { useEffect } from "react"

const labelStyle = "m-0"
const borderStyle = "border rounded-lg border-stone-400 shadow-sm p-2 pt-2 flex flex-col justify-center"
const headerStyle = "m-0 text-[24px]"
const modifierStyle = "text-xs m-0"

export default function CharacterSheet() {
  useEffect(() => {
    document.getElementById("header")?.classList.add("hidden")
    document.getElementById("main")?.classList.add("m-0", "p-0")
    document.getElementById("main")?.classList.remove("pt-5",)
  }, [])

  return (
    <div className="flex flex-col justify-center items-center w-[100vw]">
      {/* First page */}
      <div className="bg-white w-[8.5in] h-[11in] mx-auto border-stone-300 border relative shadow-xl p-[.5in]">
        <h1 className="m-0 text-[48px] text-center mb-8">Guildsmen</h1>

        <div className="flex justify-center gap-4 mb-4">
          {/* ========== CHARACTER ========== */}

          <div className={`w-[3in] ${borderStyle}`}>
            <h2 className={headerStyle}>Character</h2>
            <LabelAndLine label="Name" />
            <LabelAndLine label="Species" />
            <LabelAndLine label="Physique" />
            <LabelAndLine label="Demeanor" />
          </div>

          {/* ========== STATS ========== */}

          <div className={`${borderStyle}`}>
            <h2 className={headerStyle}>Stats</h2>
            <div>
              <StatRow stat="Tough" top={true} />
              <StatRow stat="Nimble" />
              <StatRow stat="Competence" />
              <StatRow stat="Constitution" />
            </div>
          </div>

          {/* ========== WEALTH ========== */}

          <div className={`${borderStyle} px-6`}>
            <h2 className={headerStyle}>Wealth</h2>
            {["Destitute", "Poor", "Moderate", "Wealthy", "Exquisite"].map((el, i) => {
              return (
                <div className="flex gap-2 items-center" key={i}>
                  <Bubble filled={el === "Destitute"} />
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
                    <BubbleRow length={6} fill={1} />
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
              <Skill name="Craft" />
              <Skill name="Investigate" />
              <Skill name="Leadership" />
              <Skill name="Medic" />
              <Skill name="Myth" />
              <Skill name="Nature" />
              <Skill name="Performance" />
              <Skill name="Social" />
              <Skill name="Sneaky" />
              <Skill name="Tech" />
              <Skill name="Throwdown" />
            </div>
          </div>
        </div>
      </div>

      {/* Second Page */}

      <div className="bg-white w-[8.5in] h-[11in] p-[.5in] mx-auto border-stone-300 border relative shadow-xl">
        <div className="flex gap-4 justify-center">
          {/* ========== GOALS & MOTIVES ========== */}

          <div className={`${borderStyle} w-full border-2`}>
            <h2 className={headerStyle}>Goals and Motives</h2>
            <LineColumn lines={10} />
          </div>

          {/* ========== FLAWS & WEAKNESSES ========== */}

          <div className={`${borderStyle} w-full border-2`}>
            <h2 className={headerStyle}>Flaws and Weaknesses</h2>
            <LineColumn lines={10} />
          </div>
        </div>

        <div className="flex gap-4 justify-center mt-4">
          {/* ========== PERSONAL MORALS ========== */}

          <div className={`${borderStyle} w-full border-2`}>
            <h2 className={headerStyle}>Personal Morals</h2>
            <LineColumn lines={10} />
          </div>

          {/* ========== IMPORTANT CONNECTIONS ========== */}

          <div className={`${borderStyle} w-full border-2`}>
            <h2 className={headerStyle}>Important Connections</h2>
            <LineColumn lines={10} />
          </div>
        </div>

        {/* ========== GEAR ========== */}

        <div className={`mt-8 ${borderStyle}`}>
          <h2 className={headerStyle}>Gear</h2>
          <div className="grid grid-cols-3 gap-x-4">
            <LineColumn lines={18} />
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

// ========== WRITE-IN LINE WITH LABEL COMPONENT =========
function LabelAndLine(props: { label: string }) {
  return (
    <div className="flex gap-2">
      <p className="m-0">{props.label}:</p>
      <div className="border-b w-full border-black" />
    </div>
  )
}

// -- BUBBLE COMPONENT --
function Bubble(props: { filled?: boolean, red?: boolean }) {
  return (
    <div className={`border rounded-full w-[15px] h-[15px] ${props.red ? "border-red-600" : "border-black"} ${props.filled ? "bg-black" : ""}`} />
  )
}

// -- BUBBLE ROW COMPONENT --
function BubbleRow(props: { length: number, fill: number, customFlex?: string }) {
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
function StatRow(props: { stat: string, top?: boolean }) {
  if (!props.top) {
    return (
      <div className="flex gap-2 justify-end items-center">
        <p className={labelStyle}>{props.stat}:</p>
        <BubbleRow length={5} fill={1} />
      </div>
    )
  } else {
    return (
      <div>
        <div className="flex justify-end items-center gap-[10px] pr-1">
          {["-1", "+0", "+1", "+2", "+3"].map(
            (el, i) => <p className={modifierStyle} key={i}>{el}</p>
          )}
        </div>
        <div className="flex gap-2 justify-end items-center">
          <p className={labelStyle}>{props.stat}:</p>
          <BubbleRow length={5} fill={1} />
        </div>
      </div>
    )
  }
}

// -- MYTH ADDICTION BAR COMPONENT --
function MythBar() {
  let arr = []
  let i = 1
  while (i <= 8 * 3) {
    arr.push(
      i % 3 == 0 ?
        <div key={i} className="border w-2 h-4 border-r-2 relative">
          <div className="absolute w-[3px] h-5 bg-black bottom-0 right-[-3px]" />
          <p className="relative left-1 bottom-[40px]">{i / 3}</p>
        </div>
        : <div key={i} className="border w-2 h-4" />
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
function Skill(props: { name: string }) {
  return (
    <div className={props.name == "Throwdown" ? "col-span-2" : ""}>
      <p className="m-0 italic text-center">{props.name}</p>
      <div className="flex justify-center">
        <div className="border border-stone-400 w-[100px] h-[25px] pt-[1px] pl-[2px]">
          <p className="text-[8px] text-stone-400 m-0">Primary (+2):</p>
        </div>
        <div className="border border-stone-400 w-[100px] h-[25px] pt-[1px] pl-[2px]">
          <p className="text-[8px] text-stone-400 m-0">Secondary (+1):</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[10px] pr-1">
        {["-1", "+0", "+1", "+2", "+3"].map(
          (el, i) => <p className={modifierStyle} key={i}>{el}</p>
        )}
      </div>
      <div className="flex gap-2 justify-center items-center">
        <BubbleRow length={5} fill={1} />
      </div>
    </div>
  )
}

function LineColumn(props: { lines: number }) {
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