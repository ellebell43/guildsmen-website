import getCookieString from "@/util/getCookieString"
import { user } from "@/util/types"
import ProfileClient from "./profile-client"
import PrivateRoute from "@/util/components/private-route"

export default async function Profile() {
  let user: user | null
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/profile/api`, { cache: "no-store", method: "GET", headers: { Cookie: getCookieString(), getUser: "true" }, credentials: "include" })
  if (!res.ok) {
    user = null
  } else {
    user = await res.json()
  }

  return (
    <PrivateRoute>
      <ProfileClient user={user} />
    </PrivateRoute>
  )
}