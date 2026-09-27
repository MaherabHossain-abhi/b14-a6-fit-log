'use client'
import { WorkoutContext } from '@/context';
import { IWorkout } from '@/workouttype';
import React, { useContext } from 'react';
import { RxCross2 } from 'react-icons/rx';

interface DeleteTodayButtonPageProps{
    workout: IWorkout;
}

const DeleteTodayButtonPage = ({workout}:DeleteTodayButtonPageProps) => {
    const { addWorkout, addSave, setAddSave, setAddWorkout} = useContext(WorkoutContext);
    const handleDelete = (e:IWorkout) => {
        const restCard = addWorkout.filter(work=> e.name != work.name)
        setAddWorkout(restCard);
    }
    return (
        <button
        onClick={()=> handleDelete(workout)} 
        className="hidden md:flex md:text-lg cursor-pointer"><RxCross2/></button>
    );
};

export default DeleteTodayButtonPage;