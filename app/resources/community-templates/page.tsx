import { Metadata } from "next";
import CommunityTemplatesClient from "./client";
import { characterTemplate } from "@/util/types";

export const fetchCache = "force-no-store"
export const metadata: Metadata = { title: "Guildsmen | Community Templates" }

export default async function Page() {
  let list: characterTemplate[]
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/resources/community-templates/api`, { cache: "no-store", method: "GET" })
  if (!res.ok) {
    return <p>Error: something went wrong communicating with the server. Please refresh and try again.</p>
  } else {
    list = await res.json()
    return (
      <>
        <CommunityTemplatesClient list={list} />
      </>
    )
  }
}