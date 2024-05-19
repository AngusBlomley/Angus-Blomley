import React, { useState } from 'react';
import '../../app/globals.css';
import Image from 'next/image';

function Contact({ isDarkMode }) {
    const backgroundColor = isDarkMode ? 'var(--background-color-dark)' : 'var(--background-color-light)';
    const color = isDarkMode ? 'var(--foreground-color-dark)' : 'var(--foreground-color-light)';
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form data:', formData);
    };

    return (
        <section
            id="contact"
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                color,
                position: 'relative',
                overflow: 'hidden',
            }}
            className="px-4 py-10 z-10 duration-200"
        >
            <div
                style={{
                    backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0.0), rgba(0, 0, 0, 0.8)), url('/images/scenic.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(50%)',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                }}
            />
            <div className="w-1/3 ml-44 my-40 relative z-10 text-gray-100 max-lg:mx-auto max-lg:px-4 max-lg:w-full">
                <h2 className="text-4xl mb-8 font-semibold font-rubik text-white">Drop Me a Line</h2>
                <form onSubmit={handleSubmit} className="space-y-4 w-full">
                    <div>
                        <label htmlFor="name" className="block text-lg mb-2 text-white">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md text-black"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg mb-2 text-white">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md text-black"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-lg mb-2 text-white">Subject:</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md text-black"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-lg mb-2 text-white">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md text-black"
                            rows="6"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded-md w-full hover:bg-blue-700 transition-colors duration-200"
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
