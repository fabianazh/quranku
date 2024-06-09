import React from 'react'
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
                    className={`w-full flex justify-between bg-white hover:bg-stone-100/90 transition-all overflow-hidden rounded-lg shadow lg:shadow-md cursor-pointer flex-col p-5 ${
                        gridLayout ? 'h-auto xl:h-40' : 'h-auto'
                    }`}
                >
                    <div
                        className={`w-6 lg:w-8 text-xs lg:text-base aspect-square shrink-0 shadow text-Green-500 rounded-full bg-Green-200 grid place-items-center mb-2 lg:mb-6`}
                    >
                        {surah.nomor}
                    </div>

                    <div className="flex flex-col">
                        <div className="flex lg:justify-between items-center">
                            <div className="flex flex-col">
                                <div className="flex gap-2 items-center">
                                    <span className="text-base lg:text-lg font-bold">
                                        {surah.namaLatin}
                                    </span>
                                    <span className="text-[0.675rem] lg:text-xs font-bold">
                                        ({surah.jumlahAyat} Ayat)
                                    </span>
                                </div>
                                <span className="text-xs lg:text-sm text-stone-600">
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
                                    : 'mt-0.5 lg:mt-2 text-justify text-sm lg:text-[0.95rem]'
                            }`}
                        ></span>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default SurahCard
