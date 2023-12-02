import Link from 'next/link'
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Footer() {
    return (
        <>
            <footer
                id="footer"
                className="flex items-center justify-between bg-Gray-100/90 font-semibold text-sm text-black shadow-xl pl-11 pr-24 py-4"
            >
                <span>© 2023 Fabianazh. All rights reserved</span>
                <div className="h-auto flex justify-between w-auto gap-8">
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
