'use client'
import { BlogPostData } from "@/data/data";
import { PreloadStaticImage } from "./PreloadImage";
import mainWorkoutImage from '../../public/images/deadLift.webp'
import { GymServicesProps } from "./GymServices";
import HomePageService, { ServiceProp } from "./HomePageService";
import dumbellImage from '../../public/images/weight.png'
import workoutImage from '../../public/images/workout.png'
import scheduleImage from '../../public/images/calendar.png'
import pitchingImage from '../../public/images/pitcher.webp'
import battingImage from '../../public/images/batting.jpeg'
import fieldingImage from '../../public/images/fielding.jpeg'
import squatImage from '../../public/images/ladies-strong-squat.jpg'
import lungeImage from '../../public/images/ladies-lunge-together.jpg'
import mealImage from '../../public/images/hotel-room-service-meal.jpg'
import ContactModal from "./ContactModal";

import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import HeroGlow from "./HeroGlow";


export const HomePage: React.FC<{ blogPosts: BlogPostData[] }> = ({ blogPosts }) => {
    // const { showModal, setShowModal, showSuccessMessage } = useContext(SubscribeContext)
    // const openModal = () => setShowModal(true);
    // const closeModal = () => setShowModal(false);
    const sportsRef = useRef<HTMLDivElement | null>(null);
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ['business', 'bars', 'gyms', 'resturants', 'everyone.'],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>


            <ContactModal />
            <div className="relative justify-center items-center mt-2 drop-shadow-1xl block">
                {/* <PreloadStaticImage imgSrc={mainWorkoutImage} styleProps={'h-[700px] w-full diagonal-cut-mobile  relative'} /> */}
                <div className="place-content-center justify-center h-[700px]">

                    <HeroGlow>
                        <div className="relative top-0 z-20 mx-auto md:mt-24 max-w-3xl md:px-4 text-center">
                            <div className="grid grid-cols-1  text-black place-content-center justify-items-center w-full mx-auto">
                                <h1 className="text-4xl font-bold mt-10 mb-6">I build websites for <span ref={typedRef} /></h1>
                                <p className="px-4 text-lg md:w-3/4 leading-relaxed">
                                    I create lightning-fast websites to attract customers and make a great first impression. My sites are lightweight, responsive,
                                    and designed with SEO, UI, and UX in mind. Experience speed, beauty, and functionality.
                                </p>
                                {/* <p className="px-4 text-lg md:w-3/4 leading-relaxed">


                                    I build lightning fast websites to help attract business. A website can make or break
                                    someone&apos;s opinion of your business. I provide lightweight, fast, response
                                    websites with SEO, UI, and UX in mind.

                                </p> */}

                                <p className="mb-8 mt-4 px-4 leading-relaxed">Contact me for a free consultation</p>
                                <div>
                                    <button onClick={() => {
                                        if (document) {
                                            (document.getElementById('contact_modal') as HTMLFormElement).showModal();
                                        }
                                    }} className="inline-block py-4 px-8 leading-none text-black hover:text-white bg-white bg-opacity-85 hover:bg-pink-600 rounded shadow text-sm font-bold"
                                    >Contact Me</button>
                                </div>
                                <button onClick={() => {
                                    sportsRef.current?.scrollIntoView({
                                        behavior: 'smooth'
                                    });
                                }} className="mt-6 md:mt-36">
                                    <svg className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
                                </button>
                            </div>
                        </div>
                    </HeroGlow>

                    {/* <div className="relative top-0 z-20 max-w-5xl mx-auto mt:8 md:mt-24 px-4 text-start">
                        <div className="grid grid-cols-1  text-black place-content-center justify-items-center w-full max-w-3xl mx-auto">
                            <h1 className="text-4xl font-bold mt-10 mb-6">I build websites for <span ref={typedRef} /></h1>
                            <p className="px-4 text-lg md:w-3/4 leading-relaxed">
                                I build lightning fast websites to help attract business. A website can make or break
                                someone&apos;s opinion of your business. I provide lightweight, fast, response
                                websites with SEO, UI, and UX in mind.

                            </p>

                            <p className="mb-8 mt-4 px-4 leading-relaxed">Contact me for a consultation...
                                <span className="text-violet-600 font-bold">It&apos;s free!</span></p>
                            <div>
                                <button onClick={() => {
                                    if (document) {
                                        (document.getElementById('contact_modal') as HTMLFormElement).showModal();
                                    }
                                }} className="inline-block py-4 px-8 leading-none text-black hover:text-white bg-white bg-opacity-85 hover:bg-pink-600 rounded shadow text-sm font-bold"
                                >Contact Us</button>
                            </div>
                            <button onClick={() => {
                                sportsRef.current?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }} className="mt-6 md:mt-36">
                                <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
                            </button>
                        </div>
                    </div> */}



                    {/* <div className="h-16">
                        <HeroGlow />
                    </div> */}
                </div>
                <div className="grid grid-cols-1 gap-4 mt-10 mx-3 md:mx-40">
                    <div className="grid grid-cols-1 gap-4 place-content-center w-full flex-col">
                        <div ref={sportsRef} className="rounded-box grid h-10 text-2xl place-items-center">Sport Training Services</div>
                        <div className="divider"></div>
                        {baseballServices ?
                            (
                                <>
                                    {baseballServices.map(({ src, title, description }) => {
                                        return (
                                            <div className="" key={title}>
                                                <HomePageService src={src} title={title} description={description} />
                                            </div>
                                        )
                                    })}
                                </>
                            ) : (<></>)}

                        <div className="rounded-box grid mt-10 h-10 text-2xl place-items-center">Adult Metabolic Classes</div>
                        <div className="divider"></div>

                        {metabolicServices ?
                            (
                                <>
                                    {metabolicServices.map(({ src, title, description }) => {
                                        return (
                                            <div key={title}>
                                                <HomePageService src={src} title={title} description={description} />
                                            </div>
                                        )
                                    })}
                                </>
                            ) : (<></>)}
                    </div>

                </div>
            </div >
        </>
    )
}

