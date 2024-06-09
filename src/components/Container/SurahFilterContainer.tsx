import { TbGridDots, TbMenu2 } from 'react-icons/tb'
import FilterButton from '@/components/Button/FilterButton'

export default function SurahFilterContainer({
    handleListLayout,
    handleFilter,
    gridLayout,
    filterBy,
    isAscending,
}: SurahFilterContainerProps) {
    return (
        <>
            <div className="w-full flex justify-between items-center h-auto px-1">
                {/* List Layout */}
                <div className="flex gap-1 lg:gap-3 items-center">
                    <TbGridDots
                        onClick={() => handleListLayout(true)}
                        className={`cursor-pointer text-xl lg:text-4xl transition-all duration-200 ${
                            gridLayout
                                ? 'text-black scale-110'
                                : 'opacity-20 scale-90'
                        }`}
                    />
                    <TbMenu2
                        onClick={() => handleListLayout(false)}
                        className={`cursor-pointer text-xl lg:text-4xl transition-all duration-200 ${
                            gridLayout
                                ? 'opacity-20 scale-110'
                                : 'text-black scale-125'
                        }`}
                    />
                </div>
                {/* End List Layout */}

                {/* List Filter */}
                <div className="hidden lg:flex gap-3">
                    <FilterButton
                        customClass={`${
                            filterBy === 'No Urut' ? 'bg-white' : 'bg-stone-200'
                        } `}
                        handleFilter={handleFilter}
                        filterValue={'No Urut'}
                        isAscending={filterBy === 'No Urut' && isAscending}
                    ></FilterButton>
                    <FilterButton
                        customClass={`${
                            filterBy === 'Abjad' ? 'bg-white' : 'bg-stone-200'
                        } `}
                        handleFilter={handleFilter}
                        filterValue={'Abjad'}
                        isAscending={filterBy === 'Abjad' && isAscending}
                    ></FilterButton>
                    <FilterButton
                        customClass={`${
                            filterBy === 'Jumlah Ayat'
                                ? 'bg-white'
                                : 'bg-stone-200'
                        } `}
                        handleFilter={handleFilter}
                        filterValue={'Jumlah Ayat'}
                        isAscending={filterBy === 'Jumlah Ayat' && isAscending}
                    ></FilterButton>
                </div>
                {/* End List Filter */}
            </div>
        </>
    )
}
