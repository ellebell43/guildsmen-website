import styles from "./styles.module.css"
import { useEffect, useState } from "react"

export function TextInput(props: { label: string, required: boolean, id: string, setState: Function, state: string }) {
  let { label, required, id, setState, state } = props
  let dark = false

  useEffect(() => { dark = localStorage.getItem("dark") == "true" }, [])

  const [active, setActive] = useState(false)

  let onInputChange = (value: string) => {
    if (value) setActive(true)
    else setActive(false)

    setState(value)
  }

  return (
    <div className="flex justify-center items-center relative w-fit">
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