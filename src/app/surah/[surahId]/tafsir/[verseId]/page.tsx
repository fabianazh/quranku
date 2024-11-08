import Interpretation from '@/components/Page/Interpretation'
import axios from 'axios'

// export async function generateStaticParams({
//     params,
// }: {
//     params: {
//         verseId: number
//         surahId: number
//     }
// }) {
//     const { surahId } = params
//     const verse: Verse[] = await axios.get(
//         `https://equran.id/api/v2/surat/${surahId}`
//     )

//     return verse.map((item: Verse) => ({
//         verseId: item.nomorAyat,
//     }))
// }

export async function generateMetadata({
    params,
}: {
    params: {
        verseId: number
        surahId: number
    }
}) {
    const { surahId, verseId } = params
    try {
        const surah: Surah | undefined | null = await axios.get(
            `/api/surah/${surahId}`
        )
        const verse: Verse | undefined | null = await axios.get(
            `/api/surah/${surahId}`
        )

        if (surah === undefined || surah === null) {
            return {
                title: 'Halaman tidak dapat ditemukan!',
                description:
                    'Halaman yang kamu cari sepertinya sudah dihapus atau sudah tidak tersedia.',
                openGraph: {
                    title: 'Halaman tidak dapat ditemukan!',
                    description:
                        'Halaman yang kamu cari sepertinya sudah dihapus atau sudah tidak tersedia.',
                    images: [],
                },
                robots: 'noindex, nofollow',
            }
        }
        return {
            title: `${surah?.namaLatin} ayat ${verse?.nomorAyat} | Quranku App`,
            description:
                'QuranKu is a modern and accessible Quran web application designed to provide users with a seamless reading experience anywhere, anytime. Whether users are at home, traveling, or on the move, QuranKu ensures that the beauty and wisdom of the Quran are just a click away',
            keywords: [
                'QuranKu App',
                'AlQuranKu App',
                'QuranKu',
                'AlQuranKu',
                'Al-QuranKu',
                'Quran Online',
                'AlQuran Online',
                'Al-Quran Online',
                'Fabianazh projects',
                `Fabianazh's projects`,
                'Muhammad Fabian Azhar',
                'Quran Indonesia',
                'AlQuran Indonesia',
            ],
            robots: 'index, follow',
            canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/surah/${surahId}/tafsir${verseId}`,
            openGraph: {
                title: `${surah?.namaLatin} | Quranku App`,
                description: 'Quranku App',
                images: [],
            },
        }
    } catch (error) {
        return {
            title: 'Halaman tidak dapat ditemukan!',
            description:
                'Halaman yang kamu cari sepertinya sudah dihapus atau sudah tidak tersedia.',
            openGraph: {
                title: 'Halaman tidak dapat ditemukan!',
                description:
                    'Halaman yang kamu cari sepertinya sudah dihapus atau sudah tidak tersedia.',
                images: [],
            },
            robots: 'noindex, nofollow',
        }
    }
}

export default function TafsirPage({
    params,
}: {
    params: { surahId: number; verseId: number }
}) {
    return (
        <>
            <Interpretation surahId={params.surahId} verseId={params.verseId} />
        </>
    )
}
