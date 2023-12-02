import Link from 'next/link'

interface BasicButtonProps {
    pathTo: string
    children: React.ReactNode
    customClass: string
}

export default function BasicButton({
    pathTo,
    children,
    customClass,
}: BasicButtonProps) {
    return (
        <>
            <Link
                href={pathTo}
                className={`px-6 cursor-pointer rounded py-1.5 ${customClass}`}
            >
                {children}
            </Link>
        </>
    )
}
