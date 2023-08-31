import styles from "./styles.module.css"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"

export function TextInput(props: { label: string, required: boolean, id: string, setState: Function, state: string }) {
  let { label, required, id, setState, state } = props

  const [dark, setDark] = useState(false)
  const [active, setActive] = useState(false)

  useEffect(() => { setDark(localStorage.getItem("isDark") == "true") }, [])

  let onInputChange = (value: string) => {
    if (value) setActive(true)
    else setActive(false)

    setState(value)
  }

  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id} className={`${styles.label}  ${active ? styles.labelActive : ""}`}>{label}</label>
      <input
        className={`${styles.inputField} ${dark ? styles.darkInputField : styles.lightInputField}`}
        type="text"
        id={id}
        name={id}
        required={required}
        value={state}
        onChange={e => onInputChange(e.target.value)}
      />
    </div>
  )
}

export function PasswordInput(props: { label: string, required: boolean, id: string, setState: Function, state: string }) {
  let { label, required, id, setState, state } = props

  const [active, setActive] = useState(false)
  const [type, setType] = useState<"password" | "text">("password")
  const [dark, setDark] = useState(false)

  useEffect(() => { setDark(localStorage.getItem("isDark") == "true") }, [])

  let onInputChange = (value: string) => {
    if (value) setActive(true)
    else setActive(false)

    setState(value)
  }

  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id} className={`${styles.label}  ${active ? styles.labelActive : ""}`}>{label}</label>
      <input
        className={`${styles.passInputField} ${dark ? styles.darkInputField : styles.lightInputField}`}
        type={type}
        id={id}
        name={id}
        required={required}
        value={state}
        onChange={e => onInputChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Backspace" || e.key === "Tab") return
          if (!e.key.match(/[a-zA-Z0-9!@#$%^&*()_+.-]/)) e.preventDefault()
        }}
      />
      <button onClick={() => setType(type == "text" ? "password" : "text")}>
        {type == "text" ? <FontAwesomeIcon icon={faEyeSlash} className="absolute right-0 bottom-1 max-w-[20px]" /> : <FontAwesomeIcon icon={faEye} className="absolute right-0 bottom-1 max-w-[20px]" />}
      </button>
    </div>
  )
}

export function EmailInput(props: { label: string, required: boolean, id: string, setState: Function, state: string }) {
  let { label, required, id, setState, state } = props

  const [dark, setDark] = useState(false)
  const [active, setActive] = useState(false)

  useEffect(() => { setDark(localStorage.getItem("isDark") == "true") }, [])

  let onInputChange = (value: string) => {
    if (value) setActive(true)
    else setActive(false)

    setState(value)
  }

  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id} className={`${styles.label}  ${active ? styles.labelActive : ""}`}>{label}</label>
      <input
        className={`${styles.inputField} ${dark ? styles.darkInputField : styles.lightInputField}`}
        type="email"
        id={id}
        name={id}
        required={required}
        value={state}
        onChange={e => onInputChange(e.target.value)}
      />
    </div>
  )
}