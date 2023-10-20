import { useEffect, useState } from "react"

export default function Message(props: { message: string, setMessage: Function, good?: boolean }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (props.message) setShow(true)
    setTimeout(() => {
      setShow(false)
      props.setMessage("")
    }, 5000)
  }, [props.message])

  return show ? <p className={`${props.good ? "text-green-800 border rounded border-green-800 bg-green-300" : "text-red-800 border rounded border-red-800 bg-red-300"} fixed p-4 shadow-lg bottom-4 right-4 transition-all -z-0`}>{props.message}</p> : <></>
}