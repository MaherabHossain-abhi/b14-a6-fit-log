'use client'
import { IWorkout } from '@/workouttype';
import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

interface IWorkoutContext {
    addWorkout: IWorkout[]
    setAddWorkout: Dispatch<SetStateAction<IWorkout[]>>
    addSave: IWorkout[]
    setAddSave: Dispatch<SetStateAction<IWorkout[]>>
    activeTab: "today" | "saved";
    setActiveTab: React.Dispatch<React.SetStateAction<"today" | "saved">>;
}

export const WorkoutContext = createContext<IWorkoutContext>({
 addWorkout: [],
    setAddWorkout: () => { },
    addSave: [],
    setAddSave: () => { },
    activeTab: "today",
    setActiveTab: () => {},
});

const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {

    const [addWorkout, setAddWorkout] = useState<IWorkout[]>([]);
    const [addSave, setAddSave] = useState<IWorkout[]>([]);
    const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
    const sharedData = {
        addWorkout,
        setAddWorkout,
        addSave,
        setAddSave,
        activeTab,
        setActiveTab
    }
    return (
        <WorkoutContext value={sharedData}>
            {children}
        </WorkoutContext>
    );
};


    export default WorkoutProvider;