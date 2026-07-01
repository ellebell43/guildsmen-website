import Link from "next/link"
import NextButton from "../next-button"
import { Metadata } from "next"
import Contents from "@/util/components/contents"
import SkillsClient from "./client"

export const metadata: Metadata = {
  title: "Guildsmen | Skills",
  description: "Learn about the various skills in Guildsmen TTRPG and how to use them"
}

export default function Page() {
  return <SkillsClient />
}