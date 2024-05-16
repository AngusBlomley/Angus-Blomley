import React from 'react';
import Image from 'next/image';
import '../../app/globals.css';

function Education() {
    return (
        <section id="education" className="pt-28 bg-white text-black flex justify-center items-center min-h-screen px-4 py-12 z-20">
            <div className="grid grid-cols-2 max-2xl:grid-cols-1 gap-20">
                <div className="education-entry mb-12">
                    <div className="text-section w-full">
                        <h2 className="text-4xl mb-8 font-semibold text-gray-900">Education</h2>

                        <h3 className="mt-5 text-2xl">Ravensbourne University London</h3>
                        <p className="dates mt-2">September 2021 - April 2024</p>
                        <p className="degree mt-1 mb-4">BSc (Hons) Broadcast Engineering</p>
                        <div className="education-level mt-5">
                            <h4 className="text-xl mb-2">Level 4</h4>
                            <ul className="course-list list-disc pl-5 mb-4">
                                <li className="flex justify-between">FIL22100: Production Skills and Technologies <span className='whitespace-nowrap ml-24 max-md:ml-5'>40 Credits</span></li>
                                <li className="flex justify-between">FIL22102: Moving Image Industries <span className='whitespace-nowrap ml-24 max-md:ml-5'>20 Credits</span></li>
                                <li className="flex justify-between">FIL22105: Storytelling On Screen <span className='whitespace-nowrap ml-24 max-md:ml-5'>20 Credits</span></li>
                                <li className="flex justify-between">PLP22103: Professional Life Practice: Developing your Practice <span className='whitespace-nowrap ml-24 max-md:ml-5'>20 Credits</span></li>
                                <li className="flex justify-between">PLP22106: Professional Life Practice: Exploring your Practice <span className='whitespace-nowrap ml-24 max-md:ml-5'>20 Credits</span></li>
                            </ul>
                            <p>Total Credits: 120</p>
                            <h4 className="text-xl mt-5 mb-2">Level 5</h4>
                            <ul className="course-list list-disc pl-5 mb-4">
                                <li className="flex justify-between">BEN22201: Fundamentals of Sound <span className='whitespace-nowrap ml-24 max-md:ml-5'>20 Credits</span></li>
                                <li className="flex justify-between">BEN22202: Live Studio and Outside Broadcast <span className='whitespace-nowrap ml-24 max-md:ml-5'>20 Credits</span></li>
                                <li className="flex justify-between">BEN22203: Virtual Production <span className='whitespace-nowrap ml-24 max-md:ml-5'>20 Credits</span></li>
                                <li className="flex justify-between">BEN22204: Electronics <span className='whitespace-nowrap ml-24 max-md:ml-5'>20 Credits</span></li>
                                <li className="flex justify-between">PLP22203: Professional Life Practice “Applying your Practice” <span className='whitespace-nowrap ml-24 max-md:ml-5'>20 Credits</span></li>
                                <li className="flex justify-between">BEN22206: Work Based Learning <span className='whitespace-nowrap ml-24 max-md:ml-5'>20 Credits</span></li>
                            </ul>
                            <p>Total Credits: 120</p>
                            <h4 className="text-xl mt-5 mb-2">Level 6</h4>
                            <ul className="course-list list-disc pl-5 mb-4">
                                <li className="flex justify-between">BEN22301: Immediate future of broadcasting <span className='whitespace-nowrap ml-24 max-md:ml-5'>40 Credits</span></li>
                                <li className="flex justify-between">BEN22302: Final Major Project <span className='whitespace-nowrap ml-24 max-md:ml-5'>40 Credits</span></li>
                                <li className="flex justify-between">PLP22303: Professional Life Practice “Situating your Practice” <span className='whitespace-nowrap ml-24 max-md:ml-5'>20 Credits</span></li>
                                <li className="flex justify-between">BEN22304: Performance Module <span className='whitespace-nowrap ml-24 max-md:ml-5'>20 Credits</span></li>
                            </ul>
                            <p>Total Credits: 120</p>
                        </div>
                        <p className="font-semibold mt-4">Total Degree Credits: 360</p>
                    </div>
                    <div className="image-section">
                        <Image width={300} height={150} id="ravensbourne" src="/images/ravensbourne-black.png" alt="Ravensbourne University" className="my-5" />
                    </div>
                </div>
                <div className="education-entry mt-12 mb-12">
                    <div className="text-section w-full">
                        <h3 className="mt-5 text-2xl">Belfast Metropolitan</h3>
                        <p className="dates mt-2">September 2015 - June 2018</p>
                        <p className="diploma mt-1 mb-4">IT Extended Diploma Level 3</p>
                        <h4 className="text-xl mb-2">Level 3</h4>
                        <ul className="course-list list-disc pl-5 mb-4">
                            <li className="flex justify-between">Communication and Employability Skills <span className='whitespace-nowrap ml-24 max-md:ml-5'>10 Credits</span></li>
                            <li className="flex justify-between">Information Systems <span className='whitespace-nowrap ml-24 max-md:ml-5'>10 Credits</span></li>
                            <li className="flex justify-between">Software Design and Development <span className='whitespace-nowrap ml-24 max-md:ml-5'>10 Credits</span></li>
                            <li className="flex justify-between">Website Production <span className='whitespace-nowrap ml-24 max-md:ml-5'>10 Credits</span></li>
                            <li className="flex justify-between">Digital Graphics <span className='whitespace-nowrap ml-24 max-md:ml-5'>10 Credits</span></li>
                            <li className="flex justify-between">Computer Systems <span className='whitespace-nowrap ml-24 max-md:ml-5'>10 Credits</span></li>
                            <li className="flex justify-between">Event Driven Programming <span className='whitespace-nowrap ml-24 max-md:ml-5'>10 Credits</span></li>
                            <li className="flex justify-between">Data Analysis and Design <span className='whitespace-nowrap ml-24 max-md:ml-5'>10 Credits</span></li>
                            <li className="flex justify-between">Maintaining Computer Systems <span className='whitespace-nowrap ml-24 max-md:ml-5'>10 Credits</span></li>
                            <li className="flex justify-between">Computer Animation <span className='whitespace-nowrap ml-24 max-md:ml-5'>10 Credits</span></li>
                            <li className="flex justify-between">Spreadsheet Modelling <span className='whitespace-nowrap ml-24 max-md:ml-5'>10 Credits</span></li>
                        </ul>
                    </div>
                    <div className="image-section">
                        <Image width={150} height={150} id="belfastmet" src="/images/belfastmet.png" alt="Belfast Metropolitan" className="my-5" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
