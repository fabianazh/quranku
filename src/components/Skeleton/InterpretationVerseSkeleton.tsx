import Skeleton from 'react-loading-skeleton'
import Divider from '@/components/Other/Divider'

export default function InterpretationVerseSkeleton() {
    return (
        <>
            <div className="w-full h-fit flex flex-col gap-5 bg-white p-5 lg:p-7 rounded-lg shadow">
                <div className="justify-center w-full flex gap-2">
                    <Skeleton
                        height={'1.5rem'}
                        containerClassName="w-72"
                    ></Skeleton>
                </div>
                <Divider />
                <div className="flex flex-col gap-4 w-full pb-6">
                    <Skeleton containerClassName="w-32 h-4 lg:h-6"></Skeleton>
                    <div className="w-full flex flex-col mb-3">
                        <Skeleton count={3}></Skeleton>
                        <Skeleton containerClassName="w-48 h-4 lg:h-6"></Skeleton>
                    </div>
                    <Skeleton containerClassName="w-32 h-4 lg:h-6"></Skeleton>
                    <div className="w-full flex flex-col mb-3">
                        <Skeleton count={3}></Skeleton>
                        <Skeleton containerClassName="w-48 h-4 lg:h-6"></Skeleton>
                    </div>
                </div>
            </div>
        </>
    )
}
