"use client"

import getUserByToken from "@/util/getUserByToken"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Spinner from "../spinner"
import { mutate } from "swr"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-regular-svg-icons"
import { faCheck, faGear, faPencil, faSignOut, faX } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import avatarArray from "@/util/avatar-array"
import ErrorMessage from "../error-message"
import { EmailInput, PasswordInput } from "@/util/input-components/input-elements"
import { passwordTest, submitButton } from "@/util/variables"
import crypto from "crypto"
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"

export default function Profile() {
  const [avatarMenu, setAvatarMenu] = useState(false)
  const [settingsMenu, setSettingsMenu] = useState(false)

  const [patchLoading, setPatchLoading] = useState(false)
  const [patchError, setPatchError] = useState("")

  const { data, isLoading, error } = getUserByToken()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !data?.user) {
      router.push("/sign-in")
    }
  }, [isLoading, data])

  // Clear error every 5 seconds if error hasn't been cleared
  useEffect(() => {
    if (patchError) setTimeout(() => setPatchError(""), 5000)
  }, [patchError])

  const formatDate = (date: Date): string => {
    var str = ""
    str += date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear()
    return str
  }

  const changeAvatarUrl = (url: string) => {
    let newUser = data?.user
    if (newUser) {
      setPatchLoading(true)
      newUser.avatarUrl = url
      fetch("/profile/api", { method: "PATCH", headers: { updateAvatar: "true", avatarUrl: url } })
        .then(res => res.json())
        .then(data => {
          if (!data.success) {
            setPatchError(data.message)
          }
          setPatchLoading(false)
          setAvatarMenu(false)
          mutate("/sign-in/api")
        })
    }
  }

  if (isLoading) return <Spinner />
  if (error) return <p>{String(error)}</p>
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="relative w-fit">
          {/* Avatar edit button */}
          <button type="button" onClick={e => setAvatarMenu(true)}>
            <FontAwesomeIcon icon={faPencil} className="absolute bottom-1 right-1 w-[15px] h-[15px] p-2 rounded-full shadow button" />
          </button>
          {/* === USER AVATAR === */}
          {data?.user?.avatarUrl ? <Image width={150} height={150} src={data.user.avatarUrl} alt="" className="rounded-full" /> : <FontAwesomeIcon icon={faUserCircle} className="w-[150px] h-[150px]" />}
        </div>
        <p className="text-2xl font-bold text-center mb-0">{String(data?.user?.username)}</p>
        <p className="mt-0 text-xs opacity-70 mb-2">User since {data?.user?.created ? formatDate(new Date(data.user.created)) : ""}</p>
        {data?.user?.bio ? <p className="mt-0 p-2 text-sm italic">{data.user.bio}</p> : <></>}
      </div>
      <div className="flex gap-4 justify-center items-center w-fit mx-auto">
        <button onClick={e => setSettingsMenu(true)} className="button py-2 px-4 no-underline not-italic rounded">
          <FontAwesomeIcon icon={faGear} /> Settings
        </button>
        <button
          type="button"
          className="button py-2 px-4 rounded"
          onClick={() => {
            document.cookie = "token="
            mutate("/sign-in/api")
          }}
        >
          <FontAwesomeIcon icon={faSignOut} />
          Sign Out
        </button>
      </div>

      {/* === AVATAR MENU === */}
      {!avatarMenu ? <></> :
        <div className="w-fit flex flex-col justify-center items-center mx-auto bg-stone-200 dark:bg-stone-800 border shadow-lg p-4 fixed top-10 left-[calc(50vw-173px)] z-50 rounded">
          {patchLoading ? <div className="absolute z-50 bg-opacity-50 bg-stone-500 inset-0 flex justify-center items-center"><Spinner /></div> : <></>}
          <button onClick={e => setAvatarMenu(false)} className="absolute top-1 right-2 text-sm">
            <FontAwesomeIcon icon={faX} />
          </button>
          <p className="text-xl font-bold m-0 mb-2">Select a new avatar</p>
          <div className="grid grid-cols-5 gap-4 w-fit">
            {avatarArray.map((el, i) => {
              return (
                <button key={i} onClick={e => changeAvatarUrl(el)} className="shadow-lg rounded-full hover:saturate-100 hover:scale-105 saturate-50 transition-all">
                  <Image src={el} width={50} height={50} alt="" />
                </button>
              )
            })}
          </div>
        </div>}

      <Settings show={settingsMenu} setShow={setSettingsMenu} error={patchError} setError={setPatchError} />

      <ErrorMessage message={patchError} />
    </>
  )
}

