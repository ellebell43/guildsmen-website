'use client'

import Message from "@/util/components/message"
import { useSearchParams } from "next/navigation"
import { useState } from "react"

export default function Characters() {
  const params = useSearchParams()
  let urlMessage
  if (params.get("message") !== null) {
    urlMessage = params.get("message")
  } else {
    urlMessage = ""
  }
  // @ts-expect-error
  const [message, setMessage] = useState<string>(urlMessage)
  return (
    <>
      <h1>My Characters</h1>
      <Message message={message} setMessage={setMessage} good={true} />
    </>
  )
}