import "./globals.css";
import type { ReactNode } from "react";
import { Providers } from "@/components/providers";

export const metadata = {
  title: 'Strava Game',
  description: 'A Next.js app connected to PostgreSQL'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
