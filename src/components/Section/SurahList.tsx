'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import SurahFilterContainer from '@/components/Container/SurahFilterContainer'
import SurahCard from '@/components/Card/SurahCard'
import SurahCardSkeleton from '../Skeleton/SurahCardSkeleton'

export default function SurahList() {
    const [allSurah, setAllSurah] = useState<Surah[]>([])
    const [filterBy, setFilterBy] = useState<string>('No Urut Asc')
    const [gridLayout, setGridLayout] = useState<boolean>(true)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(false)
                const response = await axios.get('/api/surah')
                setAllSurah(response.data)
            } catch (err) {
                console.log(err)
                setAllSurah([])
            } finally {
                setIsLoading(true)
            }
        }

        fetchData()
    }, [])

    const isAscending = filterBy.endsWith('Asc')

    const handleListLayout = (layoutType: boolean) => {
        setGridLayout(layoutType)
    }

    const handleFilter = (filterType: string) => {
        setFilterBy(filterType)
    }

    const filteredSurah = () => {
        const sortedSurah = [...allSurah]
        switch (filterBy) {
            case 'Abjad Asc':
                sortedSurah.sort((a, b) =>
                    a.namaLatin.localeCompare(b.namaLatin)
                )
                break
            case 'Abjad Desc':
                sortedSurah.sort((a, b) =>
                    b.namaLatin.localeCompare(a.namaLatin)
                )
                break
            case 'Jumlah Ayat Asc':
                sortedSurah.sort((a, b) => a.jumlahAyat - b.jumlahAyat)
                break
            case 'Jumlah Ayat Desc':
                sortedSurah.sort((a, b) => b.jumlahAyat - a.jumlahAyat)
                break
            case 'No Urut Desc':
                sortedSurah.sort((a, b) => b.nomor - a.nomor)
                break
            default:
                sortedSurah.sort((a, b) => a.nomor - b.nomor)
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
                    {isLoading ? (
                        <>
                            {filteredSurah().map((surah) => (
                                <SurahCard
                                    key={surah.nomor}
                                    surah={surah}
                                    gridLayout={gridLayout}
                                />
                            ))}
                        </>
                    ) : (
                        Array.from({ length: 12 }, (_, index) => (
                            <SurahCardSkeleton key={index} />
                        ))
                    )}
                </div>
                {/* End Surah Grid */}
            </section>
        </>
    )
}
