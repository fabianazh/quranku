'use client'

import { useRef, useState } from 'react'
import { FiPauseCircle, FiPlayCircle, FiShare2 } from 'react-icons/fi'
import NumberIcon from '@/components/Icon/NumberIcon'
import BasicButton from '@/components/Button/BasicButton'
import Divider from '@/components/Other/Divider'
import { uthman } from '@/app/fonts'

export default function VerseCard({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="bg-white flex flex-col px-5 lg:px-6 py-5 lg:py-7 rounded-lg shadow">
                {children}
            </div>
        </>
    )
}

export function TopContent({ number, text }: { number: number; text: string }) {
    return (
        <>
            <div className="flex justify-between items-start w-full gap-14">
                {/* Number Verse */}
                <NumberIcon customClass={'w-8 lg:w-9 h-8 lg:h-9'}>
                    <span className="text-sm xl:text-lg">{number}</span>
                </NumberIcon>
                {/* End Number Verse */}

                {/* Verse */}
                <span
                    className={`text-3xl xl:text-4xl block text-right -translate-y-3 font-light ${uthman.className}`}
                    style={{ lineHeight: '4rem' }}
                >
                    {text}
                </span>

                {/* End Verse */}
            </div>
        </>
    )
}

export function CenterContent({
    text,
    translate,
}: {
    text: string
    translate: string
}) {
    return (
        <>
            <div className="flex flex-col gap-2 lg:gap-4 w-full pb-6">
                <span className="text-sm lg:text-base text-justify">
                    {' '}
                    {text}{' '}
                </span>
                <div className="flex flex-col gap-2">
                    <span className="font-bold text-base lg:text-lg">
                        Terjemahan
                    </span>
                    <span className="text-sm lg:text-base text-justify">
                        {/* {'"'}
                        {translate}
                        {'"'} */}
                        {translate}
                    </span>
                </div>
            </div>
            <Divider />
        </>
    )
}

export function BottomContent({
    surahNumber,
    number,
    audio,
}: {
    surahNumber: number
    number: number
    audio: string
}) {
    const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(
        null
    )
    const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({})

    const playAudio = (url: number) => {
        const audio = audioRefs.current[url]
        if (audio) {
            if (currentlyPlaying === url) {
                if (audio.paused) {
                    audio.play()
                } else {
                    audio.pause()
                    setCurrentlyPlaying(null)
                }
            } else {
                if (currentlyPlaying) {
                    const currentlyPlayingAudio =
                        audioRefs.current[currentlyPlaying]
                    if (currentlyPlayingAudio) {
                        currentlyPlayingAudio.pause()
                    }
                }
                audio.play()
                setCurrentlyPlaying(url)
            }
        }
    }

    return (
        <>
            <div className="flex justify-between w-full pt-4 lg:pt-6 items-center">
                <div className="flex gap-5 items-center">
                    {currentlyPlaying === number ? (
                        <FiPauseCircle
                            className="text-2xl"
                            onClick={() => playAudio(number)}
                        />
                    ) : (
                        <FiPlayCircle
                            className="text-2xl cursor-pointer"
                            onClick={() => playAudio(number)}
                        />
                    )}
                    <audio
                        ref={(el) => (audioRefs.current[number] = el)}
                        className={`w-full sr-only h-10`}
                        src={audio}
                        controls
                    />
                    <FiShare2 className="text-xl cursor-pointer" />
                </div>
                <div className="flex gap-5 items-center">
                    <BasicButton
                        pathTo={`/surah/${surahNumber}/tafsir/${number}`}
                        customClass={
                            'text-xs lg:text-sm px-2 py-1 text-white bg-gradient-to-br from-Green-300 via-Green-300 to-Green-400 transition-all duration-300 rounded-sm'
                        }
                    >
                        Tafsir Ayat ke {number}
                    </BasicButton>
                </div>
            </div>
        </>
    )
}

VerseCard.TopContent = TopContent
VerseCard.CenterContent = CenterContent
VerseCard.BottomContent = BottomContent
