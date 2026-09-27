import { IWorkout } from './workouttype';

export const getData = async (): Promise<IWorkout[]> => {
  try {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog`);
    if (!res.ok) throw new Error();
    return await res.json();
  } catch {
    const fallbackRes = await fetch(`https://api.api-store.workers.dev/api/fitlog`);
    if (!fallbackRes.ok) {
      throw new Error("Couldn't fetch data!");
    }
    return await fallbackRes.json();
  }
};