import React, { useEffect, useState } from 'react';
import { setupMenuAnimations } from '../animations';
import Link from 'next/link';
import { FaHome, FaInfo, FaSun, FaMoon, FaGraduationCap, FaBriefcase, FaEnvelope, FaFileDownload, FaStar, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../../app/globals.css';
import DarkModeToggle from './darkMode';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Header({ isDarkMode, toggleDarkMode }) {
    const [menuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, delay: 4000 });
    }, []);


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
        }, 0);

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

    const backgroundColor = isDarkMode ? 'var(--background-color-dark)' : 'var(--background-color-light)';

    return (
        <header className="fixed flex justify-center w-full top-0 z-50 p-4 opacity-0 duration-200 max-lg:p-4" style={{ backgroundColor }} data-aos="fade-in">
            <div className="flex w-10/12 items-center justify-between max-lg:w-full">
                <Link href="/" passHref>
                    <h2 id="logo" className="text-3xl font-rubik font-bold opacity-50 hover:opacity-100 duration-200 cursor-pointer no-underline">AB</h2>
                </Link>
                <nav className="hidden lg:flex space-x-6 items-center">
                    {sections.map(section => (
                        <Link key={section.id} href={`#${section.id}`} passHref>
                            <div
                                className="opacity-50 no-underline transition duration-100 hover:opacity-100 cursor-pointer"
                                onClick={section.onClick ? section.onClick : null}
                            >
                                {section.name}
                            </div>
                        </Link>
                    ))}
                    <div className="flex space-x-4 items-center">
                        <a href="https://github.com/AngusBlomley" target="_blank" rel="noopener noreferrer" className="duration-200 opacity-50 hover:opacity-100"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/angus-blomley-82b45a177/" target="_blank" rel="noopener noreferrer" className="duration-200 opacity-50 hover:opacity-100"><FaLinkedin /></a>
                        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                    </div>
                </nav>

                <div className="lg:hidden">
                    <div id="togglebutton" onClick={toggleMenu} className="cursor-pointer text-3xl opacity-50">
                        &#x2630;
                    </div>
                </div>

                <div id="menucontainer" className={`fixed top-0 right-0 w-1/2 h-screen duration-300 ${menuVisible ? 'translate-x-0' : 'translate-x-full'} flex flex-col items-center shadow-xl z-50`} style={{ backgroundColor }}>
                    <div onClick={toggleMenu} className="cursor-pointer text-3xl fixed right-4 top-4 z-20">
                        &#x2715;
                    </div>
                    <ul className="w-full mt-20 text-xl list-none">
                        {sections.map(section => (
                            <li key={section.id} className="p-4 opacity-75">
                                <Link href={`#${section.id}`} passHref>
                                    <div
                                        className="no-underline flex items-center cursor-pointer"
                                        onClick={section.onClick ? section.onClick : toggleMenu}
                                    >
                                        {section.icon}
                                        <span className="ml-2">{section.name}</span>
                                    </div>
                                </Link>
                            </li>
                        ))}
                        <li className="px-4 no-underline flex items-center">
                            <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}><span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span></DarkModeToggle>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`fixed top-0 left-0 w-full h-full bg-opacity-50 z-40 transition-opacity duration-300 ${menuVisible ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}></div>
        </header>
    );
}

export default Header;
