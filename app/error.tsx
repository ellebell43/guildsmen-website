'use client'

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
      <button className="button rounded px-6 py-4 shadow mt-6" onClick={() => reset()}>Try again</button>
    </div>
  )
}