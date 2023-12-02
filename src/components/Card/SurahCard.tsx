import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import Link from 'next/link'

interface SurahCardProps {
    surah: {
        nomor: number
        namaLatin: string
        jumlahAyat: number
        arti: string
        deskripsi: string
    }
    gridLayout: boolean
}

function SurahCard({ surah, gridLayout }: SurahCardProps) {
    return (
        <>
            <Link href={`/surah/${surah.nomor}`}>
                <div
                    className={`w-full flex justify-between bg-white hover:bg-stone-100/90 transition-all overflow-hidden rounded-lg shadow-md cursor-pointer flex-col p-5 ${
                        gridLayout ? 'h-32 xl:h-40' : 'h-auto'
                    }`}
                >
                    <div
                        className={`w-8 aspect-square shadow text-Green-500 rounded-full bg-Green-200 grid place-items-center mb-6`}
                    >
                        {surah.nomor}
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <div className="flex gap-2 items-center">
                                    <span className="text-lg font-bold">
                                        {surah.namaLatin}
                                    </span>
                                    <span className="text-xs font-bold">
                                        ({surah.jumlahAyat} Ayat)
                                    </span>
                                </div>
                                <span className="text-sm text-stone-600">
                                    {surah.arti}
                                </span>
                            </div>
                        </div>
                        <span
                            dangerouslySetInnerHTML={{
                                __html: surah.deskripsi,
                            }}
                            className={`${
                                gridLayout
                                    ? 'hidden'
                                    : 'mt-2 text-justify text-[0.95rem]'
                            }`}
                        ></span>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default SurahCard
