import React, { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaInfo, FaGraduationCap, FaBriefcase, FaEnvelope, FaFileDownload, FaStar, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../../app/globals.css';
import DarkModeToggle from './darkMode';

function HeaderGlobal({ isDarkMode, toggleDarkMode }) {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
        if (!menuVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const sections = [
        { id: 'home', link: '/', name: 'Home', icon: <FaHome /> },
        { id: 'about', link: '/#about', name: 'About', icon: <FaInfo /> },
        { id: 'education', link: '/#education', name: 'Education', icon: <FaGraduationCap /> },
        {
            id: 'work', link: '/#work', name: 'Work', icon: <FaBriefcase />, subLinks: [
                { name: 'Re-String Box', link: '/work/stringBox' },
                { name: 'Celestial Star Tracker', link: '/work/celestialStarTracker' },
                { name: 'Meetly', link: '/work/meetly' },
                { name: 'Be First', link: '/work/beFirst' },
                { name: `Misuzu's Portfolio`, link: '/work/misuzuPortfolio' },
            ]
        },
        { id: 'contact', link: '/#contact', name: 'Contact', icon: <FaEnvelope /> },
        { id: 'skills', link: '/#skills', name: 'Skills', icon: <FaStar /> },
        { id: 'resume', link: '/resume.pdf', name: 'Resume', icon: <FaFileDownload /> },
    ];

    const backgroundColor = isDarkMode ? 'white' : 'black';

    return (
        <header className="fixed font-ibmPlexMono italic flex justify-center w-full top-0 z-50 p-4 opacity-0 duration-200 max-lg:p-4" style={{ backgroundColor }} data-aos="fade-in">
            <div className="flex w-10/12 items-center justify-between max-lg:w-full">
                <Link href="/" passHref>
                    <h2 id="logo" className="text-3xl font-rubik font-bold opacity-75 hover:opacity-100 cursor-pointer no-underline">AB</h2>
                </Link>
                <nav className="hidden lg:flex space-x-6 items-center">
                    {sections.map(section => (
                        <div key={section.id} className="relative group">
                            <Link href={section.link} passHref>
                                <div className="opacity-50 no-underline transition duration-100 hover:opacity-100 cursor-pointer">
                                    {section.name}
                                </div>
                            </Link>
                            {section.subLinks && (
                                <div className="absolute p-5 -left-2 mt-0 w-64 shadow-lg rounded-lg hidden group-hover:block transition-opacity duration-200" style={{ backgroundColor }}>
                                    {section.subLinks.map(subLink => (
                                        <Link key={subLink.name} href={subLink.link} passHref>
                                            <div className="p-2 cursor-pointer opacity-50 hover:opacity-100">{subLink.name}</div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
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

                <div id="menucontainer" className={`fixed top-0 right-0 w-1/2 h-screen duration-300 ${menuVisible ? 'translate-x-0' : 'translate-x-full'} flex flex-col items-center shadow-xl z-50 overflow-y-auto`} style={{ backgroundColor }}>
                    <div onClick={toggleMenu} className="cursor-pointer text-3xl fixed right-4 top-4 z-20">
                        &#x2715;
                    </div>
                    <ul className="w-full mt-20 text-xl list-none">
                        {sections.map(section => (
                            <li key={section.id} className="p-4 opacity-75">
                                <Link href={section.link} passHref>
                                    <div className="no-underline flex items-center cursor-pointer" onClick={toggleMenu}>
                                        {section.icon}
                                        <span className="ml-2">{section.name}</span>
                                    </div>
                                </Link>
                                {section.subLinks && (
                                    <ul className="ml-4">
                                        {section.subLinks.map(subLink => (
                                            <li key={subLink.name}>
                                                <Link href={subLink.link} passHref>
                                                    <div className="p-2 cursor-pointer opacity-50 hover:opacity-100" onClick={toggleMenu}>{subLink.name}</div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                        <li className="px-4 no-underline flex items-center">
                            <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}><span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span></DarkModeToggle>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`fixed top-0 left-0 w-full h-full bg-opacity-75 z-40 ${menuVisible ? 'opacity-75' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}></div>
        </header>
    );
}

export default HeaderGlobal;
