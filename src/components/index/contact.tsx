import React, { useState, useEffect, JSX } from "react";
import "../../app/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useDarkMode } from "@/contexts/darkModeContext";
import { useLanguage } from "@/contexts/language";

function Contact(): JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const { language } = useLanguage();
  const [buttonText, setButtonText] = useState(
    language === "en" ? "Send" : "送信"
  );
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
        setButtonText(
          `${language === "en" ? "Sending" : "送信中"}${".".repeat(
            (dots % 3) + 1
          )}`
        );
        dots += 1;
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isSending, language]);

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
      className="px-4 z-10 h-screen flex justify-center items-center"
    >
      <div className="grid grid-cols-2 w-full max-lg:grid-cols-1 gap-x-28 text-gray-100 max-lg:mx-auto max-lg:px-4 lg:w-[1200px]">
        {submitted ? (
          <div
            className="text-2xl font-ibmPlexMono text-green-500 col-start-1"
            data-aos="fade-right"
          >
            {language === "en"
              ? "Thank you for your message!"
              : "メッセージをお送りいただき、ありがとうございます！"}
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 col-start-1 max-lg:w-full"
          >
            <h2
              className={`text-4xl text-center mb-24 max-md:mb-16 ${
                language === "ja" ? "font-hiraKakuPro" : ""
              }`}
              data-aos="fade-in"
            >
              {language === "en" ? "Drop Me a Line" : "お問い合わせ"}
            </h2>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-y-32 max-md:gap-y-16 items-center">
              <div className="pr-12 max-md:pr-0" data-aos="fade-right">
                <div className="max-w-xl">
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-2 ${
                        language === "ja" ? "font-hiraKakuPro" : ""
                      }`}
                    >
                      {language === "en" ? "Name" : "お名前"}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={
                        language === "en"
                          ? "Your name"
                          : "お名前を入力してください"
                      }
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2 ${
                        language === "ja" ? "font-hiraKakuPro" : ""
                      }`}
                    >
                      {language === "en" ? "Email" : "メールアドレス"}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={
                        language === "en"
                          ? "Your email"
                          : "メールアドレスを入力してください"
                      }
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className={`block text-sm font-medium mb-2 ${
                        language === "ja" ? "font-hiraKakuPro" : ""
                      }`}
                    >
                      {language === "en" ? "Subject" : "件名"}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={
                        language === "en" ? "Subject" : "件名を入力してください"
                      }
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-2 ${
                        language === "ja" ? "font-hiraKakuPro" : ""
                      }`}
                    >
                      {language === "en" ? "Message" : "メッセージ"}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full p-2 border rounded"
                      placeholder={
                        language === "en"
                          ? "Your message"
                          : "メッセージを入力してください"
                      }
                      required
                    ></textarea>
                  </div>
                  <div
                    id="recaptcha-container"
                    style={{ display: "none" }}
                  ></div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${
                        language === "ja" ? "font-hiraKakuPro" : ""
                      }`}
                      disabled={isSending}
                    >
                      {isSending
                        ? language === "en"
                          ? "Sending..."
                          : "送信中..."
                        : language === "en"
                        ? "Send"
                        : "送信"}
                    </button>
                  </div>
                </div>
              </div>
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
