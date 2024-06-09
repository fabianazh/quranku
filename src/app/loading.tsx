'use client'

import SurahCardSkeleton from '@/components/Skeleton/SurahCardSkeleton'
import SurahFilterContainer from '@/components/Container/SurahFilterContainer'

export default function SurahListLoading() {
    const defaultSurahFilterContainerProps: SurahFilterContainerProps = {
        handleListLayout: () => {},
        handleFilter: () => {},
        gridLayout: false,
        filterBy: 'No Urut',
        isAscending: true,
    }

    return (
        <>
            <section className="w-full flex flex-col gap-10">
                <SurahFilterContainer {...defaultSurahFilterContainerProps} />
                <div
                    className={`w-full h-auto gap-2 xl:gap-5 flex flex-col xl:grid xl:grid-cols-4`}
                >
                    {Array.from({ length: 12 }, (_, index) => (
                        <SurahCardSkeleton key={index} />
                    ))}
                </div>
            </section>
        </>
    )
}
