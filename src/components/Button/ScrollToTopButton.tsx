'use client'

import { useState, useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <>
            <div
                onClick={scrollToTop}
                className={`aspect-square cursor-pointer shadow-md hover:translate-y-0.5 grid place-items-center w-8 shrink-0 text-Green-500 rounded-full transition-all hover:bg-green-300/70 duration-300 fixed bg-green-300 z-50 bottom-3.5 right-4 lg:right-8 ${
                    isVisible ? 'scale-100' : 'scale-0'
                }`}
            >
                <FiArrowUp />
            </div>
        </>
    )
}
