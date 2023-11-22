"use client"

export default function Error(props: { error: Error }) {
  return (
    <>
      <p className="text-red-500"><strong>Error:</strong> {props.error.message}</p>
    </>
  )
}