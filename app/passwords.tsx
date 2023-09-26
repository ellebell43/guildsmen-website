import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"
import { PasswordInput } from "@/util/input-components/input-elements"

export default function Passwords(props: { password: string, setPassword: Function, passwordConfirm: string, setPasswordConfirm: Function }) {
  const { password, setPassword, passwordConfirm, setPasswordConfirm } = props
  const [showPassReq, setShowPassReq] = useState(false)
  return (
    <div className="flex relative flex-col gap-0 justify-center items-center">
      {/* === PASSWORD REQUIREMENT TOGGLE === */}
      <button
        onMouseEnter={e => setShowPassReq(true)}
        onMouseLeave={e => setShowPassReq(false)}
        onTouchStart={e => setShowPassReq(true)}
        onTouchEnd={e => setShowPassReq(false)}
        className="absolute -left-7 top-5">
        <FontAwesomeIcon icon={faCircleInfo} />
      </button>

      {/* === PASSWORD REQUIREMENT BOX === */}
      <div className={`absolute lg:-left-[296px] min-w-fit p-2 rounded bg-stone-300 dark:bg-stone-600 border transition-all z-50 ${showPassReq ? "" : "hidden"}`}>
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
        setState={setPasswordConfirm}
      />
    </div>
  )
}