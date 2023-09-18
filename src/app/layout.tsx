import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import CustomNavbar from '@/components/CustomNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sampoorna Adalat',
  description: 'Tez Bharat Ka Tez Nyaya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomNavbar/>
        <>{children}</>
      </body>
    </html>
  )
}
