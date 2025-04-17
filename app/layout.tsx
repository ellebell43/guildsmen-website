import "./globals.css"
import { Gentium_Plus } from "next/font/google"
import Nav from "./nav";
import Footer from "./footer";
import { cookies } from "next/headers";
import { CookiesProvider } from "next-client-cookies/server";

// Import font "Gentium Plus" from google fonts
const gentium = Gentium_Plus({ weight: "400", preload: true, subsets: ["latin"] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const token = cookies().get("token")?.value
  let avatarSrc
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/profile/api`, { method: "GET", headers: { token: token ? token : "", getUser: "true" }, credentials: "include", next: { tags: ["layout"] } })
  if (!res.ok) {
    avatarSrc = ""
  } else {
    const user = await res.json()
    avatarSrc = user.avatarUrl
  }

  return (
    <html lang="en" id="html" className="dark">
      <CookiesProvider>
        <body className={`${gentium.className} dark:bg-stone-700 dark:text-stone-100 transition-all`}>
          <Nav signedIn={Boolean(token)} avatarSrc={avatarSrc} />
          <main className="dark:bg-stone-700 dark:text-stone-100 transition-all max-w-[1000px] mx-auto" id="main">
            {children}
          </main>
          <Footer />
        </body>
      </CookiesProvider>
    </html>
  )
}
