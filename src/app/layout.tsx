import type { Metadata } from 'next'
import './globals.css'
import { quicksand } from './fonts'
import Header from '@/components/Partials/Header'
import Footer from '@/components/Partials/Footer'
import ScrollToTopButton from '@/components/Button/ScrollToTopButton'

export const metadata: Metadata = {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    keywords: [
        'QuranKu App',
        'AlQuranKu App',
        'QuranKu',
        'AlQuranKu',
        'Al-QuranKu',
        'Quran Online',
        'AlQuran Online',
        'Al-Quran Online',
        'Fabianazh projects',
        `Fabianazh's projects`,
        'Muhammad Fabian Azhar',
        'Quran Indonesia',
        'AlQuran Indonesia',
    ],
    title: {
        default: 'QuranKu App',
        template: '%s | QuranKu App',
    },
    description:
        'QuranKu is a modern and accessible Quran web application designed to provide users with a seamless reading experience anywhere, anytime. Whether users are at home, traveling, or on the move, QuranKu ensures that the beauty and wisdom of the Quran are just a click away',
    openGraph: {
        title: 'QuranKu App',
        description:
            'QuranKu is a modern and accessible Quran web application designed to provide users with a seamless reading experience anywhere, anytime. Whether users are at home, traveling, or on the move, QuranKu ensures that the beauty and wisdom of the Quran are just a click away',
        url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        siteName: 'QuranKu App',
        locale: 'id_ID',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
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
                <main className="pt-20 mb-6 lg:mb-14 container px-2 mx-auto min-h-screen">
                    {children}
                </main>
                <Footer />
                <ScrollToTopButton />
            </body>
        </html>
    )
}
