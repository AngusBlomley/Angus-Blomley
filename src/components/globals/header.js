import React, { useEffect, useState } from 'react';
import { setupMenuAnimations } from '../animations';
import Image from 'next/image'
import Link from 'next/link';

function Header() {
    const [menuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
        const headerElement = document.querySelector('header');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target.id === 'about' && entry.isIntersecting) {
                    headerElement.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
                } else if (entry.target.id === 'home' && entry.isIntersecting) {
                    headerElement.style.backgroundColor = 'transparent';
                }
            });
        }, { threshold: 0.5 });

        const sections = document.querySelectorAll('#home, #about');
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const cleanup = setupMenuAnimations();
        const headerElement = document.querySelector('header');

        setTimeout(() => {
            headerElement.classList.add('animation-fadeIn');
            headerElement.classList.remove('opacity-0');
        }, 1000);

        return cleanup;
    }, []);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const sections = ['home', 'about', 'education', 'work', 'contact'];

    return (
        <header className="fixed flex justify-center w-full top-0 z-50 p-4 opacity-0 duration-500 max-md:p-4">
            <div className='flex w-10/12 items-center justify-between max-md:w-full'>
                <Link id="logo" href="/" className="text-white no-underline">
                    <h2 className="text-3xl font-rubik font-bold opacity-75 hover:opacity-100 duration-200">AB</h2>
                    {/* 
                <Link id="logo" href="/" className="text-white no-underline">
                    <Image
                        alt="logo"
                        src="/images/logo/logo-white.webp"
                        width={80}
                        height={80}
                    />
                </Link>
                */}
                </Link>
                <nav className="hidden md:flex space-x-6">
                    {sections.map(section => (
                        <a key={section} href={`#${section}`} className="opacity-75 no-underline text-white transition duration-100 hover:opacity-100">
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    ))}
                </nav>

                <div className="md:hidden">
                    <div id="togglebutton" onClick={toggleMenu} className="cursor-pointer text-3xl text-white">
                        &#x2630;
                    </div>
                </div>

                <div id="menucontainer" className={`fixed top-0 right-0 w-1/2 h-full bg-black transition-transform duration-300 ${menuVisible ? 'translate-x-0' : 'translate-x-full'} flex flex-col items-center shadow-xl`}>
                    <div onClick={toggleMenu} className="cursor-pointer text-3xl text-white fixed right-10 top-4 z-20">
                        &#x2715;
                    </div>
                    <ul className="w-full mt-20 text-center text-xl list-none">
                        {sections.map(section => (
                            <li key={section} className="p-4">
                                <a href={`#${section}`} className="text-white no-underline block" onClick={toggleMenu}>
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
