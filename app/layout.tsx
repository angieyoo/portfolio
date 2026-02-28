import type { Metadata } from 'next'
import { Bodoni_Moda, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const bodoni = Bodoni_Moda({ 
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
  adjustFontFallback: true,
})

const sans = IBM_Plex_Sans({ 
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500'],
  display: 'swap',
  adjustFontFallback: true,
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400'],
  display: 'swap',
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'A refined portfolio showcase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bodoni.variable} ${sans.variable} ${mono.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  )
}
