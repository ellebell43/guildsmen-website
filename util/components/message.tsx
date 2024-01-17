'use client'

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

export default function Message(props: { good?: boolean, message?: string, setMessage?: Function }) {
  const [show, setShow] = useState(false)
  const params = useSearchParams()

  let urlMessage
  if (params.get("message") !== null) {
    urlMessage = params.get("message")
  }

  if (urlMessage) {
    const [message, setMessage] = useState<string>(urlMessage)

    useEffect(() => {
      if (message) setShow(true)
      setTimeout(() => {
        setShow(false)
        setMessage("")
      }, 5000)
    }, [message])

    return show ? <p className={`${props.good ? "text-green-800 border rounded border-green-800 bg-green-300" : "text-red-800 border rounded border-red-800 bg-red-300"} fixed p-4 shadow-lg bottom-4 right-4 transition-all z-50`}>{message}</p> : <></>
  } else if (props.setMessage) {

    useEffect(() => {
      if (props.message) setShow(true)
      setTimeout(() => {
        setShow(false)
        // @ts-expect-error
        props.setMessage("")
      }, 5000)
    }, [props.message])

    return show ? <p className={`${props.good ? "text-green-800 border rounded border-green-800 bg-green-300" : "text-red-800 border rounded border-red-800 bg-red-300"} fixed p-4 shadow-lg bottom-4 right-4 transition-all z-50`}>{props.message}</p> : <></>
  } else {

    return show ? <p className={`${props.good ? "text-green-800 border rounded border-green-800 bg-green-300" : "text-red-800 border rounded border-red-800 bg-red-300"} fixed p-4 shadow-lg bottom-4 right-4 transition-all z-50`}>{props.message}</p> : <></>
  }
}