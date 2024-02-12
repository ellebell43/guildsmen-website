import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./styles.module.css"
import { useEffect, useState } from "react"
import { faPlay, faInfoCircle, faX } from "@fortawesome/free-solid-svg-icons"
import TextInputWithInfo from "./text-with-info"

export default function BulletDropList(props: { entries: string[], state: string | undefined, setState: Function, placeholder: string, info?: React.ReactNode }) {
  const [dark, setDark] = useState(false)
  const [active, setActive] = useState(false)
  const [showInfo, setShowInfo] = useState(false)

  useEffect(() => { setDark(localStorage.getItem("isDark") == "true") }, [])

  return (
    <div className="flex justify-center items-center flex-col relative transition-all">
      <div className="relative w-fit mx-auto">
        <button
          onClick={e => setActive(!active)}
          className="absolute right-2 text-xs top-2 transition-all hover:cursor-pointer w-10 h-10 z-20"
          style={{ rotate: active ? "-90deg" : "90deg" }}
        >
          <FontAwesomeIcon icon={faPlay} />
        </button>

        <TextInputWithInfo label={props.placeholder} id={props.placeholder} required={true} state={props.state} setState={props.setState} readOnly={true}>
          {props.info}
        </TextInputWithInfo>
      </div>

      <div
        className={`flex flex-col transition-all gap-0 origin-top absolute z-50`}
        style={{ width: 240, scale: active ? 1 : 0, transformOrigin: "top", top: 50 }}
      >
        {props.entries.map((el, i) => {
          return (
            <button
              key={i}
              onClick={() => { props.setState(el); setActive(false) }}
              className={`button flex gap-2 py-2 w-full ${el == props.state ? "bg-stone-400 dark:bg-stone-300 text-stone-900" : ""}`}
            >
              {el}
            </button>
          )
        })}
      </div>
    </div>
  )
}