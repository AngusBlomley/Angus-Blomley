import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../app/globals.css';

function Education({ isDarkMode }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const backgroundColor = isDarkMode ? 'var(--background-color-dark)' : 'var(--background-color-light)';
    const color = isDarkMode ? 'var(--foreground-color-dark)' : 'var(--foreground-color-light)';
    const complementaryBackgroundColor = isDarkMode ? 'var(--background-color-dark)' : 'var(--background-color-light)';
    const ravensbourneImage = isDarkMode ? '/images/index/ravensbourne-black.png' : '/images/index/ravensbourne-white.png';
    const modalRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    const handleSeeMoreClick = () => {
        if (window.innerWidth < 1024) {  // 1024px is the breakpoint for 'lg'
            const link = document.createElement('a');
            link.href = '/pdf/certificate.pdf';
            link.download = 'certificate.pdf';
            link.click();
        } else {
            setIsModalOpen(true);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsModalOpen(false);
            }
        };

        if (isModalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen]);

    return (
        <section id="education" style={{ backgroundColor, color }} className="pt-28 duration-200">
            <div className="container mx-auto px-40 py-12 max-lg:p-4">
                <h2 className="text-4xl px-8 mb-12" data-aos="fade-up">Building My Foundation</h2>
                <div className="grid grid-cols-2 gap-8 relative max-md max-sm:grid-cols-1">
                    <div className="timeline-line absolute top-0 bottom-0 left-1/2 border-l-2 border-gray-300 max-sm:hidden"></div>
                    <div className="education-entry mt-12 mb-12 p-8 rounded-lg duration-300 flex flex-col justify-between" data-aos="fade-up">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Ravensbourne University London</h3>
                            <p className="degree mb-4">BSc (Hons) Broadcast Engineering</p>
                            <div className="education-level mt-5">
                                <h4 className="text-xl mb-2 font-semibold">Key Courses and Projects</h4>
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
                            <Image width={300} height={150} id="ravensbourne" src={ravensbourneImage} alt="Ravensbourne University" className="mt-5" />
                        </div>
                    </div>
                    <div className="timeline-item relative mb-12 flex items-center justify-center" data-aos="fade-up">
                        <div className="relative border p-4 rounded-md z-10" style={{ backgroundColor: complementaryBackgroundColor, color }}>
                            <p className="text-lg font-semibold">September 2021 - April 2024</p>
                        </div>
                    </div>
                    <div className="education-entry mb-12 p-8 rounded-lg duration-300 flex flex-col justify-between" data-aos="fade-up">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Belfast Metropolitan</h3>
                            <p className="diploma mb-4">IT Extended Diploma Level 3</p>
                            <div className="education-level mt-5">
                                <h4 className="text-xl mb-2 font-semibold">Key Courses</h4>
                                <ul className="course-list list-disc pl-5 mb-4">
                                    <li>Communication and Employability Skills</li>
                                    <li>Information Systems</li>
                                    <li>Software Design and Development</li>
                                    <li>Website Production</li>
                                    <li>Computer Systems</li>
                                </ul>
                            </div>
                        </div>
                        <div className="image-section">
                            <Image width={150} height={150} id="belfastmet" src="/images/index/belfastmet.png" alt="Belfast Metropolitan" className="mt-5" />
                        </div>
                    </div>
                    <div className="timeline-item relative mb-12 flex items-center justify-center" data-aos="fade-up">
                        <div className="relative border p-4 rounded-md z-10" style={{ backgroundColor: complementaryBackgroundColor, color }}>
                            <p className="text-lg font-semibold">September 2015 - June 2018</p>
                        </div>
                    </div>
                    <div className="education-entry mb-12 p-8 rounded-lg duration-300 flex flex-col justify-between" data-aos="fade-up" data-aos-delay="200">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Codecademy</h3>
                            <p className="certificate mb-4">Front-End Development Course</p>
                            <div className="education-level mt-5">
                                <h4 className="text-xl mb-2 font-semibold">Key Skills and Projects</h4>
                                <ul className="course-list list-disc pl-5 mb-4">
                                    <li>HTML, CSS, and JavaScript</li>
                                    <li>Responsive Web Design</li>
                                    <li>React and Redux</li>
                                    <li>APIs and Asynchronous Programming</li>
                                    <li>Portfolio Projects</li>
                                    <li>Linear Data Structures</li>
                                    <li>Complex Data Structures</li>
                                    <li>Algorithms</li>
                                </ul>
                                <button onClick={handleSeeMoreClick} className="duration-100 font-ibmPlexMono border px-4 py-2 opacity-75 hover:opacity-100"> See certificate</button>
                            </div>
                        </div>
                        <div className="image-section">
                            <Image width={220} height={150} id="codecademy" src="/images/index/codecademy.png" alt="Codecademy" className="mt-5" />
                        </div>
                    </div>
                    <div className="timeline-item relative mb-12 flex items-center justify-center" data-aos="fade-up">
                        <div className="relative border p-4 rounded-md z-10" style={{ backgroundColor: complementaryBackgroundColor, color }}>
                            <p className="text-lg font-semibold">Completed: May 2024</p>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 transition-opacity duration-200">
                    <div ref={modalRef} className="relative py-4 px-4 bg-white rounded shadow-lg max-w-3xl w-full">
                        <iframe
                            src="/pdf/certificate.pdf"
                            width="1000"
                            height="750"
                            className="border-0 w-full"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

export default Education;
