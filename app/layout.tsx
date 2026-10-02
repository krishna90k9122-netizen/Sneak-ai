import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Sora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SneakAI — Your Silent Advantage | Real-Time Conversation Assistant",
  description:
    "Think clearly. Respond confidently. Stay present. SneakAI is an AI-powered real-time conversation assistant designed for flawless interviews, meetings, and high-stakes discussions.",
  keywords: [
    "AI conversation assistant",
    "SneakAI",
    "Your Silent Advantage",
    "interview copilot",
    "real-time AI answers",
    "undetectable AI",
    "screen assistant"
  ],
  openGraph: {
    title: "SneakAI — Your Silent Advantage",
    description:
      "Think clearly. Respond confidently. Stay present. SneakAI quietly gives you real-time answers wherever you work.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SneakAI — Your Silent Advantage",
    description:
      "Think clearly. Respond confidently. Stay present. SneakAI quietly gives you real-time answers wherever you work.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#03050C",
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
    <html lang="en" dir="ltr" className={`${inter.variable} ${sora.variable} dark`}>
      <body className="font-sans antialiased bg-[#03050C] text-[#F7FAFF] selection:bg-[#00E5FF]/20 selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
