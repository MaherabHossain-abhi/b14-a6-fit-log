'use client'

import SaveCard from "@/components/common/savecard";
import TodayCardPage from "@/components/common/todaycard";
import { WorkoutContext } from "@/context";
import { IWorkout } from "@/workouttype";
import Link from "next/link";
import { useContext, useState } from "react";

const MyPlan = () => {
    const { addWorkout = [], activeTab = "today", setActiveTab, addSave = [] } = useContext(WorkoutContext);

    const safeWorkoutList = addWorkout || [];
    const safeSaveList = addSave || [];
    const currentList = activeTab === "today" ? safeWorkoutList : safeSaveList;

    const totalExercises = currentList.length;
    const totalMinutes = currentList.reduce((sum, w) => sum + (w?.duration || 0), 0);
    const totalCalories = currentList.reduce((sum, w) => sum + (w?.caloriesBurned || 0), 0);

    const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("duration");

    const sortAll = (workoutList: IWorkout[]) => {
        const sorted = [...(workoutList || [])];
        if (sortBy === 'duration') {
            sorted.sort((a, b) => (b.duration || 0) - (a.duration || 0));
        } else if (sortBy === 'calories') {
            sorted.sort((a, b) => (b.caloriesBurned || 0) - (a.caloriesBurned || 0));
        } else if (sortBy === 'rating') {
            sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        }
        return sorted;
    };

    const sortedWorkout = sortAll(safeWorkoutList);
    const sortedSave = sortAll(safeSaveList);

    return (
        <div className='container mx-auto max-w-280 p-4 md:p-0'>
            <div className="my-5 text-center md:text-left">
                <h1 className='text-2xl md:text-4xl font-bold'>MY PLAN</h1>
                <p className='text-gray-400'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div className="bg-[#15171D] rounded-2xl my-4">
                <div className="flex justify-between items-center px-3 py-4 max-w-220">
                    <div className="flex flex-col justify-center">
                        <p>Exercises</p>
                        <h2 className='text-3xl font-bold text-[#C2F800]'>{totalExercises}</h2>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p>Minutes</p>
                        <h2 className='text-3xl font-bold '>{totalMinutes}</h2>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p>Calories</p>
                        <h2 className='text-3xl font-bold '>{totalCalories}</h2>
                    </div>
                </div>
            </div>
            <div className="tabs tabs-border text-white relative">
                <input
                    type="radio"
                    name="my_tabs_2"
                    className="tab text-white/60 checked:text-white"
                    aria-label="Today's Plan"
                    checked={activeTab === "today"}
                    onChange={() => setActiveTab && setActiveTab("today")}
                />
                <div className="tab-content p-6 md:p-10">
                    {sortedWorkout.length <= 0 ? (
                        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/15 bg-white/5 px-6 py-14 text-center">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5a1 1 0 011-1h6a1 1 0 011 1v2m-9 0h10a2 2 0 012 2v9a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2z" />
                                </svg>
                            </div>
                            <div className="space-y-1">
                                <h2 className="text-xl font-semibold">NOTHING HERE YET</h2>
                                <p className="mx-auto max-w-xs text-sm text-white/60">
                                    Browse the library and add a lift to get today moving.
                                </p>
                            </div>
                            <Link href="/" className="btn btn-primary bg-[#C2F10D] font-bold text-black rounded-full px-6">
                                Go to workouts
                            </Link>
                        </div>
                    ) : (
                        <div className="rounded-2xl border border-dashed border-white/15 bg-white/5 px-6 py-14 space-y-3">
                            {sortedWorkout.map((workout, ind) => (
                                <TodayCardPage key={workout.id || ind} workout={workout} />
                            ))}
                        </div>
                    )}
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    className="tab text-white/60 checked:text-white"
                    aria-label="Saved"
                    checked={activeTab === "saved"}
                    onChange={() => setActiveTab && setActiveTab("saved")}
                />
                <div className="tab-content p-6 md:p-10">
                    {sortedSave.length <= 0 ? (
                        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/15 bg-white/5 px-6 py-14 text-center">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>
                            </div>
                            <div className="space-y-1">
                                <h2 className="text-xl font-semibold">NOTHING HERE YET</h2>
                                <p className="mx-auto max-w-xs text-sm text-white/60">
                                    Browse the library and save a lift to get today moving.
                                </p>
                            </div>
                            <Link href="/" className="btn btn-primary rounded-full bg-[#C2F10D] font-bold text-black px-6">
                                Go to workouts
                            </Link>
                        </div>
                    ) : (
                        <div className="rounded-2xl border border-dashed border-white/15 bg-white/5 px-6 py-14 space-y-3">
                            {sortedSave.map((workout, ind) => (
                                <SaveCard key={workout.id || ind} workout={workout} />
                            ))}
                        </div>
                    )}
                </div>

                <div className="text-left absolute top-2 right-2 md:right-5">
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as "duration" | "calories" | "rating")}
                        className="bg-gray-900 select select-success select-xs md:select-sm text-white"
                    >

                        <option className="bg-gray-900" value="duration">Duration</option>
                        <option className="bg-gray-900" value="calories">Calories</option>
                        <option className="bg-gray-900" value="rating">Rating</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default MyPlan;