import React, { useState, useEffect } from 'react';
import '../../app/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact({ isDarkMode }) {
    const backgroundColor = isDarkMode ? 'var(--background-color-dark)' : 'var(--background-color-light)';
    const color = isDarkMode ? 'var(--foreground-color-dark)' : 'var(--foreground-color-light)';
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [captchaToken, setCaptchaToken] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
    const [buttonText, setButtonText] = useState('Send');
    const [isSending, setIsSending] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    useEffect(() => {
        const loadRecaptcha = () => {
            if (!document.querySelector('script[src*="recaptcha"]')) {
                const script = document.createElement('script');
                script.src = `https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}&badge=inline`;
                script.onload = () => {
                    if (window.grecaptcha && window.grecaptcha.enterprise) {
                        window.grecaptcha.enterprise.ready(() => {
                            setRecaptchaLoaded(true);
                        });
                    }
                };
                document.body.appendChild(script);
            } else if (window.grecaptcha && window.grecaptcha.enterprise) {
                window.grecaptcha.enterprise.ready(() => {
                    setRecaptchaLoaded(true);
                });
            }
        };

        loadRecaptcha();
    }, []);

    useEffect(() => {
        if (isSending) {
            let dots = 0;
            const interval = setInterval(() => {
                setButtonText(`Sending${'.'.repeat(dots % 3 + 1)}`);
                dots += 1;
            }, 500);
            return () => clearInterval(interval);
        }
    }, [isSending]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!recaptchaLoaded) {
            alert('reCAPTCHA not yet loaded. Please try again.');
            return;
        }

        setIsSending(true);

        try {
            const token = await window.grecaptcha.enterprise.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'contact_form_submission' });
            setCaptchaToken(token);

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, captcha: token }),
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                console.error('Form submission error:', response.statusText);
            }
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setIsSending(false);
            setButtonText('Send');
        }
    };

    return (
        <section id="contact" className="bg-gray-700 px-4 z-10h-screen max-md:h-full">
            <div className="ml-44 my-40 relative z-10 text-gray-100 max-lg:mx-auto max-lg:px-4 max-lg:w-full">
                <h2 data-aos="fade-up" className="text-4xl mb-8 font-semibold text-white">Drop Me a Line</h2>
                {submitted ? (
                    <div className="text-2xl font-ibmPlexMono text-green-500" data-aos="fade-up">Thank you for your message!</div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 w-full">
                        <div data-aos="fade-up" data-aos-delay="200" className="grid lg:grid-cols-3 lg:gap-4 items-center">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className="w-full px-4 py-2 font-ibmPlexMono text-black border-b-2 border-gray-400 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="400" className="grid lg:grid-cols-3 lg:gap-4 items-center">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="w-full px-4 py-2 font-ibmPlexMono text-black border-b-2 border-gray-400 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="600" className="grid lg:grid-cols-3 lg:gap-4 items-center">
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                className="w-full px-4 py-2 font-ibmPlexMono text-black border-b-2 border-gray-400 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="800" className="grid lg:grid-cols-3 lg:gap-4 items-center">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                                className="w-full px-4 py-2 font-ibmPlexMono text-black border-b-2 border-gray-400 focus:outline-none focus:border-blue-500"
                                rows="6"
                                required
                            />
                        </div>
                        <div id="recaptcha-container" style={{ display: 'none' }}></div>
                        <div data-aos="fade-up" data-aos-delay="1000" className="grid lg:grid-cols-3 lg:gap-4 items-center">
                            <button
                                type="submit"
                                className="px-6 py-2 font-ibmPlexMono bg-green-600 text-white w-full hover:bg-green-900 duration-100"
                                disabled={isSending}
                            >
                                {buttonText}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
}

export default Contact;
