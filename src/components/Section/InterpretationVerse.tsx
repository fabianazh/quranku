'use client'

import axios from 'axios'
import { useState, useEffect } from 'react'
import InterpretationCard from '@/components/Card/InterpretationCard'
import InterpretationVerseSkeleton from '@/components/Skeleton/InterpretationVerseSkeleton'
import { useParams } from 'next/navigation'

export default function InterpretationVerse() {
    const { surahId, verseId } = useParams()
    const [interpretation, setInterpretation] = useState<Interpretation | null>(
        null
    )
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getInterpretation()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getInterpretation = async () => {
        try {
            setIsLoading(false)
            const response = await axios.get(`/api/surah/${surahId}/${verseId}`)
            setInterpretation(response.data)
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(true)
        }
    }

    return (
        <>
            <section className="w-full lg:w-9/12 min-h-screen lg:container mx-auto flex">
                {isLoading ? (
                    <>
                        {interpretation ? (
                            <InterpretationCard
                                interpretation={interpretation}
                            />
                        ) : (
                            <></>
                        )}
                    </>
                ) : (
                    <InterpretationVerseSkeleton />
                )}
            </section>
        </>
    )
}
