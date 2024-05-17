import React, { useState } from 'react';
import Header from '@/components/globals/header';
import Main from '@/components/index/main';
import About from '@/components/index/about';
import Education from '@/components/index/education';
import Work from '@/components/index/work';
import Contact from '@/components/index/contact';
import Footer from '@/components/globals/footer';
import { LazyLoadProvider } from '@/components/globals/lazyLoadContext';
import LazyLoad from '@/components/globals/lazyLoad';

function HomePage() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (
        <LazyLoadProvider>
            <main className={`flex justify-center flex-col ${isDarkMode ? 'dark-mode' : ''}`}>
                <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                <Main isDarkMode={isDarkMode} />
                <About isDarkMode={isDarkMode} />
                <Education isDarkMode={isDarkMode} />
                <LazyLoad id="work">
                    <Work isDarkMode={isDarkMode} />
                </LazyLoad>
                <Contact isDarkMode={isDarkMode} />
                <Footer isDarkMode={isDarkMode} />
            </main>
        </LazyLoadProvider>
    );
}

export default HomePage;
