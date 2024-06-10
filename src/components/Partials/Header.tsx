'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useAnimation } from 'framer-motion'
import { FiArrowLeft } from 'react-icons/fi'
import AppIcon from '@/components/Icon/AppIcon'

export default function Header() {
    const pathname = usePathname()
    const controls = useAnimation()

    useEffect(() => {
        const handleScroll = () => {
            const scrollYValue = window.scrollY

            if (scrollYValue > 0) {
                controls.start({
                    backgroundColor: 'rgb(255 255 255 / 0.88)',
                    boxShadow:
                        '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                    backdropFilter: 'blur(4px)',
                })
            } else {
                controls.start({
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    backdropFilter: 'none',
                })
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [controls])

    const surahId = pathname.split('/')[2]

    return (
        <motion.header
            initial={{
                style: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    backdropFilter: 'none',
                },
            }}
            animate={controls}
            exit={{
                style: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    backdropFilter: 'none',
                },
            }}
            transition={{ duration: 0 }}
            className={`w-full z-40 h-12 lg:h-16 px-6 lg:px-11 tracking-wide flex justify-between items-center fixed top-0 right-0 text-Green-300 duration-300 transition-all`}
        >
            <div
                className={`${
                    pathname.startsWith('/surah/')
                        ? 'w-1/3'
                        : 'w-full grid place-items-center'
                }`}
            >
                <AppIcon pathname={pathname} />
                <Link
                    href={
                        pathname.includes('tafsir') ? `/surah/${surahId}` : '/'
                    }
                    className={`${
                        pathname.startsWith('/surah/')
                            ? 'flex gap-3 w-fit items-center'
                            : 'hidden'
                    }`}
                >
                    <FiArrowLeft className="text-xl lg:text-lg hover:text-green-500 duration-300 transition-all" />
                    <span className="hidden lg:inline-block font-bold text-sm hover:text-green-500 duration-300 transition-all">
                        Kembali
                    </span>
                </Link>
            </div>
            <div
                className={`w-1/3 h-full ${
                    pathname.startsWith('/surah/')
                        ? 'grid place-items-center'
                        : 'hidden'
                }`}
            >
                <Link href={'/'}>
                    <span className="font-bold hover:text-green-500 duration-300 transition-all">
                        QuranKu
                    </span>
                </Link>
            </div>
            <nav
                className={`w-1/3 h-full ${
                    pathname.startsWith('/surah/') ? '' : 'hidden'
                }`}
            ></nav>
        </motion.header>
    )
}
