import { HiArrowSmUp } from 'react-icons/hi'

interface FilterButtonProps {
    customClass: string
    handleFilter: (filterType: string) => void
    filterValue: string
}

export default function FilterButton({
    customClass,
    handleFilter,
    filterValue,
}: FilterButtonProps) {
    return (
        <>
            <div
                onClick={() => handleFilter(filterValue)}
                className={`w-auto shadow-md cursor-pointer rounded-md gap-4 px-4 py-2 h-auto flex justify-between ${customClass}`}
            >
                <div className="flex flex-col gap-0.5 text-sm">
                    <span className="text-xs text-stone-500">Sort by</span>
                    <span className="font-extrabold">{filterValue}</span>
                </div>
                <div className="flex items-end text-xl">
                    <HiArrowSmUp />
                </div>
            </div>
        </>
    )
}
