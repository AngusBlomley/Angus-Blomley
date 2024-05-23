import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Header = dynamic(() => import('@/components/globals/header'));
const Main = dynamic(() => import('@/components/index/main'));
const About = dynamic(() => import('@/components/index/about'));
const Education = dynamic(() => import('@/components/index/education'));
const Work = dynamic(() => import('@/components/index/work'));
const Contact = dynamic(() => import('@/components/index/contact'));
const Footer = dynamic(() => import('@/components/globals/footer'));

function HomePage() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (
        <main className={`flex justify-center flex-col ${isDarkMode ? 'dark-mode' : ''}`}>
            <Head>
                <title>Angus Blomley</title>
                <meta name="description" content="Angus Blomley's Portfolio Website" />
            </Head>
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <Main isDarkMode={isDarkMode} />
            <About isDarkMode={isDarkMode} />
            <Education isDarkMode={isDarkMode} />
            <Work isDarkMode={isDarkMode} />
            <Contact isDarkMode={isDarkMode} />
            <Footer isDarkMode={isDarkMode} />
        </main>
    );
}

export default HomePage;
