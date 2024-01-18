"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Spinner from "../spinner"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faGear, faPencil, faSignOut, faSpinner, faX } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import avatarArray from "@/util/avatar-array"
import ErrorMessage from "../error-message"
import { EmailInput, PasswordInput } from "@/util/input-components/input-elements"
import { passwordTest, submitButton } from "@/util/variables"
import crypto from "crypto"
import Passwords from "../passwords"
import Link from "next/link"
import { user } from "@/util/types"
import Message from "@/util/components/message"
import getCookieString from "@/util/getCookieString"

export default function ProfileClient(props: { user: user | null }) {
  const user = props.user
  const router = useRouter()
  if (user == null) router.push("/sign-in")

  const [avatarMenu, setAvatarMenu] = useState(false)
  const [settingsMenu, setSettingsMenu] = useState(false)

  const [patchLoading, setPatchLoading] = useState(false)
  const [patchError, setPatchError] = useState("")

  const [bio, setBio] = useState("")
  const [bioLoading, setBioLoading] = useState(false)
  const [editBio, setEditBio] = useState(false)

  useEffect(() => {
    const input = document.getElementById("bio-input")
    if (input) input.focus()
  }, [editBio])

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
    // set newUser to current user object for mutation
    let newUser = { ...user }
    // If the user exists, set the patchLoading to true to show a loading spinner for the user
    if (newUser) {
      setPatchLoading(true)
      // Change the users avatar url
      newUser.avatarUrl = url
      // Make a PATCH call to the profile API
      fetch("/profile/api", { method: "PATCH", headers: { updateAvatar: "true", avatarUrl: url, Cookie: getCookieString() } })
        .then(res => {
          if (!res.ok) {
            // If API call wasn't successful, display the returned error message
            setPatchError(res.statusText)
          } else {
            setPatchLoading(false)
            // hide the loading spinner and the avatar menu
            setAvatarMenu(false)
            // Refresh the users data to quickly show the new avatar
            router.refresh()
          }
        })

    }
  }

  const updateBio = () => {
    setBioLoading(true)
    fetch("/profile/api", { method: "PATCH", headers: { updateBio: "true", bio, Cookie: getCookieString() } })
      .then(res => {
        if (!res.ok) {
          setPatchError(res.statusText)
        } else {
          setBioLoading(false)
          setEditBio(false)
          router.refresh()
        }
      })
  }

  if (user == null) return <p>Something went wrong</p>
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="relative w-fit">
          {/* Avatar edit button */}
          <button type="button" onClick={e => setAvatarMenu(true)}>
            <FontAwesomeIcon icon={faPencil} className="absolute z-20 bottom-1 right-1 w-[15px] h-[15px] p-2 rounded-full shadow button" />
          </button>

          {/* === USER AVATAR === */}

          {user?.avatarUrl ? <Image width={150} height={150} src={user.avatarUrl} alt="" className="rounded-full" /> : <Image src="/avatars/user.svg" className="dark:invert dark:filter" width={150} height={150} alt="" />}
        </div>
        <p className="text-2xl font-bold text-center mb-0">{String(user?.username)}</p>
        <p className="mt-0 text-xs opacity-70 mb-2">User since {user?.created ? formatDate(new Date(user.created)) : ""}</p>
        {/* Bio */}
        <div className="p-2 rounded shadow border mb-6 relative min-h-[50px] min-w-[300px]">
          <p className="text-xs absolute -top-6 left-4 bg-stone-100 dark:bg-stone-700 p-1">Bio</p>
          {user?.bio && editBio ?
            <textarea value={bio} onChange={e => setBio(e.target.value)} className="w-[300px] h-[150px] bg-inherit text-sm mt-2" id="bio-input" /> :
            user?.bio ? <p className="text-sm italic w-[300px]">{user.bio}</p> : <></>}
          <button type="button" onClick={e => {
            if (!editBio) {
              setEditBio(true);
              setBio(user?.bio ? user.bio : "")
            } else {
              updateBio()
            }
          }}>
            <FontAwesomeIcon icon={bioLoading ? faSpinner : editBio ? faCheck : faPencil} className={`absolute -bottom-2 -right-2 w-[15px] h-[15px] p-2 rounded-full shadow button ${bioLoading ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      <Link className="button py-2 px-4 rounded mb-4" href="/profile/characters">My Characters</Link>

      {/* === SETTINGS BUTTON === */}

      <div className="flex gap-4 justify-center items-center w-fit mx-auto">
        <button onClick={e => setSettingsMenu(true)} className="button py-2 px-4 no-underline not-italic rounded">
          <FontAwesomeIcon icon={faGear} /> Settings
        </button>

        {/* === SIGN OUT BUTTON === */}

        <button
          type="button"
          className="button py-2 px-4 rounded"
          onClick={() => {
            document.cookie = "token="
            router.push("/sign-in")
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
          {/* Exit button */}
          <button onClick={e => setAvatarMenu(false)} className="absolute top-1 right-2 text-sm">
            <FontAwesomeIcon icon={faX} />
          </button>
          <p className="text-xl font-bold m-0 mb-2">Select a new avatar</p>
          {/* Avatar grid */}
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

      <Settings show={settingsMenu} setShow={setSettingsMenu} error={patchError} setError={setPatchError} user={user} />

      <ErrorMessage message={patchError} />
    </>
  )
}

function Settings(props: { show: boolean, setShow: Function, error: string, setError: Function, user: user }) {
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [passwordLoading, setPasswordLoading] = useState(false)
  const [passwordSuccess, setPasswordSuccess] = useState(false)

  const [email, setEmail] = useState("")
  const [emailLoading, setEmailLoading] = useState(false)
  const [emailSuccess, setEmailSuccess] = useState(false)

  const [verified, setVerified] = useState(false)
  const [showPassReq, setShowPassReq] = useState(false)

  const [deleteConfirmation, setDeleteConfirmation] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)

  const [message, setMessage] = useState("")

  const router = useRouter()

  const verify = () => {
    // hash the password
    let hashedPassword = crypto.createHash("sha256").update(password).digest("hex");
    // Check to see if the passwords match. If so, clear the input and show the settings
    if (hashedPassword === props.user.password) {
      setPassword("")
      setVerified(true)
    } else {
      // If password was incorrect, inform the user via error message
      props.setError("Incorrect password.")
    }
  }

  const updateUser = (field: "email" | "password") => {
    let headers: { updateEmail?: string, email?: string, updatePassword?: string, password?: string } = {}
    // Check which field is being updated to customize headers and show the correct loading spinner
    switch (field) {
      case "email":
        setEmailLoading(true)
        headers.updateEmail = "true"
        headers.email = email
        break
      case "password":
        // Make sure the passwords match, or show an error
        if (password !== passwordConfirm) {
          props.setError("Passwords do not match.")
          return
          // Make sure the passwords match the minimum requirements, or display and error
        } else if (!passwordTest.test(password)) {
          props.setError("Password does not meet minimum requirements.")
          return
        } else {
          setPasswordLoading(true)
          headers.updatePassword = "true"
          // Hash the password 
          headers.password = crypto.createHash("sha256").update(password).digest("hex")
        }
    }

    // API call to update the users
    try {
      fetch("/profile/api", { method: "PATCH", headers: { Cookie: getCookieString() } })
        .then(res => {
          if (!res.ok) {
            throw res.statusText
          }
          // Otherwise display a checkmark for the field that was updated
          if (headers.password) {
            setPasswordSuccess(true)
          } else {
            setEmailSuccess(true)
          }
          // Clear all input fields and loading spinners, but not check marks
          clearInputs(true)
          setMessage("Success! Refresh page to see changes")
        })
    } catch (err) {
      props.setError(String(err))
    }

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
      <div className="bg-stone-100 max-h-[90vh] dark:bg-stone-600 border h-fit relative rounded shadow-xl p-4 flex flex-col gap-1 items-center">

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
              <p className="mb-0">{props.user.email}</p>
              <EmailInput label="New Email" id="email" state={email} setState={setEmail} required={false} />
              <button className="button px-2 py-1 mb-4 relative" onClick={e => updateUser("email")}>
                Change Email
                {emailLoading ? <div className="absolute -right-10"><Spinner /></div> : emailSuccess ? <FontAwesomeIcon className="absolute -right-5" icon={faCheck} /> : <></>}
              </button>
            </div>

            {/* === CHANGE PASSWORD SECTION === */}

            <div className="flex flex-col justify-center items-center border-y-2 border-stone-800 dark:border-stone-100">
              <h3 className="border-none">Password</h3>
              <Passwords password={password} setPassword={setPassword} setPasswordConfirm={setPasswordConfirm} passwordConfirm={passwordConfirm} />
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

            {/* === DELETE ACTION === */}

            <div className="w-full flex flex-col justify-center items-center border-y-2 border-stone-800 dark:border-stone-100">
              <button
                onClick={e => setDeleteConfirmation(true)}
                className="underline text-sm italic hover:text-red-400 my-4 opacity-50 hover:opacity-100 transition-all"
              >
                Delete my profile
              </button>
            </div>

            {/* === DELETE CONFIRMATION === */}

            <div className={`fixed inset-0 bg-stone-100 bg-opacity-70 z-50 flex justify-center items-center ${deleteConfirmation ? "" : "hidden"}`}>
              <div className="bg-stone-100 max-w-[300px] overflow-y-scroll dark:bg-stone-600 border h-fit relative rounded shadow-xl p-4 flex flex-col items-center justify-center">
                <p>Are you sure you want to delete your profile? This will permanently remove all user data including custom any custom made characters, creatures, and items associated with this profile. This cannot be undone.</p>
                <div className="flex justify-center items-center gap-4 w-full mb-2">
                  {/* Yes button */}
                  <button
                    onClick={e => {
                      setDeleteLoading(true)
                      try {
                        fetch("/profile/api", { method: "DELETE", headers: { Cookie: getCookieString() } })
                          .then(res => {
                            if (!res.ok) throw res.statusText
                          })
                          .then(() => {
                            document.cookie = "token="
                            router.push("/sign-in")
                          })
                      } catch (err) {
                        props.setError(String(err))
                        setDeleteLoading(false)
                      }
                    }}
                    className="button py-1 w-full opacity-60 hover:bg-red-300 hover:text-red-800 hover:opacity-100"
                  >
                    Yes
                  </button>
                  {/* No button */}
                  <button
                    onClick={e => setDeleteConfirmation(false)}
                    className="button py-1 w-full"
                  >
                    No
                  </button>
                </div>
                {deleteLoading ? <Spinner /> : <></>}
              </div>
            </div>
          </>}
      </div>
      <Message good={true} message={message} setMessage={setMessage} />
    </div>
  )

}