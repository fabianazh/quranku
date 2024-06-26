import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    req: NextRequest,
    { params }: { params: { surahId: string } }
) {
    try {
        const response = await axios.get(
            `https://equran.id/api/v2/surat/${params.surahId}`
        )
        return NextResponse.json(response.data.data)
    } catch (error) {
        return new NextResponse('Error fetching surah data', { status: 500 })
    }
}
