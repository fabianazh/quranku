import type { Metadata } from 'next'
import './globals.css'
import { quicksand } from './fonts'
import Header from '@/components/partials/Header'
import Footer from '@/components/partials/Footer'

export const metadata: Metadata = {
    title: 'QuranKu App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={quicksand.className}>
                <Header />
                <main className="pt-20 mb-14 container px-2 mx-auto min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
