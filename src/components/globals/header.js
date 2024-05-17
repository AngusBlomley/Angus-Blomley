import React, { useEffect, useState } from 'react';
import { setupMenuAnimations } from '../animations';
import Link from 'next/link';
import { FaHome, FaInfo, FaSun, FaMoon, FaGraduationCap, FaBriefcase, FaEnvelope, FaFileDownload, FaStar, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../../app/globals.css';
import DarkModeToggle from './darkMode';

function Header() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const headerElement = document.querySelector('header');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target.id === 'about' && entry.isIntersecting) {
                    headerElement.style.backgroundColor = isDarkMode ? 'var(--foreground-color-light)' : 'var(--foreground-color-dark)';
                } else if (entry.target.id === 'home' && entry.isIntersecting) {
                    headerElement.style.backgroundColor = 'transparent';
                }
            });
        }, { threshold: 0.1 });

        const sections = document.querySelectorAll('#home, #about');
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, [isDarkMode]);

    useEffect(() => {
        const cleanup = setupMenuAnimations();

        const headerElement = document.querySelector('header');
        setTimeout(() => {
            headerElement.classList.add('animation-fadeIn');
            headerElement.classList.remove('opacity-0');
        }, 1000);

        return cleanup;
    }, []);

    useEffect(() => {
        const body = document.body;
        if (isDarkMode) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
        document.body.classList.toggle('menu-open', !menuVisible);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
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

    const menuBackgroundColor = isDarkMode ? 'var(--background-color-dark)' : 'var(--background-color-light)';

    return (
        <header className="fixed flex justify-center w-full top-0 z-50 p-4 opacity-0 duration-200 max-lg:p-4">
            <div className="flex w-10/12 items-center justify-between max-lg:w-full">
                <Link id="logo" href="/" className="no-underline">
                    <h2 className="text-3xl font-rubik font-bold opacity-50 hover:opacity-100 duration-200">AB</h2>
                </Link>
                <nav className="hidden lg:flex space-x-6 items-center">
                    {sections.map(section => (
                        <a key={section.id} href={`#${section.id}`} className="opacity-50 no-underline transition duration-100 hover:opacity-100">
                            {section.name}
                        </a>
                    ))}
                    <div className="flex space-x-4 items-center">
                        <a href="https://github.com/AngusBlomley" target="_blank" rel="noopener noreferrer" className="duration-200 opacity-50 hover:opacity-100"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/angus-blomley-82b45a177/" target="_blank" rel="noopener noreferrer" className="duration-200 opacity-50 hover:opacity-100"><FaLinkedin /></a>
                    </div>
                    <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                </nav>

                <div className="lg:hidden">
                    <div id="togglebutton" onClick={toggleMenu} className="cursor-pointer text-3xl opacity-50">
                        &#x2630;
                    </div>
                </div>

                <div id="menucontainer" className={`fixed top-0 right-0 w-1/2 h-full transition-transform duration-300 ${menuVisible ? 'translate-x-0' : 'translate-x-full'} flex flex-col items-center shadow-xl z-50`} style={{ backgroundColor: menuBackgroundColor }}>
                    <div onClick={toggleMenu} className="cursor-pointer text-3xl fixed right-4 top-4 z-20">
                        &#x2715;
                    </div>
                    <ul className="w-full mt-20 text-xl list-none">
                        {sections.map(section => (
                            <li key={section.id} className="p-4">
                                <a href={`#${section.id}`} className="no-underline flex items-center" onClick={toggleMenu}>
                                    {section.icon}
                                    <span className="ml-2">{section.name}</span>
                                </a>
                            </li>
                        ))}
                        <li className="p-4 no-underline flex items-center">
                            <button onClick={toggleDarkMode} className="opacity-75 hover:opacity-100 transition duration-0 flex items-center">
                                {isDarkMode ? <FaSun /> : <FaMoon />}
                                <span className="ml-2 py-2 cursor-pointer">Dark Mode</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`fixed top-0 left-0 w-full h-full bg-opacity-50 z-40 transition-opacity duration-300 ${menuVisible ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}></div>
        </header>
    );
}

export default Header;
