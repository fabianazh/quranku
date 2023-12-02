import SurahDescriptionContainerSkeleton from '@/components/skeleton/SurahDescriptionContainerSkeleton'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SurahDetailLoading() {
    return (
        <>
            <SurahDescriptionContainerSkeleton />
        </>
    )
}
