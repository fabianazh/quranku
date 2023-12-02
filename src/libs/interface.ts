type Surah = {
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
}

type SurahFilterContainerProps = {
    handleListLayout: (layoutType: boolean) => void
    handleFilter: (filterType: string) => void
    gridLayout: boolean
    filterBy: string
}

type SurahDetailPageProps = {
    params: {
        id: number
    }
}

type SurahDescriptionContainerProps = {
    surah: Surah
}
