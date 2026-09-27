'use client'
import { WorkoutContext } from '@/context';
import { IWorkout } from '@/workouttype';
import React, { useContext } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';

interface DeleteSaveButtonPageProps {
    workout: IWorkout;
}

const DeleteSaveButtonPage = ({ workout }: DeleteSaveButtonPageProps) => {
    const { addSave = [], setAddSave } = useContext(WorkoutContext);
    const handleDelete = (e: IWorkout) => {
        const restCard = addSave.filter(work => work.id !== e.id);
        setAddSave(restCard);
        toast.error("Removed from saved workouts");
    }
    return (
        <button
            onClick={() => handleDelete(workout)}
            className="flex text-lg cursor-pointer"><RxCross2 /></button>
    );
};

export default DeleteSaveButtonPage;