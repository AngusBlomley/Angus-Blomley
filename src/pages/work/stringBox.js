/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import HeaderGlobal from '@/components/globals/headerGlobal';
import Footer from '@/components/globals/footer';
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
            <div id="stringBox" data-aos="fade-in" style={{ backgroundColor, color }}>
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl mt-16 font-bold mb-4 ">Re-StringBox - Restringing and Ecommerce Website (In Development)</h1>
                    <p className="text-lg ">
                        Welcome to Re-StringBox, a template for anyone who wants to provide an online stringing service.
                        This page demonstrates the work I've done on this project, including the technology stack used
                        and key features implemented.
                        <a
                            href="https://string-box.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700"> Visit the Re-String Box website
                        </a>
                        <span> or</span>
                        <a
                            href="https://github.com/AngusBlomley/string-box"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700"> view the Re-String Box Github.
                        </a>
                    </p>

                    <div className='grid grid-cols-3 border-b border-opacity-10 border-gray-100 max-2xl:col-span-2 max-lg:grid-cols-1'>

                        <section className="pb-8 pt-8 pr-8 border-b border-opacity-10 border-gray-100 col-span-3 max-2xl:col-span-1">
                            <h2 className="text-2xl font-semibold mb-2 ">Project Overview</h2>
                            <p className="">
                                Re-StringBox is an ecommerce website designed for a sole trader offering restringing services.
                                The site allows users to book services, purchase products, and manage orders seamlessly.
                                It's built with a modern tech stack to ensure scalability, performance, and a great user experience.
                            </p>
                        </section>

                        <section className="h-full pt-8 pr-8 grid-cols-1 max-lg:row-start-2 border-b border-gray-100 border-opacity-10 max-2xl:pb-8">
                            <h2 className="text-2xl font-semibold mb-2 ">Technology Stack</h2>
                            <ul className="list-disc pl-5 ">
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

                        <section className="h-full pr-8 pt-8 row-start-3 max-2xl:row-start-1 max-2xl:col-end-3 max-lg:row-start-3 max-lg:col-start-1 border-b border-gray-100 border-opacity-10 max-lg:pb-8 max-2xl:pt-8">
                            <h2 className="text-2xl font-semibold mb-2 ">Key Features</h2>
                            <ul className="list-disc pl-5 ">
                                <li>Secure authentication and authorization using NextAuth.js</li>
                                <li>Payment integration with Stripe</li>
                                <li>Responsive design with Tailwind CSS</li>
                                <li>RESTful API for managing orders and services</li>
                                <li>Admin dashboard for managing products and orders</li>
                            </ul>
                        </section>

                        <section className='border-l pt-8 pl-8 pb-8 border-opacity-10 border-gray-100 row-span-2 col-span-2 max-2xl:col-span-3 max-2xl:border-none max-2xl:px-0 '>
                            <a href="https://string-box.vercel.app" className='filter hover:brightness-75 duration-200 '>
                                <video
                                    alt="StringBox Website"
                                    src="/videos/stringBoxWeb.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    width={960}
                                    height={480}
                                    className='w-full'
                                />
                            </a>
                        </section>
                    </div>
                    <div className='grid grid-cols-6 grid-rows-2 mt-8 max-lg:grid-cols-1'>
                        <section className="row-span-full col-span-2 col-start-2 max-lg:row-start-3 max-lg:row-span-1 pt-8 border-r border-gray-100 border-opacity-10 bg-gray-100 bg-opacity-20 max-2xl:col-span-3">
                            <h2 className="text-2xl font-semibold mb-2  pl-4">Package.json</h2>
                            <pre className="p-4 rounded-md flex-1 overflow-x-auto max-w-full">
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
    "stripe": "^15.5.0",
    "react-recaptcha-v3": "^1.9.1"
},
"devDependencies": {
    "@testing-library/react": "^15.0.4",
    "eslint": "^8",
    "eslint-config-next": "14.2.3",
    "jest": "^29.7.0",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3"
}`}
                                </code>
                            </pre>
                        </section>

                        <div className="p-8 max-lg:px-0 col-span-2 col-start-4 row-span-full max-2xl:col-span-3">
                            <h2 className="text-2xl font-semibold mb-2">Deployment</h2>
                            <p className="pb-8 border-b border-gray-100 border-opacity-10">
                                This project is deployed on Vercel, leveraging its powerful deployment platform for Next.js applications.
                                Vercel provides automatic scaling, a global CDN, and easy-to-configure deployment settings.
                            </p>
                            <h2 className="text-2xl font-semibold mb-2 pt-8">Database Information</h2>
                            <p className="pb-8 border-b border-gray-100 border-opacity-10">
                                StringBox uses MongoDB as its primary database, managed with Mongoose. MongoDB provides a flexible,
                                scalable, and high-performance data storage solution. The combination of MongoDB and Mongoose
                                ensures efficient data modeling, schema validation, and seamless integration with the application.
                            </p>
                            <h2 className="text-2xl font-semibold mb-4 mt-8">Team Members</h2>
                            <div className="team-member mb-8">
                                <div className="flex items-center">
                                    <Image src="/images/team/tim2.jpg" alt="Tim Blomley" className="rounded-full" width={100} height={100} />
                                    <div>
                                        <h3 className="text-xl font-semibold ml-4">Tim Blomley</h3>
                                        <p className="text-gray-500 w-full mt-2 ml-4">Business Owner</p>
                                    </div>
                                </div>
                                <p className="mt-2">Tim is the visionary behind Re-StringBox, bringing extensive experience in ecommerce and business management.</p>
                            </div>
                            <div className="team-member mb-8">
                                <div className="flex items-center">
                                    <Image src="/images/team/misuzu.jpg" alt="Misuzu Kanzaki" className="rounded-full" width={100} height={100} />
                                    <div>
                                        <h3 className="text-xl font-semibold ml-4">Misuzu Kanzaki</h3>
                                        <p className="text-gray-500 w-full mt-2 ml-4">Graphic Designer</p>
                                    </div>
                                </div>
                                <p className="mt-2">Misuzu is the creative force, responsible for the visual design and branding of Re-StringBox.</p>
                            </div>
                            <div className="team-member">
                                <div className="flex items-center">
                                    <Image src="/images/team/angus.jpg" alt="Angus Blomley" className="rounded-full" width={100} height={100} />
                                    <div>
                                        <h3 className="text-xl font-semibold ml-4">Angus Blomley</h3>
                                        <p className="text-gray-600 w-full mt-2 ml-4">Fullstack Engineer</p>
                                    </div>
                                </div>
                                <p className="mt-2 pb-8 border-b border-gray-100 border-opacity-10">Angus is the technical expert, developing and maintaining the core functionalities of the StringBox platform.</p>
                            </div>
                            <div className='pt-8 pb-8 mb-8'>
                                <div className="flex row h-16 flex-wrap">
                                    <Image src="/images/icons/next.webp" alt="Next.js" width={50} height={50} className="my-2" />
                                    <Image src="/images/icons/redux.webp" alt="Redux" width={50} height={50} className="my-2 ml-2" />
                                    <Image src="/images/icons/stripe.webp" alt="Stripe" width={50} height={50} className="my-2 ml-2" />
                                    <Image src="/images/icons/mongodb.webp" alt="MongoDB" width={50} height={50} className="my-2 ml-2" />
                                    <Image src="/images/icons/next-auth.webp" alt="NextAuth.js" width={50} height={50} className="my-2 ml-2" />
                                    <Image src="/images/icons/axios.webp" alt="Axios" width={50} height={50} className="my-2 ml-2" />
                                    <Image src="/images/icons/tailwind.webp" alt="Tailwind CSS" width={50} height={50} className="ml-2 my-2 py-2" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default StringBox;
