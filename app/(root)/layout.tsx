import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import RightSidebar from '@/components/shared/RightSidebar'
import Botombar from '@/components/shared/Botombar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import Topbar from '@/components/shared/Topbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Threads',
  description: 'A next.js 13 Meta Threads Application'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          <main className='flex flex-row'>
            <LeftSidebar />
            <section className="main-container">
              <div className="max-w-4xl w-full">
                {children}
              </div>
            </section>
            <RightSidebar />
          </main>         
          <Botombar />
        </body>
      </html>
    </ClerkProvider>
  )
}
