import { IWorkout } from '@/workouttype';
import Image from 'next/image';
import React from 'react';
import { FaRegClock, FaRegStar } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';

interface TodayCardPageProps {
    workout: IWorkout;
}

const todaycardpage = ({workout}:TodayCardPageProps) => {
    return (
        <div className='flex flex-col md:flex-row md:justify-between items-center p-3 border-gray-700 border-2 bg-[#14171E] rounded-2xl'>
            <div className="flex items-center gap-4">
                <Image  className='h-auto'
                    src={workout.image}
                    height={100}
                    width={100}
                    loading='eager'
                    alt="Workout" 
                    />
                    <div className="flex flex-col justify-center">
                        <h1 className='text-xl font-bold'>{workout.name}</h1>
                        <p className='text-gray-400'>{workout.equipment}</p>
                        <div className="text-xs space-x-2 text-[#C2F800] flex items-center">
                                                <p className="flex items-center gap-1 font-semibold"><FaRegClock />
                                                {workout.duration} min</p>
                                                <p className="flex items-center font-semibold">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="h-6 w-6"
                                                    >
                                                        <path
                                                            d="M12.5 3c.5 3-1.5 4.5-2.5 6
                               1.5-.5 3-1.5 3.5-3
                               2 2 4.5 4.5 4.5 8
                               0 3.87-2.91 7-6.5 7
                               S5 17.87 5 14
                               c0-3 1.5-5.5 4-7.5
                               -.5 2.5.5 3.5 1.5 4
                               .5-2 2-4.5 2-7.5Z"
                                                        />
                                                        <path d="M10 17.5c0-1.5 1-2.5 2-3.5 1 1 2 2 2 3.5a2 2 0 0 1-4 0Z" />
                                                    </svg>{workout.caloriesBurned} Kcal</p>
                                                <p className="flex items-center gap-1 font-semibold"><FaRegStar />{workout.rating}</p>
                                            </div>
                    </div>
            </div>
            <div className="flex gap-3 items-center">
                <button className="w-full rounded-4xl border border-gray-600 px-4 py-2 text-sm font-semibold sm:w-auto">
                            View Details
                        </button>
                        <button className="flex items-center w-full rounded-4xl cursor-pointer bg-[#C2F800] px-4 py-2 text-sm font-bold text-black sm:w-auto">
                <FiCheck  className='text-lg mr-2'/> Mark as Done
            </button>
            </div>
        </div>
    );
};

export default todaycardpage;