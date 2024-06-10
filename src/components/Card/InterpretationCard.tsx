import Divider from '@/components/Other/Divider'

export default function InterpretationCard({
    interpretation,
}: {
    interpretation: Interpretation
}) {
    return (
        <>
            <div className="bg-white flex flex-col px-3 lg:px-6 py-5 lg:py-7 rounded-lg shadow">
                <div className="text-center flex flex-col gap-2 mb-4">
                    <h1 className="text-xl lg:text-2xl">
                        Q.S.{' '}
                        {interpretation.surah
                            ? interpretation.surah.name.transliteration.id
                            : ''}{' '}
                        Ayat{' '}
                        {interpretation.number
                            ? interpretation.number.inSurah
                            : ''}
                    </h1>
                </div>
                <Divider />
                <div className="flex flex-col lg:gap-8 w-full pb-3 lg:pb-3">
                    <div className="flex flex-col gap-0 lg:gap-4 w-full mb-1 lg:mb-0">
                        <span
                            className="text-2xl xl:text-4xl block font-uthmanic text-right font-light"
                            style={{ lineHeight: '4rem' }}
                        >
                            {interpretation.text
                                ? interpretation.text.arab
                                : ''}
                        </span>
                        <span className="text-sm lg:text-base text-justify">
                            {interpretation.text
                                ? interpretation.text.transliteration.en
                                : ''}
                        </span>
                    </div>
                    <div className="flex flex-col mb-4 lg:mb-0 gap-1 lg:gap-2">
                        <span className="font-bold text-base lg:text-lg">
                            Terjemahan
                        </span>
                        <span className="text-sm lg:text-base text-justify">
                            {interpretation.translation
                                ? interpretation.translation.id
                                : ''}
                        </span>
                    </div>
                    <Divider />
                    <div className="flex flex-col gap-1 lg:gap-2 mt-2 lg:mt-0">
                        <span className="font-bold text-base lg:text-lg">
                            Tafsir
                        </span>
                        <span className="text-sm lg:text-base text-justify">
                            {interpretation.tafsir
                                ? interpretation.tafsir.id.short
                                : ''}
                        </span>
                        <span className="text-2xl block mb-2 lg:mb-0">
                            {'...'}
                        </span>
                        <span className="text-sm lg:text-base text-justify">
                            {interpretation.tafsir
                                ? interpretation.tafsir.id.long
                                : ''}
                        </span>
                    </div>
                    {/* <BasicButton
                        pathTo={`/ruang-muslim-v1/quran-digital/surah/${
                            surah.surah ? surah.surah.number : ''
                        }/`}
                        customClass={
                            'text-sm px-2 flex gap-2 w-fit py-2.5 text-white bg-gradient-to-br from-Green-300 via-Green-300 to-Green-400 transition-all duration-300 rounded'
                        }
                    >
                        <HiArrowNarrowLeft className="text-xl" />
                        <span>
                            Kembali Ke Surah{' '}
                            {surah.surah
                                ? surah.surah.name.transliteration.id
                                : ''}
                        </span>
                    </BasicButton> */}
                </div>
            </div>
        </>
    )
}
