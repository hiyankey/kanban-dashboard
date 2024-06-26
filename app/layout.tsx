import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const interSans = localFont({
  src: './fonts/InterVariable.woff2',
  variable: '--font-inter-sans',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${interSans.variable}`}>{children}</body>
    </html>
  )
}
