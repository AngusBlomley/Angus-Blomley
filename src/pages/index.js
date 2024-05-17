import React from 'react';
import Header from '@/components/globals/header';
import Main from '@/components/index/main';
import About from '@/components/index/about';
import Education from '@/components/index/education';
import Work from '@/components/index/work';
import Contact from '@/components/index/contact';
import Footer from '@/components/globals/footer';
import DarkModeToggle from '@/components/globals/darkMode';

function HomePage() {
    return (
        <main className='flex justify-center flex-col'>
            <Header />
            <Main />
            <About />
            <Education />
            <Work />
            <Contact />
            <Footer />
        </main>
    );
}

export default HomePage;
