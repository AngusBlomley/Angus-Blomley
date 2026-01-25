'use client';

/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMailBulk, FaGithub } from "react-icons/fa";
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

export default function AboutMe() {
  const [profileImageLoading, setProfileImageLoading] = useState(true);

  return (
    <main className="min-h-screen pt-10 text-theme-text-light dark:text-theme-text-dark relative">
        <div className="fixed inset-0 z-0">
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
        <div className="relative z-10">
          <div className="z-50 mt-10 sm:mt-20 absolute left-0 right-0 flex justify-center"></div>

          <div className="max-w-6xl mx-auto mt-12 sm:mt-20 px-2 sm:px-6 lg:px-8">
            <section className="mb-8 sm:mb-16">
              <div className="bg-theme-bg-light/80 dark:bg-theme-bg-dark/80 backdrop-blur-md p-4 sm:p-8 rounded-lg shadow-sm">
                <div id="gbr" className="flex flex-col-reverse sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-6 sm:mb-8 scroll-mt-24">
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-center sm:text-left">
                      Hi, I'm Angus Blomley
                    </h2>
                    <p className="text-base sm:text-lg text-center sm:text-left font-rubik leading-relaxed tracking-normal">
                      I'm driven by the challenge of turning complex problems into
                      elegant, intuitive interfaces. As a React / React Native developer,
                      I specialize in building high-performance web and mobile applications,
                      from Chrome extensions to cross-platform apps. I care deeply about
                      input latency, responsive interfaces, and the details that make
                      software feel polished and enjoyable to use.
                    </p>
                  </div>
                  <div className="relative flex-shrink-0 sm:mx-8">
                    {profileImageLoading && (
                      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-full w-40 h-40 sm:w-[160px] sm:h-[160px] flex items-center justify-center">
                        <PulseLoader color="#6B7280" size={8} />
                      </div>
                    )}
                    <div className="rounded-full overflow-hidden shadow-xl w-40 h-40 sm:w-[160px] sm:h-[160px]">
                      <Image
                        src="/images/about/portrait.jpeg"
                        alt="Angus Blomley"
                        width={220}
                        height={220}
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
                </div>
                {skillCategories.map((category, categoryIndex) => (
                  <div key={category.title} className={categoryIndex > 0 ? "mt-6 sm:mt-8" : "mt-6 sm:mt-8"}>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-theme-text-light dark:text-theme-text-dark">
                      {category.title}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="bg-gray-100 dark:bg-white/10 p-3 sm:p-4 rounded-md">
                          <div className="flex items-start gap-2 sm:gap-3">
                            {skill.icon === "github" ? (
                              <FaGithub className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 rounded-sm" />
                            ) : (
                              <Image
                                src={skill.icon}
                                alt={skill.name}
                                width={48}
                                height={48}
                                className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 object-contain rounded-sm"
                              />
                            )}
                            <div className="min-w-0">
                              <h4 className="font-semibold text-sm sm:text-base">{skill.name}</h4>
                              <p className="text-xs sm:text-sm opacity-80 line-clamp-2">{skill.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className="flex justify-center scroll-mt-24 pb-8" id="contact">
              <Link
                href="/#contact"
                className="flex items-center gap-3 bg-theme-text-light dark:bg-theme-text-dark text-theme-bg-light dark:text-theme-bg-dark px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                <FaMailBulk className="text-xl" />
                <span>Get In Touch</span>
              </Link>
            </section>
          </div>
        </div>
      </main>
  );
}
