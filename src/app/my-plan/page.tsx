'use client'



const MyPlan = () => {
    return (
        <div className='container mx-auto max-w-280 '>
            <div className="my-5">
                <h1 className='text-4xl font-bold'>THE LIBRARY</h1>
                <p className='text-gray-400'>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className=" bg-[#15171D] rounded-2xl my-4">
                <div className="flex justify-between items-center px-3 py-4 max-w-220">
                    <div className="flex flex-col justify-center">
                        <p>Exercise</p>
                        <h2 className='text-3xl font-bold text-[#C2F800]'>2</h2>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p>Minutes</p>
                        <h2 className='text-3xl font-bold '>2</h2>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p>Calories</p>
                        <h2 className='text-3xl font-bold '>2</h2>
                    </div>
                </div>
            </div>
            <div className="tabs tabs-border text-white">
                <input
                    type="radio"
                    name="my_tabs_2"
                    className="tab text-white/60 checked:text-white"
                    aria-label="Today's Plan"
                    defaultChecked
                />
                <div className="tab-content p-6 md:p-10">
                    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/15 bg-white/5 px-6 py-14 text-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5a1 1 0 011-1h6a1 1 0 011 1v2m-9 0h10a2 2 0 012 2v9a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2z" />
                            </svg>
                        </div>
                        <div className="space-y-1">
                            <h2 className="text-xl font-semibold">No workout planned today</h2>
                            <p className="mx-auto max-w-xs text-sm text-white/60">
                                Pick a lift from the library to build today&apos;s session.
                            </p>
                        </div>
                        <button className="btn btn-primary rounded-full px-6">Build today&apos;s plan</button>
                    </div>
                </div>

                {/* Tab 2: Saved */}
                <input
                    type="radio"
                    name="my_tabs_2"
                    className="tab text-white/60 checked:text-white"
                    aria-label="Saved"
                />
                <div className="tab-content p-6 md:p-10">
                    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/15 bg-white/5 px-6 py-14 text-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                        </div>
                        <div className="space-y-1">
                            <h2 className="text-xl font-semibold">Nothing saved yet</h2>
                            <p className="mx-auto max-w-xs text-sm text-white/60">
                                Browse the library and save a lift to get today moving.
                            </p>
                        </div>
                        <button className="btn btn-primary rounded-full px-6">Go to workouts</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPlan;