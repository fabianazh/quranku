'use client'

import { useState, useEffect } from 'react'
import SurahDescriptionContainer from '@/components/Container/SurahDescriptionContainer'
import VerseCard from '@/components/Card/VerseCard'
import axios from 'axios'
import SurahDescriptionContainerSkeleton from '@/components/Skeleton/SurahDescriptionContainerSkeleton'
import VerseCardSkeleton from '@/components/Skeleton/VerseCardSkeleton'

export default function Surah({ surahId }: { surahId: number }) {
    const [surah, setSurah] = useState<Surah>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(false)
                const response = await axios.get(`/api/surah/${surahId}`)
                setSurah(response.data)
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(true)
            }
        }
        fetchData()
    }, [surahId])

    return (
        <>
            {isLoading ? (
                <>
                    <SurahDescriptionContainer surah={surah} />
                    {surah?.ayat?.map((item: Verse) => (
                        <VerseCard key={item.nomorAyat}>
                            <VerseCard.TopContent
                                number={item.nomorAyat}
                                text={item.teksArab}
                            ></VerseCard.TopContent>
                            <VerseCard.CenterContent
                                text={item.teksLatin}
                                translate={item.teksIndonesia}
                            ></VerseCard.CenterContent>
                            <VerseCard.BottomContent
                                surahNumber={surah.nomor}
                                number={item.nomorAyat}
                                audio={item.audio['01']}
                            ></VerseCard.BottomContent>
                        </VerseCard>
                    ))}
                </>
            ) : (
                <>
                    <SurahDescriptionContainerSkeleton />
                    <VerseCardSkeleton />
                    <VerseCardSkeleton />
                </>
            )}
        </>
    )
}
