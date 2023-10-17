import styles from "./styles.module.css"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash, faX, faInfoCircle } from "@fortawesome/free-solid-svg-icons"

// ====== TEXT INPUT ======

export function TextInput(props: { label: string, required: boolean, id: string, setState: Function, state: string | undefined, readOnly?: boolean }) {
  let { label, required, id, setState, state } = props

  const MAX_USERNAME_LENGTH = 12

  const [dark, setDark] = useState(false)
  const [active, setActive] = useState(false)

  useEffect(() => { setDark(localStorage.getItem("isDark") == "true") }, [])
  useEffect(() => { if (props.state) { setActive(true) } else { setActive(false) } }, [props.state])

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
        onKeyDown={(e) => {
          if (props.readOnly === true) e.preventDefault()
          // If text field is username, only allow letters, numbers, and a couple symbols
          // Also, max username length is 12 characters
          if (id == "username") {
            if (e.key === "Backspace" || e.key === "Tab") return
            if (state && state.length >= MAX_USERNAME_LENGTH) e.preventDefault()
            if (!e.key.match(/[a-zA-Z0-9_-]/)) e.preventDefault()
          }
        }}
        onChange={e => {
          if (props.readOnly) return
          if (e.target.value.length > MAX_USERNAME_LENGTH) {
            setState("")
            return
          }
          onInputChange(e.target.value)
        }}
      />
    </div>
  )
}

// ====== PASSWORD INPUT ======

export function PasswordInput(props: { label: string, required: boolean, id: string, setState: Function, state: string }) {
  let { label, required, id, setState, state } = props

  const [active, setActive] = useState(false)
  const [type, setType] = useState<"password" | "text">("password")
  const [dark, setDark] = useState(false)

  useEffect(() => { setDark(localStorage.getItem("isDark") == "true") }, [])
  useEffect(() => { if (props.state) { setActive(true) } else { setActive(false) } }, [props.state])

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

// ====== EMAIL INPUT ======

export function EmailInput(props: { label: string, required: boolean, id: string, setState: Function, state: string }) {
  let { label, required, id, setState, state } = props

  const [dark, setDark] = useState(false)
  const [active, setActive] = useState(false)

  useEffect(() => { setDark(localStorage.getItem("isDark") == "true") }, [])
  useEffect(() => { if (props.state) { setActive(true) } else { setActive(false) } }, [props.state])

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

// ====== TEXT AREA INPUT ======

export function TextAreaInput(props: { label: string, required: boolean, id: string, setState: Function, state: string | undefined }) {
  let { label, required, id, setState, state } = props

  const [dark, setDark] = useState(false)
  const [active, setActive] = useState(false)

  useEffect(() => { setDark(localStorage.getItem("isDark") == "true") }, [])
  useEffect(() => { if (props.state) { setActive(true) } else { setActive(false) } }, [props.state])

  let onInputChange = (value: string) => {
    if (value) setActive(true)
    else setActive(false)

    setState(value)
  }

  const labelClass = "absolute left-2 top-0 opacity-70 transition-all"
  const activeLabelClass = "top-[-20px] left-[-10px] text-[10px]"

  return (
    <div className="relative w-fit place-self-center">
      <label htmlFor={id} className={`${labelClass}  ${active ? activeLabelClass : ""}`}>{label}</label>
      <textarea
        className="border text-inherit bg-inherit shadow-sm rounded w-[280px] md:w-[300px] h-[150px] p-2"
        id={id}
        name={id}
        required={required}
        value={state}
        onChange={e => onInputChange(e.target.value)}
      />
    </div>
  )
}

// ====== TEXT AREA WITH INFO ======

export function TextAreaWithInfo(props: { children: React.ReactNode, label: string, required: boolean, id: string, setState: Function, state: string | undefined }) {
  return (
    <div className="relative">
      <TextAreaInput label={props.label} required={props.required} id={props.id} setState={props.setState} state={props.state} />
      <Info textArea={true}>
        {props.children}
      </Info>
    </div>
  )
}

// ====== INFO ======

export function Info(props: { children: React.ReactNode, textArea?: boolean }) {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <>
      {/* Show info button */}
      <button className={`absolute block text-sm left-[-25px] ${props.textArea ? "top-1" : ""}`} onClick={e => setShowInfo(!showInfo)}>
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
    </>
  )
}