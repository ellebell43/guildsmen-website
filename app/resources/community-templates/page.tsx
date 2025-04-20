import { Metadata } from "next";
import CommunityTemplatesClient from "./client";
import { characterTemplate } from "@/util/types";
import { cookies } from "next/headers";

export const metadata: Metadata = { title: "Guildsmen | Community Templates" }

export default async function Page() {
  const token = cookies().get("token")
  let list: characterTemplate[] = []
  console.log(list.length)
  const apiRoute = `${process.env.NEXT_PUBLIC_HOST}/resources/community-templates/api`
  const res = await fetch(apiRoute, { method: "GET", headers: { token: token ? token.value : "" } })
  if (!res.ok) return <p>Error: something went wrong communicating with the server. Please refresh and try again.</p>
  list = await res.json()
  console.log(list.length)

  return (
    <>
      <CommunityTemplatesClient list={list} />
    </>
  )
}