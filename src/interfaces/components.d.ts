interface SurahFilterContainerProps {
    handleListLayout: (layoutType: boolean) => void
    handleFilter: (filterType: string) => void
    gridLayout: boolean
    filterBy: string
    isAscending: boolean
}

interface SurahDescriptionContainerProps {
    surah?: Surah
}

interface FilterButtonProps {
    customClass: string
    handleFilter: (filterType: string) => void
    filterValue: string
    isAscending: boolean
}
