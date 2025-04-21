import { Metadata } from "next";
import CommunityTemplatesClient from "./client";
import { characterTemplate } from "@/util/types";

export const metadata: Metadata = { title: "Guildsmen | Community Templates" }

export default async function Page() {
  let list: characterTemplate[]
  const apiRoute = `${process.env.NEXT_PUBLIC_HOST}/resources/community-templates/api`
  const res = await fetch(apiRoute, { cache: "no-store", method: "GET" })
  if (!res.ok) return <p>Error: something went wrong communicating with the server. Please refresh and try again.</p>
  list = await res.json()
  console.warn(`list: ${JSON.stringify(list)}`)

  return (
    <>
      <CommunityTemplatesClient list={list} />
    </>
  )
}