import WorkoutDetails from '@/components/common/workoutdetails';
import { getData } from '@/workoutData';
import { IWorkout } from '@/workouttype';
import { notFound } from 'next/navigation';

const WorkoutDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const workoutData = await getData();
    const workout = workoutData?.find((work: IWorkout) => String(work.id) === String(id));

    if (!workout) {
        notFound();
    }

    return (
        <WorkoutDetails workout={workout} />
    );
};

export default WorkoutDetailsPage;