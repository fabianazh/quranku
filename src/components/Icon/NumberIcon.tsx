export default function NumberIcon({
    customClass,
    children,
}: {
    customClass: string
    children: React.ReactNode
}) {
    return (
        <>
            <div
                className={`w-8 shrink-0 aspect-square shadow text-Green-500 rounded-full bg-Green-200 grid place-items-center ${customClass}`}
            >
                {children}
            </div>
        </>
    )
}
