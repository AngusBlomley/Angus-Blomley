/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import HeaderGlobal from '@/components/globals/headerGlobal';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StringBox = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <>
            <HeaderGlobal isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <div className={`container mx-auto px-4 py-8 mt-16 ${isDarkMode ? 'dark-mode' : ''}`} data-aos="fade-in">
                <h1 className="text-4xl font-bold mb-4">StringBox - Restringing and Ecommerce Website</h1>
                <p className="text-lg mb-4">
                    Welcome to StringBox, a template for anyone who wants to provide an online stringing service.
                    This page demonstrates the work I've done on this project, including the technology stack used
                    and key features implemented.
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
                    <p>
                        StringBox is an ecommerce website designed for a sole trader offering restringing services.
                        The site allows users to book services, purchase products, and manage orders seamlessly.
                        It's built with a modern tech stack to ensure scalability, performance, and a great user experience.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Technology Stack</h2>
                    <ul className="list-disc pl-5">
                        <li>Next.js for the frontend framework</li>
                        <li>Redux Toolkit for state management</li>
                        <li>Stripe for payment processing</li>
                        <li>MongoDB and Mongoose for database management</li>
                        <li>NextAuth.js for authentication</li>
                        <li>Axios for making HTTP requests</li>
                        <li>Nodemailer for email notifications</li>
                        <li>Tailwind CSS for styling</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
                    <ul className="list-disc pl-5">
                        <li>Secure authentication and authorization using NextAuth.js</li>
                        <li>Payment integration with Stripe</li>
                        <li>Responsive design with Tailwind CSS</li>
                        <li>RESTful API for managing orders and services</li>
                        <li>Admin dashboard for managing products and orders</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Dependencies</h2>
                    <pre className="p-4 rounded-md">
                        <code>
                            {`{
    "name": "string-box",
    "version": "0.1.0",
    "private": true,
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint"
    },
    "dependencies": {
        "@reduxjs/toolkit": "^2.2.3",
        "@stripe/react-stripe-js": "^2.7.1",
        "@stripe/stripe-js": "^3.4.0",
        "autoprefixer": "^10.4.19",
        "axios": "^1.6.8",
        "bcryptjs": "^2.4.3",
        "cors": "^2.8.5",
        "dotenv": "^16.4.5",
        "googleapis": "^137.1.0",
        "jsonwebtoken": "^9.0.2",
        "mongodb": "^6.6.1",
        "mongoose": "^8.3.4",
        "next": "^14.2.3",
        "next-auth": "^4.24.7",
        "nodemailer": "^6.9.13",
        "pg": "^8.11.5",
        "react": "^18",
        "react-dom": "^18",
        "react-redux": "^9.1.1",
        "react-responsive": "^10.0.0",
        "redux": "^5.0.1",
        "redux-thunk": "^3.1.0",
        "sharp": "^0.33.3",
        "stripe": "^15.5.0"
    },
    "devDependencies": {
        "@testing-library/react": "^15.0.4",
        "eslint": "^8",
        "eslint-config-next": "14.2.3",
        "jest": "^29.7.0",
        "postcss": "^8.4.38",
        "tailwindcss": "^3.4.3"
    }
}`}
                        </code>
                    </pre>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">Deployment</h2>
                    <p>
                        This project is deployed on Vercel, leveraging its powerful deployment platform for Next.js applications.
                        Vercel provides automatic scaling, a global CDN, and easy-to-configure deployment settings.
                    </p>
                </section>
            </div>
        </>
    );
};

export default StringBox;
