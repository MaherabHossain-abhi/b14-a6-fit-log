import Image from 'next/image';
import bannerImg from '@/assets/banner.png'

const Banner = () => {
    return (
        <header className='mt-6'>
            <div className="flex md:justify-between items-center md:flex-row flex-col p-10 bg-[#15171D] rounded-xl">
                <div className="space-y-4 w-1/2 mx-auto">
                    <p className='text-[#ccff00] font-semibold'>WORKOUT LIBRARY</p>
                    <h1 className='uppercase font-bold text-2xl md:text-4xl '>TRAIN WITH INTENT. LOG
                        EVERY SET.</h1>
                    <p className='text-gray-400'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.</p>
                    <button className='px-4 py-2 rounded-sm text-sm bg-[#C2F800] font-bold text-[#000]'>BROWSE WORKOUTS</button>
                </div>
                <div className="w-100">
                    <Image src={bannerImg} alt='Logo' loading='eager' width={350} height={350} />
                </div>
            </div>
        </header>
    );
};

export default Banner;