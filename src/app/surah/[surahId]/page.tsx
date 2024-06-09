'use client'

import { useState, useEffect } from 'react'
import { getSurahDetail } from '@/utils/quran'
import SurahDescriptionContainer from '@/components/Container/SurahDescriptionContainer'
import VerseCard from '@/components/Card/VerseCard'

export default function SurahDetail({ params }: SurahDetailPageProps) {
    const [surah, setSurah] = useState<Surah>()

    useEffect(() => {
        const fetchData = async () => {
            const surahData: Surah = await getSurahDetail(params.surahId)
            setSurah(surahData)
        }

        fetchData()
    }, [params.surahId])

    return (
        <>
            <SurahDescriptionContainer surah={surah} />
            <>
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
        </>
    )
}
