import Image from 'next/image';
import footerLogo from '@/assets/SVG.png'


const Footer = () => {
    const getDate = new Date();
    return (
        <footer className='bg-[#090A0D] mt-8 border-t border-white/10'>
            <div className="flex flex-col items-center md:flex-row gap-4 md:gap-0 md:justify-between py-6 container mx-auto max-w-280">
                <div className="flex gap-2 justify-center items-center">
                    <Image className='w-6'
                        src={footerLogo}
                        height={10}
                        width={40}
                        loading='eager'
                        alt="Workout" />
                    <h1 className='uppercase font-bold'>fitlog</h1>
                </div>
                <p className='text-gray-400 w-60 md:w-auto text-center md:text-right'>&copy; {getDate.getFullYear()} FitLog — Workout Library. Train hard, log honest.</p>
            </div>

        </footer>
    );
};

export default Footer;