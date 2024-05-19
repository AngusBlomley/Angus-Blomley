/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import '../../app/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';

function About({ isDarkMode }) {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const backgroundColor = isDarkMode ? 'var(--background-color-dark)' : 'var(--background-color-light)';

    return (
        <section id="about" style={{ backgroundColor }} className="relative z-10 duration-200 flex row items-center pt-16">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent opacity-100 z-10 max-md:via-black/100 max-md:to-black/50"></div>
                <Image
                    alt=""
                    src="/images/back.jpg"
                    layout="fill"
                    objectFit="cover"
                    className='z-0'
                />
            </div>
            <div className="max-w-2xl ml-44 my-40 relative z-10 text-gray-100 max-lg:mx-auto max-lg:px-4">
                <h2 className="text-4xl mb-8 font-semibold" data-aos="fade-up">The Person Behind the Pixels</h2>
                <p className="text-lg mb-6 leading-relaxed" data-aos="fade-up">
                    Hello! I'm Angus Blomley, a passionate software developer with a love for continuous learning. I began programming in May 2014 and have since mastered HTML, CSS, JavaScript, React, Python, Tailwind, MongoDB, GitHub, Vercel, Axios, and more.
                </p>
                <p className="text-lg mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                    I'm also learning Japanese to connect more deeply with my partner and their culture. As a former competitive springboard diver, I enjoy challenging outdoor activities and thrive in like-minded company. My adventurous spirit drives me to explore new places and constantly push my limits.
                </p>
                <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="400">
                    Feel free to explore my work, and don't hesitate to reach out if you'd like to collaborate or have a chat!
                </p>
            </div>
        </section>
    );
}

export default About;
