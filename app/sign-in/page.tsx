"use client"

import { PasswordInput, TextInput } from "@/util/input-components/input-elements"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import crypto from "crypto"
import ErrorMessage from "../error-message"
import Spinner from "../spinner"
import { useRouter } from "next/navigation"
import { mutate } from "swr"

export default function SignIn() {
  let [username, setUsername] = useState("")
  let [password, setPassword] = useState("")

  let [showNewUserMessage, setShowNewUserMessage] = useState(false)
  let [error, setError] = useState("")
  let [loading, setLoading] = useState(false)

  // get url query params
  const params = useSearchParams()
  const router = useRouter()

  // if redirected from sign-up, show a success message
  useEffect(() => {
    if (params.get("new-user") == "true") {
      setShowNewUserMessage(true)
      setTimeout(() => setShowNewUserMessage(false), 5000)
    }
  }, [])

  // Clear error every 5 seconds if error hasn't been cleared
  useEffect(() => {
    if (error) setTimeout(() => setError(""), 5000)
  }, [error])

  // Submit username and password to API to sign the user in
  const submit = () => {
    setLoading(true)
    // Hash the password before sending it to the API
    let hashedPassword = crypto.createHash("sha256").update(password).digest("hex");
    fetch("/sign-in/api", { method: "GET", headers: { password: hashedPassword, username } })
      .then(res => res.json())
      .then(data => {
        if (!data.success) {
          // If sign in fails, display error from API
          setError(data.message)
          setLoading(false)
        } else {
          // Otherwise, refresh the cached user data and navigate to the profile page
          mutate("/sign-in/api")
          setTimeout(() => {
            router.push("/profile")
            setLoading(false)
          }, 2000)
        }
      })
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Sign In</h1>
      {/* === USERNAME INPUT === */}
      <TextInput
        label="Username"
        id="username"
        state={username}
        setState={setUsername}
        required={true}
      />

      {/* === PASSWORD INPUT === */}
      <PasswordInput
        label="Password"
        id="password"
        state={password}
        setState={setPassword}
        required={true}
      />

      {/* === SUBMIT BUTTON === */}
      <button
        type="button"
        onClick={submit}
        disabled={!(username && password)}
        className="border relative rounded shadow-lg px-8 py-2 text-lg transition-all top-0 hover:top-[5px] hover:shadow-none hover:bg-stone-300 dark:hover:bg-stone-500 disabled:hover:shadow-lg disabled:text-stone-300 disabled:hover:bg-inherit dark:disabled:hover:bg-inherit dark:disabled:text-stone-600 disabled:top-[5px]"
      >
        Submit
        <div className={`absolute -right-10 bottom-3 ${loading ? "" : "hidden"}`}>
          <Spinner />
        </div>
      </button>

      {/* === SIGN UP LINK === */}
      <p className="text-xs">Don&apos;t have an account? <Link href="/sign-up">Sign up</Link>.</p>

      {/* === NEW USER CREATED MESSAGE === */}
      <p className={`text-green-800 border rounded border-green-800 bg-green-300 fixed p-4 shadow-lg bottom-4 transition-all -z-0 ${showNewUserMessage ? "opacity-100" : "opacity-0"}`}>User Created Successfully</p>

      {/* === ERROR MESSAGE === */}
      <ErrorMessage message={error} />
    </div>
  )
}