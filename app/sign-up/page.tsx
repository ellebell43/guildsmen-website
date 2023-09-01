"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { PasswordInput, TextInput, EmailInput } from "@/util/input-components/input-elements"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"
import ErrorMessage from "../error-message"

export default function SignUp() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPAsswordConfirm] = useState("")
  const [email, setEmail] = useState("")

  const [showPassReq, setShowPassReq] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (error) setTimeout(() => setError(""), 5000)
  }, [error])

  const submit = () => {
    if (!username || !password || !passwordConfirm || !email) {
      setError("Please fill out all fields")
      return
    }
    if (!checkEmail()) {
      setError("Please provide a valid email")
      return
    }
    if (password !== passwordConfirm) {
      setError("Your passwords do not match.")
      return
    }
    if (!checkPassword()) {
      setError("Your password does not match minimum requirements.")
      return
    }
    const form = document.getElementById("form")
  }

  const checkPassword = () => {
    const passwordTest = /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.,=]){1,}).{6,}$/
    return passwordTest.test(password)
  }

  const checkEmail = () => {
    const emailTest = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return emailTest.test(email)
  }

  return (
    <>
      <form action="/sign-up/api" id="form" method="POST" className="flex flex-col items-center justify-center w-fit mx-auto relative">
        <h1>Sign Up</h1>
        <TextInput
          label="Username"
          id="username"
          required={true}
          state={username}
          setState={setUsername}
        />

        <EmailInput
          label="Email"
          id="email"
          required={true}
          state={email}
          setState={setEmail}
        />

        {/* === PASSWORD REQUIREMENT TOGGLE === */}
        <button
          onMouseEnter={e => setShowPassReq(true)}
          onMouseLeave={e => setShowPassReq(false)}
          onTouchStart={e => setShowPassReq(true)}
          onTouchEnd={e => setShowPassReq(false)}
          className="absolute -left-6 top-[203px]">
          <FontAwesomeIcon icon={faCircleInfo} />
        </button>

        {/* === PASSWORD REQUIREMENT BOX === */}
        <div className={`absolute lg:-left-64 top-28 min-w-fit p-2 rounded bg-stone-300 dark:bg-stone-600 border transition-all z-50 ${showPassReq ? "opacity-100" : "opacity-0"}`}>
          <p className="font-bold text-center underline mb-0">Password Requirements</p>
          <ul>
            <li>At least 6 characters long.</li>
            <li>At least one uppercase letter</li>
            <li>At least one lowercase letter</li>
            <li>At least one digit (0-9)</li>
            <li>
              At least one special character.</li>
          </ul>
          <p className="text-xs opacity-70 block mt-2 mb-0">Allowed special characters: !@#$%^&*()-_+.,=</p>
        </div>

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

        <button onClick={submit} className="border relative rounded shadow-lg px-8 py-2 text-lg transition-all top-0 hover:top-[5px] hover:shadow-none hover:bg-stone-300 dark:hover:bg-stone-500">Submit</button>

        <p className="text-xs">Already have an account? <Link href="/sign-in">Sign in</Link>.</p>
      </form>
      <ErrorMessage message={error} />
    </>
  )
}