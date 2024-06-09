import Skeleton from 'react-loading-skeleton'

export default function VerseCardSkeleton() {
    return (
        <>
            <div className="bg-white flex flex-col px-6 pt-7 pb-7 rounded-lg shadow">
                <div className="flex justify-between items-start w-full gap-14 mb-6">
                    {/* Number Verse */}
                    <div className="w-9 h-9">
                        <Skeleton
                            circle
                            containerClassName="w-full"
                            height={'100%'}
                        />
                    </div>
                    {/* End Number Verse */}

                    {/* Verse */}
                    <div className="flex items-end flex-col w-full h-auto">
                        <Skeleton
                            height={'1rem'}
                            count={2}
                            containerClassName="w-full"
                        />
                        <Skeleton height={'1rem'} containerClassName="w-5/12" />
                    </div>
                    {/* End Verse */}
                </div>

                <div className="flex flex-col gap-4 w-full pb-6">
                    <div className="flex flex-col w-full h-auto">
                        <Skeleton height={'1rem'} containerClassName="mb-1.5" />
                        <Skeleton height={'1rem'} containerClassName="w-5/12" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Skeleton
                            height={'1rem'}
                            containerClassName="w-2/12 mb-1.5"
                        />
                        <div className="flex flex-col w-full h-auto">
                            <Skeleton
                                height={'1rem'}
                                count={2}
                                className="mb-1.5"
                            />
                            <Skeleton
                                height={'1rem'}
                                containerClassName="w-3/12"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full block h-0.5 bg-stone-200 rounded-xl" />

                <div className="flex justify-between w-full pt-5 items-center">
                    <Skeleton height={'2rem'} containerClassName="w-2/12" />
                    <Skeleton height={'2rem'} containerClassName="w-2/12" />
                </div>
            </div>
        </>
    )
}
