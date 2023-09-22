import { useEffect, useState } from "react"

export default function ErrorMessage(props: { message: string }) {
  const [hidden, setHidden] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    setHidden(false)
    setTimeout(() => setHidden(true), 5100)
  }, [props.message])

  return (
    <p className={`text-red-800 bg-red-400 border border-red-800 rounded shadow-lg fixed bottom-24 right-4 p-4 transition-all z-50 ${hidden || !props.message ? "opacity-0" : "opacity-100"}`}>Error: {props.message}</p>
  )
}