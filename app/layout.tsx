import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Nunito } from 'next/font/google'
import './globals.css'

const headingFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ["700","800"],
  variable: '--font-heading',
  display: 'swap',
})

const bodyFont = Nunito({
  subsets: ['latin'],
  weight: ["400","500"],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'Generated landing page',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  )
}
