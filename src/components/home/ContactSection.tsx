"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function ContactSection() {
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Load reCAPTCHA script
  useEffect(() => {
    const loadRecaptcha = () => {
      if (!document.querySelector('script[src*="recaptcha"]')) {
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}&badge=inline`;
        script.onload = () => {
          if (window.grecaptcha?.enterprise) {
            window.grecaptcha.enterprise.ready(() => setRecaptchaLoaded(true));
          }
        };
        document.body.appendChild(script);
      } else if (window.grecaptcha?.enterprise) {
        window.grecaptcha.enterprise.ready(() => setRecaptchaLoaded(true));
      }
    };
    loadRecaptcha();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!recaptchaLoaded) {
      alert("reCAPTCHA not yet loaded. Please try again.");
      return;
    }

    setIsSending(true);

    try {
      const token = await window.grecaptcha.enterprise.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "",
        { action: "contact_form_submission" }
      );

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captcha: token }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error("Form submission error:", response.statusText);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="px-4 py-20 z-10 mb-20 flex justify-center items-center bg-theme-bg-light dark:bg-theme-bg-dark text-theme-text-light dark:text-theme-text-dark"
    >
      <div className="grid grid-cols-2 w-full max-lg:grid-cols-1 gap-x-28 lg:w-[1200px]">
        <div className="col-start-1 max-lg:w-full">
          {submitted ? (
            <div className="min-h-[650px] flex items-start justify-start pt-20 max-lg:pt-20">
              <div className="text-2xl font-ibmPlexMono text-green-500">
                Thank you for your message!
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="max-lg:mt-20 text-4xl mb-8 text-theme-text-light dark:text-theme-text-dark">
                Drop Me a Line
              </h2>
              <div className="gap-4 items-center">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-4 py-2 font-ibmPlexMono rounded-lg bg-white text-gray-900 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 dark:border-gray-600 placeholder-gray-500"
                  required
                />
              </div>
              <div className="gap-4 items-center">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-2 font-ibmPlexMono rounded-lg bg-white text-gray-900 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 dark:border-gray-600 placeholder-gray-500"
                  required
                />
              </div>
              <div className="gap-4 items-center">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-2 font-ibmPlexMono rounded-lg bg-white text-gray-900 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 dark:border-gray-600 placeholder-gray-500"
                />
              </div>
              <div className="gap-4 items-center">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full px-4 py-2 font-ibmPlexMono rounded-lg bg-white text-gray-900 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 dark:border-gray-600 placeholder-gray-500"
                  rows={6}
                  required
                />
              </div>
              <div id="recaptcha-container" style={{ display: "none" }}></div>
              <div className="gap-4 items-center">
                <button
                  type="submit"
                  className="px-6 py-2 font-ibmPlexMono rounded-lg bg-green-600 text-white w-full hover:bg-green-900"
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          )}
        </div>
        <Image
          alt="contact"
          src="/images/index/contact.svg"
          width={550}
          height={550}
          className="max-lg:hidden self-center"
        />
      </div>
    </section>
  );
}
