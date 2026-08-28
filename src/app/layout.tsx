import type { Metadata } from "next"
import {
  Geist,
  Geist_Mono,
  Noto_Sans,
  Playfair_Display,
} from "next/font/google"
import "./globals.css"
import { cn } from "@/shared/lib/utils"
import { NavBar } from "@/shared/components/nav-bar"
import { Providers } from "@/shared/providers"
import { LayoutFrame } from "@/shared/components/layout-frame"
const playfairDisplayHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
})

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Next Practice",
    template: "%s | Next Practice",
  },
  description: "A Next.js practice project.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        notoSans.variable,
        playfairDisplayHeading.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        <Providers>
          <div className="mx-auto w-full max-w-5xl flex-1 p-8">
            <LayoutFrame label="Root Layout" path="app/layout.tsx" color={1}>
              {children}
            </LayoutFrame>
          </div>
        </Providers>
      </body>
    </html>
  )
}
