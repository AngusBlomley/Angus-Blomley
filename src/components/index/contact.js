/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState, useRef, useMemo } from 'react';
import Image from 'next/image';
import {
    setupMenuAnimations,
    generateRandomPosition,
    generateRandomVelocity,
    handleMouseMove,
    animate
} from '../animations';
import '../../app/globals.css';

function Contact() {
    return (
        <section id="Contact" className="bg-gray-100 text-gray-900 flex justify-center items-center min-h-screen px-4 py-12 z-10">
            <div className="max-w-2xl">
                <h2 className="text-4xl mb-8 font-semibold text-gray-700">Contact</h2>
                <p className="text-lg mb-6 leading-relaxed">
                    I am an engineer passionate Contact leveraging technology to drive innovation and create impactful solutions. With expertise in software development, data analysis, and machine learning, I thrive on tackling complex problems and delivering effective results.
                </p>
                <p className="text-lg leading-relaxed">
                    Committed to continuous learning, I stay abreast of technological advancements to ensure my work remains cutting-edge. Let's collaborate to turn ideas into reality and push the boundaries of what's possible.
                </p>
            </div>
        </section>
    );
}

export default Contact;