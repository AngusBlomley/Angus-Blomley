/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import HeaderGlobal from '@/components/globals/headerGlobal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const StringBox = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
    const backgroundColor = isDarkMode ? 'var(--background-color-dark)' : 'var(--background-color-light)';
    const color = isDarkMode ? 'var(--foreground-color-dark)' : 'var(--foreground-color-light)';

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <>
            <HeaderGlobal isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <div id="stringBox" data-aos="fade-in" style={{ backgroundColor, color, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl mt-10 font-bold mb-4">StringBox - Restringing and Ecommerce Website (In Development )</h1>
                    <p className="text-lg mb-4">
                        Welcome to StringBox, a template for anyone who wants to provide an online stringing service.
                        This page demonstrates the work I've done on this project, including the technology stack used
                        and key features implemented.
                    </p>

                    <div className="mb-8">
                        <a href="https://string-box.vercel.app" className="text-blue-500 underline">Visit StringBox</a>
                    </div>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
                        <p>
                            StringBox is an ecommerce website designed for a sole trader offering restringing services.
                            The site allows users to book services, purchase products, and manage orders seamlessly.
                            It's built with a modern tech stack to ensure scalability, performance, and a great user experience.
                        </p>
                    </section>

                    <div className='grid mt-20 border-b border-opacity-10 border-gray-100'>
                        <section className=" h-full mb-8 col-start-1 self-center pr-8 p-b">
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

                            <h2 className="text-2xl font-semibold mb-2 mt-8">Key Features</h2>
                            <ul className="list-disc pl-5">
                                <li>Secure authentication and authorization using NextAuth.js</li>
                                <li>Payment integration with Stripe</li>
                                <li>Responsive design with Tailwind CSS</li>
                                <li>RESTful API for managing orders and services</li>
                                <li>Admin dashboard for managing products and orders</li>
                            </ul>
                        </section>
                        <section className='col-start-2 row-span-1 row-start-1 border-l pl-8 pb-8 border-opacity-10 border-gray-100'>
                            <Image
                                alt="StringBox Website"
                                src="/images/work/stringbox.png"
                                width={960}
                                height={480}
                                className='w-full'
                            />
                        </section>
                    </div>

                    <section className="mb-8 mt-8">
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

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Deployment</h2>
                        <p>
                            This project is deployed on Vercel, leveraging its powerful deployment platform for Next.js applications.
                            Vercel provides automatic scaling, a global CDN, and easy-to-configure deployment settings.
                        </p>
                    </div>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Database Information</h2>
                        <p>
                            StringBox uses MongoDB as its primary database, managed with Mongoose. MongoDB provides a flexible,
                            scalable, and high-performance data storage solution. The combination of MongoDB and Mongoose
                            ensures efficient data modeling, schema validation, and seamless integration with the application.
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
};

export default StringBox;
