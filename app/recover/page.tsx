import RecoverClient from "./recover-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guildsmen | Password Recovery"
}

export default function Recover() {
  return <RecoverClient />
}