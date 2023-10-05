import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./styles.module.css"
import { useEffect, useState } from "react"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

export default function BulletDropList(props: { entries: string[], state: string | undefined, setState: Function, placeholder: string }) {
  const [dark, setDark] = useState(false)
  const [active, setActive] = useState(false)

  useEffect(() => { setDark(localStorage.getItem("isDark") == "true") }, [])

  return (
    <div
      className="flex justify-center items-center flex-col relative transition-all"
      style={{ marginBottom: active ? 42 * props.entries.length : 0 }}
    >
      <p
        className={`${styles.inputField} ${dark ? styles.darkInputField : styles.lightInputField} ${props.state ? "" : dark ? styles.darkPlaceholderText : styles.placeholderText}`}
        onClick={e => setActive(!active)}
      >
        {!props.state ? props.placeholder : props.state}
        <FontAwesomeIcon icon={faPlay} className="absolute right-2 text-xs top-2 transition-all" style={{ rotate: active ? "-90deg" : "90deg" }} />
      </p>
      <div
        className={`flex flex-col transition-all gap-0 origin-top absolute`}
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