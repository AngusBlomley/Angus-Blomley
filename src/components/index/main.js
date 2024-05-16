/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState, useRef, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    setupMenuAnimations,
    generateRandomPosition,
    generateRandomVelocity,
    handleMouseMove,
    animate
} from '../animations';
import '../../app/globals.css';

function Main() {
    const [positions, setPositions] = useState([]);
    const positionsRef = useRef([]);
    const velocities = useRef([]);
    const requestRef = useRef();
    const [typedText, setTypedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    const icons = useMemo(() => [
        'c', 'css', 'html', 'js', 'python',
        'arduino', 'github', 'vscode', 'raspberrypi',
        'linux', 'windows',
        'excel', 'lightroom', 'obs',
        'photoshop', 'powerpoint', 'premiere-pro', 'word', 'xd',
    ], []);

    const words = useMemo(() => [
        'technology.',
        'innovation.',
        'creativity.',
        'programming.',
        'engineering.',
        'design.',
        'development.',
        'automation.',
        'data analysis.',
        'machine learning.',
        'artificial intelligence.',
        'robotics.',
        'cybersecurity.',
        'networking.',
        'cloud computing.',
        'software engineering.',
        'hardware development.',
        'blockchain.',
        'virtual reality.',
        'augmented reality.',
        'UI/UX design.',
        'sustainable technology.',
        'renewable energy.',
        'digital transformation.',
        'mobile development.',
        'web development.',
        'e-commerce.',
        'digital marketing.',
        'project management.'], []);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        window.scrollTo(0, 0);

        const cleanup = setupMenuAnimations();
        const homeElement = document.getElementById('home');
        homeElement.classList.add('fade-in', 'is-visible');

        const newPositions = icons.map(() => generateRandomPosition());
        const newVelocities = icons.map(() => generateRandomVelocity());
        setPositions(newPositions);
        positionsRef.current = newPositions;
        velocities.current = newVelocities;

        const mouseMoveHandler = (e) => handleMouseMove(e, velocities, positionsRef);
        window.addEventListener('mousemove', mouseMoveHandler);

        requestRef.current = requestAnimationFrame(() => animate(setPositions, velocities, positionsRef, requestRef));

        setTimeout(() => {
            document.querySelectorAll('.icon-wrapper').forEach((el) => el.classList.add('is-visible'));
        }, 1000);

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler);
            cancelAnimationFrame(requestRef.current);
            cleanup();
        };
    }, [icons]);

    useEffect(() => {
        const handleTyping = () => {
            const current = loopNum % words.length;
            const fullText = words[current];

            setTypedText(
                isDeleting
                    ? fullText.substring(0, typedText.length - 1)
                    : fullText.substring(0, typedText.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 100);

            if (!isDeleting && typedText === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && typedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const typingTimer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(typingTimer);
    }, [typedText, isDeleting, loopNum, typingSpeed, words]);

    return (
        <section id="home" className="section relative flex justify-center items-center w-full min-h-screen overflow-hidden">
            <div className="background"></div>
            {/* 
            {positions.length > 0 && icons.map((icon, index) => {
                const { x, y } = positions[index];
                return (
                    <div
                        key={icon}
                        className="icon-wrapper opacity-0 fade-in"
                        style={{ top: `${y}px`, left: `${x}px`, position: 'absolute' }}
                    >
                        <Image
                            width={32}
                            height={64}
                            alt={icon}
                            src={`/images/icons/${icon}.webp`}
                            className="icon hidden"
                        />
                    </div>
                );
            })}
            */}
            <main className="opacity-0 fade-in max-md:p-2 max-md:mt-10">
                <article className="grid grid-cols-2 max-lg:grid-cols-1 border-b-2 border-white">
                    <div className='w-[550px]'>
                        <h1 className="text-5xl font-light">Angus Blomley</h1>
                        <p className="text-2xl font-thin mt-10 w-full">
                            Engineer with a passion for <span className="typed-text">{typedText}</span><span className="cursor"></span>
                        </p>
                        <div id="links" className="my-12 grid grid-cols-3 grid-rows-3 text-center">
                            <a
                                href="https://www.codecademy.com/users/AngusBlomley/achievements"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-white bg-black bg-opacity-50 border opacity-75 border-white p-2.5 no-underline duration-200 hover:opacity-100 col-span-2 row-span-1"
                            >
                                Codecademy Certificates
                            </a>
                            <a
                                href="https://github.com/AngusBlomley"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-white bg-black bg-opacity-50 border opacity-75 border-white p-2.5 no-underline duration-200 hover:opacity-100 col-start-3 row-start-1"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/angus-blomley-82b45a177/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-white bg-black bg-opacity-50 border opacity-75 border-white p-2.5 no-underline duration-200 hover:opacity-100 col-start-1 row-start-2"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://your-portfolio-site.com/projects"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-white bg-black bg-opacity-50 border opacity-75 border-white p-2.5 no-underline duration-200 hover:opacity-100 col-span-2 col-start-2 row-start-2"
                            >
                                Celestial Star Tracker
                            </a>
                            <a
                                href="https://your-portfolio-site.com/projects"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-white bg-black bg-opacity-50 border opacity-75 border-white p-2.5 no-underline duration-200 hover:opacity-100 col-span-2 row-start-3"
                            >
                                Re-String Box
                            </a>
                            <a
                                href="https://your-portfolio-site.com/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-white bg-black bg-opacity-50 border opacity-75 border-white p-2.5 no-underline duration-200 hover:opacity-100 col-start-3 row-start-3"
                            >
                                Resume
                            </a>
                        </div>
                        {/*
                        <div className="flex -mt-1">
                            <Image
                                width={40}
                                height={40}
                                alt="html"
                                src="/images/icons/html.webp"
                                className=""
                            />
                            <Image
                                width={40}
                                height={40}
                                alt="css"
                                src="/images/icons/css.webp"
                                className=""
                            />
                            <Image
                                width={40}
                                height={40}
                                alt="js"
                                src="/images/icons/js.webp"
                                className=""
                            />
                            <Image
                                width={40}
                                height={40}
                                alt="react"
                                src="/images/icons/react.png"
                                className=""
                            />
                            <Image
                                width={40}
                                height={40}
                                alt="tailwind"
                                src="/images/icons/tailwind.png"
                                className="py-1"
                            />
                            <Image
                                width={40}
                                height={40}
                                alt="vscode"
                                src="/images/icons/vscode.webp"
                                className=""
                            />
                        </div>
                        */}
                    </div>

                    <div className='mx-auto' style={{ height: '392px', overflow: 'hidden' }}>
                        <Image
                            width={400}
                            height={400}
                            id="portrait"
                            alt="portrait"
                            src="/images/portrait2.png"
                            className=" filter brightness-75 hover:brightness-100 duration-500"
                            style={{ clipPath: 'inset(0 0 8px 0)' }}
                        />
                    </div>
                </article>
            </main>
        </section>
    );
}

export default Main;
