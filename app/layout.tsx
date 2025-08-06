import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'hotel pro App',
  description: 'Created by Oisemeka Okpaleke',
  generator: 'olisemeka',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
