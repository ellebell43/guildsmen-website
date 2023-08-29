import Link from "next/link"

export default function SignIn() {
  return (
    <>
      <h1>Sign In</h1>
      <p>Don&apos;t have an account? <Link href="/sign-up">Sign up</Link>.</p>
    </>
  )
}