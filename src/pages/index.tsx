import React, { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import Header from "@/components/globals/header";
import Footer from "@/components/globals/footer";
import Link from "next/link";
import {
  ascii,
  workLinksData,
  projectLinksData,
  profileLinksData,
} from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/globals/Button";
import Image from "next/image";

interface DisplayLinkItemProps {
  href?: string;
  text: string;
  ariaLabel: string;
  onClick?: () => void;
  type?: "external" | "button";
}

function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0);
  const handleSeeMoreClick = () => {
    window.open("/pdf/certificate.pdf", "_blank");
  };

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

  useEffect(() => {
    const intervalSpeed = 1;

    const intervalId = setInterval(() => {
      if (i < ascii.length) {
        setI((prevI) => prevI + 5);
        setDisplayedText(ascii.substring(0, i + 5));
      } else {
        clearInterval(intervalId);
      }
    }, intervalSpeed);

    return () => clearInterval(intervalId);
  }, [i, ascii]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (window.innerWidth <= 768) {
        setShowScrollTop(currentScrollY > 300 && currentScrollY < lastScrollY);
      } else {
        setShowScrollTop(currentScrollY > 300);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const DisplayLinkItem: React.FC<DisplayLinkItemProps> = ({
    href,
    text,
    ariaLabel,
    onClick,
    type,
  }) => {
    const commonClasses =
      "text-[0.9em] bg-inherit p-1 px-2 no-underline font-ibmPlexMono rounded-md -ml-2 w-fit flex items-center gap-2 group text-theme-text-light dark:text-theme-text-dark hover:bg-white/10 dark:hover:bg-white/20";

    const content = (
      <>
        {`- ${text}`}
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className="h-2.5 w-2.5 transition-opacity"
          aria-hidden="true"
        />
      </>
    );

    if (type === "button" && onClick) {
      return (
        <div
          className={`${commonClasses} cursor-pointer`}
          onClick={onClick}
          role="button"
          tabIndex={0}
          aria-label={ariaLabel}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              onClick();
            }
          }}
        >
          {content}
        </div>
      );
    }

    if (type === "external" && href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={commonClasses}
          aria-label={ariaLabel}
        >
          {content}
        </a>
      );
    }

    if (href) {
      return (
        <Link href={href} className={commonClasses} aria-label={ariaLabel}>
          {content}
        </Link>
      );
    }
    return null;
  };

  return (
    <>
      <Head>
        <title>Angus Blomley | React & React Native Developer</title>
        <meta
          name="description"
          content="Angus Blomley is a React and React Native developer specializing in building responsive, accessible web applications and mobile solutions."
        />
        <meta
          name="keywords"
          content="React, React Native, Web Developer, Frontend Developer, Mobile Developer, JavaScript, TypeScript"
        />
        <meta
          property="og:title"
          content="Angus Blomley | React & React Native Developer"
        />
        <meta
          property="og:description"
          content="Portfolio showcasing React and React Native development projects, skills, and experience."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://angusblomley.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://angusblomley.com" />
      </Head>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:text-black"
      >
        Skip to main content
      </a>

      <Header />

      <section
        className="section flex lg:mt-12 justify-center lg:items-center w-full lg:h-screen"
        role="region"
        aria-label="Introduction"
      >
        <main className="max-lg:mt-20 max-lg:w-screen max-sm:w-full max-lg:px-4">
          <article className="grid grid-cols-2 max-md:grid-cols-1">
            <div className="max-md:mx-auto max-md:w-96 max-sm:w-72">
              <h1 className="font-ibmPlexMono italic mb-2 text-xl md:text-2xl">
                Angus Blomley
              </h1>
              <h2 className="font-karla w-full mb-2 text-lg md:text-lg opacity-80">
                React / Native Front End Developer
              </h2>

              <div id="links" className="grid grid-cols-1 mb-20">
                <h3 className="font-ibmPlexMono mb-2">Work:</h3>
                {workLinksData.map((link) => (
                  <DisplayLinkItem key={link.text} {...link} />
                ))}

                <h3 className="font-ibmPlexMono mt-3 mb-1">Projects:</h3>
                {projectLinksData.map((link) => (
                  <DisplayLinkItem key={link.text} {...link} />
                ))}

                <h3 className="font-ibmPlexMono mt-3 mb-1">Profiles:</h3>
                {profileLinksData.map((link) => (
                  <DisplayLinkItem
                    key={link.text}
                    href={link.href}
                    text={link.text}
                    ariaLabel={link.ariaLabel}
                    type={link.type as "external" | "button" | undefined}
                    onClick={
                      link.actionId === "resume"
                        ? () => window.open("/pdf/Angus-Blomley.pdf", "_blank")
                        : undefined
                    }
                  />
                ))}
              </div>
            </div>
            <div className="mx-auto max-lg:mt-5 max-lg:mb-5 max-md:row-start-2 overflow-hidden">
              <pre
                id="text"
                className="whitespace-pre font-mono text-[10px] leading-[10px] tracking-normal transform-none max-xl:text-[8px] max-xl:leading-[8px] max-lg:w-[375px] max-lg:h-[400px] max-sm:w-full max-lg:text-[7px] max-lg:leading-[7px] max-sm:leading-[5px] max-sm:text-[5px]"
                aria-hidden="true"
              >
                <p className="text-wrap bg-[#121212] text-white">
                  {displayedText}
                </p>
              </pre>
            </div>
          </article>
        </main>
      </section>

      <section
        id="about"
        className="relative z-10 duration-1000 flex items-center h-screen"
        role="region"
        aria-label="About Me"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-theme-bg-dark to-transparent z-10 via-30% via-theme-bg-dark/50 opacity-100 max-md:via-theme-bg-dark/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-theme-bg-dark to-transparent z-10 via-30% via-theme-bg-dark/0 opacity-0 max-md:via-theme-bg-dark/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-theme-bg-dark to-transparent z-10 via-30% via-theme-bg-dark/50 opacity-100 max-md:via-theme-bg-dark/30"></div>

          <Image
            alt="About background image"
            src="/images/index/back.jpg"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
            quality={75}
          />
        </div>
        <div className="max-w-2xl ml-44 my-40 relative z-10 text-gray-100 max-lg:mx-auto max-lg:px-4">
          <h2 className="text-4xl mb-8">The Person Behind the Pixels</h2>

          <p className="text-lg mb-6 leading-relaxed">
            Hello! I&apos;m Angus Blomley, a React developer dedicated to
            building high-performance, accessible web applications. I have
            refined my expertise in HTML, CSS, JavaScript, React, and React
            Native, leveraging modern web technologies.
          </p>

          <p className="text-lg mb-6 leading-relaxed"></p>

          <p className="text-lg leading-relaxed">
            <Button
              href="/aboutMe"
              ariaLabel="Read more about my personal story and background"
              className="mr-4"
            >
              Learn More
            </Button>
            <Button href="#contact" ariaLabel="Navigate to contact section">
              Reach out
            </Button>
          </p>
        </div>
      </section>

      <section
        id="experience"
        className="py-20 max-md:py-12 duration-200 overflow-hidden bg-theme-bg-light dark:bg-theme-bg-dark text-theme-text-light dark:text-theme-text-dark"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="space-y-20 max-md:space-y-16">
            <div className="grid grid-cols-12 gap-6 items-center">
              <div className="col-span-7 max-md:col-span-12 max-md:order-2 relative flex justify-center items-center">
                <Link href="/work/vocabo">
                  <div className="w-full rounded-lg relative overflow-hidden shadow-xl">
                    <div className="bg-gray-100 h-5 rounded-t-lg flex items-center px-4">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    <div className="relative aspect-video overflow-hidden">
                      <video
                        title="Vocabo Chrome Extension Demo"
                        src="/videos/vocabo.mp4"
                        autoPlay
                        muted
                        loop
                        width={1280}
                        height={720}
                        className="h-auto w-full transition-opacity duration-300 opacity-100"
                        style={{
                          objectFit: "cover",
                          display: "block",
                          position: "relative",
                          top: "-12px",
                          height: "calc(100% + 29px - 0px)",
                          width: "100%",
                        }}
                        playsInline
                        preload="auto"
                      />
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-span-5 max-md:col-span-12 max-md:order-1 pl-4 max-md:pl-0">
                <div className="max-w-xl">
                  <h3 className="text-2xl font-semibold mb-2">
                    Front End Developer
                  </h3>
                  <p className="mb-4 text-base opacity-90">
                    Vocabo - Language Learning Platform
                    <br />
                    11 months (Ongoing)
                  </p>
                  <p className="text-base">
                    Built a feature-rich Chrome extension using React for an
                    innovative language learning platform, including an
                    Express.js backend.
                  </p>
                </div>
                <div className="flex gap-3 mt-4">
                  <Button
                    href="/work/vocabo"
                    ariaLabel="Learn more about Vocabo project"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6 items-center">
              <div className="col-span-5 max-md:col-span-12 pr-4 max-md:pr-0">
                <div className="max-w-xl">
                  <h3 className="text-2xl font-semibold mb-2">
                    React / React Native Developer
                  </h3>
                  <p className="mb-4 text-base opacity-90">
                    Compute and Cultivate Ltd (PWG Windows & Doors)
                    <br />
                    Contract Position • 1.5 Years
                  </p>
                  <p className="text-base">
                    Developed a key React Native mobile application for field
                    engineers, significantly improving site visit efficiency and
                    data management.
                  </p>
                </div>
                <div className="flex gap-3 mt-4">
                  <Button
                    href="/work/pwg"
                    ariaLabel="Learn more about PWG project"
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              <div className="col-span-7 max-md:col-span-12 relative flex justify-center items-center">
                <Link href="/work/pwg">
                  <div className="rounded-lg overflow-hidden shadow-xl max-w-[70%] mx-auto relative aspect-[800/1200]">
                    <video
                      title="PWG Mobile App Demo"
                      src="/videos/pwg_tablet.webm"
                      autoPlay
                      muted
                      loop
                      width={800}
                      height={1200}
                      className="w-full h-auto transition-opacity duration-300 opacity-100"
                      preload="auto"
                      playsInline
                    />
                  </div>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6 items-center">
              <div className="col-span-5 max-md:col-span-12 pr-4 max-md:pr-0">
                <div className="max-w-xl">
                  <h3 className="text-2xl font-semibold mb-2">
                    Front End Developer
                  </h3>
                  <p className="mb-4 text-base opacity-90">
                    Open Fern Studio
                    <br />
                    Contract Position • 2 Months
                  </p>
                  <p className="text-base">
                    Created a responsive and SEO-optimized business website with
                    modern design and animations for a social media marketing
                    agency.
                  </p>
                </div>
                <div className="flex gap-3 mt-4">
                  <Button
                    href="/work/openfern"
                    ariaLabel="Learn more about Open Fern Studio project"
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              <div className="col-span-7 max-md:col-span-12 relative flex justify-center items-center">
                <Link href="/work/openfern">
                  <div className="w-full rounded-lg overflow-hidden shadow-xl">
                    <div className="bg-gray-100 h-5 rounded-t-lg flex items-center px-4">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    <Image
                      id="openfern"
                      alt="Open Fern Studio Website"
                      src="/images/work/openfern.png"
                      width={1102}
                      height={703}
                      className="w-full h-auto"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="education"
        className="py-20 max-md:pt-0 duration-200 overflow-x-hidden bg-neutral-300 text-neutral-800"
      >
        <div className=" overflow-x-hidden px-4">
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-y-20 gap-x-60 max-xl:gap-x-20 max-md:gap-y-10">
            <div className="mb-12 max-md:mb-0 rounded-lg duration-300 flex flex-col items-end max-md:items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  Ravensbourne University London
                </h3>
                <p className="degree mb-4">
                  BSc (Hons) Broadcast Engineering - 2:1 <br />
                  September 2021 - April 2024
                </p>
                <div className="education-level mt-2">
                  <h4 className="text-xl mb-2 font-semibold">
                    Key Courses and Projects
                  </h4>
                  <ul className="course-list list-disc pl-5 mb-4">
                    <li>Software Development & Programming</li>
                    <li>Python & Data Structures</li>
                    <li>Low-Level Programming (Arduino)</li>
                    <li>Computer Architecture & Operating Systems</li>
                    <li>Algorithms & Computational Theory</li>
                    <li>Final Major Project</li>
                  </ul>
                  <p className="font-semibold mt-2 mb-2">
                    Total Degree Credits: 360
                  </p>
                  <Image
                    width={300}
                    height={150}
                    id="ravensbourne-light"
                    src="/images/index/ravensbourne-black.png"
                    alt="Ravensbourne University (Light Mode Logo)"
                    className="block"
                  />
                  <Image
                    width={300}
                    height={150}
                    id="ravensbourne-dark"
                    src="/images/index/ravensbourne-white.png"
                    alt="Ravensbourne University (Dark Mode Logo)"
                    className="hidden"
                  />
                </div>
              </div>
            </div>

            <div className="relative mb-12 flex">
              <Image
                id="graduation"
                alt="graduation"
                src="/images/index/graduation.svg"
                width={500}
                height={500}
                className="-ml-20 max-md:ml-0"
              />
            </div>

            <div className="relative mb-12 flex justify-end max-md:justify-start max-md:row-start-4">
              <Image
                id="computer"
                alt="Computer"
                src="/images/index/computer.svg"
                width={500}
                height={500}
                className="-rotate-45 -mr-20 max-xl:-mr-10 max-md:0 max-md:px-4"
              />
            </div>

            <div className="mb-12 max-md:mb-0 rounded-lg duration-300 flex flex-col">
              <h3 className="text-2xl font-semibold mb-2">
                Belfast Metropolitan
              </h3>
              <p className="diploma mb-4">
                IT Extended Diploma Level 3<br />
                September 2015 - June 2018
              </p>
              <div className="education-level mt-2">
                <h4 className="text-xl mb-2 font-semibold">Key Courses</h4>
                <ul className="course-list list-disc pl-5 mb-4">
                  <li>Communication and Employability Skills</li>
                  <li>Information Systems</li>
                  <li>Software Design and Development</li>
                  <li>Website Production</li>
                  <li>Computer Systems</li>
                </ul>
                <Image
                  width={150}
                  height={150}
                  id="belfastmet"
                  src="/images/index/belfastmet.png"
                  alt="Belfast Metropolitan"
                />
              </div>
            </div>

            <div className="mb-12 rounded-lg duration-300 flex flex-col items-end max-md:items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Codecademy</h3>
                <p className="certificate mb-4">
                  Front-End Development Course
                  <br />
                  Completed: May 2024
                </p>
                <div className="education-level mt-2">
                  <h4 className="text-xl mb-2 font-semibold">
                    Key Skills and Projects
                  </h4>
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
                  <Image
                    width={220}
                    height={150}
                    id="codecademy"
                    src="/images/index/codecademy.png"
                    alt="Codecademy"
                    className="mt-4"
                  />
                  <Button
                    onClick={handleSeeMoreClick}
                    ariaLabel="View my Full-Stack Developer certificate"
                  >
                    See certificate
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative mb-12 flex justify-start">
              <Image
                id="networking"
                alt="networking graphic"
                src="/images/index/networking.svg"
                width={500}
                height={500}
                className="-ml-40 max-xl:-ml-20 max-md:ml-0"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="px-4 py-20 z-10 mb-20 flex justify-center items-center bg-theme-bg-light dark:bg-theme-bg-dark text-theme-text-light dark:text-theme-text-dark"
      >
        <div className="grid grid-cols-2 w-full max-lg:grid-cols-1 gap-x-28 lg:w-[1200px]">
          {submitted ? (
            <div className="text-2xl font-ibmPlexMono text-green-500 col-start-1">
              Thank you for your message!
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 col-start-1 max-lg:w-full"
            >
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
                  className="w-full px-4 py-2 font-ibmPlexMono rounded-lg text-theme-text-light border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 dark:text-theme-text-dark dark:placeholder-gray-400 dark:border-gray-600"
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
                  className="w-full px-4 py-2 font-ibmPlexMono rounded-lg text-theme-text-light border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 dark:text-theme-text-dark dark:placeholder-gray-400 dark:border-gray-600"
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
                  className="w-full px-4 py-2 font-ibmPlexMono rounded-lg text-theme-text-light border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 dark:text-theme-text-dark dark:placeholder-gray-400 dark:border-gray-600"
                />
              </div>
              <div className="gap-4 items-center">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full px-4 py-2 font-ibmPlexMono rounded-lg text-theme-text-light border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 dark:text-theme-text-dark dark:placeholder-gray-400 dark:border-gray-600"
                  rows={6}
                  required
                />
              </div>
              <div id="recaptcha-container" style={{ display: "none" }}></div>
              <div className="gap-4 items-center">
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
          />
        </div>
      </section>

      <Footer />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-theme-bg-light dark:bg-white/10 text-theme-text-light dark:text-theme-text-dark hover:bg-gray-200 dark:hover:bg-white/20 shadow-lg transition-all duration-300 scale-90 z-50
          ${
            showScrollTop
              ? "opacity-70 translate-y-0"
              : "opacity-0 translate-y-20 pointer-events-none"
          }
        `}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={16} aria-hidden="true" />
      </button>
    </>
  );
}

export default HomePage;
