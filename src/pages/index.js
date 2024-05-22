import React, { useState } from 'react';
import Header from '@/components/globals/header';
import Main from '@/components/index/main';
import About from '@/components/index/about';
import Education from '@/components/index/education';
import Work from '@/components/index/work';
import Contact from '@/components/index/contact';
import Footer from '@/components/globals/footer';

function HomePage() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (
        <main className={`flex justify-center flex-col ${isDarkMode ? 'dark-mode' : ''}`}>
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
