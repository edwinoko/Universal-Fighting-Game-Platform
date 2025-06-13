import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

// Example character images (place your PNGs in /public/characters/)
const characters = [
  "/characters/mario.png",
  "/characters/link.png",
  "/characters/samus.png",
  "/characters/pikachu.png",
  "/characters/kirby.png",
]

export const metadata: Metadata = {
  title: 'Universal Fighing Game Platform',
  description: 'Platform for fighting games and fighting gamers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Global background character images */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {characters.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`absolute opacity-10 select-none
                ${i === 0 ? "left-4 top-10 w-40 rotate-[-10deg]" : ""}
                ${i === 1 ? "right-8 top-24 w-36 rotate-12" : ""}
                ${i === 2 ? "left-1/2 top-1/2 w-56 md:w-72 -translate-x-1/2 -translate-y-1/2" : ""}
                ${i === 3 ? "left-10 bottom-10 w-40 md:w-52 rotate-6" : ""}
                ${i === 4 ? "right-10 bottom-16 w-40 md:w-52 -rotate-6" : ""}
              `}
              draggable={false}
            />
          ))}
        </div>
        <Navbar />
        <main className='relative overflow-hidden bg-slate-100 p-10 z-10'>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
