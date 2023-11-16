import type { Metadata } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

const poppins = Poppins ({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style:["italic", "normal"],
  variable: "--font-poppins"
})

const montserrat = Montserrat ({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style:["italic", "normal"],
  variable: "--font-montserrat"
})


export const metadata: Metadata = {
  title: 'Panorama',
  description: 'The Everything Digital Online Store: Games, Hardware and everything for you digital life.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body>
        <Header />
        <main className='bg-primary-gradient min-h-screen'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
