import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../../app/globals.css';
import Link from 'next/link';
import Image from 'next/image';

function Work({ isDarkMode }) {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const backgroundColor = isDarkMode ? 'var(--background-color-dark)' : 'var(--background-color-light)';
    const color = isDarkMode ? 'var(--foreground-color-dark)' : 'var(--foreground-color-light)';

    const media = [
        { type: 'video', src: '/videos/stringBox.mp4', link: '/work/stringBox', title: 'String Box Project' },
        { type: 'image', src: '/images/work/cst2.jpg', link: '/work/celestialStarTracker', title: 'Final Major Project' },
        { type: 'video', src: '/videos/meetly.mp4', link: '/work/meetly', title: 'Meetly' },
        { type: 'video', src: '/videos/beFirst.mp4', link: '/work/beFirst', title: 'Be First Barking Heritage Videos' },
        { type: 'video', src: '/videos/misuzu.mp4', link: '/work/misuzuPortfolio', title: 'Misuzu Collaboration' },
    ];

    return (
        <section
            id="work"
            style={{ color }}
            className="mt-36 flex flex-col justify-center items-center z-10 h-screen"
        >
            <div className="z-10" data-aos="fade-up">
                <h2 className="text-4xl font-hiraKakuPro mb-8 max-md:text-3xl">
                    Creative Masterpieces
                </h2>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" className=' shadow-2xl'>
                <Carousel
                    showArrows={true}
                    showStatus={false}
                    showIndicators={true}
                    showThumbs={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    interval={4000}
                    transitionTime={500}
                    dynamicHeight={false}
                    stopOnHover={false}
                    className="w-[1024px] h-[576px] rounded-lg"
                >
                    {media.map((item, index) => (
                        <div key={index} className="flex justify-center items-center relative w-[1024px] h-[576px]">
                            <Link href={item.link} legacyBehavior>
                                <a className="absolute w-full h-full hover:brightness-75 duration-200">
                                    {item.type === 'video' ? (
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            src={item.src}
                                            alt={item.title}
                                            className="object-cover filter brightness-75 w-[1024px] h-[576px] shadow-lg rounded-lg"
                                        />
                                    ) : (
                                        <Image
                                            src={item.src}
                                            alt={item.title}
                                            layout="responsive"
                                            width={1024}
                                            height={576}
                                            className="object-cover filter brightness-75 w-[1024px] h-[576px] shadow-lg rounded-lg"
                                        />
                                    )}
                                </a>
                            </Link>
                            <h3 className="absolute text-white text-2xl z-10">
                            </h3>
                            <Link href={item.link} legacyBehavior>
                                <a className="absolute text-4xl text-white font-hiraKakuPro bottom-10 mx-auto bg-transparent py-2 px-4 filter hover:text-green-600 rounded duration-200">
                                    {item.title}
                                </a>
                            </Link>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

export default Work;
