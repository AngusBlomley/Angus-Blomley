import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../app/globals.css';
import Link from 'next/link';
import Image from 'next/image';

SwiperCore.use([Autoplay, Pagination, Navigation]);

function Work({ isDarkMode }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

        const handleTouchMove = (event) => {
            if (event.touches.length > 1) {
                event.preventDefault();
            }
        };

        const carousel = document.querySelector('.carousel-wrapper');
        if (carousel) {
            carousel.addEventListener('touchmove', handleTouchMove);

            return () => {
                carousel.removeEventListener('touchmove', handleTouchMove);
            };
        }
    }, []);

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
            className="lg:mt-40 max-lg:mt-16 flex flex-col justify-center items-center z-10"
        >
            <div className="z-10" data-aos="fade-up">
                <h2 className="text-4xl font-hiraKakuPro mb-8">
                    Projects
                </h2>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" className='shadow-2xl w-full max-w-screen-lg h-[50vh] max-lg:h-[80vh] carousel-wrapper'>
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    className="w-full h-full lg:rounded-lg"
                >
                    {media.map((item, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center relative w-full">
                            <Link href={item.link} legacyBehavior>
                                <a className="absolute w-full h-full hover:brightness-75 duration-200">
                                    {item.type === 'video' ? (
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            src={item.src}
                                            alt={item.title}
                                            className="object-cover filter brightness-75 w-full h-full shadow-lg rounded-lg max-lg:rounded-none"
                                        />
                                    ) : (
                                        <Image
                                            src={item.src}
                                            alt={item.title}
                                            layout="fill"
                                            className="object-cover filter brightness-75 w-full h-full shadow-lg rounded-lg max-lg:rounded-none"
                                        />
                                    )}
                                </a>
                            </Link>
                            <Link href={item.link} legacyBehavior>
                                <a className="absolute w-full bg-black bg-opacity-40 max-lg:text-center text-white font-hiraKakuPro bottom-0 py-2 px-4">
                                    {item.title}
                                </a>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
            <style jsx global>{`
                .swiper-button-prev,
                .swiper-button-next {
                    color: white; /* Change the color to white or any desired color */
                }
                .swiper-button-prev:after,
                .swiper-button-next:after {
                    font-size: 20px; /* Adjust the size if needed */
                }
            `}</style>
        </section>
    );
}

export default Work;
