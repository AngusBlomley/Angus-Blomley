import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../../app/globals.css';
import Link from 'next/link';
import Image from 'next/image';

function Work({ isDarkMode }) {
    const [showMainCarousel, setShowMainCarousel] = useState(false);
    const [slideshowCompleted, setSlideshowCompleted] = useState(false);
    const [selectedItem, setSelectedItem] = useState(0);
    const mainCarouselRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    useEffect(() => {
        if (slideshowCompleted) {
            setSelectedItem(0); // Reset selected item to the first slide
        }
    }, [slideshowCompleted]);

    useEffect(() => {
        if (slideshowCompleted) {
            const timer = setTimeout(() => {
                setShowMainCarousel(true);
            }, 500); // Set delay to 0 to make it immediate

            return () => clearTimeout(timer);
        }
    }, [slideshowCompleted, selectedItem]); // Add selectedItem to the dependencies array

    const backgroundColor = isDarkMode ? 'var(--background-color-dark)' : 'var(--background-color-light)';
    const color = isDarkMode ? 'var(--foreground-color-dark)' : 'var(--foreground-color-light)';


    {/*{ type: 'image', src: '/images/work/stringbox.png', link: '/work/stringBox', title: 'String Box Project' },*/ }
    {/*{ type: 'image', src: '/images/work/befirst.png', link: '/work/beFirst', title: 'Be First Campaign' },*/ }
    const media = [
        { type: 'video', src: '/videos/stringBox.mp4', link: '/work/stringBox', title: 'String Box Project' },
        { type: 'image', src: '/images/work/cst.jpg', link: '/work/celestialStarTracker', title: 'Final Major Project' },
        { type: 'video', src: '/videos/meetly.mp4', link: '/work/meetly', title: 'Meetly' },
        { type: 'video', src: '/videos/beFirst.mp4', link: '/work/beFirst', title: 'Be First Barking Heritage Videos' },
        { type: 'image', src: '/images/work/misuzu.png', link: '/work/misuzuPortfolio', title: 'Misuzu Collaboration' },
    ];

    const handleSlideshowChange = (index) => {
        if (index === media.length - 1) {
            setSlideshowCompleted(true);
        }
    };

    return (
        <section
            id="work"
            style={{ backgroundColor, color }}
            className="pt-16 relative flex flex-col justify-center items-center z-10 overflow-hidden h-screen"
        >
            {showMainCarousel ? (
                <Carousel
                    ref={mainCarouselRef}
                    selectedItem={selectedItem}
                    onChange={(index) => setSelectedItem(index)}
                    showArrows={true}
                    showStatus={false}
                    showIndicators={true}
                    showThumbs={true}
                    autoPlay={true}
                    infiniteLoop={true}
                    interval={5000}
                    transitionTime={1000}
                    dynamicHeight={false}
                    stopOnHover={false}
                    className="w-full zoom"
                >
                    {media.map((item, index) => (
                        <div key={index} className="h-screen flex justify-center items-center relative">
                            {item.type === 'image' ? (
                                <Image
                                    src={item.src}
                                    className="w-full h-full object-cover filter brightness-50"
                                    alt={`Work ${index + 1}`}
                                    width={1920}
                                    height={1080}
                                />
                            ) : (
                                <video
                                    src={item.src}
                                    className="w-full h-full object-cover filter brightness-50"
                                    autoPlay
                                    loop
                                    muted
                                    alt={`Work ${index + 1}`}
                                />
                            )}
                            <h3 className="absolute text-white text-2xl mt-40 z-10 max-lg:">
                                {item.title}
                            </h3>
                            <Link
                                href={item.link}
                                className="absolute bottom-40 mx-auto bg-transparent border-2 border-white text-white py-2 px-4 rounded duration-200 hover:border-cyan-500 hover:text-cyan-500"
                            >
                                See More
                            </Link>
                        </div>
                    ))}
                </Carousel>
            ) : (
                <div className='zoom-container'>
                    <Carousel
                        showArrows={true}
                        showStatus={false}
                        showIndicators={true}
                        showThumbs={true}
                        autoPlay={true}
                        infiniteLoop={false}
                        interval={500}
                        transitionTime={0}
                        dynamicHeight={false}
                        stopOnHover={false}
                        className="w-full"
                        onChange={handleSlideshowChange}
                    >
                        {media.map((item, index) => (
                            <div key={index} className="h-screen w-screen flex justify-center items-center relative">
                                {item.type === 'image' ? (
                                    <Image
                                        src={item.src}
                                        className="w-full h-full object-cover filter brightness-50 transform transition-transform duration-500"
                                        alt={`Work ${index + 1}`}
                                        width={1920}
                                        height={1080}
                                    />
                                ) : (
                                    <video
                                        src={item.src}
                                        className="w-full h-full object-cover filter brightness-50"
                                        autoPlay
                                        loop
                                        muted
                                        alt={`Work ${index + 1}`}
                                    />
                                )}
                            </div>
                        ))}
                    </Carousel>
                </div>
            )}
            <div className="absolute z-10 text-center" data-aos="fade-in">
                <h2 className="text-6xl text-white font-bold mb-8 max-md:text-3xl">
                    Creative Masterpieces
                </h2>
            </div>
        </section>
    );
}

export default Work;
