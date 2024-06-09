import SurahDescriptionContainerSkeleton from '@/components/Skeleton/SurahDescriptionContainerSkeleton'
import VerseCardSkeleton from '@/components/Skeleton/VerseCardSkeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SurahDetailLoading() {
    return (
        <>
            <SurahDescriptionContainerSkeleton />
            {Array.from({ length: 2 }, (_, index) => (
                <VerseCardSkeleton key={index} />
            ))}
        </>
    )
}
