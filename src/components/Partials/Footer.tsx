import Link from 'next/link'
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <>
            <footer
                id="footer"
                className="flex flex-col lg:flex-row items-center justify-between bg-Gray-100/90 font-semibold text-sm text-black shadow-xl lg:pl-11 lg:pr-24 py-4 gap-y-3"
            >
                <span>© {currentYear} Fabianazh. All rights reserved</span>
                <div className="h-auto flex justify-between w-auto gap-5 lg:gap-8">
                    <Link
                        href="http://github.com/fabianazh/"
                        className="icon__sm"
                    >
                        <FaGithub />
                    </Link>
                    <Link href="#" className="icon__sm">
                        <FaFacebook />
                    </Link>
                    <Link
                        href="https://instagram.com/fabianazhrr"
                        className="icon__sm"
                    >
                        <FaInstagram />
                    </Link>
                </div>
            </footer>
        </>
    )
}