function Settings(props: { show: boolean, setShow: Function, error: string, setError: Function }) {
  const { data } = getUserByToken()

  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [passwordLoading, setPasswordLoading] = useState(false)
  const [passwordSuccess, setPasswordSuccess] = useState(false)

  const [email, setEmail] = useState("")
  const [emailLoading, setEmailLoading] = useState(false)
  const [emailSuccess, setEmailSuccess] = useState(false)

  const [verified, setVerified] = useState(false)
  const [showPassReq, setShowPassReq] = useState(false)

  const verify = () => {
    let hashedPassword = crypto.createHash("sha256").update(password).digest("hex");
    if (hashedPassword === data?.user?.password) {
      setPassword("")
      setVerified(true)
    } else {
      props.setError("Incorrect password.")
    }
  }

  const updateUser = (field: "email" | "password") => {
    let headers: { updateEmail?: string, email?: string, updatePassword?: string, password?: string } = {}
    switch (field) {
      case "email":
        setEmailLoading(true)
        headers.updateEmail = "true"
        headers.email = email
        break
      case "password":
        if (password !== passwordConfirm) {
          props.setError("Passwords do not match.")
          return
        } else if (!passwordTest.test(password)) {
          props.setError("Password does not meet minimum requirements.")
          return
        } else {
          setPasswordLoading(true)
          headers.updatePassword = "true"
          headers.password = crypto.createHash("sha256").update(password).digest("hex")
        }
    }

    fetch("/profile/api", { method: "PATCH", headers })
      .then(res => res.json())
      .then(data => {
        if (!data.success) {
          props.setError(data.message)
          console.log(data.message)
        } else {
          if (headers.password) {
            setPasswordSuccess(true)
          } else {
            setEmailSuccess(true)
          }
          clearInputs(true)
          mutate("/sign-in/api")
        }
      })

  }

  const clearInputs = (notChecks: boolean) => {
    setEmailLoading(false)
    setEmail("")
    setPasswordLoading(false)
    setPassword("")
    setPasswordConfirm("")
    if (!notChecks) {
      setPasswordSuccess(false)
      setEmailSuccess(false)
    }
  }

  if (!props.show) return <></>
  return (
    <div className={`fixed inset-0 z-50 flex justify-center items-center bg-stone-100 bg-opacity-50`}>
      <div className="bg-stone-100 dark:bg-stone-600 border h-fit relative rounded shadow-xl p-4 flex flex-col gap-1 items-center">

        <h2>User Settings</h2>
        <button
          type="button"
          onClick={e => {
            props.setShow(false)
            clearInputs(false)
          }}
          className="absolute top-2 right-3"
        >
          <FontAwesomeIcon icon={faX} className="text-xs" />
        </button>
        {!verified ?

          // === PASSWORD PROMPT ===

          <>
            <p className="text-center m-0 text-sm italic">Please type in your password to continue.</p>
            <PasswordInput label="Password" id="password" state={password} setState={setPassword} required={true} />
            <button className={submitButton} disabled={!password} type="button" onClick={e => verify()}>Submit</button>
          </> :

          // === SETTINGS CONTAINER ===

          <>

            {/* === CHANGE EMAIL SECTION === */}

            <div className="flex flex-col justify-center items-center border-y-2 border-stone-800 dark:border-stone-100">
              <h3 className="border-none">Email</h3>
              <p className="mb-0">{data?.user?.email}</p>
              <EmailInput label="New Email" id="email" state={email} setState={setEmail} required={false} />
              <button className="button px-2 py-1 mb-4 relative" onClick={e => updateUser("email")}>
                Change Email
                {emailLoading ? <div className="absolute -right-10"><Spinner /></div> : emailSuccess ? <FontAwesomeIcon className="absolute -right-5" icon={faCheck} /> : <></>}
              </button>
            </div>

            {/* === CHANGE PASSWORD SECTION === */}

            <div className="flex flex-col justify-center items-center border-y-2 border-stone-800 dark:border-stone-100">
              <h2 className="border-none">Password</h2>
              <div className="relative">
                {/* === password requirement toggle === */}
                <button
                  onMouseEnter={e => setShowPassReq(true)}
                  onMouseLeave={e => setShowPassReq(false)}
                  onTouchStart={e => setShowPassReq(true)}
                  onTouchEnd={e => setShowPassReq(false)}
                  className="absolute -left-[35px] top-[17px]">
                  <FontAwesomeIcon icon={faCircleInfo} />
                </button>
                {/* === password input === */}
                <PasswordInput label="New Password" id="password" required={false} state={password} setState={setPassword} />
              </div>
              {/* === confirm password input === */}
              <PasswordInput label="Confirm New Password" id="passwordConfirm" required={false} state={passwordConfirm} setState={setPasswordConfirm} />
              <button className="button px-2 py-1 mb-4 relative" onClick={e => updateUser("password")}>
                Change Password
                {passwordLoading ? <div className="absolute -right-10"><Spinner /></div> : passwordSuccess ? <FontAwesomeIcon className="absolute -right-5" icon={faCheck} /> : <></>}
              </button>
            </div>

            {/* === PASSWORD REQUIREMENT BOX === */}

            <div className={`absolute lg:-left-64 top-48 min-w-fit p-2 rounded bg-stone-300 dark:bg-stone-600 border transition-all z-50 ${showPassReq ? "" : "hidden"}`}>
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
          </>}
      </div>
    </div>
  )
}