'use client'
import { WorkoutContext } from '@/context';
import { IWorkout } from '@/workouttype';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
interface TodayButtonProps {
    workout: IWorkout
}


const TodayButton = ({ workout }: TodayButtonProps) => {
    const { addWorkout, setAddWorkout } = useContext(WorkoutContext);

    const handleAddToday = () => {

        setAddWorkout([...addWorkout, workout]);
        toast.success("Added to Today's Plan")
    }
    return (
        <div>
            <button
                onClick={() => handleAddToday()}
                className="w-full rounded-lg cursor-pointer bg-[#C2F800] px-6 py-3 text-sm font-bold text-black sm:w-auto">
                Add to today&apos;s plan
            </button>
        </div>
    );
};

export default TodayButton;