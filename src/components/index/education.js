import React, { useState } from 'react';
import Image from 'next/image';
import '../../app/globals.css';

function Education() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSeeMoreClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModalClick = () => {
        setIsModalOpen(false);
    };

    return (
        <section id="education" className="pt-28 min-h-screen">
            <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-10 justify-center px-36 py-12 z-20 max-2xl:px-24 max-xl:px-16 max-lg:px-4 max-md:px-20 max-sm:px-4">
                <h2 className="col-span-3 max-xl:col-span-2 max-md:col-span-1 text-4xl mb-8 font-semibold">Education</h2>
                <div className="education-entry mb-12 p-5 border">
                    <div className="text-section w-full">
                        <h3 className="text-2xl">Ravensbourne University London</h3>
                        <p className="dates mt-2">September 2021 - April 2024</p>
                        <p className="degree mt-1 mb-4">BSc (Hons) Broadcast Engineering</p>
                        <div className="education-level mt-5">
                            <h4 className="text-xl mb-2">Key Courses and Projects</h4>
                            <ul className="course-list list-disc pl-5 mb-4">
                                <li>Production Skills and Technologies</li>
                                <li>Live Studio and Outside Broadcast</li>
                                <li>Virtual Production</li>
                                <li>Fundamentals of Sound</li>
                                <li>Final Major Project</li>
                            </ul>
                            <p className="font-semibold mt-4">Total Degree Credits: 360</p>
                        </div>
                    </div>
                    <div className="image-section">
                        <Image width={300} height={150} id="ravensbourne" src="/images/ravensbourne-black.png" alt="Ravensbourne University" className="my-5" />
                    </div>
                </div>
                <div className="education-entry mb-12 p-5 border">
                    <div className="text-section w-full">
                        <h3 className="text-2xl">Belfast Metropolitan</h3>
                        <p className="dates mt-2">September 2015 - June 2018</p>
                        <p className="diploma mt-1 mb-4">IT Extended Diploma Level 3</p>
                        <h4 className="text-xl mb-2">Key Courses</h4>
                        <ul className="course-list list-disc pl-5 mb-4">
                            <li>Communication and Employability Skills</li>
                            <li>Information Systems</li>
                            <li>Software Design and Development</li>
                            <li>Website Production</li>
                            <li>Computer Systems</li>
                        </ul>
                    </div>
                    <div className="image-section">
                        <Image width={150} height={150} id="belfastmet" src="/images/belfastmet.png" alt="Belfast Metropolitan" className="my-5" />
                    </div>
                </div>
                <div className="education-entry mb-12 p-5 border">
                    <div className="text-section w-full">
                        <h3 className="text-2xl">Codecademy</h3>
                        <p className="dates mt-2">Completed: May 2024</p>
                        <p className="certificate mt-1 mb-4">Front-End Development Course</p>
                        <h4 className="text-xl mb-2">Key Skills and Projects</h4>
                        <ul className="course-list list-disc pl-5 mb-4">
                            <li>HTML, CSS, and JavaScript</li>
                            <li>Responsive Web Design</li>
                            <li>React and Redux</li>
                            <li>APIs and Asynchronous Programming</li>
                            <li>Portfolio Projects</li>
                        </ul>
                        <button onClick={handleSeeMoreClick} className="text-blue-500 underline mt-4">See More</button>
                    </div>
                    <div className="image-section">
                        <Image width={220} height={150} id="codecademy" src="/images/codecademy.png" alt="Codecademy" className="my-5" />
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 transition-opacity duration-200">
                    <div className="relative py-4 px-4 bg-black rounded shadow-lg">
                        <iframe
                            src="/pdf/certificate.pdf"
                            width="1000"
                            height="750"
                            className="border-0"
                        />
                        <button onClick={handleCloseModalClick} className="block text-white border-2 border-white hover:bg-gray-800 mx-auto mt-4 py-2 px-4 rounded duration-100">&#x2715;</button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Education;
