import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../../app/globals.css';
import Link from 'next/link';

function Work({ isDarkMode }) {
    const [showMainCarousel, setShowMainCarousel] = useState(false);
    const [slideshowCompleted, setSlideshowCompleted] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    useEffect(() => {
        if (slideshowCompleted) {
            const timer = setTimeout(() => {
                setShowMainCarousel(true);
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [slideshowCompleted]);

    const backgroundColor = isDarkMode ? 'var(--background-color-dark)' : 'var(--background-color-light)';
    const color = isDarkMode ? 'var(--foreground-color-dark)' : 'var(--foreground-color-light)';

    const images = [
        { src: '/images/work/stringbox.png', link: '/more-info/stringbox', title: 'String Box Project' },
        { src: '/images/work/cst.jpg', link: '/more-info/cst', title: 'Final Major Project' },
        { src: '/images/work/befirst.png', link: '/more-info/befirst', title: 'Be First Campaign' },
        { src: '/images/work/misuzu.png', link: '/more-info/misuzu', title: 'Misuzu Collaboration' },
        // Add paths, links, and titles for all 10 images,
    ];

    const handleSlideshowChange = (index) => {
        if (index === images.length - 1) {
            setSlideshowCompleted(true);
        }
    };

    return (
        <section id="work" style={{ backgroundColor, color }} className="pt-16 relative flex justify-center items-center z-10 overflow-hidden">
            <div className="flex justify-center items-center w-full">
                <div className="relative w-full mx-auto overflow-visible">
                    {showMainCarousel ? (
                        <div className='zoom-container'>
                            <Carousel
                                showArrows={true}
                                showStatus={false}
                                showIndicators={true}
                                showThumbs={true}
                                autoPlay
                                infiniteLoop={true}
                                interval={5000}
                                transitionTime={1000}
                                dynamicHeight={false}
                                stopOnHover={false}
                                className="relative w-full mx-auto overflow-visible"
                            >
                                {images.map((image, index) => (
                                    <div key={index} className="h-[720px] w-screen flex justify-center items-center relative">
                                        <Image src={image.src} layout="fill" objectFit="cover" className="filter brightness-50" alt={`Work ${index + 1}`} />
                                        <h3 className="text-white text-2xl mt-40 mr-5 z-10 max-lg:mr-0">{image.title}</h3>
                                        <Link
                                            href={image.link}
                                            className="absolute bottom-40 mx-auto mr-5 bg-transparent border-2 border-white text-white py-2 px-4 rounded duration-200 hover:border-cyan-500 hover:text-cyan-500  max-lg:mr-0"
                                        >
                                            See More
                                        </Link>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    ) : (
                        <div className='zoom-container'>
                            <Carousel
                                showArrows={false}
                                showStatus={false}
                                showIndicators={false}
                                showThumbs={false}
                                autoPlay
                                infiniteLoop={false}
                                interval={400}
                                transitionTime={0}
                                dynamicHeight={false}
                                stopOnHover={false}
                                className=""
                                onChange={handleSlideshowChange}
                            >
                                {images.map((image, index) => (
                                    <div key={index} className="h-[720px] w-screen flex justify-center items-center relative">
                                        <Image src={image.src} layout="fill" objectFit="cover" className="filter brightness-75 transform transition-transform duration-500" alt={`Work ${index + 1}`} />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    )}
                </div>
            </div>
            <div className="absolute z-10 text-center" data-aos="fade-in">
                <h2 className="text-6xl text-white font-bold mb-8 max-md:text-3xl">Creative Masterpieces</h2>
            </div>
        </section>
    );
}

export default Work;
