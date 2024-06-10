import { TbGridDots, TbMenu2 } from 'react-icons/tb'
import Dropdown from '@/components/Other/Dropdown'
import { HiArrowSmDown, HiArrowSmUp } from 'react-icons/hi'

export default function SurahFilterContainer({
    handleListLayout,
    handleFilter,
    gridLayout,
    filterBy,
    isAscending,
}: SurahFilterContainerProps) {
    const buttons = [
        {
            value: 'No Urut Asc',
            text: 'No Urut',
            isAscending: true,
        },
        {
            value: 'No Urut Desc',
            text: 'No Urut',
            isAscending: false,
        },
        {
            value: 'Abjad Asc',
            text: 'Abjad',
            isAscending: true,
        },
        {
            value: 'Abjad Desc',
            text: 'Abjad',
            isAscending: false,
        },
        {
            value: 'Jumlah Ayat Asc',
            text: 'Jumlah Ayat',
            isAscending: true,
        },
        {
            value: 'Jumlah Ayat Desc',
            text: 'Jumlah Ayat',
            isAscending: false,
        },
    ]

    const removeLastWord = (str: string): string => {
        const words = str.split(' ')
        words.pop()
        return words.join(' ')
    }

    return (
        <>
            <div className="w-full flex justify-between items-center h-auto px-1">
                {/* List Layout */}
                <div className="flex gap-1 lg:gap-3 items-center">
                    <TbGridDots
                        onClick={() => handleListLayout(true)}
                        className={`cursor-pointer text-3xl lg:text-4xl transition-all duration-200 ${
                            gridLayout
                                ? 'text-black scale-110'
                                : 'opacity-20 scale-90'
                        }`}
                    />
                    <TbMenu2
                        onClick={() => handleListLayout(false)}
                        className={`cursor-pointer text-3xl lg:text-4xl transition-all duration-200 ${
                            gridLayout
                                ? 'opacity-20 scale-110'
                                : 'text-black scale-125'
                        }`}
                    />
                </div>
                {/* End List Layout */}
                {/* List Filter */}
                <div>
                    <Dropdown>
                        <Dropdown.Trigger>
                            <div
                                className={`w-auto shadow-md cursor-pointer rounded-md gap-1 lg:gap-4 px-3 lg:px-4 py-1.5 lg:py-2 h-auto flex lg:justify-between bg-white`}
                            >
                                <div className="flex flex-col lg:gap-0.5 text-sm">
                                    <span className="text-[0.675rem] lg:text-xs text-stone-500">
                                        Sort by
                                    </span>
                                    <span className="text-xs lg:text-base font-extrabold">
                                        {removeLastWord(filterBy)}
                                    </span>
                                </div>
                                <div className="flex items-end text-base lg:text-xl">
                                    <HiArrowSmDown
                                        className={`transition-transform ${
                                            isAscending ? 'rotate-180' : ''
                                        }`}
                                    />
                                </div>
                            </div>
                        </Dropdown.Trigger>

                        <Dropdown.Content align="right">
                            {buttons.map((button, index) => (
                                <Dropdown.Button
                                    handleClick={handleFilter}
                                    value={button.value}
                                    active={filterBy === button.value}
                                    key={index}
                                >
                                    <div className="flex gap-1 items-center">
                                        <span>{button.text}</span>
                                        <HiArrowSmUp
                                            className={`${
                                                button.isAscending
                                                    ? ''
                                                    : 'rotate-180'
                                            }`}
                                        />
                                    </div>
                                </Dropdown.Button>
                            ))}
                        </Dropdown.Content>
                    </Dropdown>
                </div>
                {/* End List Filter */}
            </div>
        </>
    )
}
