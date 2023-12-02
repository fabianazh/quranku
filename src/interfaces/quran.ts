import axios from 'axios'

export async function getAllSurah(): Promise<Surah[]> {
    try {
        const response = await axios.get('https://equran.id/api/v2/surat')
        return response.data.data
    } catch (err) {
        console.error('Error fetching surah data:', err)
        return []
    }
}

export async function getSurahDetail(id: number) {
    try {
        const response = await axios.get(`https://equran.id/api/v2/surat/${id}`)
        return response.data.data
    } catch (err) {
        console.error('Error fetching surah data:', err)
        return []
    }
}
