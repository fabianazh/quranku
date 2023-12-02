import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SurahCardSkeleton() {
    return (
        <div className="w-full flex justify-between bg-white h-44 rounded-lg shadow-md cursor-pointer flex-col p-5">
            <div className="w-9 h-9">
                <Skeleton circle containerClassName="w-full" height={'100%'} />
            </div>
            <Skeleton count={2} />
        </div>
    )
}
