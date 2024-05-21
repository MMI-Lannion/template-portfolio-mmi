import { Cog8ToothIcon } from '@heroicons/react/24/outline'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import { StarIcon } from '@heroicons/react/24/solid'



export default function Skill({ title, description, tools, level }) {
    return (
        <div className='card bg-base-100 shadow-xl border border-slate-200 h-full w-full'>
            <div className="card-body">
                <h3 className='card-title'>{title}</h3>
                <p className='text-sm'>
                    {description}
                </p>
                <div className="flex items-center">
                    <i className='mr-2'><Cog8ToothIcon className="size-6" /></i>
                    <span className='space-x-2'>
                        {tools.join(", ")}
                    </span>
                </div>
                <div className="card-actions justify-start my-3">
                    <div className="rating">
                        <StarIcon className={"size-6" + (level >= 1 ? " text-yellow-500" : " text-gray-200")} />
                        <StarIcon className={"size-6" + (level >= 2 ? " text-yellow-500" : " text-gray-200")} />
                        <StarIcon className={"size-6" + (level >= 3 ? " text-yellow-500" : " text-gray-200")} />
                        <StarIcon className={"size-6" + (level >= 4 ? " text-yellow-500" : " text-gray-200")} />
                        <StarIcon className={"size-6" + (level >= 5 ? " text-yellow-500" : " text-gray-200")} />
                    </div>
                </div>

            </div>
        </div>

    )
}