'use client'
import { WorkoutContext } from '@/context';
import { IWorkout } from '@/workouttype';
import React, { useContext } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';

interface DeleteTodayButtonPageProps{
    workout: IWorkout;
}

const DeleteTodayButtonPage = ({workout}:DeleteTodayButtonPageProps) => {
    const { addWorkout = [], setAddWorkout } = useContext(WorkoutContext);
    const handleDelete = (e:IWorkout) => {
        const restCard = addWorkout.filter(work => work.id !== e.id);
        toast.error("Removed from today's plan");
        setAddWorkout(restCard);
    }
    return (
        <button
        onClick={()=> handleDelete(workout)} 
        className="flex text-lg cursor-pointer"><RxCross2/>
        </button>
    );
};

export default DeleteTodayButtonPage;