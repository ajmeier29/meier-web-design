import Link from 'next/link';
import pageSpeed1 from '../../public/images/pageSpeed_1.png';
import Image from 'next/image';

export default function Performance() {
    return (
        <>
            <div className="w-full grid grid-cols-2 px-11 place-items-center place-content-center h-[700px] border-red-500">
                <div className='gradient-shadow rounded-lg'>
                    <div className='rounded-lg overflow-hidden'>
                        <Image
                            src={pageSpeed1}
                            alt=''
                            height={600}
                            width={700}
                        />
                    </div>
                </div>
                <div className='p-10'>
                    <div className='text-2xl text-start text-black pb-5'>
                        Page Speed
                    </div>
                    <div className='text-md text-black'>
                        The speed of a website is crucial for several reasons. First, it directly impacts user experience: visitors expect quick load times, and slow sites frustrate them,
                        leading to higher bounce rates. Second, website speed affects SEO rankings—Google favors well-optimized, fast-loading sites.
                        Finally, faster load speeds contribute to higher conversion rates. For instance, every 1-second delay in page load decreases
                        customer satisfaction by 16%, page views by 11%, and conversion rates by 7% . So, optimizing your website’s speed is essential for
                        business success!
                        <br />
                        <br />
                        Every website I build scores above a 90/100 in every category. Check out the speed of your current website <span className='text-blue-700'> <Link href={'https://pagespeed.web.dev/'}>here.</Link></span>
                    </div>
                </div>
            </div>
        </>
    )
}