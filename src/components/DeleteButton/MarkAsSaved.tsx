'use client'
import { WorkoutContext } from '@/context';
import { IWorkout } from '@/workouttype';
import { useContext } from 'react';
import { FiCheck } from 'react-icons/fi';
import { toast } from 'react-toastify';


interface MarkAsSavedProps {
    workout: IWorkout;
}

const MarkAsSaved = ({ workout }: MarkAsSavedProps) => {
    const { addSave = [], setAddSave } = useContext(WorkoutContext);
    const handleDelete = (e: IWorkout) => {
        const restCard = addSave.filter(work => work.id !== e.id);
        setAddSave(restCard);
        toast.success("Marked as done")
    }
    return (
        <button
            onClick={() => handleDelete(workout)}
            className="flex items-center justify-center gap-1 w-full sm:w-auto rounded-4xl cursor-pointer bg-[#C2F800] px-4 py-2 text-xs md:text-sm font-bold text-black">
            <FiCheck className="flex text-lg" /> Mark as Done
        </button>
    );
};

export default MarkAsSaved;