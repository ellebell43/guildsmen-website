"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { PasswordInput, TextInput, EmailInput } from "@/util/input-components/input-elements"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"
import ErrorMessage from "../error-message"
import crypto from "crypto"
import Spinner from "../spinner"
import { badWords } from "@/util/bad-words"
import { useRouter } from "next/navigation"

export default function SignUp() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPAsswordConfirm] = useState("")
  const [email, setEmail] = useState("")
  const [termsAgree, setTermsAgree] = useState(false)

  const [showPassReq, setShowPassReq] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const router = useRouter();

  useEffect(() => {
    if (error) setTimeout(() => setError(""), 5000)
  }, [error])

  const submit = () => {
    // validate the form
    if (!termsAgree) {
      setError("You must agree to the terms and conditions")
      return
    }
    // Check to see if all fields are have been filled
    if (!username || !password || !passwordConfirm || !email) {
      setError("Please fill out all fields")
      return
    }
    // Check for profanity in username
    if (badWords.test(username)) {
      setError("Username contains prohibited language")
      return
    }
    // Check for valid email
    if (!checkEmail()) {
      setError("Please provide a valid email")
      return
    }
    // Make sure passwords match
    if (password !== passwordConfirm) {
      setError("Your passwords do not match.")
      return
    }
    // Make sure password matches minimum requirements
    if (!checkPassword()) {
      setError("Your password does not match minimum requirements.")
      return
    }

    setLoading(true)
    const form = document.getElementById("form")
    // Hash the password before sending it to the API
    let hashedPassword = crypto.createHash("sha256").update(password).digest("hex");
    fetch("sign-up/api", { method: "POST", headers: { email, password: hashedPassword, username } })
      .then(res => res.json())
      .then(data => {
        if (!data.success) {
          setError(data.message)
          setLoading(false)
        } else {
          router.push("/sign-in?new-user=true")
          setLoading(false)
        }
      })
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
      <form onSubmit={(e) => e.preventDefault()} id="form" className="flex flex-col items-center justify-center w-fit mx-auto relative">
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
          className="absolute left-0 top-[203px]">
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

        {/* === TERMS & CONDITIONS CHECK === */}
        <div className="flex gap-2 justify-center items-center">
          <button type="button" onClick={e => setTermsAgree(!termsAgree)} className="border w-5 h-5 flex justify-center items-center">
            <div className={`w-4 h-4 transition-all ${termsAgree ? "bg-stone-400" : ""}`} />
          </button>
          <p className="text-sm">I have read and agree to the <Link href="/privacy-policy">Privacy Policy</Link>.</p>
        </div>

        {/* === SUBMIT BUTTON === */}
        <button
          type="button"
          onClick={submit}
          disabled={!(username && password && passwordConfirm && email && termsAgree)}
          className="border relative rounded shadow-lg px-8 py-2 text-lg transition-all top-0 hover:top-[5px] hover:shadow-none hover:bg-stone-300 dark:hover:bg-stone-500 disabled:hover:shadow-lg disabled:text-stone-300 disabled:hover:bg-inherit dark:disabled:hover:bg-inherit dark:disabled:text-stone-600 disabled:top-[5px]"
        >
          Submit
          <div className={`absolute -right-10 bottom-3 ${loading ? "" : "hidden"}`}>
            <Spinner />
          </div>
        </button>


        <p className="text-xs">Already have an account? <Link href="/sign-in">Sign in</Link>.</p>
      </form>
      <ErrorMessage message={error} />
    </>
  )
}