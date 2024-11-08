import axios from 'axios'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}`

    async function getSurah() {
        try {
            const response = await axios.get('https://equran.id/api/v2/surat')
            const surahList: Surah[] = response.data
            return surahList.map((surah: Surah) => ({
                url: `${baseUrl}/surah/${surah.nomor}`,
                lastModified: new Date(),
                priority: 0.7,
            }))
        } catch (error) {
            console.error('Error fetching surah data:', error)
            return []
        }
    }
    async function getVerse() {
        const results = []

        for (let i = 1; i <= 114; i++) {
            try {
                const response = await axios.get(
                    `https://equran.id/api/v2/surat/${i}`
                )
                const surah: Surah = response.data

                results.push({
                    url: `${baseUrl}/surah/${surah.nomor}`,
                    lastModified: new Date(),
                    priority: 0.7,
                })
            } catch (error) {
                console.error(
                    `Error fetching surah data for surah number ${i}:`,
                    error
                )
                continue
            }
        }

        return results
    }

    const surahUrls = await getSurah()
    const verseUrls = await getVerse()

    return [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            priority: 1,
        },
        ...surahUrls,
        ...verseUrls,
    ]
}
