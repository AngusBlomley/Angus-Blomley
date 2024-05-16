import React, { useEffect, useState } from 'react';
import { setupMenuAnimations } from '../animations';
import Link from 'next/link';
import { FaHome, FaInfo, FaGraduationCap, FaBriefcase, FaEnvelope, FaFileDownload, FaStar, FaSun, FaMoon, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import more icons
import '../../app/globals.css';
import DarkModeToggle from './darkMode';

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
        document.body.classList.toggle('menu-open', !menuVisible);
    };

    const sections = [
        { id: 'home', name: 'Home', icon: <FaHome /> },
        { id: 'about', name: 'About', icon: <FaInfo /> },
        { id: 'education', name: 'Education', icon: <FaGraduationCap /> },
        { id: 'work', name: 'Work', icon: <FaBriefcase /> },
        { id: 'contact', name: 'Contact', icon: <FaEnvelope /> },
        { id: 'skills', name: 'Skills', icon: <FaStar /> },
        { id: 'resume', name: 'Resume', icon: <FaFileDownload /> },
    ];

    return (
        <header className="fixed flex justify-center w-full top-0 z-50 p-4 opacity-0 duration-500 max-md:p-4">
            <div className="flex w-10/12 items-center justify-between max-md:w-full">
                <Link id="logo" href="/" className="text-white no-underline">
                    <h2 className="text-3xl font-rubik font-bold opacity-75 hover:opacity-100 duration-200">AB</h2>
                </Link>
                <nav className="hidden md:flex space-x-6 items-center">
                    {sections.map(section => (
                        <a key={section.id} href={`#${section.id}`} className="opacity-75 no-underline text-gray-300 transition duration-100 hover:opacity-100">
                            {section.name}
                        </a>
                    ))}
                    <div className="flex space-x-4 items-center">
                        <a href="https://github.com/AngusBlomley" target="_blank" rel="noopener noreferrer" className="text-gray-300 opacity-75 hover:opacity-100"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/angus-blomley-82b45a177/" target="_blank" rel="noopener noreferrer" className="text-gray-300 opacity-75 hover:opacity-100"><FaLinkedin /></a>
                    </div>
                    <DarkModeToggle />
                </nav>

                <div className="md:hidden">
                    <div id="togglebutton" onClick={toggleMenu} className="cursor-pointer text-3xl text-gray-300 opacity-75">
                        &#x2630;
                    </div>
                </div>

                <div id="menucontainer" className={`fixed top-0 right-0 w-1/2 h-full bg-gray-800 transition-transform duration-300 ${menuVisible ? 'translate-x-0' : 'translate-x-full'} flex flex-col items-center shadow-xl z-50`}>
                    <div onClick={toggleMenu} className="cursor-pointer text-3xl text-gray-100 fixed right-4 top-4 z-20">
                        &#x2715;
                    </div>
                    <ul className="w-full mt-20 text-xl list-none">
                        {sections.map(section => (
                            <li key={section.id} className="p-4">
                                <a href={`#${section.id}`} className="text-gray-300 no-underline flex items-center" onClick={toggleMenu}>
                                    {section.icon}
                                    <span className="ml-2">{section.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${menuVisible ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}></div>
        </header>
    );
}

export default Header;
