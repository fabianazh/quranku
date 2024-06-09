'use client'

import { useEffect, useState } from 'react'
import { getRandomHadith } from '@/utils/hadith'

export default function TodayHadits() {
    const [hadith, setHadith] = useState<Hadith | null>(null)

    async function fetchHadith() {
        const hadithData = await getRandomHadith()
        setHadith(hadithData)
    }

    useEffect(() => {
        fetchHadith()
    }, [])

    return (
        <>
            <section className="w-full rounded-md relative bg-white shadow h-auto mb-5 lg:mb-10 p-4 pt-5">
                <div className="bg-Green-300 absolute -top-4 z-10 py-0.5 px-3 rounded">
                    <h1 className="text-sm lg:text-base text-white">
                        Hadits Pilihan
                    </h1>
                </div>
                <div className="text-sm lg:text-base w-full px-1">
                    {hadith && (
                        <>
                            <span className="inline-block lg:mr-1">
                                {hadith.contents.latinIndo}
                            </span>
                            <span className="inline-block mt-1 lg:mt-0">
                                (H.R. {hadith.name} No. {hadith.contents.number}
                                )
                            </span>
                        </>
                    )}
                </div>
            </section>
        </>
    )
}
