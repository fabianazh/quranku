import Link from 'next/link'

export default function AppIcon({ pathname }: { pathname: string }) {
    return (
        <>
            <Link
                href={'/'}
                className={`${
                    pathname.startsWith('/surah/') ? 'hidden' : 'block'
                }`}
            >
                <span className="font-bold hover:text-green-500 duration-300 transition-all">
                    QuranKu
                </span>
            </Link>
        </>
    )
}
