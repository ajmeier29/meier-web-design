'use client'
import { BlogPostData } from "@/data/data";
import { PreloadStaticImage } from "./PreloadImage";
import ContactModal from "./ContactModal";
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import { StaticImageData } from "next/image";
import performaceImage from '../../public/images/dashboard.png';
import seoImage from '../../public/images/statistics.png';
import customersImage from '../../public/images/customer.png';
import accessImage from '../../public/images/accesibility.png';
import responsiveImage from '../../public/images/responsive.png';
import Performance from "./Performance";

export const HomePage: React.FC<{ blogPosts: BlogPostData[] }> = ({ blogPosts }) => {
    // const { showModal, setShowModal, showSuccessMessage } = useContext(SubscribeContext)
    // const openModal = () => setShowModal(true);
    // const closeModal = () => setShowModal(false);
    const featuresRef = useRef<HTMLDivElement | null>(null);
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ['business', 'bars', 'gyms', 'restaurants', 'everyone.'],
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
            <div className="relative justify-center items-center -mt-12 md:-mt-32 drop-shadow-1xl block">
                {/* <PreloadStaticImage imgSrc={mainWorkoutImage} styleProps={'h-[700px] w-full diagonal-cut-mobile  relative'} /> */}
                <div className="grid grid-cols-1 h-full mt-10">
                    <div className="absolute h-[700px] md:h-[600px] w-full -mt-20 overscroll-none hero-border-radius bg-hero-gradient-background "></div>
                    <div className="relative top-0 z-20 mx-auto md:mt-24 max-w-3xl md:px-4 text-center">
                        <div className="grid grid-cols-1 text-white place-content-center justify-items-center w-full">
                            <h1 className="text-[45px] lg:text-4xl font-bold mt-10 mb-6 max-sm:px-5">I build websites for <span ref={typedRef} /></h1>
                            <p className="px-4 text-lg md:w-3/4 leading-relaxed">
                                I create lightning-fast websites to attract customers and make a great first impression. My sites are lightweight, responsive,
                                and designed with SEO, UI, and UX in mind. Experience speed, beauty, and functionality.
                            </p>

                            <p className="mb-8 mt-4 px-4 leading-relaxed">Contact me for a free consultation</p>
                            <div>
                                <button
                                    aria-label="Contact Me"
                                    onClick={() => {
                                        if (document) {
                                            (document.getElementById('contact_modal') as HTMLFormElement).showModal();
                                        }
                                    }} className="inline-block py-4 px-8 leading-none text-black hover:text-white bg-white bg-opacity-85 hover:bg-pink-600 rounded shadow text-sm font-bold"
                                >Contact Me</button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center w-3/4 md:w-[90%] lg:w-[130%] text-black gap-4 mt-6">
                                <InfoCard
                                    image={performaceImage}
                                    title={'Performance'}
                                    url="#"
                                    description="I build websites focused on performance and speed. Unlike Wix and other no-code platforms, my sites render on the server for a faster user experience."
                                />
                                <InfoCard
                                    image={seoImage}
                                    title={'SEO'}
                                    url="#"
                                    description="My websites include the proper SEO to make sure you get on to the front page of Google resulting in more visits to your website."
                                />
                                <InfoCard
                                    image={customersImage}
                                    title={'Attract Customers'}
                                    url="#"
                                    description="My websites are visually appealing and responsive. This will build trust with the users resulting in more customers."
                                />
                                <InfoCard
                                    image={responsiveImage}
                                    title={'Responsive'}
                                    url="#"
                                    description="My websites are built for desktop and mobile. They will look visually stunning as on all devices and screen sizes."
                                />
                                {/* <InfoCard
                                    image={responsiveImage}
                                    title={'Responsive'}
                                    url="#"
                                    description="Along with SEO, accessibiliy is an important feature to any website. This allows people with special needs to navigate your webpsite."
                                /> */}

                            </div>
                            <div className="text-black mt-6">
                                More Information
                            </div>
                            <button onClick={() => {
                                featuresRef.current?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }} className="mt-1">
                                <svg className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
                            </button>
                        </div>

                    </div>

                    <div
                        ref={featuresRef}
                        className="grid grid-cols-1 gap-24 lg:gap-36 text-white mt-12 place-content-center justify-items-center w-full">
                        <Performance />
                        <Performance />
                    </div>

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
                {/* <div className="grid grid-cols-1 gap-4 mt-10 mx-3 md:mx-40">
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

                </div> */}
            </div >
        </>
    )
}
type InfoCardProps =
    {
        image: StaticImageData;
        title: string;
        description: string;
        url: string;
    }
const InfoCard = ({ image, title, description, url }: InfoCardProps) => {
    return (
        <>
            <div
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                className="bg-white p-5 h-72 rounded-lg border shadow-md grid grid-cols-1 md:gap-3 lg:gap-1 place-items-center">
                <PreloadStaticImage imgSrc={image} styleProps={'w-10 h-10'} />
                <h2 className="text-xl">
                    {title}
                </h2>
                <p className="text-sm h-28 font-light">
                    {description}
                </p>
                <a href={url} className="inline text-left">Learn More
                    <svg className="h-5 w-5 inline" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="15" y1="16" x2="19" y2="12" />  <line x1="15" y1="8" x2="19" y2="12" /></svg>
                </a>
            </div>
        </>
    )
}

// const baseballServices: ServiceProp[] =
//     [
//         {
//             src: pitchingImage,
//             title: 'Pitching Lessons',
//             description: 'We’re all about helping pitchers reach their full potential. Whether you’re a youth player dreaming of the big leagues or a seasoned professional honing your craft, our world-class training programs have got you covered.'
//         },
//         {
//             src: battingImage,
//             title: 'Batting Lessons',
//             description: 'We’re all about helping pitchers reach their full potential. Whether you’re a youth player dreaming of the big leagues or a seasoned professional honing your craft, our world-class training programs have got you covered.'
//         },
//         {
//             src: fieldingImage,
//             title: 'Fielding Lessons',
//             description: 'We’re all about helping pitchers reach their full potential. Whether you’re a youth player dreaming of the big leagues or a seasoned professional honing your craft, our world-class training programs have got you covered.'
//         }
//     ]

// const metabolicServices: ServiceProp[] =
//     [
//         {
//             src: squatImage,
//             title: 'Adult Metabolic Classes',
//             description: 'We’re all about helping pitchers reach their full potential. Whether you’re a youth player dreaming of the big leagues or a seasoned professional honing your craft, our world-class training programs have got you covered.'
//         },
//         {
//             src: lungeImage,
//             title: 'Functional Equipment',
//             description: 'We’re all about helping pitchers reach their full potential. Whether you’re a youth player dreaming of the big leagues or a seasoned professional honing your craft, our world-class training programs have got you covered.'
//         },
//         {
//             src: mealImage,
//             title: 'Meal Planning',
//             description: 'We’re all about helping pitchers reach their full potential. Whether you’re a youth player dreaming of the big leagues or a seasoned professional honing your craft, our world-class training programs have got you covered.'
//         }
//     ]

// const gymServices: GymServicesProps[] = [

//     {
//         title: 'High-Intensity Workouts',
//         image: workoutImage,
//         description: 'Our expert coaches guide you through functional movements, strength training, and conditioning exercises.'
//     },
//     {
//         title: 'Functional Equipment',
//         image: dumbellImage,
//         description: 'Experience functional fitness at its best with our cutting-edge equipment and personalized training'
//     },
//     {
//         title: 'Flexible Class Schedules',
//         image: scheduleImage,
//         description: 'Our gym offers flexible class times to fit your busy schedule'
//     }
// ]