"use client"

import getUserByToken from "@/util/getUserByToken"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Spinner from "../spinner"
import { mutate } from "swr"

export default function Profile() {
  const { data, isLoading, error } = getUserByToken()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !data?.user) {
      router.push("/sign-in")
    }
  }, [isLoading, data])

  if (isLoading) return <Spinner />
  if (error) return <p>{String(error)}</p>
  return (
    <>
      <h1>Profile</h1>
      <p>{String(data?.user?.username)}</p>
      <p>{data?.message}</p>
      <button type="button" onClick={() => {
        document.cookie = "token="
        mutate("/sign-in/api")
      }}>Sign Out</button>
    </>
  )
}