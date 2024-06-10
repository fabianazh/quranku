export default function SurahDetailLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="relative w-full lg:w-10/12 overflow-x-hidden min-h-screen pt-5 container mx-auto flex flex-col gap-5">
                {children}
            </div>
        </>
    )
}
