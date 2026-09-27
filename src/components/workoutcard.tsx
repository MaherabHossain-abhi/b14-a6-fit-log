import { IWorkout } from '../workouttype';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegClock, FaRegStar } from 'react-icons/fa';

interface WorkoutCardProps {
    workout: IWorkout
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
    return (
        <div>
            <div className="card w-auto bg-[#15171D] shadow-md rounded-2xl">
                <figure>
                    <Link href={`/exercise/${workout.id}`}>
                        <Image
                            className='w-full h-auto'
                            src={workout.image}
                            height={350}
                            width={450}
                            loading='eager'
                            alt="Workout" />
                    </Link>
                </figure>
                <div className="card-body">
                    <div className="card-actions justify-start">
                        {workout?.muscleGroups?.map((v, i) => {
                            return (
                                <div key={i} className="badge badge-outline bg-[#C2F800] text-black font-semibold">{v}</div>
                            )
                        })}
                    </div>
                    <h2 className="card-title">
                        {workout.name}
                    </h2>
                    <p>{workout.equipment}</p>
                    <div className='border-b border-gray-700' />
                    <div className="card-actions justify-start text-gray-400">
                        <p className="flex items-center gap-1 font-semibold"><FaRegClock />
                            {workout.duration} min</p>
                        <p className="flex items-center gap-1 font-semibold">
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
                        <p className="flex items-center gap-1 font-semibold"><FaRegStar /> {workout.rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutCard;