"use client";

import "./globals.css"
import { Gentium_Plus } from "next/font/google"
import Nav from "./nav";
import Footer from "./footer";

// Import font "Gentium Plus" from google fonts
const gentium = Gentium_Plus({ weight: "400", preload: true, subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" id="html" className="dark">
      <body className={`${gentium.className} dark:bg-stone-700 dark:text-stone-100 transition-all`}>
        <Nav />
        <main className="dark:bg-stone-700 dark:text-stone-100 transition-all" id="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
