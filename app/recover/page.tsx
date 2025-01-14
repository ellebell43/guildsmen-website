import type { Metadata } from "next"
import RecoverClient from "./client"

export const metadata: Metadata = {
  title: "Guildsmen | Account Recovery",
  description: "Reset your password to recover access your Guildsmen account."
}

export default function Recover() {
  return <RecoverClient />
}