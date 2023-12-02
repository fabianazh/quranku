'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import SurahCard from '@/components/card/SurahCard'
import SurahFilterContainer from '@/components/container/SurahFilterContainer'
import SurahCardSkeleton from '@/components/skeleton/SurahCardSkeleton'
import { getAllSurah } from '@/interfaces/quran'

export default function Surah() {
    const [allSurah, setAllSurah] = useState<Surah[]>([])
    const [filterBy, setFilterBy] = useState<string>('No Urut')
    const [gridLayout, setGridLayout] = useState<boolean>(true)

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
        setFilterBy(filterType)
    }

    const filteredSurah = () => {
        switch (filterBy) {
            case 'Abjad':
                return allSurah.sort((a, b) =>
                    a.namaLatin.localeCompare(b.namaLatin)
                )
            case 'Jumlah Ayat':
                return allSurah.sort((a, b) => a.jumlahAyat - b.jumlahAyat)
            default:
                return allSurah.sort((a, b) => a.nomor - b.nomor)
        }
    }

    return (
        <>
            <section className="w-full flex flex-col gap-10">
                <SurahFilterContainer
                    handleListLayout={handleListLayout}
                    handleFilter={handleFilter}
                    gridLayout={gridLayout}
                    filterBy={filterBy}
                ></SurahFilterContainer>

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
                            surah={{
                                nomor: surah.nomor,
                                namaLatin: surah.namaLatin,
                                jumlahAyat: surah.jumlahAyat,
                                arti: surah.arti,
                                deskripsi: surah.deskripsi,
                            }}
                            gridLayout={gridLayout}
                        ></SurahCard>
                    ))}
                </div>
                {/* End Surah Grid */}
            </section>
        </>
    )
}
