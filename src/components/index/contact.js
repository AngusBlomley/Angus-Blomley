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
        <section id="contact" style={{ backgroundColor, color }} className="min-h-screen px-4 py-32 z-10 duration-200">
            <div className="max-w-2xl grid grid-cols-2">

                <h2 className="text-4xl mb-8 font-semibold">Drop Me a Line</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-lg mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-lg mb-2">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-lg mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md"
                            rows="6"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                    >
                        Send
                    </button>
                </form>
            </div>
            <div className=''>
                <Image
                    alt="me"
                    src="/images/scenic.jpg"
                    width={500}
                    height={500}
                    className=''
                />
            </div>
        </section>
    );
}

export default Contact;
