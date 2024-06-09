import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export async function GET(req: NextRequest) {
    try {
        const response = await axios.get('https://equran.id/api/v2/surat')
        return NextResponse.json(response.data.data)
    } catch (error) {
        console.error('Error fetching surah data:', error)
        return new NextResponse('Error fetching surah data', { status: 500 })
    }
}
