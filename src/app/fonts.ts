import { Amiri, Poppins, Quicksand } from 'next/font/google'
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

export const amiri = Amiri({
    subsets: ['arabic'],
    weight: ['400', '700'],
    display: 'swap',
})

export const uthman = localFont({
    src: './fonts/uthman.otf',
    display: 'swap',
})
