import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { motion, useInView } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import Header from "@/components/globals/header";
import Footer from "@/components/globals/footer";
import Link from "next/link";
import {
  ascii,
  workLinksData,
  projectLinksData,
  profileLinksData,
} from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/globals/Button";
import Image from "next/image";
import { PulseLoader } from "react-spinners";

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

  // Loading states for media
  const [mediaLoading, setMediaLoading] = useState({
    backgroundImage: true,
    vocaboVideo: true,
    pwgVideo: true,
    openfernImage: true,
    graduationSvg: true,
    computerSvg: true,
    networkingSvg: true,
  });

  // Fallback timers for media loading
  React.useEffect(() => {
    const timers = {
      backgroundTimer: setTimeout(() => {
        setMediaLoading((prev) => ({ ...prev, backgroundImage: false }));
      }, 3000),
      videoTimer: setTimeout(() => {
        setMediaLoading((prev) => ({
          ...prev,
          vocaboVideo: false,
          pwgVideo: false,
        }));
      }, 5000),
      imageTimer: setTimeout(() => {
        setMediaLoading((prev) => ({ ...prev, openfernImage: false }));
      }, 3000),
      svgTimer: setTimeout(() => {
        setMediaLoading((prev) => ({
          ...prev,
          graduationSvg: false,
          computerSvg: false,
          networkingSvg: false,
        }));
      }, 2000),
    };

    return () => {
      Object.values(timers).forEach((timer) => clearTimeout(timer));
    };
  }, []);

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
  }, [i]);

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

  const eduRef = useRef(null);
  const eduInView = useInView(eduRef, { once: true, margin: "100px" });
  const parentVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };
  const blockVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };
  const educationSection = (
    <motion.section
      id="education"
      className="overflow-x-hidden text-neutral-800"
      ref={eduRef}
      variants={parentVariants}
      initial="hidden"
      animate={eduInView ? "show" : "hidden"}
    >
      <div className="py-32 max-md:py-20 bg-neutral-300">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-y-16 gap-x-20 max-xl:gap-x-12 max-md:gap-y-12 items-center">
            <motion.div
              variants={blockVariants}
              className="mb-12 max-md:mb-0 rounded-lg flex flex-col justify-center min-h-[340px] items-end max-md:items-start"
            >
              <div className="w-full max-w-xl">
                <h3 className="text-2xl font-semibold mb-4">
                  Ravensbourne University London
                </h3>
                <p className="degree mb-6">
                  BSc (Hons) Broadcast Engineering - 2:1 <br />
                  September 2021 - April 2024
                </p>
                <div className="education-level mt-4">
                  <h4 className="text-xl mb-4 font-semibold">
                    Key Courses and Projects
                  </h4>
                  <ul className="course-list list-disc pl-5 mb-6 space-y-2">
                    <li>Software Development & Programming</li>
                    <li>Python & Data Structures</li>
                    <li>Low-Level Programming (Arduino)</li>
                    <li>Computer Architecture & Operating Systems</li>
                    <li>Algorithms & Computational Theory</li>
                    <li>Final Major Project</li>
                  </ul>
                  <p className="font-semibold mt-4 mb-6">
                    Total Degree Credits: 360
                  </p>
                  <div className="mt-8">
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
            </motion.div>
            <motion.div
              variants={blockVariants}
              className="relative mb-12 flex items-center justify-center min-h-[340px] max-md:justify-start"
            >
              <div className="relative">
                {mediaLoading.graduationSvg && (
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse rounded flex items-center justify-center w-[500px] h-[500px]">
                    <PulseLoader color="#6B7280" size={8} />
                  </div>
                )}
                <Image
                  id="graduation"
                  alt="graduation"
                  src="/images/index/graduation.svg"
                  width={500}
                  height={500}
                  className="max-w-full h-auto"
                  onLoad={() =>
                    setMediaLoading((prev) => ({
                      ...prev,
                      graduationSvg: false,
                    }))
                  }
                  onLoadingComplete={() =>
                    setMediaLoading((prev) => ({
                      ...prev,
                      graduationSvg: false,
                    }))
                  }
                  onError={() =>
                    setMediaLoading((prev) => ({
                      ...prev,
                      graduationSvg: false,
                    }))
                  }
                  style={{
                    opacity: mediaLoading.graduationSvg ? 0 : 1,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="w-full bg-neutral-200 py-32 max-md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-y-16 gap-x-20 max-xl:gap-x-12 max-md:gap-y-12 items-center">
            <motion.div
              variants={blockVariants}
              className="rounded-lg flex flex-col justify-center min-h-[340px]"
            >
              <div className="w-full max-w-xl">
                <h3 className="text-2xl font-semibold mb-4">
                  Belfast Metropolitan
                </h3>
                <p className="diploma mb-6">
                  IT Extended Diploma Level 3<br />
                  September 2015 - June 2018
                </p>
                <div className="education-level mt-4">
                  <h4 className="text-xl mb-4 font-semibold">Key Courses</h4>
                  <ul className="course-list list-disc pl-5 mb-6 space-y-2">
                    <li>Communication and Employability Skills</li>
                    <li>Information Systems</li>
                    <li>Software Design and Development</li>
                    <li>Website Production</li>
                    <li>Computer Systems</li>
                  </ul>
                  <div className="mt-8">
                    <Image
                      width={150}
                      height={150}
                      id="belfastmet"
                      src="/images/index/belfastmet.png"
                      alt="Belfast Metropolitan"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Computer Image */}
            <motion.div
              variants={blockVariants}
              className="relative flex items-center justify-end min-h-[340px]"
            >
              <div className="relative">
                {mediaLoading.computerSvg && (
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse rounded flex items-center justify-center w-[500px] h-[500px] -rotate-45">
                    <div className="rotate-45">
                      <PulseLoader color="#6B7280" size={8} />
                    </div>
                  </div>
                )}
                <Image
                  id="computer"
                  alt="Computer"
                  src="/images/index/computer.svg"
                  width={500}
                  height={500}
                  className="max-w-full h-auto -rotate-45"
                  onLoad={() =>
                    setMediaLoading((prev) => ({ ...prev, computerSvg: false }))
                  }
                  onLoadingComplete={() =>
                    setMediaLoading((prev) => ({ ...prev, computerSvg: false }))
                  }
                  onError={() =>
                    setMediaLoading((prev) => ({ ...prev, computerSvg: false }))
                  }
                  style={{
                    opacity: mediaLoading.computerSvg ? 0 : 1,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Last Container */}
      <div className="py-32 max-md:py-20 bg-neutral-300">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-y-16 gap-x-20 max-xl:gap-x-12 max-md:gap-y-12 items-center">
            {/* Codecademy */}
            <motion.div
              variants={blockVariants}
              className="mb-12 rounded-lg flex flex-col justify-center min-h-[340px] items-end max-md:items-start"
            >
              <div className="w-full max-w-xl">
                <h3 className="text-2xl font-semibold mb-4">Codecademy</h3>
                <p className="certificate mb-6">
                  Front-End Development Course
                  <br />
                  Completed: May 2024
                </p>
                <div className="education-level mt-4">
                  <h4 className="text-xl mb-4 font-semibold">
                    Key Skills and Projects
                  </h4>
                  <ul className="course-list list-disc pl-5 mb-6 space-y-2">
                    <li>HTML, CSS, and JavaScript</li>
                    <li>Responsive Web Design</li>
                    <li>React and Redux</li>
                    <li>APIs and Asynchronous Programming</li>
                    <li>Portfolio Projects</li>
                    <li>Linear Data Structures</li>
                    <li>Complex Data Structures</li>
                    <li>Algorithms</li>
                  </ul>
                  <div className="mt-8">
                    <Image
                      width={220}
                      height={150}
                      id="codecademy"
                      src="/images/index/codecademy.png"
                      alt="Codecademy"
                    />
                    <Button
                      onClick={handleSeeMoreClick}
                      ariaLabel="View my Full-Stack Developer certificate"
                      className="mt-6"
                    >
                      See certificate
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={blockVariants}
              className="relative mb-12 flex items-center justify-start min-h-[340px] max-md:justify-center"
            >
              <div className="relative">
                {mediaLoading.networkingSvg && (
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse rounded flex items-center justify-center w-[500px] h-[500px]">
                    <PulseLoader color="#6B7280" size={8} />
                  </div>
                )}
                <Image
                  id="networking"
                  alt="networking graphic"
                  src="/images/index/networking.svg"
                  width={500}
                  height={500}
                  className="max-w-full h-auto"
                  onLoad={() =>
                    setMediaLoading((prev) => ({
                      ...prev,
                      networkingSvg: false,
                    }))
                  }
                  onLoadingComplete={() =>
                    setMediaLoading((prev) => ({
                      ...prev,
                      networkingSvg: false,
                    }))
                  }
                  onError={() =>
                    setMediaLoading((prev) => ({
                      ...prev,
                      networkingSvg: false,
                    }))
                  }
                  style={{
                    opacity: mediaLoading.networkingSvg ? 0 : 1,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );

  // About section hooks
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  // Experience section hooks
  const expRef = useRef(null);
  const expInView = useInView(expRef, { once: true, margin: "-100px" });

  // Animation variants for experience section
  const cardVariantsLeft = {
    hidden: { opacity: 0, x: -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };
  const cardVariantsRight = {
    hidden: { opacity: 0, x: 40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
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
        className="relative z-100 flex items-center h-screen"
        role="region"
        aria-label="About Me"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-theme-bg-dark to-transparent z-10 via-30% via-theme-bg-dark/50 opacity-100 max-md:via-theme-bg-dark/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-theme-bg-dark to-transparent z-10 via-30% via-theme-bg-dark/0 opacity-0 max-md:via-theme-bg-dark/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-theme-bg-dark to-transparent z-10 via-30% via-theme-bg-dark/50 opacity-100 max-md:via-theme-bg-dark/30"></div>

          {mediaLoading.backgroundImage && (
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse z-5"></div>
          )}
          <Image
            alt="About background image"
            src="/images/index/back.jpg"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
            quality={75}
            onLoad={() =>
              setMediaLoading((prev) => ({ ...prev, backgroundImage: false }))
            }
            onLoadingComplete={() =>
              setMediaLoading((prev) => ({ ...prev, backgroundImage: false }))
            }
            onError={() =>
              setMediaLoading((prev) => ({ ...prev, backgroundImage: false }))
            }
            style={{
              opacity: mediaLoading.backgroundImage ? 0 : 1,
              transition: "opacity 0.5s ease-in-out",
            }}
          />
        </div>
        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0, y: 40 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl ml-44 my-40 relative z-10 text-gray-100 max-lg:mx-auto max-lg:px-4"
        >
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
        </motion.div>
      </section>

      <section
        id="experience"
        className="py-32 max-md:py-12 overflow-hidden bg-theme-bg-light dark:bg-theme-bg-dark text-theme-text-light dark:text-theme-text-dark"
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            ref={expRef}
            variants={parentVariants}
            initial="hidden"
            animate={expInView ? "show" : "hidden"}
            className="space-y-32 max-md:space-y-16"
          >
            <motion.div
              variants={cardVariantsLeft}
              className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
            >
              <div className="w-full lg:w-7/12">
                <Link href="/work/vocabo">
                  <motion.div
                    className="w-full rounded-lg overflow-hidden shadow-xl"
                    whileHover={{
                      y: -6,
                      filter: "brightness(0.8)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 18,
                    }}
                  >
                    <div className="bg-gray-100 h-5 rounded-t-lg flex items-center px-4">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    <div className="relative aspect-video overflow-hidden">
                      {mediaLoading.vocaboVideo && (
                        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse flex items-center justify-center">
                          <PulseLoader color="#6B7280" size={8} />
                        </div>
                      )}
                      <video
                        title="Vocabo Chrome Extension Demo"
                        src="/videos/vocabo.mp4"
                        autoPlay
                        muted
                        loop
                        width={1280}
                        height={720}
                        className="h-auto rounded-b-lg"
                        style={{
                          objectFit: "cover",
                          display: "block",
                          position: "relative",
                          top: "-12px",
                          height: "calc(100% + 29px - 0px)",
                          width: "100%",
                          opacity: mediaLoading.vocaboVideo ? 0 : 1,
                          transition: "opacity 0.3s ease-in-out",
                        }}
                        playsInline
                        preload="auto"
                        onLoadedData={() =>
                          setMediaLoading((prev) => ({
                            ...prev,
                            vocaboVideo: false,
                          }))
                        }
                        onCanPlay={() =>
                          setMediaLoading((prev) => ({
                            ...prev,
                            vocaboVideo: false,
                          }))
                        }
                        onError={() =>
                          setMediaLoading((prev) => ({
                            ...prev,
                            vocaboVideo: false,
                          }))
                        }
                      />
                    </div>
                  </motion.div>
                </Link>
              </div>
              <div className="w-full lg:w-5/12 lg:pl-4 max-w-xl mt-8 lg:mt-0">
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
                  innovative language learning platform, including an Express.js
                  backend.
                </p>
                <div className="flex gap-3 mt-4">
                  <Button
                    href="/work/vocabo"
                    ariaLabel="Learn more about Vocabo project"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={cardVariantsRight}
              className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
            >
              <div className="w-full lg:w-5/12 order-2 lg:order-1">
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
                <div className="flex gap-3 mt-4">
                  <Button
                    href="/work/pwg"
                    ariaLabel="Learn more about PWG project"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="w-full lg:w-7/12 flex justify-center lg:justify-end order-1 lg:order-2">
                <Link href="/work/pwg" className="w-full max-w-4xl">
                  <motion.div
                    className="rounded-lg overflow-hidden shadow-lg relative"
                    whileHover={{
                      y: -6,
                      filter: "brightness(0.8)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 18,
                    }}
                  >
                    <div className="bg-gray-100 h-5 rounded-t-lg flex items-center px-4">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    {mediaLoading.pwgVideo && (
                      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse flex items-center justify-center rounded-b-lg">
                        <PulseLoader color="#6B7280" size={8} />
                      </div>
                    )}
                    <video
                      title="PWG Mobile App Demo"
                      src="/videos/pwg_web.mp4"
                      autoPlay
                      muted
                      loop
                      width={1280}
                      height={720}
                      className="w-full rounded-b-lg shadow-xl transition-opacity"
                      style={{
                        opacity: mediaLoading.pwgVideo ? 0 : 1,
                        transition: "opacity 0.3s ease-in-out",
                      }}
                      playsInline
                      preload="auto"
                      onLoadedData={() =>
                        setMediaLoading((prev) => ({
                          ...prev,
                          pwgVideo: false,
                        }))
                      }
                      onCanPlay={() =>
                        setMediaLoading((prev) => ({
                          ...prev,
                          pwgVideo: false,
                        }))
                      }
                      onError={() =>
                        setMediaLoading((prev) => ({
                          ...prev,
                          pwgVideo: false,
                        }))
                      }
                    />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
            <motion.div
              variants={cardVariantsLeft}
              className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
            >
              <div className="w-full lg:w-7/12">
                <Link href="/work/openfern">
                  <motion.div
                    whileHover={{
                      y: -6,
                      filter: "brightness(0.8)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 18,
                    }}
                    className="w-full rounded-lg overflow-hidden shadow-xl"
                  >
                    <div className="bg-gray-100 h-5 rounded-t-lg flex items-center px-4">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    <div className="relative">
                      {mediaLoading.openfernImage && (
                        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-b-lg flex items-center justify-center">
                          <PulseLoader color="#6B7280" size={8} />
                        </div>
                      )}
                      <Image
                        id="openfern"
                        alt="Open Fern Studio Website"
                        src="/images/work/openfern.png"
                        width={1102}
                        height={703}
                        className="w-full h-auto rounded-b-lg"
                        onLoad={() =>
                          setMediaLoading((prev) => ({
                            ...prev,
                            openfernImage: false,
                          }))
                        }
                        onLoadingComplete={() =>
                          setMediaLoading((prev) => ({
                            ...prev,
                            openfernImage: false,
                          }))
                        }
                        onError={() =>
                          setMediaLoading((prev) => ({
                            ...prev,
                            openfernImage: false,
                          }))
                        }
                        style={{
                          opacity: mediaLoading.openfernImage ? 0 : 1,
                          transition: "opacity 0.3s ease-in-out",
                        }}
                      />
                    </div>
                  </motion.div>
                </Link>
              </div>
              <div className="w-full lg:w-5/12 lg:pl-4 max-w-xl mt-8 lg:mt-0">
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
                <div className="flex gap-3 mt-4">
                  <Button
                    href="/work/openfern"
                    ariaLabel="Learn more about Open Fern Studio project"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {educationSection}

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
                  className="px-6 py-2 font-ibmPlexMono rounded-lg bg-green-600 text-white w-full hover:bg-green-900"
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
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-theme-bg-light dark:bg-white/10 text-theme-text-light dark:text-theme-text-dark hover:bg-gray-200 dark:hover:bg-white/20 shadow-lg transition-all scale-90 z-50
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
