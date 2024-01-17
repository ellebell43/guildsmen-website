import "./globals.css"
import { Gentium_Plus } from "next/font/google"
import Nav from "./nav";
import Footer from "./footer";
import getCookieString from "@/util/getCookieString";
import { cookies } from "next/headers";

// Import font "Gentium Plus" from google fonts
const gentium = Gentium_Plus({ weight: "400", preload: true, subsets: ["latin"] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  let avatarSrc
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/profile/api`, { cache: "no-store", method: "GET", headers: { Cookie: getCookieString(), getAvatarUrl: "true" }, credentials: "include" })
  if (!res.ok) {
    avatarSrc = ""
  } else {
    avatarSrc = await res.json()
  }

  const signedIn = Boolean(cookies().get("token"))

  return (
    <html lang="en" id="html" className="dark">
      <body className={`${gentium.className} dark:bg-stone-700 dark:text-stone-100 transition-all`}>
        <Nav signedIn={signedIn} avatarSrc={avatarSrc} />
        <main className="dark:bg-stone-700 dark:text-stone-100 transition-all" id="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
