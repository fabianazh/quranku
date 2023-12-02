import { TbGridDots, TbMenu2 } from 'react-icons/tb'
import FilterButton from '../button/FilterButton'

export default function SurahFilterContainer({
    handleListLayout,
    handleFilter,
    gridLayout,
    filterBy,
}: SurahFilterContainerProps) {
    return (
        <>
            <div className="w-full hidden xl:flex justify-between items-center h-auto px-1">
                {/* List Layout */}
                <div className="flex gap-3 items-center">
                    <TbGridDots
                        onClick={() => handleListLayout(true)}
                        className={`cursor-pointer text-4xl transition-all duration-200 ${
                            gridLayout
                                ? 'text-black scale-110'
                                : 'opacity-20 scale-90'
                        }`}
                    />
                    <TbMenu2
                        onClick={() => handleListLayout(false)}
                        className={`cursor-pointer text-4xl transition-all duration-200 ${
                            gridLayout
                                ? 'opacity-20 scale-110'
                                : 'text-black scale-125'
                        }`}
                    />
                </div>
                {/* End List Layout */}

                {/* List Filter */}
                <div className="flex gap-3">
                    <FilterButton
                        customClass={`${
                            filterBy === 'No Urut' ? 'bg-white' : 'bg-stone-200'
                        } `}
                        handleFilter={handleFilter}
                        filterValue={'No Urut'}
                    ></FilterButton>
                    <FilterButton
                        customClass={`${
                            filterBy === 'Abjad' ? 'bg-white' : 'bg-stone-200'
                        } `}
                        handleFilter={handleFilter}
                        filterValue={'Abjad'}
                    ></FilterButton>
                    <FilterButton
                        customClass={`${
                            filterBy === 'Jumlah Ayat'
                                ? 'bg-white'
                                : 'bg-stone-200'
                        } `}
                        handleFilter={handleFilter}
                        filterValue={'Jumlah Ayat'}
                    ></FilterButton>
                </div>
                {/* End List Filter */}
            </div>
        </>
    )
}
