import ProfileClient from "./profile-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guildsmen | My Profile"
}

export default function Profile() {
  return <ProfileClient />
}