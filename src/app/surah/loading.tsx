'use client'

import SurahFilterContainer from '@/components/container/SurahFilterContainer'
import SurahCardSkeleton from '@/components/skeleton/SurahCardSkeleton'

export default function SurahListLoading() {
    const defaultSurahFilterContainerProps: SurahFilterContainerProps = {
        handleListLayout: () => {},
        handleFilter: () => {},
        gridLayout: false,
        filterBy: 'No Urut',
    }

    return (
        <>
            <section className="w-full flex flex-col gap-10">
                <SurahFilterContainer {...defaultSurahFilterContainerProps} />
                <div
                    className={`w-full h-auto gap-2 xl:gap-5 flex flex-col xl:grid xl:grid-cols-4`}
                >
                    {Array.from({ length: 12 }, (_, index) => (
                        <SurahCardSkeleton key={index}></SurahCardSkeleton>
                    ))}
                </div>
            </section>
        </>
    )
}
