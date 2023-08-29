import Link from "next/link"

export default function SignUp() {
  return (
    <>
      <h1>Sign Up</h1>
      <p>Already have an account? <Link href="/sign-up">Sign in</Link>.</p>
    </>
  )
}