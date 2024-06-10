import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    req: NextRequest,
    {
        params,
    }: {
        params: {
            surahId: string
            verseId: string
        }
    }
) {
    try {
        const response = await axios.get(
            `https://api.quran.gading.dev/surah/${params.surahId}/${params.verseId}`
        )
        return NextResponse.json(response.data.data)
    } catch (error) {
        return new NextResponse('Error fetching surah data', { status: 500 })
    }
}
