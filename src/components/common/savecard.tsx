'use client'

import { WorkoutContext } from '@/context';
import { IWorkout } from '@/workouttype';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { FaRegClock, FaRegStar } from 'react-icons/fa';

interface SaveCardProps {
    workout: IWorkout;
}

const SaveCard = ({ workout }: SaveCardProps) => {
    const { addSave, setAddSave } = useContext(WorkoutContext);

    const handleRemoveSave = () => {
        if (setAddSave && addSave) {
            const updatedSaveList = addSave.filter((item) => item.id !== workout.id);
            setAddSave(updatedSaveList);
        }
    };

    return (
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 p-4 border-gray-700 border-2 bg-[#14171E] rounded-2xl">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto text-center sm:text-left">
                <Image
                    className="rounded-xl w-20 h-20 sm:w-[100px] sm:h-[100px] object-cover shrink-0"
                    src={workout.image}
                    height={100}
                    width={100}
                    loading="eager"
                    alt={workout.name || "Workout"}
                />
                <div className="flex flex-col justify-center items-center sm:items-start min-w-0">
                    <h1 className="text-lg sm:text-xl font-bold truncate max-w-[220px] sm:max-w-none">
                        {workout.name}
                    </h1>
                    <p className="text-gray-400 text-sm">{workout.equipment}</p>
                    <div className="text-xs space-x-2 text-[#C2F800] flex items-center flex-wrap justify-center sm:justify-start mt-1">
                        <p className="flex items-center gap-1 font-semibold whitespace-nowrap">
                            <FaRegClock />
                            {workout.duration} min
                        </p>
                        <p className="flex items-center gap-1 font-semibold whitespace-nowrap">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                            >
                                <path d="M12.5 3c.5 3-1.5 4.5-2.5 6 1.5-.5 3-1.5 3.5-3 2 2 4.5 4.5 4.5 8 0 3.87-2.91 7-6.5 7S5 17.87 5 14c0-3 1.5-5.5 4-7.5-.5 2.5.5 3.5 1.5 4 .5-2 2-4.5 2-7.5Z" />
                                <path d="M10 17.5c0-1.5 1-2.5 2-3.5 1 1 2 2 2 3.5a2 2 0 0 1-4 0Z" />
                            </svg>
                            {workout.caloriesBurned} Kcal
                        </p>
                        <p className="flex items-center gap-1 font-semibold whitespace-nowrap">
                            <FaRegStar />
                            {workout.rating}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-center w-full md:w-auto">
                <Link
                    href={`/exercise/${workout.id}`}
                    className="w-full sm:w-auto text-center rounded-full border border-gray-600 px-4 py-2 text-xs md:text-sm font-semibold hover:border-white transition-colors"
                >
                    View Details
                </Link>

                <button
                    onClick={handleRemoveSave}
                    className="w-full sm:w-auto rounded-full border border-red-500/50 text-red-400 px-4 py-2 text-xs md:text-sm font-semibold hover:bg-red-500/10 transition-colors cursor-pointer"
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default SaveCard;