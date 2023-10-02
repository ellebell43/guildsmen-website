'use client'

import getUserByToken from "../getUserByToken"
import Spinner from "@/app/spinner"
import { useRouter, usePathname } from "next/navigation"

export default function PrivateRoute(props: { children: React.ReactNode }) {
  const { data, isLoading, error } = getUserByToken()
  const router = useRouter()
  const path = usePathname()

  if (isLoading) return <Spinner />
  if (error) return <p>Something went wrong: {String(error)}</p>
  if (!data?.success) { router.push(`/sign-in?return=${path}`); return <></> }
  return (
    <>
      {props.children}
    </>
  )
}