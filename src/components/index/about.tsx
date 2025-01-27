/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import "../../app/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useDarkMode } from "@/contexts/darkModeContext";
import { useLanguage } from "@/contexts/language";

import Link from "next/link";

function About() {
  const { isDarkMode } = useDarkMode();
  const { language } = useLanguage();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const backgroundColor = isDarkMode
    ? "var(--background-color-dark)"
    : "var(--background-color-light)";

  const content =
    language === "ja" ? (
      <>
        <h2 className="text-4xl mb-8" data-aos="fade-up">
          ピクセルの背後にいる人
        </h2>
        <p className="font-hiraKakuPro mb-6 leading-relaxed" data-aos="fade-up">
          こんにちは！僕の名前はアンガス・ブロムリーです。素晴らしいウェブを制作することに力を注いでいるリアクトディベロッパーです。2014年5月からプログラミングについて学び始め、HTMLやCSS、JavaScript、React、React
          Nativeなど、さまざまな最新のウェブ技術について知識を得てきました。
        </p>
        <p className="font-hiraKakuPro mb-6 leading-relaxed" data-aos="fade-up">
          また、プログラミング言語だけでなく、言語学習そのものにも興味があり、日本人の彼女とコミュニケーションを取るために、日々日本語を学んでいます。
        </p>
        <p
          className="font-hiraKakuPro mb-6 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          そして、元国際飛び込み選手の経験があり、同じ目標を持つ仲間たちと努力し、挑戦する楽しさや厳しさやを学びました。それらの経験により、何事にも探求し挑戦することを日々意識しています。{" "}
        </p>
        <p
          className="font-hiraKakuPro leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link
            href="/aboutMe"
            className="inline-block mt-4 px-6 py-2 border border-current rounded relative overflow-hidden group mr-4"
          >
            <span className="absolute left-0 top-0 h-full w-0 bg-blue-500/80 transition-all duration-300 group-hover:w-full"></span>
            <span className="relative z-10">私の物語</span>
          </Link>
          <Link
            href="/#contact"
            className="inline-block mt-4 px-6 py-2 border border-current rounded relative overflow-hidden group"
          >
            <span className="absolute left-0 top-0 h-full w-0 bg-blue-500/80 transition-all duration-300 group-hover:w-full"></span>
            <span className="relative z-10">連絡する</span>
          </Link>
        </p>
      </>
    ) : (
      <>
        <h2 className="text-4xl mb-8" data-aos="fade-up">
          The Person Behind the Pixels
        </h2>
        <p className="text-lg mb-6 leading-relaxed" data-aos="fade-up">
          Hello! I'm Angus Blomley, a React developer passionate about crafting
          exceptional web experiences. Since I started my programming journey in
          May 2014, I've developed expertise in HTML, CSS, JavaScript, React,
          React Native and various modern web technologies.
        </p>
        <p className="text-lg mb-6 leading-relaxed" data-aos="fade-up">
          It's not just about the programming languages but language in general,
          I'm currently learning japanese to help connect with my girlfriend.
        </p>
        <p
          className="text-lg mb-6 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          As a former international springboard diver, I enjoy challenging
          outdoor activities and thrive in like-minded company. My adventurous
          spirit drives me to explore new technologies and constantly push my
          boundaries in both professional and personal pursuits.
        </p>
        <p
          className="text-lg leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link
            href="/aboutMe"
            className="inline-block mt-4 px-6 py-2 border border-current rounded relative overflow-hidden group mr-4"
          >
            <span className="absolute left-0 top-0 h-full w-0 bg-blue-500/80 transition-all duration-300 group-hover:w-full"></span>
            <span className="relative z-10">My Story</span>
          </Link>
          <Link
            href="/#contact"
            className="inline-block mt-4 px-6 py-2 border border-current rounded relative overflow-hidden group"
          >
            <span className="absolute left-0 top-0 h-full w-0 bg-blue-500/80 transition-all duration-300 group-hover:w-full"></span>
            <span className="relative z-10">Reach out</span>
          </Link>
        </p>
      </>
    );

  return (
    <section
      id="about"
      style={{ backgroundColor }}
      className="relative z-10 duration-1000 flex row items-center pt-16"
    >
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-gradient-to-b from-[#121212] via-[#121212]/${
            isDarkMode ? "70" : "50"
          } to-transparent opacity-${
            isDarkMode ? "100" : "70"
          } z-10 max-md:via-[#121212]/${
            isDarkMode ? "50" : "30"
          } max-md:to-transparent via-30%`}
        ></div>
        <div
          className={`absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/${
            isDarkMode ? "50" : "30"
          } to-transparent opacity-${
            isDarkMode ? "100" : "70"
          } z-10 max-md:via-[#121212]/${
            isDarkMode ? "80" : "60"
          } max-md:to-transparent via-30%`}
        ></div>
        <div
          className={`absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/${
            isDarkMode ? "70" : "50"
          } to-transparent opacity-${
            isDarkMode ? "100" : "70"
          } z-10 max-md:via-[#121212]/${
            isDarkMode ? "50" : "30"
          } max-md:to-transparent via-30%`}
        ></div>

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
        {content}
      </div>
    </section>
  );
}

export default About;
