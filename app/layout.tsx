'use client';

import './globals.css'
import { Gentium_Plus } from 'next/font/google'
import Nav from './nav';
import Footer from './footer';

// Import font "Gentium Plus" from google fonts
const gentium = Gentium_Plus({ weight: "400", preload: true, subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`transition-all ${localStorage.getItem("isDark") == "true" ? "dark" : ""}`} id="html">
      <body className={`${gentium.className} dark:bg-stone-700 dark:text-stone-100 transition-all`}>
        <Nav />
        <main className='dark:bg-stone-700 dark:text-stone-100 transition-all pt-5'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
