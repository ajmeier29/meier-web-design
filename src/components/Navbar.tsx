'use client'
import Link from "next/link";
import { ReactNode, useState } from "react";


type NavBarProps =
    {
        marginTop?: string;
    }
export default function Navbar({ marginTop = 'mt-20' }: NavBarProps) {
    const [menu, setMenu] = useState(false)
    const setMenuOpen = () => setMenu(true);
    const setMenuClose = () => setMenu(false);

    return (
        <>
            <div className="top-0 py-1 lg:py-2 w-full lg:relative z-40">
                <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
                    <div className="flex items-center justify-end">
                        <div className="hidden md:block">
                            <ul className="flex space-x-10 text-base font-bold text-white ">
                                <li
                                    className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear mt-3">
                                    <a href="#">Home</a>
                                </li>
                                <li
                                    className="hover:bg-transparent transition-all duration-100 text-white ease-linear">

                                    <div className="dropdown dropdown-hover">
                                        <div tabIndex={0} role="button" className="btn shadow-none hover:bg-transparent bg-transparent border-none text-base text-white font-bold">Our Services</div>
                                        <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow">
                                            <li><a>Sports Training</a></li>
                                            <li><a>Adult Metabolic Classes</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li
                                    className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear mt-3">
                                    <a href="#">About</a>
                                </li>
                                <li
                                    className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear mt-3">
                                    <a onClick={(e) => {
                                        if (document) {
                                            e.preventDefault();
                                            (document.getElementById('contact_modal') as HTMLFormElement).showModal();
                                        }
                                    }} href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center justify-center md:hidden">
                            <button onClick={setMenuOpen} className="focus:outline-none text-slate-200 ">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="text-2xl text-slate-800 focus:outline-none active:scale-110 active:text-red-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
            {menu ?
                (
                    <>
                        <div className="absolute grid grid-cols-1 mobileMenuSlide -left-[500px] z-50 h-screen w-full">
                            <div onClick={setMenuClose} className="absolute right-0 m-4">
                                <svg className="h-8 w-8 text-slate-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
                            </div>
                            <div className="absolute text-black text-xl font-medium left-0 grid grid-cols-1 mx-5 mt-5 gap-4 justify-items-start ">
                                <div className="ml-5">
                                    <a href="#">Home</a>
                                </div>
                                <div className="">
                                    <details className="collapse collapse-arrow ">
                                        <summary className="collapse-title text-xl ml-1 my-[-20px] font-medium ">Our Services</summary>
                                        <div className="collapse-content mt-2">
                                            <div className="text-[15px] ml-2 grid grid-cols-1 gap-3">
                                                <div>
                                                    <a href="#">Sports Training</a>
                                                </div>
                                                <div>
                                                    <a href="#">Adult Metabolic Classes</a>
                                                </div>
                                            </div>
                                        </div>
                                    </details>
                                </div>
                                <div className="ml-5">
                                    <a href="#">About</a>
                                </div>
                                <div onClick={() => {
                                    if (document) {
                                        setMenuClose();
                                        (document.getElementById('contact_modal') as HTMLFormElement).showModal();
                                    }
                                }} className="ml-5">
                                    <a href="#">Contact</a>
                                </div>
                            </div>
                        </div>
                    </>
                )
                :
                (
                    <></>
                )}

        </>
    )
}

interface Props {
    children: ReactNode;
    link: string;
    marginRight?: boolean
    hamburger?: boolean
}

const NavBarOption: React.FC<Props> = ({ children, link, marginRight = true, hamburger = false }) => {

    return (
        <Link href={link}>
            {hamburger ?
                (
                    <>
                        <span className={`${marginRight ? 'mr-5' : ''} text-rust px-3 py-2 text-right block text-navbar-font-xl`}>
                            {children}
                        </span>
                    </>
                ) :
                (
                    <>
                        <span className={`${marginRight ? 'mr-5' : ''} text-button-primary text-navbar-font-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}>
                            {children}
                        </span>
                    </>
                )}
        </Link>
    );
};

