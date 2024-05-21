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
                    <h1 className="text-4xl mt-16 font-bold mb-4 ">Meetly - Find The Central Train Station Between Two Locations</h1>
                    <p className="text-lg ">
                        Welcome to Meetly, a web application that helps users find the central train station between two addresses.
                        This page demonstrates the work I've done on this project, including the technology stack used
                        and key features implemented.
                        <a
                            href="https://meetly-zeta.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700">
                            Visit the Meetly app
                        </a>
                        <span> or </span>
                        <a
                            href="https://github.com/AngusBlomley/Meetly"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700">
                            view the Meetly Github.
                        </a>
                    </p>

                    <div className='grid grid-cols-3 border-b border-opacity-10 border-gray-100 max-2xl:col-span-2 max-lg:grid-cols-1'>

                        <section className="pb-8 pt-8 pr-8 border-b border-opacity-10 border-gray-100 col-span-3 max-2xl:col-span-1">
                            <h2 className="text-2xl font-semibold mb-2 ">Project Overview</h2>
                            <p className="">
                                Meetly is a web application that allows users to find the central train station between two addresses,
                                making it perfect for planning meetups. Users can quickly discover a convenient location for both parties.
                            </p>
                        </section>

                        <section className="h-full pt-8 pr-8 grid-cols-1 max-lg:row-start-2 border-b border-gray-100 border-opacity-10 max-2xl:pb-8">
                            <h2 className="text-2xl font-semibold mb-2 ">Technology Stack</h2>
                            <ul className="list-disc pl-5 ">
                                <li>React.js for the frontend framework</li>
                                <li>Next.js for server-side rendering</li>
                                <li>TypeScript for type safety</li>
                                <li>Google Maps API for location services</li>
                                <li>Axios for making HTTP requests</li>
                            </ul>
                        </section>

                        <section className="h-full pr-8 pt-8 row-start-3 max-2xl:pb-8 max-2xl:row-start-1 max-2xl:col-end-3 max-lg:row-start-3 max-lg:col-start-1 border-b border-gray-100 border-opacity-10 max-lg:pb-8 max-2xl:pt-8">
                            <h2 className="text-2xl font-semibold mb-2 ">Key Features</h2>
                            <ul className="list-disc pl-5 ">
                                <li>Enter two addresses and the application will find the midpoint.</li>
                                <li>Displays the nearest train station to the midpoint on a Google Map.</li>
                                <li>The map is initially blurred and hidden, becoming visible and focused upon submitting the addresses.</li>
                                <li>A back button allows users to return to the form and enter new addresses.</li>
                            </ul>
                        </section>

                        <section className='border-l pt-8 pl-8 pb-8 border-opacity-10 border-gray-100 row-span-2 col-span-2 max-2xl:col-span-3 max-2xl:border-none max-2xl:px-0 '>
                            <a
                                href="https://meetly-zeta.vercel.app/"
                                className='filter hover:brightness-75 duration-200'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <video
                                    alt="Meetly Application"
                                    src="/videos/meetly.mp4"
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
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "@google/maps": "^1.1.3",
    "@react-google-maps/api": "^2.19.3",
    "axios": "^1.3.4",
    "google-map-react": "^2.2.0",
    "next": "^14.1.4",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "@types/google-map-react": "^2.1.7",
    "@types/node": "18.11.3",
    "@types/react": "18.0.21",
    "@types/react-dom": "18.0.6",
    "autoprefixer": "^10.4.12",
    "postcss": "^8.4.18",
    "tailwindcss": "^3.2.4",
    "typescript": "4.9.4"
  }
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
                                Meetly uses a combination of Google Maps API for location services and does not require a traditional database for the main functionality.
                            </p>
                            <h2 className="text-2xl font-semibold mb-4 mt-8">Team Members</h2>
                            <div className="team-member mb-8">
                                <div className="flex items-center">
                                    <div>
                                        <h3 className="text-xl font-semibold">Angus Blomley</h3>
                                        <p className="text-gray-500 w-full mt-2">Developer</p>
                                    </div>
                                </div>
                                <p className="mt-2">The developer responsible for building the Meetly application, implementing core features and ensuring functionality.</p>
                            </div>
                            <div className="team-member">
                                <div className="flex items-center">
                                    <div>
                                        <h3 className="text-xl font-semibold">Arjun Gupta</h3>
                                        <p className="text-gray-500 w-full mt-2">Client / Senior Developer</p>
                                    </div>
                                </div>
                                <p className="mt-2 pb-8 border-b border-gray-100 border-opacity-10">Arjun Gupta is the client for whom the Meetly application was developed, providing requirements and feedback during the development process.</p>
                            </div>
                            <div className="flex row h-16 flex-wrap">
                                <Image src="/images/icons/next.webp" alt="Next.js" width={50} height={50} className="my-2 py-2" />
                                <Image src="/images/icons/maps2.png" alt="Maps" width={50} height={50} className="my-2 py-2 ml-2" />
                                <Image src="/images/icons/axios.webp" alt="Axios" width={50} height={50} className="my-2 py-2 ml-2" />
                                <Image src="/images/icons/react.webp" alt="Axios" width={50} height={50} className="ml-2 py-4" />
                                <Image src="/images/icons/tailwind.webp" alt="Tailwind CSS" width={50} height={50} className="ml-2 my-2 py-4" />
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
