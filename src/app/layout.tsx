import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import './globals.css'
import NavBar from '../components/navbar/NavBar'
import { SessionProvider } from 'next-auth/react'
import Footer from '@/components/footer/footer'
import { ThemeProvider } from '@/components/theme-provider'

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Awesome Recipes',
  description: 'Recipes app with tailwindcss'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SessionProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${lora.variable} antialiased font-primary`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  )
}
