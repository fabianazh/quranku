'use client'

import { useEffect, useState } from 'react'
import { getAllSurah } from '@/utils/quran'
import SurahFilterContainer from '@/components/Container/SurahFilterContainer'
import SurahCard from '@/components/Card/SurahCard'

export default function SurahList() {
    const [allSurah, setAllSurah] = useState<Surah[]>([])
    const [filterBy, setFilterBy] = useState<string>('No Urut')
    const [gridLayout, setGridLayout] = useState<boolean>(true)
    const [isAscending, setIsAscending] = useState<boolean>(true)

    useEffect(() => {
        const fetchData = async () => {
            const surahData: Surah[] = await getAllSurah()
            setAllSurah(surahData)
        }

        fetchData()
    }, [])

    const handleListLayout = (layoutType: boolean) => {
        setGridLayout(layoutType)
    }

    const handleFilter = (filterType: string) => {
        if (filterBy === filterType) {
            setIsAscending(!isAscending)
        } else {
            setFilterBy(filterType)
            setIsAscending(true)
        }
    }

    const filteredSurah = () => {
        const sortedSurah = [...allSurah]
        switch (filterBy) {
            case 'Abjad':
                sortedSurah.sort((a, b) =>
                    isAscending
                        ? a.namaLatin.localeCompare(b.namaLatin)
                        : b.namaLatin.localeCompare(a.namaLatin)
                )
                break
            case 'Jumlah Ayat':
                sortedSurah.sort((a, b) =>
                    isAscending
                        ? a.jumlahAyat - b.jumlahAyat
                        : b.jumlahAyat - a.jumlahAyat
                )
                break
            default:
                sortedSurah.sort((a, b) =>
                    isAscending ? a.nomor - b.nomor : b.nomor - a.nomor
                )
                break
        }
        return sortedSurah
    }

    return (
        <>
            <section className="w-full flex flex-col gap-5 lg:gap-10">
                <SurahFilterContainer
                    handleListLayout={handleListLayout}
                    handleFilter={handleFilter}
                    gridLayout={gridLayout}
                    filterBy={filterBy}
                    isAscending={isAscending}
                />

                {/* Surah Grid */}
                <div
                    className={`w-full h-auto gap-2 transition-all xl:gap-5 ${
                        gridLayout
                            ? 'flex flex-col xl:grid xl:grid-cols-4'
                            : 'flex flex-col'
                    }`}
                >
                    {filteredSurah().map((surah) => (
                        <SurahCard
                            key={surah.nomor}
                            surah={surah}
                            gridLayout={gridLayout}
                        />
                    ))}
                </div>
                {/* End Surah Grid */}
            </section>
        </>
    )
}
