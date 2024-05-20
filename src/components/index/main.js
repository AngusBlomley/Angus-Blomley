/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import '../../app/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

function Main() {
    const [typedText, setTypedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        AOS.init({ duration: 1000, delay: 200 });
    }, []);

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
        'project management.'
    ], []);

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
        <section id="home" className="section flex justify-center items-center w-full min-h-screen overflow-hidden" data-aos="fade-in">
            <main className="max-lg:mt-20 max-lg:w-screen max-lg:px-4">
                <article className="grid grid-cols-2 max-lg:grid-cols-1 border-b border-inherit max-lg:border-none max-lg:flex max-lg:mx-auto duration-500">
                    <div className='w-[600px] whitespace-nowrap max-lg:w-full'>
                        <h1 className="text-5xl font-light">Angus Blomley</h1>
                        <p className="text-2xl font-thin mt-10 w-full max-lg:text-base">
                            An engineer with a passion for <span className="typed-text">{typedText}</span><span className="cursor bg-inherit"></span>
                        </p>
                        <div id="links" className="my-10 grid grid-cols-1 gap-4 lg:gap-0 lg:grid-cols-3 lg:text-center">
                            <a
                                href="https://www.codecademy.com/users/AngusBlomley/achievements"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-inherit border opacity-75 border-inherit p-2.5 no-underline duration-200 hover:opacity-100 col-span-1 lg:col-span-2 lg:row-span-1"
                            >
                                Codecademy Certificates
                            </a>
                            <a
                                href="https://github.com/AngusBlomley"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-inherit border opacity-75 border-inherit p-2.5 no-underline duration-200 hover:opacity-100 col-span-1 lg:col-start-3 lg:row-start-1"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/angus-blomley-82b45a177/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-inherit border opacity-75 border-inherit p-2.5 no-underline duration-200 hover:opacity-100 col-span-1 lg:col-start-1 lg:row-start-2"
                            >
                                LinkedIn
                            </a>
                            <Link
                                href="/work/celestialStarTracker"
                                className="inline-block bg-inherit border opacity-75 border-inherit p-2.5 no-underline duration-200 hover:opacity-100 col-span-1 lg:col-span-2 lg:col-start-2 lg:row-start-2"
                            >
                                Celestial Star Tracker
                            </Link>
                            <Link
                                href="/work/stringBox"
                                className="inline-block bg-inherit border opacity-75 border-inherit p-2.5 no-underline duration-200 hover:opacity-100 col-span-1 lg:col-span-2 lg:row-start-3"
                            >
                                Re-String Box
                            </Link>
                            <Link
                                href="/resume"
                                className="inline-block bg-inherit border opacity-75 border-inherit p-2.5 no-underline duration-200 hover:opacity-100 col-span-1 lg:col-start-3 lg:row-start-3"
                            >
                                Resume
                            </Link>
                            <Link
                                href="/work/stringBox"
                                className="inline-block bg-inherit border opacity-75 border-inherit p-2.5 no-underline duration-200 hover:opacity-100 col-span-1 lg:col-start-1 lg:row-start-4"
                            >
                                Meetly
                            </Link>
                            <Link
                                href="/work/misuzuPortfolio"
                                className="inline-block bg-inherit border opacity-75 border-inherit p-2.5 no-underline duration-200 hover:opacity-100 col-span-1 lg:col-span-2 lg:row-start-4"
                            >
                                Misuzu portfolio
                            </Link>
                        </div>
                    </div>

                    <div className='mx-auto max-lg:hidden' style={{ height: '392px', overflow: 'hidden' }}>
                        <Image
                            width={400}
                            height={400}
                            id="portrait"
                            alt="portrait"
                            src="/images/index/portrait2.png"
                            className="filter ml-8 brightness-75 hover:brightness-100 duration-500"
                            style={{ clipPath: 'inset(0 0 8px 0)' }}
                            fetchpriority=''
                        />
                    </div>
                </article>
            </main>
        </section>
    );
}

export default Main;