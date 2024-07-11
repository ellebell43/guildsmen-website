"use client"

import { EmailInput } from "@/util/input-components/input-elements";
import { passwordTest, submitButton } from "@/util/variables";
import { useState, useEffect } from "react";
import ErrorMessage from "../error-message";
import Spinner from "../spinner";
import { useSearchParams } from "next/navigation";
import Passwords from "../passwords";
import crypto from "crypto"
import Link from "next/link";

export default function RecoverClient() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [passwordLoading, setPasswordLoading] = useState(false)
  const [passwordSuccess, setPasswordSuccess] = useState(false)

  // Clear error every 5 seconds if error hasn't been cleared
  useEffect(() => {
    if (error) setTimeout(() => setError(""), 5000)
  }, [error])

  const emailUser = () => {
    setLoading(true)
    let ok = true
    fetch("/recover/api", { method: "GET", headers: { email } })
      .then(res => {
        if (!res.ok) ok = false
        return res.json()
      })
      .then(data => {
        if (!ok) {
          setSuccess(false)
          setError(data.message)
        } else {
          setSuccess(true)
        }
        setLoading(false)
      })
  }

  const params = useSearchParams()
  const updateToken = params.get("updateToken")

  const changePassword = () => {
    setPasswordLoading(true)
    // Check if passwords match
    if (password !== passwordConfirm) {
      setError("Passwords do not match.")
      return
    }

    // Check if minimum requirements are met
    if (!passwordTest.test(password)) {
      setError("Password does not meet minimum requirements.")
      return
    }

    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");
    let ok = true
    fetch("/recover/api", { method: "PATCH", headers: { updateToken: updateToken ? updateToken : "", password: hashedPassword } })
      .then(res => {
        if (!res.ok) ok = false
        return res.json()
      })
      .then(data => {
        if (!ok) {
          setError(data.message)
        } else {
          setPasswordSuccess(true)
        }
        setLoading(false)
      })
  }
  return (
    <>
      <h1>Password Recovery</h1>

      <p>Unfortunately, this service has been disabled. I don&apos;t have the user traffic that would warrant funding an automated email system for account recovery at the moment. If you need help, please email me at <Link href="mailto:support@guildsmenrpg.com">support@guildsmenrpg.com</Link>. Sorry for the inconvenience.</p>
    </>
  )
  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Password Recovery</h2>
      {passwordSuccess ?

        <p>Your password has been successfully updated.</p> : updateToken ? <>

          {/* === UPDATE PASSWORD FORM === */}

          <p>Let&apos;s get you a new password!</p>
          <Passwords password={password} passwordConfirm={passwordConfirm} setPassword={setPassword} setPasswordConfirm={setPasswordConfirm} />
          <button
            className={`${submitButton} flex gap-2 justify-center items-center`}
            disabled={!(password && passwordConfirm)}
            onClick={changePassword}
          >
            Submit {passwordLoading ? <Spinner /> : <></>}
          </button>

        </> : success ?

          // === SUCCESS MESSAGE ===

          <p>If an account is associated with that email, you&apos;ll find an email with reset instructions in your inbox.</p> :

          // === RECOVERY EMAIL FORM ===

          <>
            <p className="text-center w-1/2">Forgot your password? That&apos;s okay! Please provide the email address associated with your account and we will send recovery instruction to your inbox.</p>

            <EmailInput state={email} setState={setEmail} label="Email" id="email" required={true} />
            <button className={`flex gap-2 justify-center items-center ${submitButton}`} disabled={!email} onClick={emailUser}>Submit {loading ? <Spinner /> : <></>}</button>
          </>}
      <ErrorMessage message={error} />
    </div>
  )
}