interface Surah {
    nomor: number
    nama: string
    namaLatin: string
    tempatTurun: string
    arti: string
    jumlahAyat: number
    deskripsi: string
    audioFull: {
        '01': string
    }
    suratSebelumnya: {
        nomor: number
        namaLatin: string
    }
    suratSelanjutnya: {
        nomor: number
        namaLatin: string
    }
    ayat: Verse[]
}

interface Verse {
    nomorAyat: number
    teksArab: string
    teksLatin: string
    teksIndonesia: string
    audio: { [key: string]: string }
}

interface Hadith {
    name: string
    contents: {
        number: number
        arab: string
        latin: string
        latinIndo: string
    }
}