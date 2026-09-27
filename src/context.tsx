'use client'
import { IWorkout } from '@/workouttype';
import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

interface IWorkoutContext {
    addWorkout: IWorkout[]
    setAddWorkout: Dispatch<SetStateAction<IWorkout[]>>
}

export const WorkoutContext = createContext<IWorkoutContext>({
    addWorkout:[],
    setAddWorkout: ()=>{},
});

const WorkoutProvider = ({children}:{children:React.ReactNode}) => {
    
    const [addWorkout, setAddWorkout] = useState<IWorkout[]>([]);
    const sharedData = {
        addWorkout,
        setAddWorkout,
    }
    return (
        <WorkoutContext value={sharedData}>
            {children}
        </WorkoutContext>
    );
};

export default WorkoutProvider;