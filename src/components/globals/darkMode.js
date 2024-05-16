import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const body = document.body;
        if (isDarkMode) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button onClick={toggleDarkMode} className="text-gray-300 opacity-75 hover:opacity-100 transition duration-100">
            {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
    );
}

export default DarkModeToggle;
