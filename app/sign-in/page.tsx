"use client"

import { PasswordInput, TextInput } from "@/util/input-components/input-elements"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function SignIn() {
  let [username, setUsername] = useState("")
  let [password, setPassword] = useState("")
  let [showNewUserMessage, setShowNewUserMessage] = useState(false)

  const path = usePathname();
  const params = useSearchParams()

  useEffect(() => {
    if (params.get("new-user") == "true") {
      setShowNewUserMessage(true)
      setTimeout(() => setShowNewUserMessage(false), 5000)
    }
  }, [])

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Sign In</h1>
      <TextInput
        label="Username"
        id="username"
        state={username}
        setState={setUsername}
        required={true}
      />

      <PasswordInput
        label="Password"
        id="password"
        state={password}
        setState={setPassword}
        required={true}
      />
      <p className="text-xs">Don&apos;t have an account? <Link href="/sign-up">Sign up</Link>.</p>

      <p className={`text-green-800 border rounded border-green-800 bg-green-300 fixed p-4 shadow-lg bottom-4 transition-all -z-0 ${showNewUserMessage ? "opacity-100" : "opacity-0"}`}>User Created Successfully</p>
    </div>
  )
}