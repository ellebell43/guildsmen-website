'use client'

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

export default function Message(props: { good?: boolean }) {
  const [show, setShow] = useState(false)
  const params = useSearchParams()

  let urlMessage
  if (params.get("message") !== null) {
    urlMessage = params.get("message")
  } else {
    urlMessage = ""
  }
  // @ts-expect-error
  const [message, setMessage] = useState<string>(urlMessage)

  useEffect(() => {
    if (message) setShow(true)
    setTimeout(() => {
      setShow(false)
      setMessage("")
    }, 5000)
  }, [message])

  return show ? <p className={`${props.good ? "text-green-800 border rounded border-green-800 bg-green-300" : "text-red-800 border rounded border-red-800 bg-red-300"} fixed p-4 shadow-lg bottom-4 right-4 transition-all -z-0`}>{message}</p> : <></>
}