import axios from 'axios'

export async function getAllSurah(): Promise<Surah[]> {
    try {
        const response = await axios.get('/api/surah')
        return response.data
    } catch (err) {
        console.error('Error fetching surah data:', err)
        return []
    }
}

export async function getSurahDetail(id: number) {
    try {
        const response = await axios.get(`/api/surah/${id}`)
        return response.data
    } catch (err) {
        console.error('Error fetching surah detail:', err)
        return null
    }
}
