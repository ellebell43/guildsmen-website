"use client"

import { EmailInput } from "@/util/input-components/input-elements";
import { submitButton } from "@/util/variables";
import { useState, useEffect } from "react";
import ErrorMessage from "../error-message";
import Spinner from "../spinner";

export default function Recover() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  // Clear error every 5 seconds if error hasn't been cleared
  useEffect(() => {
    if (error) setTimeout(() => setError(""), 5000)
  }, [error])

  const emailUser = () => {
    setLoading(true)
    fetch("/recover/api", { method: "GET", headers: { email } })
      .then(res => res.json())
      .then(data => {
        setError(data.message)
        setLoading(false)
      })
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Password Recovery</h2>
      <p className="text-center w-1/2">Forgot your password? That's okay! Please provide the email address associated with your account and we will send recovery instruction to your inbox.</p>

      <EmailInput state={email} setState={setEmail} label="Email" id="email" required={true} />
      <button className={`flex gap-2 justify-center items-center ${submitButton}`} disabled={!email} onClick={emailUser}>Submit {loading ? <Spinner /> : <></>}</button>
      <ErrorMessage message={error} />
    </div>
  )
}