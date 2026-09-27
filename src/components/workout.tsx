import { getData } from '../workoutData';
import { IWorkout } from '../workouttype';
import WorkoutCard from './workoutcard';

const WorkoutPage = async () => {
    const workoutData: IWorkout[] = await getData();

    return (
        <section id="library" className='mt-8'>
            <div className="my-5 text-center md:text-left">
                <h1 className='text-2xl md:text-4xl font-bold'>THE LIBRARY</h1>
                <p className='text-gray-400'>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 md:p-0 bg-[#0C0D10]">
                {(workoutData || [])?.map((workout, ind) => {
                    return (
                        <WorkoutCard key={`${workout.id}-${ind}`} workout={workout} />
                    )
                })}
            </div>
        </section>
    );
};

export default WorkoutPage;