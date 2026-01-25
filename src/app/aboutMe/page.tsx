'use client';

/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import { FaMailBulk, FaGithub, FaChevronDown } from "react-icons/fa";
import { PulseLoader } from "react-spinners";

interface Skill {
  name: string;
  description: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React & React Native", description: "Building component-based UIs for web and mobile", icon: "/images/icons/react.webp" },
      { name: "Expo", description: "Rapid mobile development with managed workflow", icon: "/images/icons/expoGo.svg" },
      { name: "Next.js", description: "Server-side rendering and static site generation", icon: "/images/icons/next.webp" },
      { name: "TypeScript", description: "Type-safe JavaScript for better developer experience", icon: "/images/icons/typescript.png" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid styling", icon: "/images/icons/tailwind.webp" },
      { name: "CSS/SCSS", description: "Custom styling and animations", icon: "/images/icons/css.webp" },
      { name: "Responsive Design", description: "Mobile-first, accessible interfaces", icon: "/images/icons/html.webp" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", description: "JavaScript runtime for server-side applications", icon: "/images/icons/js.webp" },
      { name: "Express", description: "Web framework for building RESTful APIs", icon: "/images/icons/js.webp" },
      { name: "MongoDB", description: "NoSQL database for flexible data storage", icon: "/images/icons/mongodb.webp" },
      { name: "Supabase", description: "Open source Firebase alternative with PostgreSQL", icon: "/images/icons/supabase.jpeg" },
      { name: "RESTful APIs", description: "Designing and implementing robust API endpoints", icon: "/images/icons/axios.webp" },
      { name: "Authentication", description: "Secure user authentication and authorization", icon: "/images/icons/next-auth.webp" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", description: "Version control and collaboration", icon: "github" },
      { name: "VS Code", description: "Customized editor for efficient development", icon: "/images/icons/vscode.webp" },
      { name: "Vercel", description: "Deployment and hosting platform", icon: "/images/icons/vercel.png" },
      { name: "Google App Engine", description: "Scalable cloud application hosting", icon: "/images/icons/appEngine.webp" },
      { name: "Claude Code", description: "AI-assisted development and code generation", icon: "/images/icons/claude.png" },
      { name: "CodeRabbit", description: "AI-powered code review automation", icon: "/images/icons/codeRabbit.svg" },
      { name: "PostHog", description: "Product analytics and feature flags", icon: "/images/icons/posthog.jpeg" },
    ],
  },
];

// Animation variants
const heroVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const scrollIndicatorVariants: Variants = {
  animate: {
    y: [0, 8, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function AboutMe() {
  const [profileImageLoading, setProfileImageLoading] = useState(true);

  // Refs for scroll-triggered animations
  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const toolsRef = useRef(null);
  const contactRef = useRef(null);

  const frontendInView = useInView(frontendRef, { once: true, amount: 0.3 });
  const backendInView = useInView(backendRef, { once: true, amount: 0.3 });
  const toolsInView = useInView(toolsRef, { once: true, amount: 0.3 });
  const contactInView = useInView(contactRef, { once: true, amount: 0.5 });

  const sectionRefs = [frontendRef, backendRef, toolsRef];
  const sectionInViews = [frontendInView, backendInView, toolsInView];

  return (
    <main className="min-h-screen bg-theme-bg-light dark:bg-theme-bg-dark text-theme-text-light dark:text-theme-text-dark">
      {/* Hero Section - Full Viewport */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
        {/* Background Image - Only for hero section */}
        <div className="absolute inset-0 z-0">
          <Image
            alt="Background"
            src="/images/index/back.jpg"
            fill
            className="object-cover"
            priority
            quality={40}
          />
          <div className="absolute inset-0 bg-theme-bg-light/80 dark:bg-theme-bg-dark/80 backdrop-blur-sm"></div>
        </div>
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center max-w-3xl relative z-10"
        >
          {/* Profile Image */}
          <div className="relative mb-8">
            {profileImageLoading && (
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-full w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                <PulseLoader color="#6B7280" size={8} />
              </div>
            )}
            <div className="rounded-full overflow-hidden shadow-2xl w-48 h-48 sm:w-56 sm:h-56">
              <Image
                src="/images/about/portrait.jpeg"
                alt="Angus Blomley"
                width={224}
                height={224}
                className="w-full h-full object-cover object-center"
                onLoad={() => setProfileImageLoading(false)}
                onLoadingComplete={() => setProfileImageLoading(false)}
                onError={() => setProfileImageLoading(false)}
                style={{
                  opacity: profileImageLoading ? 0 : 1,
                  transition: "opacity 0.3s ease-in-out",
                }}
              />
            </div>
          </div>

          {/* Name and Bio */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 font-ibmPlexMono text-center">
            Hi, I'm Angus Blomley
          </h1>
          <p className="text-lg sm:text-xl font-rubik leading-relaxed tracking-normal opacity-90 max-w-2xl text-justify">
            I'm driven by the challenge of turning complex problems into
            elegant, intuitive interfaces. As a React / React Native developer,
            I specialize in building high-performance web and mobile applications,
            from Chrome extensions to cross-platform apps. I care deeply about
            input latency, responsive interfaces, and the details that make
            software feel polished and enjoyable to use.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={scrollIndicatorVariants}
          animate="animate"
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 z-10"
        >
          <span className="text-sm font-medium">Scroll</span>
          <FaChevronDown className="text-xl" />
        </motion.div>
      </section>

      {/* Skills Sections */}
      {skillCategories.map((category, categoryIndex) => (
        <section
          key={category.title}
          ref={sectionRefs[categoryIndex]}
          className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate={sectionInViews[categoryIndex] ? "show" : "hidden"}
            >
              <motion.h2
                variants={cardVariants}
                className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-12 text-center font-ibmPlexMono"
              >
                {category.title}
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={cardVariants}
                    className="bg-gray-100 dark:bg-white/5 p-4 sm:p-6 rounded-xl hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      {skill.icon === "github" ? (
                        <FaGithub className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg" />
                      ) : (
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={48}
                          height={48}
                          className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg"
                        />
                      )}
                      <div className="min-w-0">
                        <h3 className="font-semibold text-base sm:text-lg">{skill.name}</h3>
                        <p className="text-sm sm:text-base opacity-70 mt-1">{skill.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Contact CTA */}
      <section
        ref={contactRef}
        className="py-24 sm:py-32 px-4"
      >
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate={contactInView ? "show" : "hidden"}
          className="flex justify-center"
        >
          <Link
            href="/#contact"
            className="flex items-center gap-3 bg-theme-text-light dark:bg-theme-text-dark text-theme-bg-light dark:text-theme-bg-dark px-8 py-4 rounded-xl hover:opacity-90 transition-opacity font-medium text-lg shadow-lg"
          >
            <FaMailBulk className="text-xl" />
            <span>Get In Touch</span>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
