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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: "Shortcut Finance",
  description: "Shortcut Finance is a fintech company that simplifies financial services through smart technology and seamless digital solutions. We help individuals and b",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Organization","name":"Shortcut Finance","description":"Shortcut Finance is a fintech company that simplifies financial services through smart technology and seamless digital solutions. We help individuals and businesses manage payments, access financing, and handle financial operations faster and more efficiently — removing complexity and creating a smoother path to financial success.","email":"jiachwen99@gmail.com","address":"B5-1-3, Forest Green Condominium, Bandar Sungai Long"}` }} />
      {children}</body>
    </html>
  )
}
