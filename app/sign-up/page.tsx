import SignUpClient from "./sign-up-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guildsmen | Sign Up"
}

export default function SignUp() {
  return <SignUpClient />
}