"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextInput } from "./input-elements";
import { faInfoCircle, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type props = {
  children: React.ReactNode
  label: string,
  required: boolean,
  id: string,
  state: string | undefined, setState: Function,
}

export default function TextInputWithInfo(props: props) {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className="relative flex justify-center items-center w-fit mx-auto">
      <TextInput label={props.label} required={props.required} id={props.id} state={props.state} setState={props.setState} />
      {/* Show info button */}
      <button className="absolute block text-sm" style={{ left: -25 }} onClick={e => setShowInfo(!showInfo)}>
        <FontAwesomeIcon icon={faInfoCircle} />
      </button>
      {/* Info Wrapper */}
      <div className={`${showInfo ? "" : "hidden"} fixed inset-0 bg-opacity-70 bg-stone-100 dark:bg-stone-600 flex justify-center items-center flex-col z-20`}>
        {/* Close info button */}
        <button onClick={e => setShowInfo(false)} style={{ right: -150, top: 16 }} className="z-50 button text-xs relative rounded-full border w-8 h-8" >
          <FontAwesomeIcon icon={faX} />
        </button>
        {/* Info container */}
        <div className={`relative bottom-10 border shadow-md bg-stone-100 dark:bg-stone-600 p-2 w-[300px] overflow-y-scroll z-40`} style={{ maxHeight: 500, overflowX: "visible" }}>
          {props.children}
        </div>
      </div>
    </div>
  )
}