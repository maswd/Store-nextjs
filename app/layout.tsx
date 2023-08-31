import Footer from '@/components/footer'
import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Navbar from '@/components/navbar'

const Estedad = localFont({
  src: [
    {
      path: '../public/fonts/100.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/200.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/300.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/600.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/700.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/800.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/900.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
})
export const metadata: Metadata = {
  title: 'فروشگاه',
  description: 'فروشگاه',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa">
      <body className={Estedad.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
