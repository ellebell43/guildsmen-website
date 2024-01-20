'use client'

import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col justify-end items-center">
      <h2>Something went wrong!</h2>
      <p>Either this character doesn't exist, or you're not logged in to the account that owns it.</p>
      <div className="flex gap-4 justify-center">
        <Link className="button rounded px-6 py-4 shadow mt-6" href="/sign-in">Sign in</Link>
        <button className="button rounded px-6 py-4 shadow mt-6" onClick={() => reset()}>Try again</button>
      </div>
    </div>
  )
}
// "use client"

// export default function Error(props: { error: Error }) {
//   return (
//     <>
//       <p className="text-red-500"><strong>Error:</strong> Either this character does not exist, or you're not logged in to the account that owns it.</p>
//     </>
//   )
// }