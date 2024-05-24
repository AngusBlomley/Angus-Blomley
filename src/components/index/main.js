import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../app/globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function Main() {
    const [typedText, setTypedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);
    const [pdfVisible, setPdfVisible] = useState(false);

    const handleResumeClick = () => {
        if (window.innerWidth < 1024) {
            const link = document.createElement('a');
            link.href = '/pdf/Angus-Blomley.pdf';
            link.download = 'Angus-Blomley.pdf';
            link.click();
        } else {
            setPdfVisible(true);
        }
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 200,
            once: true,
        });
    }, []);

    const words = useMemo(() => [
        'technology.', 'innovation.', 'creativity.', 'programming.',
        'engineering.', 'design.', 'development.', 'automation.',
        'data analysis.', 'machine learning.', 'artificial intelligence.',
        'robotics.', 'cybersecurity.', 'networking.', 'software engineering.',
        'hardware development.', 'blockchain.', 'augmented reality.',
        'UI/UX design.', 'sustainable technology.', 'digital transformation.',
        'mobile development.', 'web development.', 'e-commerce.', 'project management.'
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

    const ascii = `
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$XXXX$$$$$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$xx+;;;;;;;;;;;;;;;+++xX$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&X+;;;;;;;:::;;;;;;;;;;;;;;++xX$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&Xx+;;;;;;;;;:::::;;;;;;;;;;;;;;;;;;+X&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&X+;;;;;;;;;;;;;:::::::;;;;;;;;:;+;++;;+x$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&X++;;;:;;;;:::;:::::::::;::;;;;;::;++++;;+x&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&$x+;+;;;;::::;;::::;;;::::::::::;;;;::;++;;;:;;x$&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&x+;;;;+;;::::::::;;;;;;;;;;:;::::::;;::::;;;;::::;X&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&x;;;;;;;;;;;:;;;;::;;;;;;;;;;;;:;::;;;;::::;;;::::;;X&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&X+++;;;;;;;;;;;;;;;;+++++++++++++++++++;+;;;;;;;::::;+$&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&x;;;;;;;;;;;;;;;+++++++++xxxxxxxxxxxxxxxxxxxx++;:::::+$&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&x;;+;;;;;;;+++++++++xxxxxxxxxXXXXXXXXXXXXXXXxXx++;;::;X&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&x;;+;;;;;++xxxxxxxxxxxxxxXXXXXXXXXXXX$$$$$$$$$$XXXx+;;x&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&x;;+;;++xxxxxxxxxxxxxXxxXXXXXXXXXXXXXX$$$$$$$$$$$$Xx;;x$&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&x;+;++xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX$$$$$$$$$$$$X+;+$&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&x;++xxXXXXXXXXXXXXXxxxxxXXXXXXXXXXXXXXX$$$$$$$$$$$$X++x&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&X++xxXXX$$$XXXXXXXXXXXXXXXXXXXXXXXXXXX$$$$$$$$$$$$$Xx+X&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&$++xxXXX$$$$XXXXxXXXXXXXXXXXXXXXXXXXX$$$$$$$$$$$$$XXx+X&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&$x+xxX$$$$$$XXxxxxxxxxxxxxXXXXXXXXXXXXxxxxxxXXXXXXXXxx$&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&xxxxX$$$$$xx++++;;;;;;++++xxXXXXxxxxx+;;;++++xxxxXXxx$&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&XxxxX$$$$XXXXxxxxxxx++++++xxxXXXXXxxxxxxxXXXXXXXXXXXx$&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&$xx+xX$$$$$$XXxxxxx++++++;+xXXXX$$XXx++;;;;+xxxXXXXXXxX&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&$XX+xxx$$$$$Xx+++;;::+x+;;;+xXXXX$$XXX+;;;:;;++;+xX$$XxX$&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&Xx$$XXx$$$$$Xx++++;;;;+;;;++xXXXXX$XXXXx++++xxXX$$$$$XX$X$&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&Xxxx$$X$$$$$XXXXxxxxxx++;;+xXXXXXX$XXXXxxxXX$$$$$$$$$XX$$&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&Xx+x$$$$$$$XXXXXXxxxx+++xxXXXXXXXXXXX$$$$$$$$$$$$$$$XX$$&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&$x;;+x$$$$$$$XXXXXxxxxx+xxXXXXxxXXXXXX$$$$$$$$$$$$$$$XxxX&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&$+;++X$$$$$$$$XXXXxxxxx++xXXXXxXXXXXXX$$$$$$$$$$$$$$$XXxx$&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&X+++x$$$$$$$$XXXXXxxx++++xX$$XXX$$XXXX$$$$$$$$$$$$$$Xx+X&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&$$x+XX$$$$$$XXXXXxx+++++XXXXXxxXXXXXXX$$$$$$$$$$$$$XX$$&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&$$XXX$$$$$$$XXXXxx+++++++;+xx+xx+;+XX$$$$$$$$$$$$$X$$&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&$XXX$$$$$$$XXXXXxx++++++;++++xxxxxXX$$$$$$$$$$$$$X$&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&$XX$$$$$$$XXXXx+++;;;;;;++;;;;;;;++xX$$$$$$$$$XX&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&$XX$$$$$$$XXx+;;;;++++++x+;++++++++++X$$$$$$XX$&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&XX$XXXX$$Xx+;;;;;;;;;;;;;;++;;;+;;;;+x$$$XXXX&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&$XXXXxxXXXx++++xxx+++++xxxxxxxxxxx++xX$XxxxXX&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&$XXXXXXXXXXxxxxxXXXxxxxxxxxxxXXX$$XxxXXxxxXx$&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&XXXXXXXXXXxxxxXXXXxxxxxxxxXX$XX$$XxxXXxxxxX&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&XXXXXXXXXx+xxxxxxxxxx+++xXXXXXXXXxXXXXXxX&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$x+xXXXxxx+++xxxxxxxx+++xXXxxXxxxx+xXxx$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$x++xxxx+++++xxx++++x++xxx++x+++++x+x&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&$X$$$X+;;++++++++++++x+xx+++++++++;;;;x$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&$xx$$$$$X+;;;;;;;;+++++++++;;;;;;;;;;x$$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&X+;+$$$XXXXx++;;;;;;;;;;;;;;;;;;;;;+x$$$$$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&$+;;;X$$XXXXXXXxxxx+;::::;;;:;;;+xXX$$$$$$XX&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&$Xxx+;+xXXXXXxxxXXXXXxxxxx+++xX$$$$$$$$$$$$x+&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&$XXxxx++;;+xxxxxxxxXXXXxxxxxxX$$$$$$X$$$$$$$x;$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&$$Xxxxxxx+;;;++xxxxxxXXXXxxxxxX$$X$$$$$$$$$$$+;X&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&$x+xXXx+++xxxx+;;++xxxxxxxXXXXxxxxxXX$$$$$$$$$$X;;X&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&$XXx+;+xXxx+++xxxxx++++xxxxxxxxXXXxxxxXXX$$$$$$$$$Xx:+X$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&$Xxxx++x+;;;+xxx++;+xxxxxxx++xxxxxxxxxXXXXXXX$$$X$$$$$Xx;:xxxX&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&$$$X+++++++++++;;;+x++++++xxxxxxxxxxxxxxxxxXXXXXX$$$$$$$$$XX;:+xXxxXX$&&&&&&&&&&&&&&&&&&&&&&&&&
&$$$Xxx++++++++++xx++;;;+++++++++xxxxxxxxxxxxxxxxxxxXXXXX$$$$$$X;:+xXXxxxxxXX$&&&&&&&&&&&&&&&&&&&&&&
$XXXXxxxxxxxxxxxxxxxxx++++xxxx+xxxXXxXXXXXXXXXXXXXXXXXX$$$$$$$X+;+XXXXXXXXXXXXXX$&&&&&&&&&&&&&&&&&&&`

    const [text, setText] = useState(ascii);
    const [displayedText, setDisplayedText] = useState("");
    const [i, setI] = useState(0);

    useEffect(() => {
        const intervalSpeed = 1;

        const intervalId = setInterval(() => {
            if (i < text.length) {
                setI(prevI => prevI + 5);
                setDisplayedText(text.substring(0, i + 5));
            } else {
                clearInterval(intervalId);
            }
        }, intervalSpeed);

        return () => clearInterval(intervalId);
    }, [i, text]);

    return (
        <section className="section flex lg:mt-40 justify-center w-full lg:h-screen" data-aos="fade-in">
            <main className="max-lg:mt-20 max-lg:w-screen max-sm:w-full max-lg:px-4">
                <article className="grid grid-cols-2 max-md:grid-cols-1 duration-500">
                    <div className='max-md:mx-auto max-md:w-96 max-sm:w-72'>
                        <h1 className="font-ibmPlexMono italic mb-4">Angus Blomley</h1>
                        <h2 className="xl:text-2xl font-karla w-full mb-4 max-lg:text-base">
                            An engineer with a passion<br></br>
                            <span className="typed-text"> for {typedText}</span><span className="cursor bg-inherit"></span>
                        </h2>
                        <div id="links" className="grid grid-cols-1 mb-20">
                            <h3 className='font-ibmPlexMono mb-2'>Profiles:</h3>
                            <a
                                href="https://www.codecademy.com/users/AngusBlomley/achievements"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-inherit opacity-75 p-0 no-underline font-ibmPlexMono hover:opacity-100"
                            >
                                - Codecademy
                            </a>
                            <a
                                href="https://github.com/AngusBlomley"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-inherit opacity-75 p-0 no-underline font-ibmPlexMono hover:opacity-100"
                            >
                                - GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/angus-blomley-82b45a177/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-inherit opacity-75 p-0 no-underline font-ibmPlexMono hover:opacity-100"
                            >
                                - LinkedIn
                            </a>
                            <div
                                className="inline-block bg-inherit opacity-75 p-0 no-underline font-ibmPlexMono hover:opacity-100 cursor-pointer"
                                onClick={handleResumeClick}
                            >
                                - Resume
                            </div>

                            <h3 className=' font-ibmPlexMono mt-4 mb-2'>Projects:</h3>
                            <Link
                                href="/work/stringBox"
                                className="inline-block bg-inherit opacity-75 p-0 no-underline font-ibmPlexMono hover:opacity-100 "
                            >
                                - Re-String Box
                            </Link>
                            <Link
                                href="/work/celestialStarTracker"
                                className="inline-block bg-inherit opacity-75 p-0 no-underline font-ibmPlexMono hover:opacity-100"
                            >
                                - Celestial Object Tracker
                            </Link>
                            <Link
                                href="/work/meetly"
                                className="inline-block bg-inherit opacity-75 p-0 no-underline font-ibmPlexMono hover:opacity-100"
                            >
                                - Meetly
                            </Link>
                            <Link
                                href="/work/beFirst"
                                className="inline-block bg-inherit opacity-75 p-0 no-underline font-ibmPlexMono hover:opacity-100"
                            >
                                - Be First
                            </Link>
                            <Link
                                href="/work/misuzuPortfolio"
                                className="inline-block bg-inherit opacity-75 p-0 no-underline font-ibmPlexMono hover:opacity-100"
                            >
                                - Misuzu portfolio
                            </Link>
                            <Link href="/#about">
                                <div className='text-center mt-20 max-xl:hidden hover:text-green-400 group'>
                                    <p>LEARN MORE</p>
                                    <FontAwesomeIcon icon={faArrowDown} size="1x" className="group-hover:animate-bob" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='mx-auto max-lg:mt-5 max-lg:mb-5 max-md:row-start-2 max overflow-hidden'>
                        <pre id="text" className='whitespace-pre font-mono text-[10px] leading-[10px] tracking-normal transform-none max-xl:text-[8px] max-xl:leading-[8px] max-lg:w-[375px] max-lg:h-[400px] max-sm:w-full max-lg:text-[7px] max-lg:leading-[7px] max-sm:leading-[5px] max-sm:text-[5px]'>
                            <p className='text-wrap bg-[#121212] text-white'>
                                {displayedText}
                            </p>
                        </pre>
                    </div>

                    <div className="cursor-pointer col-span-2 text-center xl:hidden group hover:text-green-400 group">
                        <Link href="/#about">
                            <p>LEARN MORE</p>
                            <FontAwesomeIcon icon={faArrowDown} size="1x" className="group-hover:animate-bob" />
                        </Link>
                    </div>
                </article>
            </main>

            {pdfVisible && (
                <div className="fixed -top-48 inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-75" onClick={() => setPdfVisible(false)}></div>
                    <div className="relative w-4/5 h-5/6">
                        <iframe src="/pdf/Angus-Blomley.pdf" className="w-full h-full" />
                    </div>
                </div>
            )}
        </section>
    );
}

export default Main;
