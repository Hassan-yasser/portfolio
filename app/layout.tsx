import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/components/Navbar'
import Navigation from '@/app/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hasan Alhossiny',
  description: 'This is my portfolio as a front end developer I Have A Strong foundition in Web Development with React.js and Next.js, Visit My GitHub and LinkedIn To See my work space',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden min-h-[100vh]`}>
        <Navbar />
        {children}
        <Navigation />
        </body>
    </html>
  )
}