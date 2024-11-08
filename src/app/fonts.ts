import { Poppins, Quicksand } from 'next/font/google'
import localFont from 'next/font/local'

export const quicksand = Quicksand({
    subsets: ['latin'],
    variable: '--font-quicksand',
    display: 'swap',
})

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
})

export const qalam = localFont({
    src: './fonts/Al-Qalam.ttf',
    display: 'swap',
})
