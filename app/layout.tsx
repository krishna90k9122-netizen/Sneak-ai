import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SneakAI — Your invisible AI everyday copilot",
  description:
    "SneakAI understands your screen, follows the conversation, and helps you respond with confidence — without anyone knowing.",
  keywords: ["AI copilot", "invisible AI", "real-time assistant", "screen reader AI", "interview assistant"],
  openGraph: {
    title: "SneakAI — Your invisible AI everyday copilot",
    description:
      "SneakAI understands your screen, follows the conversation, and helps you respond with confidence — without anyone knowing.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SneakAI — Your invisible AI everyday copilot",
    description:
      "SneakAI understands your screen, follows the conversation, and helps you respond with confidence.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#050608",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} dark`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
