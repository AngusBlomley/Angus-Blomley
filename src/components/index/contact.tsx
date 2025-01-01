import React, { useState, useEffect, JSX } from "react";
import "../../app/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useDarkMode } from "@/contexts/darkModeContext";

function Contact(): JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [buttonText, setButtonText] = useState("Send");
  const [isSending, setIsSending] = useState(false);

  const { isDarkMode } = useDarkMode();
  const color = isDarkMode
    ? "var(--foreground-color-dark)"
    : "var(--foreground-color-light)";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: -200,
    });
  }, []);

  useEffect(() => {
    const loadRecaptcha = () => {
      if (!document.querySelector('script[src*="recaptcha"]')) {
        const script = document.createElement("script");
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
        setButtonText(`Sending${".".repeat((dots % 3) + 1)}`);
        dots += 1;
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isSending]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
        headers: {
          "Content-Type": "application/json",
        },
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
      setButtonText("Send");
    }
  };

  return (
    <section
      id="contact"
      className=" px-4 z-10 h-screen flex justify-center items-center"
    >
      <div className="grid grid-cols-2 w-full max-lg:grid-cols-1 gap-x-28 text-gray-100 max-lg:mx-auto max-lg:px-4 lg:w-[1200px]">
        {submitted ? (
          <div
            className="text-2xl font-ibmPlexMono text-green-500 col-start-1"
            data-aos="fade-right"
          >
            Thank you for your message!
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 col-start-1 max-lg:w-full"
          >
            <h2
              data-aos="fade-right"
              className="max-lg:mt-20 text-4xl mb-8"
              style={{ color }}
            >
              Drop Me a Line
            </h2>
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="gap-4 items-center"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-4 py-2 font-ibmPlexMono rounded-lg text-black border-b-2 border-gray-400 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="400"
              className="gap-4 items-center"
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-2 font-ibmPlexMono rounded-lg text-black border-b-2 border-gray-400 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="600"
              className="gap-4 items-center"
            >
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-2 font-ibmPlexMono rounded-lg text-black border-b-2 border-gray-400 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="800"
              className="gap-4 items-center"
            >
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full px-4 py-2 font-ibmPlexMono rounded-lg text-black border-b-2 border-gray-400 focus:outline-none focus:border-blue-500"
                rows={6}
                required
              />
            </div>
            <div id="recaptcha-container" style={{ display: "none" }}></div>
            <div
              data-aos="fade-right"
              data-aos-delay="1000"
              className="gap-4 items-center"
            >
              <button
                type="submit"
                className="px-6 py-2 font-ibmPlexMono rounded-lg bg-green-600 text-white w-full hover:bg-green-900 duration-100"
                disabled={isSending}
              >
                {buttonText}
              </button>
            </div>
          </form>
        )}
        <Image
          alt="contact"
          src="/images/index/contact.svg"
          width={550}
          height={550}
          className="max-lg:hidden self-center"
          data-aos="fade-left"
          data-aos-delay="600"
        />
      </div>
    </section>
  );
}

export default Contact;
