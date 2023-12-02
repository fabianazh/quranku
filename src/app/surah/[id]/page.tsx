'use client'

import { useState, useEffect } from 'react'
import { getSurahDetail } from '@/interfaces/quran'
import SurahDescriptionContainer from '@/components/container/SurahDescriptionContainer'

export default function SurahDetail({ params }: SurahDetailPageProps) {
    const [surah, setSurah] = useState<Surah>()

    useEffect(() => {
        const fetchData = async () => {
            const surahData: Surah = await getSurahDetail(params.id)
            setSurah(surahData)
        }

        fetchData()
    }, [params.id])

    return (
        <>
            <SurahDescriptionContainer
                surah={{
                    nomor: 0,
                    nama: '',
                    namaLatin: `${surah?.namaLatin}` || '',
                    tempatTurun: `${surah?.tempatTurun}`,
                    arti: `${surah?.arti}`,
                    jumlahAyat: surah?.jumlahAyat || 0,
                    deskripsi: `${surah?.deskripsi}`,
                    audioFull: {
                        '01': `${surah?.audioFull['01']}` || '01',
                    },
                    suratSebelumnya: {
                        nomor: surah?.suratSebelumnya.nomor || 0,
                        namaLatin: `${surah?.suratSebelumnya.namaLatin}`,
                    },
                    suratSelanjutnya: {
                        nomor: surah?.suratSelanjutnya.nomor || 0,
                        namaLatin: `${surah?.suratSelanjutnya.namaLatin}`,
                    },
                }}
            ></SurahDescriptionContainer>
            {/* <div>{surahId}</div> */}
            <div>{surah?.namaLatin}</div>
        </>
    )
}
