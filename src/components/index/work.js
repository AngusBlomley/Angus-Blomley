import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../../app/globals.css';

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
        '/images/work/stringbox.png',
        '/images/work/cst.jpg',
        '/images/work/befirst.png',
        '/images/work/misuzu.png',
        '/images/work/github.png',
        // Add paths to all 10 images,
    ];

    const handleSlideshowChange = (index) => {
        if (index === images.length - 1) {
            setSlideshowCompleted(true);
        }
    };

    return (
        <section id="work" style={{ backgroundColor, color }} className="relative flex flex-col justify-center items-center min-h-screen z-10 duration-200 overflow-hidden">
            <div className="flex justify-center items-center w-full h-full">
                <div className="w-full h-full items-center">
                    {showMainCarousel ? (
                        <Carousel
                            showArrows={false}
                            showStatus={false}
                            showIndicators={false}
                            showThumbs={false}
                            autoPlay
                            infiniteLoop
                            interval={3000}
                            transitionTime={300}
                            dynamicHeight={false}
                            stopOnHover={false}
                            className="w-full h-full"
                        >
                            {images.map((src, index) => (
                                <div key={index} className="h-[840px] overflow-hidden relative">
                                    <Image src={src} width={1920} height={840} className="object-cover w-full h-full filter brightness-75" alt={`Work ${index + 1}`} />
                                </div>
                            ))}
                        </Carousel>
                    ) : (
                        <div className="w-full h-full zoom-container">
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
                                className="w-full h-full"
                                onChange={handleSlideshowChange}
                            >
                                {images.map((src, index) => (
                                    <div key={index} className="h-[840px] overflow-hidden relative">
                                        <Image src={src} width={1920} height={840} className="object-cover w-full h-full filter brightness-75 transform transition-transform duration-500" alt={`Work ${index + 1}`} />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    )}
                </div>
            </div>
            <div className="absolute z-10 text-center" data-aos="fade-in">
                <h2 className="text-6xl text-white font-bold mb-8">Creative Masterpieces</h2>
            </div>
        </section>
    );
}

export default Work;
