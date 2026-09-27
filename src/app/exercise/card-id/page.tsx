import WorkoutDetails from '@/components/common/workoutdetails';
import { getData } from '@/workoutData' ;
import { IWorkout } from '@/workouttype';



const WorkoutDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const workoutData = await getData();
    const workout: IWorkout = workoutData.find((work: IWorkout) => String(work.id) === String(id));
    return (
        <WorkoutDetails key={workout.id} workout={workout}/>
    );
};

export default WorkoutDetailsPage;