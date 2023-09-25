import SignInClient from "./sign-in-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guildsmen | Sign In"
}

export default function SignIn() {
  return <SignInClient />
}