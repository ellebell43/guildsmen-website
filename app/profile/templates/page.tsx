import { Metadata } from "next"
import { redirect, useParams } from "next/navigation"
import TemplatesClient from "./templates-client"
import { cookies } from "next/headers"
import { characterTemplate } from "@/util/types"

export const metadata: Metadata = { title: "Guildsmen | My Templates" }

export default async function Templates() {
  const token = cookies().get("token")
  if (!token?.value) {
    redirect("/sign-in?return=/profile/templates")
  } else {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/profile/templates/api`, { method: "GET", headers: { token: token.value } })
    if (!res.ok) throw new Error("Something went wrong! Could not get template list.")
    const data = await res.json()
    return <TemplatesClient list={data} />
  }
}