import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Easy40K',
  description: 'Make 40K accessible',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto p-4`}
      >
        <header>
          <Link className="text-4xl" href="/">
            Easy40K
          </Link>
          <nav></nav>
        </header>
        <main className="mt-8">{children}</main>
      </body>
    </html>
  )
}
