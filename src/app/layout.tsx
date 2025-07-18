import type { Metadata } from "next"
import { ThemeProvider } from 'next-themes'
import { Raleway } from "next/font/google"
import "./globals.css"

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Nurax",
  description: "Nurax is a platform for creating and sharing AI-generated content.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${raleway.variable} antialiased bg-white dark:bg-[#121414] flex flex-col min-h-screen`}
      >
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <div className="flex-1">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
