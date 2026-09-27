import { IWorkout } from '@/workouttype';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegClock, FaRegStar } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
import DeleteSaveButtonPage from '../DeleteButton/DeletesaveButtonPage';

interface SaveCardProps {
    workout: IWorkout;
}

const SaveCard = ({ workout }: SaveCardProps) => {
    return (
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-center gap-4 p-4 border-gray-700 border-2 bg-[#14171E] rounded-2xl">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto text-center sm:text-left">
                <Image
                    className="h-auto rounded-xl w-20 h-20 sm:w-[100px] sm:h-[100px] object-cover shrink-0"
                    src={workout.image}
                    height={100}
                    width={100}
                    loading="eager"
                    alt="Workout"
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
                        <p className="flex items-center font-semibold whitespace-nowrap">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5 sm:h-6 sm:w-6"
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
                <Link href={`/exercise/${workout.id}`}>
                    <button className="w-full sm:w-auto rounded-4xl border border-gray-600 px-4 py-2 cursor-pointer text-xs md:text-sm font-semibold">
                        View Details
                    </button>
                </Link>
                <button className="flex items-center justify-center gap-1 w-full sm:w-auto rounded-4xl cursor-pointer bg-[#C2F800] px-4 py-2 text-xs md:text-sm font-bold text-black">
                    <FiCheck className="hidden md:flex md:text-lg" /> Mark as Done
                </button>
                <DeleteSaveButtonPage workout={workout} />
            </div>
        </div>
    );
};


export default SaveCard;