import { useRef, useState } from 'react'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { LuDot } from 'react-icons/lu'
import { FiPauseCircle, FiPlayCircle, FiShare2 } from 'react-icons/fi'
import BasicButton from '@/components/Button/BasicButton'

export default function SurahDescriptionContainer({
    surah,
}: SurahDescriptionContainerProps) {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement>(null)

    const playAudio = () => {
        const audio = audioRef.current

        if (audio) {
            if (isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <>
            {surah?.namaLatin && (
                <section className="w-full h-auto flex flex-col gap-4 bg-white p-5 lg:p-7 rounded-lg shadow divide-y-[1.5px]">
                    <div className="text-center flex flex-col gap-0.5 lg:gap-1.5">
                        <h1 className="text-xl lg:text-2xl">
                            Q.S. {surah?.namaLatin} ({surah?.arti})
                        </h1>
                        <div className="flex gap-2 justify-center items-center">
                            <span className="text-sm lg:text-base">
                                {surah?.tempatTurun === 'Mekah'
                                    ? 'Makkiyah'
                                    : 'Madaniyah'}
                            </span>
                            <LuDot className="text-xl" />
                            <span className="text-sm lg:text-base">
                                {surah?.jumlahAyat} Ayat
                            </span>
                        </div>
                    </div>
                    <div className="pt-2 lg:pt-4">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: surah?.deskripsi ?? '',
                            }}
                            className="text-sm lg:text-base text-justify block leading-6 lg:leading-7"
                        ></span>
                    </div>
                    <div className="w-full justify-between flex pt-4 lg:pt-6">
                        <div className="flex shrink-0 w-1/3">
                            {surah?.suratSebelumnya &&
                            surah?.suratSebelumnya.nomor ? (
                                <>
                                    <BasicButton
                                        pathTo={`/surah/${surah?.suratSebelumnya.nomor}`}
                                        customClass={
                                            'text-xs lg:text-sm px-3 w-full lg:w-fit py-1 primary__gradient text-white bg-white shadow transition-all duration-300 rounded-sm flex justify-center gap-2'
                                        }
                                    >
                                        <HiArrowNarrowLeft className="text-lg" />
                                        <span>
                                            {surah?.suratSebelumnya.namaLatin}
                                        </span>
                                    </BasicButton>
                                </>
                            ) : null}
                        </div>
                        <div className="flex w-1/3 justify-center items-center">
                            <div className="flex gap-5 items-center">
                                {isPlaying ? (
                                    <FiPauseCircle
                                        className="text-2xl cursor-pointer"
                                        onClick={() => playAudio()}
                                    />
                                ) : (
                                    <FiPlayCircle
                                        className="text-2xl cursor-pointer"
                                        onClick={() => playAudio()}
                                    />
                                )}
                                <audio
                                    ref={audioRef}
                                    className={`w-full sr-only h-10`}
                                    src={surah?.audioFull?.['01']}
                                    controls
                                />
                                <FiShare2 className="hidden lg:inline-block text-xl cursor-pointer" />
                            </div>
                        </div>
                        <div className="flex shrink-0 w-1/3 justify-end">
                            {surah?.suratSelanjutnya &&
                            surah?.suratSelanjutnya.nomor ? (
                                <>
                                    <BasicButton
                                        pathTo={`/surah/${surah?.suratSelanjutnya.nomor}`}
                                        customClass={
                                            'text-xs lg:text-sm px-3 w-full lg:w-fit py-1 primary__gradient text-white bg-white shadow transition-all duration-300 rounded-sm flex justify-center gap-2'
                                        }
                                    >
                                        <span>
                                            {surah?.suratSelanjutnya.namaLatin}
                                        </span>
                                        <HiArrowNarrowRight className="text-lg" />
                                    </BasicButton>
                                </>
                            ) : null}
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}
