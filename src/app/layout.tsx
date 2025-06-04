import '../styles/globals.css'
import { ReactNode } from 'react'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'Личный кабинет',
    description: 'Next.js + Auth + SSR',
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru">
        <body className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
        <main className="flex-grow w-full flex justify-center items-start py-16 px-4">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    )
}
