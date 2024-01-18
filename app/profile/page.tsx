import { user } from "@/util/types"
import ProfileClient from "./profile-client"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { Metadata } from "next"

export const metadata: Metadata = { title: "Guildsmen | Profile" }

export default async function Profile() {
  const token = cookies().get("token")
  if (!token?.value) {
    redirect(`${process.env.NEXT_PUBLIC_HOST}/sign-in?return=/profile`)
  } else {
    let user: user | null
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/profile/api`, { cache: "no-store", method: "GET", headers: { token: token.value, getUser: "true" }, credentials: "include" })
    if (!res.ok) {
      const data = await res.json()
      throw new Error(data.message)
    } else {
      user = await res.json()
    }

    return <ProfileClient user={user} />
  }
}