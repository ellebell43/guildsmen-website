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
  readOnly?: boolean,
  infoButton?: boolean
}

export default function TextInputWithInfo(props: props) {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className="relative flex justify-center items-center w-fit">
      <TextInput label={props.label} required={props.required} id={props.id} state={props.state} setState={props.setState} readOnly={props.readOnly ? props.readOnly : false} />
      {/* Show info button */}
      <button className={`absolute block text-sm left-[-25px] ${props.infoButton !== undefined ? "hidden" : ""}`} onClick={e => setShowInfo(!showInfo)}>
        <FontAwesomeIcon icon={faInfoCircle} />
      </button>
      {/* Info Wrapper */}
      <div className={`${showInfo ? "" : "hidden"} fixed inset-0 bg-opacity-70 bg-stone-100 dark:bg-stone-600 flex justify-center items-center flex-col z-30`}>
        {/* Close info button */}
        <button onClick={e => setShowInfo(false)} className="z-50 button text-xs relative rounded-full border w-8 h-8 right-[-150px] md:right-[-300px] top-[-20px]" >
          <FontAwesomeIcon icon={faX} />
        </button>
        {/* Info container */}
        <div className={`relative bottom-10 border shadow-md bg-stone-100 dark:bg-stone-600 p-2 w-[300px] md:w-[600px] overflow-y-scroll overflow-x-visible max-h-[500px] z-40`}>
          {props.children}
        </div>
      </div>
    </div>
  )
}