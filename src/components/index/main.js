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

    useEffect(() => {
        AOS.init({ duration: 1000, delay: 200 });
    }, []);

    const words = useMemo(() => [
        'technology.', 'innovation.', 'creativity.', 'programming.',
        'engineering.', 'design.', 'development.', 'automation.',
        'data analysis.', 'machine learning.', 'artificial intelligence.',
        'robotics.', 'cybersecurity.', 'networking.', 'cloud computing.',
        'software engineering.', 'hardware development.', 'blockchain.',
        'virtual reality.', 'augmented reality.', 'UI/UX design.',
        'sustainable technology.', 'renewable energy.',
        'digital transformation.', 'mobile development.', 'web development.',
        'e-commerce.', 'digital marketing.', 'project management.'
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
    $XXXXxxxxxxxxxxxxxxxxx++++xxxx+xxxXXxXXXXXXXXXXXXXXXXXX$$$$$$$X+;+XXXXXXXXXXXXXX$&&&&&&&&&&&&&&&&&&&`;

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

    const [text, setText] = useState(ascii);
    const [displayedText, setDisplayedText] = useState("");
    const [i, setI] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (i < text.length) {
                setI(prevI => prevI + 1);
                setDisplayedText(text.substring(0, i + 1));
            } else {
                clearInterval(intervalId);
            }
        }, 0);

        return () => clearInterval(intervalId);
    }, [i, text]);

    return (
        <section className="section flex lg:mt-40 justify-center w-full lg:h-screen">
            <main className="max-lg:mt-20 max-lg:w-screen max-lg:px-4">
                <article className="px-4 grid grid-cols-2 max-lg:grid-cols-1 duration-500">
                    <div className='max-lg:w-full w-[600px]'>
                        <h1 className="font-ibmPlexMono italic mb-4">Angus Blomley</h1>
                        <h2 className="text-2xl font-karla w-full mb-4 max-lg:text-base">
                            An engineer with a passion for <span className="typed-text">{typedText}</span><span className="cursor bg-inherit"></span>
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
                            <Link
                                href="/resume"
                                className="inline-block bg-inherit opacity-75 p-0 no-underline font-ibmPlexMono hover:opacity-100"
                            >
                                - Resume
                            </Link>

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
                        </div>
                        <div className='text-center'>
                            <p>LEARN MORE</p>
                            <FontAwesomeIcon icon={faArrowDown} size="1x" />
                        </div>
                    </div>
                    <div className='mx-auto max-lg:mt-5 max-lg:mb-5'>
                        <pre id="text" className='whitespace-pre font-mono text-[0.5vw] leading-[0.5vw] tracking-normal transform-none max-lg:text-[1vw] max-lg:leading-[1vw]'>
                            <span className='text-wrap bg-black text-white'>
                                {displayedText}
                            </span>
                        </pre>
                    </div>
                </article>
            </main>
        </section>
    );
}

export default Main;
