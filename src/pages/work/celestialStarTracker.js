/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import HeaderGlobal from '@/components/globals/headerGlobal';
import Footer from '@/components/globals/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';


const CelestialObjectTracker = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
    const backgroundColor = isDarkMode ? 'var(--background-color-dark)' : 'var(--background-color-light)';
    const color = isDarkMode ? 'var(--foreground-color-dark)' : 'var(--foreground-color-light)';
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showPdf, setShowPdf] = useState(false);

    const images = [
        '/images/celestialobjecttracker/img1.jpg',
        '/images/celestialobjecttracker/img2.jpg',
        '/images/celestialobjecttracker/img3.jpg',
        '/images/celestialobjecttracker/img4.jpg',
        '/images/celestialobjecttracker/img5.jpg',
        '/images/celestialobjecttracker/img6.jpg',
        '/images/celestialobjecttracker/img7.jpg',
        '/images/celestialobjecttracker/img8.jpg',
        '/images/celestialobjecttracker/img9.jpg',
        '/images/celestialobjecttracker/img10.jpg'
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            AOS.refresh();
        }, 3000);

        return () => clearInterval(interval);
    });

    const openPdf = () => {
        setShowPdf(true);
    };

    const closePdf = () => {
        setShowPdf(false);
    };

    return (
        <>
            <HeaderGlobal isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <div id="celestialObjectTracker" data-aos="fade-in" style={{ backgroundColor, color }}>
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl mt-16 font-bold mb-4 ">Celestial Object Tracker - Final Major Project</h1>
                    <p className="text-lg ">
                        Welcome to the Celestial Object Tracker project. This section showcases my final major project, including
                        the technology stack used and key features implemented. <a
                            className="text-blue-500 hover:text-blue-700 cursor-pointer"
                            onClick={openPdf}
                        >
                            View the project Report
                        </a>  or <a
                            href="https://github.com/AngusBlomley/Celestial-Object-Tracker"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700"> view the project on Github.</a>
                    </p>
                    {showPdf && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center"
                            onClick={closePdf}
                        >
                            <div
                                className="relative w-3/5 h-full shadow-lg"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <iframe
                                    src="/pdf/Angus_Blomley_Final_Major_Project_Report.pdf"
                                    className="w-full h-screen pt-16 pb-20"
                                ></iframe>
                                <button
                                    onClick={closePdf}
                                    className="absolute left-1/2 transform -translate-x-1/2 -translate-y-16 text-white px-3 py-1 rounded border-white border bg-gray-900 hover:bg-gray-700 duration-200"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                    <div className='grid grid-cols-3 border-b border-opacity-10 border-gray-100 max-2xl:col-span-2 max-lg:grid-cols-1'>

                        <section className="pb-8 pt-8 pr-8 border-b border-opacity-10 border-gray-100 col-span-3 max-2xl:col-span-1">
                            <h2 className="text-2xl font-semibold mb-2 ">Project Overview</h2>
                            <p className="">
                                The Celestial Object Tracker is an affordable and scalable electronic device designed to track celestial objects in real-time.
                                It combines stepper motors for precise movement, an Arduino, a Raspberry Pi for control processing, and a camera for capturing real-time celestial observations.
                            </p>
                        </section>

                        <section className="h-full pt-8 pr-8 grid-cols-1 max-lg:row-start-2 border-b border-gray-100 border-opacity-10 max-2xl:pb-8">
                            <h2 className="text-2xl font-semibold mb-2 ">Technology Stack</h2>
                            <ul className="list-disc pl-5 ">
                                <li>Raspberry Pi for control processing</li>
                                <li>Arduino for hardware control</li>
                                <li>Python for software development</li>
                                <li>Arduino programming</li>
                                <li>MPU6050 for orientation sensing</li>
                                <li>GT-U7 for GPS data</li>
                                <li>Skyfield API for celestial coordinates</li>
                                <li>Fusion 360 for 3D design</li>
                            </ul>
                        </section>

                        <section className="h-full pr-8 pt-8 row-start-3 max-2xl:row-start-1 max-2xl:col-end-3 max-lg:row-start-3 max-lg:col-start-1 border-b border-gray-100 border-opacity-10 max-lg:pb-8 max-2xl:pt-8">
                            <h2 className="text-2xl font-semibold mb-2 ">Key Features</h2>
                            <ul className="list-disc pl-5 ">
                                <li>Accurate celestial object tracking using GPS and IMU data</li>
                                <li>Real-time updates with Skyfield API integration</li>
                                <li>Responsive design for web interface</li>
                                <li>Automated control of stepper motors for precise movement</li>
                                <li>Interactive GUI for user-friendly operation</li>
                            </ul>
                        </section>

                        <section className='border-l pt-8 pl-8 pb-8 border-opacity-10 border-gray-100 row-span-2 col-span-2 max-2xl:col-span-3 max-2xl:border-none max-2xl:px-0 '>
                            <a onClick={openPdf} className='filter hover:brightness-75 duration-200 cursor-pointer'>
                                <Image
                                    alt="Celestial Object Tracker Project"
                                    src={images[currentIndex]}
                                    width={960}
                                    height={480}
                                    className='w-full'
                                />
                            </a>
                        </section>
                    </div>
                    <div className='grid grid-cols-6 grid-rows-2 mt-8 max-lg:grid-cols-1'>
                        <section className="row-span-full col-span-2 col-start-2 max-lg:row-start-3 max-lg:row-span-1 pt-8 border-r border-gray-100 border-opacity-10 bg-gray-100 bg-opacity-20 max-2xl:col-span-3">
                            <h2 className="text-2xl font-semibold mb-2  pl-4">Software & Libraries</h2>
                            <p className="px-4 pb-4">
                                The Celestial Object Tracker project leverages a range of libraries and software to achieve its functionality. Below is a list of key dependencies used in the project, demonstrating the diverse set of tools and technologies employed.
                            </p>
                            <h3 className="text-xl font-semibold pl-4">Python and Arduino Libraries</h3>
                            <pre className="p-4 rounded-md flex-1 overflow-x-auto max-w-full">
                                <code>
                                    {`certifi==2024.2.2
future==1.0.0
iso8601==2.1.0
jplephem==2.21
numpy==1.26.4
opencv-python==4.9.0.80
pillow==10.3.0
PyYAML==6.0.1
serial==0.0.97
sgp4==2.23
skyfield==1.48`}
                                </code>
                            </pre>
                            <h3 className="text-xl font-semibold pl-4 pt-4">Project Highlights</h3>
                            <ul className="list-disc pl-8 pb-4">
                                <li>Utilizes OpenCV for real-time image processing and object detection.</li>
                                <li>Employs Skyfield and SGP4 for precise astronomical calculations and satellite tracking.</li>
                                <li>Integrates NumPy for efficient numerical computations and data manipulation.</li>
                                <li>Leverages the Pillow library for image handling and manipulation.</li>
                                <li>Uses PyYAML for configuration management, ensuring flexibility and ease of setup.</li>
                            </ul>
                            <h3 className="text-xl font-semibold pl-4 pt-4">Learning & Application</h3>
                            <p className="px-4 pb-4">
                                This project provided extensive learning opportunities in areas such as hardware-software integration, real-time data processing, and GUI development. The hands-on experience with these libraries has honed skills in both development and problem-solving, making it a robust showcase of technical abilities and project management.
                            </p>
                            <p className="px-4 pb-4">
                                I plan to continuely update this project as a side hobby of mine, to reacreate in actual c++ not arduino and improve performance and user experience.
                            </p>
                        </section>


                        <div className="p-8 max-lg:px-0 col-span-2 col-start-4 row-span-full max-2xl:col-span-3">
                            <h2 className="text-2xl font-semibold mb-2">3D Design & Prototyping</h2>
                            <p className="pb-8 border-b border-gray-100 border-opacity-10">
                                The Celestial Object Tracker features a custom-designed 3D-printed frame, created using Fusion 360.
                                The design ensures stability and precision in tracking celestial objects. Multiple iterations of the
                                prototype were developed and tested to achieve optimal performance and durability.
                            </p>
                            <h2 className="text-2xl font-semibold mb-2 pt-8">Hardware Integration</h2>
                            <p className="pb-8 border-b border-gray-100 border-opacity-10">
                                This project integrates various hardware components including stepper motors, an Arduino, and a Raspberry Pi.
                                The stepper motors provide precise movements, controlled via the Arduino, while the Raspberry Pi handles
                                processing and real-time data updates. An MPU6050 sensor is used for orientation, and a GT-U7 module provides
                                GPS data for accurate positioning.
                            </p>
                            <h2 className="text-2xl font-semibold mb-4 mt-8">Software Development</h2>
                            <div className="software-development mb-8">
                                <div>
                                    <h3 className="text-xl font-semibold">Python & Arduino Programming</h3>
                                    <p className=" w-full mt-2">The software for the Celestial Object Tracker is developed using Python for high-level control
                                        and Arduino programming for hardware interfacing. The Python code handles celestial calculations
                                        using the Skyfield API, while the Arduino code manages motor control and sensor data acquisition.</p>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-xl font-semibold">User Interface</h3>
                                    <p className=" w-full mt-2">A user-friendly GUI is implemented using Tkinter in Python, allowing users to select celestial
                                        objects, view real-time data, and control the tracker. The interface provides an intuitive way
                                        to interact with the system, ensuring accessibility for users of all experience levels.</p>
                                </div>
                            </div>

                            <div className='pt-8 pb-8 mb-8'>
                                <div className="flex row h-16 flex-wrap">
                                    <Image src="/images/icons/raspberrypi.webp" alt="Raspberry Pi" width={50} height={50} className="py-1" />
                                    <Image src="/images/icons/arduino.webp" alt="Arduino" width={50} height={50} className="m-2" />
                                    <Image src="/images/icons/python.webp" alt="Python" width={50} height={50} className="m-2" />
                                    <Image src="/images/icons/fusion360.png" alt="Fusion 360" width={50} height={50} className="m-2" />
                                    <Image src="/images/icons/tkinter.jpeg" alt="Tkinter" width={50} height={50} className="m-2" />
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

export default CelestialObjectTracker;
