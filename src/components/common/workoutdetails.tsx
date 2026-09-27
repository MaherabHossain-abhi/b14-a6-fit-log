import { IWorkout } from "@/workouttype";
import Image from "next/image";
import TodayButton from "@/components/todaybutton";
import SaveButtonPage from "@/components/savebutton";

interface WorkoutDetailsProp {
    workout: IWorkout
}

const WorkoutDetails = ({ workout }: WorkoutDetailsProp) => {
    return (
        <div className="flex justify-center items-center container mx-auto max-w-280">
            <div className="card gap-6 lg:card-side shadow-sm items-start p-4 md:p-0">
                <figure>
                    <Image className='w-180 h-auto'
                        src={workout.image}
                        height={600}
                        width={350}
                        loading='eager'
                        alt="Workout" />
                </figure>
                <div className="card space-y-2">
                    <h1 className='text-2xl sm:text-4xl font-bold'>{workout.name}</h1>
                    <p className='text-gray-400'>{workout.description}</p>
                    <div className="flex gap-2 justify-start item-center">
                        {workout?.muscleGroups?.map((v, i) => {
                            return (
                                <div key={i} className="badge badge-outline bg-[#C2F800] text-black font-semibold">{v}</div>
                            )
                        })}
                    </div>
                    <div className="bg-[#15171D] shadow-md text-sm rounded-2xl font-semibold my-4">
                        <div className="flex justify-between items-center border-b border-gray-700 p-3">
                            <p className="text-gray-500">Equipment</p>
                            <p className="">
                                {workout.equipment}
                            </p>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-700 p-3">
                            <p className=" text-gray-500">Difficulty</p>
                            <p className="">
                                {workout.difficulty}
                            </p>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-700 p-3">
                            <p className=" text-gray-500">Sets</p>
                            <p className="">
                                {workout.sets}
                            </p>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-700 p-3">
                            <p className=" text-gray-500">Reps</p>
                            <p className="">
                                {workout.reps}
                            </p>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-700 p-3">
                            <p className=" text-gray-500">Duration</p>
                            <p className="">
                                {workout.duration} min
                            </p>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-700 p-3">
                            <p className=" text-gray-500">Calories</p>
                            <p className="">
                                {workout.caloriesBurned} Kcal
                            </p>
                        </div>
                        <div className="flex justify-between items-center p-3">
                            <p className=" text-gray-500">Rating</p>
                            <p className="">
                                ⭐ {workout.rating}
                            </p>
                        </div>
                    </div>
                    <h1 className='text-3xl font-bold'>Instructions</h1>
                    <ol className="space-y-1 text-gray-400">
                        {workout?.instructions?.map((instruction, index) => (
                            <li
                                key={index}
                                className="flex gap-3 "
                            >
                                <span className="flex items-center justify-center font-bold">
                                    {index + 1}.
                                </span>

                                <span>{instruction}</span>
                            </li>
                        ))}
                    </ol>
                    <div className="mt-3 flex flex-col gap-3 sm:flex-row">

                        <TodayButton workout={workout} />

                        <SaveButtonPage workout={workout} />

                    </div>
                </div>
            </div>
        </div>

    );
};


export default WorkoutDetails;