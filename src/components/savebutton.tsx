'use client'

import { WorkoutContext } from "@/context";
import { IWorkout } from "@/workouttype";
import { useContext } from "react";

interface SaveButtonProps {
    workout: IWorkout;
}

const SaveButtonPage = ({ workout }: SaveButtonProps) => {
    const { addSave, setAddSave } = useContext(WorkoutContext);

    const isSaved = addSave?.some((item) => item.id === workout.id);

    const handleToggleSave = () => {
        if (isSaved) {
            setAddSave(addSave.filter((item) => item.id !== workout.id));
        } else {
            setAddSave([...addSave, workout]);
        }
    };

    return (
        <div>
            <button
                onClick={handleToggleSave}
                className={`w-full rounded-lg border px-6 py-3 text-sm font-semibold transition-all sm:w-auto ${
                    isSaved
                        ? "border-[#C2F800] bg-[#C2F800] text-black"
                        : "border-gray-600 hover:border-gray-400"
                }`}
            >
                {isSaved ? "Saved ✓" : "Save for later"}
            </button>
        </div>
    );
};

export default SaveButtonPage;