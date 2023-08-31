"use client"

import Link from "next/link"
import { useState } from "react"
import { PasswordInput, TextInput } from "@/util/input-components/input-elements"

export default function SignUp() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPAsswordConfirm] = useState("")

  return (
    <form action="/sign-up/api" method="POST" className="flex flex-col items-center justify-center">
      <h1>Sign Up</h1>
      <TextInput
        label="Username"
        id="username"
        required={true}
        state={username}
        setState={setUsername}
      />
      <PasswordInput
        label="Password"
        id="password"
        required={true}
        state={password}
        setState={setPassword}
      />
      <PasswordInput
        label="Confirm Password"
        id="passwordConfirm"
        required={true}
        state={passwordConfirm}
        setState={setPAsswordConfirm}
      />
      <p className="text-xs">Already have an account? <Link href="/sign-in">Sign in</Link>.</p>
    </form>
  )
}