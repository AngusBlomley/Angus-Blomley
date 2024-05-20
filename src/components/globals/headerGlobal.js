import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaHome, FaInfo, FaSun, FaMoon, FaGraduationCap, FaBriefcase, FaEnvelope, FaFileDownload, FaStar, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../../app/globals.css';
import DarkModeToggle from './darkMode';

function HeaderGlobal({ isDarkMode, toggleDarkMode }) {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
        document.body.classList.toggle('menu-open', !menuVisible);
    };

    const sections = [
        { id: 'home', name: 'Home', link: '/#home', icon: <FaHome /> },
        { id: 'about', name: 'About', link: '/#about', icon: <FaInfo /> },
        { id: 'education', name: 'Education', link: '/#education', icon: <FaGraduationCap /> },
        { id: 'work', name: 'Work', link: '/#work', icon: <FaBriefcase /> },
        { id: 'contact', name: 'Contact', link: '/#contact', icon: <FaEnvelope /> },
        { id: 'skills', name: 'Skills', link: '/#skills', icon: <FaStar /> },
        { id: 'resume', name: 'Resume', link: '/resume.pdf', icon: <FaFileDownload /> },
    ];

    const backgroundColor = isDarkMode ? 'white' : 'black';

    return (
        <header className="fixed w-full top-0 z-50 p-4 max-lg:p-4" style={{ backgroundColor }}>
            <div className="flex justify-between items-center max-lg:w-full">
                <Link href="/" passHref>
                    <h2 id="logo" className="text-3xl font-rubik font-bold opacity-75 hover:opacity-100 cursor-pointer no-underline">AB</h2>
                </Link>
                <nav className="hidden lg:flex space-x-6 items-center">
                    {sections.map(section => (
                        <Link key={section.id} href={section.link} passHref>
                            <div
                                className="opacity-75 no-underline hover:opacity-100 cursor-pointer"
                                onClick={section.onClick ? section.onClick : null}
                            >
                                {section.name}
                            </div>
                        </Link>
                    ))}
                    <div className="flex space-x-4 items-center">
                        <a href="https://github.com/AngusBlomley" target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/angus-blomley-82b45a177/" target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100"><FaLinkedin /></a>
                        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                    </div>
                </nav>

                <div className="lg:hidden">
                    <div id="togglebutton" onClick={toggleMenu} className="cursor-pointer text-3xl opacity-75">
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
                                <Link href={section.link} passHref>
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
            <div className={`fixed top-0 left-0 w-full h-full bg-opacity-75 z-40 ${menuVisible ? 'opacity-75' : 'opacity-0 pointer-events-none'}`}></div>
        </header>
    );
}

export default HeaderGlobal;