const baseballServices: ServiceProp[] =
    [
        {
            src: pitchingImage,
            title: 'Pitching Lessons',
            description: 'We’re all about helping pitchers reach their full potential. Whether you’re a youth player dreaming of the big leagues or a seasoned professional honing your craft, our world-class training programs have got you covered.'
        },
        {
            src: battingImage,
            title: 'Batting Lessons',
            description: 'We’re all about helping pitchers reach their full potential. Whether you’re a youth player dreaming of the big leagues or a seasoned professional honing your craft, our world-class training programs have got you covered.'
        },
        {
            src: fieldingImage,
            title: 'Fielding Lessons',
            description: 'We’re all about helping pitchers reach their full potential. Whether you’re a youth player dreaming of the big leagues or a seasoned professional honing your craft, our world-class training programs have got you covered.'
        }
    ]

const metabolicServices: ServiceProp[] =
    [
        {
            src: squatImage,
            title: 'Adult Metabolic Classes',
            description: 'We’re all about helping pitchers reach their full potential. Whether you’re a youth player dreaming of the big leagues or a seasoned professional honing your craft, our world-class training programs have got you covered.'
        },
        {
            src: lungeImage,
            title: 'Functional Equipment',
            description: 'We’re all about helping pitchers reach their full potential. Whether you’re a youth player dreaming of the big leagues or a seasoned professional honing your craft, our world-class training programs have got you covered.'
        },
        {
            src: mealImage,
            title: 'Meal Planning',
            description: 'We’re all about helping pitchers reach their full potential. Whether you’re a youth player dreaming of the big leagues or a seasoned professional honing your craft, our world-class training programs have got you covered.'
        }
    ]

const gymServices: GymServicesProps[] = [

    {
        title: 'High-Intensity Workouts',
        image: workoutImage,
        description: 'Our expert coaches guide you through functional movements, strength training, and conditioning exercises.'
    },
    {
        title: 'Functional Equipment',
        image: dumbellImage,
        description: 'Experience functional fitness at its best with our cutting-edge equipment and personalized training'
    },
    {
        title: 'Flexible Class Schedules',
        image: scheduleImage,
        description: 'Our gym offers flexible class times to fit your busy schedule'
    }
]