import Link from "next/link"
import getCookieString from "@/util/getCookieString"

export default async function () {
  let avatarSrc
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/resources/character-app/api`, { cache: "no-store", method: "GET", headers: { Cookie: getCookieString() }, credentials: "include" })
  if (!res.ok) {
    avatarSrc = ""
  } else {
    avatarSrc = await res.json()
  }

  return (
    <Link href="/sign-in">
    </Link>
  )
}