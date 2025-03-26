import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import './globals.css'
import NavBar from '../components/navbar/NavBar'
import Footer from '@/components/footer/footer'

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Recipes App',
  description: 'Recipes app with tailwindcss'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} antialiased font-primary`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
