export default function SurahDetailLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="w-10/12 min-h-screen pt-5 container mx-auto flex flex-col gap-5">
                {children}
            </div>
        </>
    )
}
