import React, { useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function DarkModeToggle({ children, isDarkMode, toggleDarkMode }) {
    useEffect(() => {
        const body = document.body;
        const article = document.querySelector('main article');
        const cursor = document.querySelector('.cursor');
        if (isDarkMode) {
            body.classList.add('dark-mode');
            article.classList.add('dark-mode');
            cursor.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
            article.classList.remove('dark-mode');
            cursor.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    return (
        <button onClick={toggleDarkMode} className="opacity-75 hover:opacity-100 transition duration-0 flex items-center">
            {isDarkMode ? <FaSun /> : <FaMoon />}
            <span className="ml-2 py-2 cursor-pointer">{children}</span>
        </button>
    );
}

export default DarkModeToggle;
