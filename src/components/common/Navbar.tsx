'use client'
import Image from 'next/image';
import logo from "@/assets/logo.png"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();
    const links = <>
        <li className='text-gray-300 '><Link className={`rounded-3xl md:px-3 md:py-2 ${pathName === '/' ? 'text-[#ccff00] md:bg-[#3c4226] ' : ''}`} href={'/'}>Workouts</Link></li>
        <li className='text-gray-300 '><Link className={`rounded-3xl md:px-3 md:py-2 ${pathName === '/my-plan' ? 'text-[#ccff00]  md:bg-[#3c4226] ' : ''}`} href={'/my-plan'}>My Plan</Link></li>

    </>
    return (
        <nav className='container mx-auto max-w-280'>
            <div className="flex justify-between items-center py-8">
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="rounded-lg p-2 transition"
                        aria-label="Toggle Menu"
                    >
                        <GiHamburgerMenu />
                    </button>

                    {isOpen && (
                        <ul className="absolute left-0 top-12 z-50 w-30 h-20 rounded-lg bg-cyan-800 p-2 shadow-lg">
                            {links}
                        </ul>
                    )}
                </div>
                <div className="flex gap-2">
                    <Link href={'/'}><Image src={logo} alt='Logo' loading='eager' width={30} height={30} /></Link>
                    <h2 className='font-semibold'>FITLOG</h2>
                </div>
                <ul className='hidden gap-3 md:flex'>
                    {links}
                </ul>
                <div className="flex gap-1">
                    <Link href={'/my-plan'}><button className='btn btn-sm sm:btn-md btn-neutral'>Plan <span className='bg-[#ccff00] p-1 w-7 rounded-full text-black font-semibold'>0</span></button></Link>
                    <Link href={'/my-plan'}><button className='btn btn-sm sm:btn-md btn-neutral text-gray-300'>Saved <span className='border border-gray-300 p-1 w-7 rounded-full text-white font-semibold'>0</span></button></Link>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;