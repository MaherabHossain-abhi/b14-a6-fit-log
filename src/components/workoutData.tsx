export const getData = async () => {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog`);
    if (!res.ok) {
        throw new Error("Couldn't fetch data!");
    }
    return res.json();
}