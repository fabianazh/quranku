import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SurahDescriptionContainerSkeleton() {
    return (
        <>
            <section className="w-full h-auto flex flex-col gap-8 bg-white p-7 rounded-lg shadow">
                <div className="flex gap-2 items-center flex-col">
                    {/* <Skeleton
                        circle
                        containerClassName="w-full"
                        height={'100%'}
                    /> */}
                    <Skeleton height={'1.8rem'} containerClassName="w-4/12" />
                    <Skeleton height={'1.5rem'} containerClassName="w-3/12" />
                </div>
                <Skeleton height={'1rem'} count={6} className="mb-1" />
                <Skeleton height={'2rem'} containerClassName="w-full" />
            </section>
        </>
    )
}
