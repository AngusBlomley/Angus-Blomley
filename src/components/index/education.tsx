import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../app/globals.css";
import { useDarkMode } from "@/contexts/darkModeContext";
import { useLanguage } from "@/contexts/language";

function Education() {
  const { isDarkMode } = useDarkMode();
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const backgroundColor = isDarkMode
    ? "var(--background-color-dark)"
    : "var(--background-color-light)";
  const color = isDarkMode
    ? "var(--foreground-color-dark)"
    : "var(--foreground-color-light)";
  const ravensbourneImage = isDarkMode
    ? "/images/index/ravensbourne-white.png"
    : "/images/index/ravensbourne-black.png";
  const modalRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      once: true,
    });
  }, []);

  const handleSeeMoreClick = () => {
    if (window.innerWidth < 1024) {
      const link = document.createElement("a");
      link.href = "/pdf/certificate.pdf";
      link.download = "certificate.pdf";
      link.click();
    } else {
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !(modalRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <section
      id="education"
      style={{ backgroundColor, color }}
      className="py-20 max-md:pt-0 duration-200 overflow-x-hidden"
    >
      <div className=" overflow-x-hidden px-4">
        <h2
          className="text-4xl text-center mb-20 max-lg:text-start"
          data-aos="fade-in"
        >
          {language === "en" ? "Building My Foundation" : "私の基盤作り"}
        </h2>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-y-20 gap-x-60 max-xl:gap-x-20 max-md:gap-y-10">
          <div
            className="mb-12 max-md:mb-0 rounded-lg duration-300 flex flex-col items-end max-md:items-start"
            data-aos="fade-right"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                {language === "en"
                  ? "Ravensbourne University London"
                  : "レーベンズボーン大学ロンドン"}
              </h3>
              <p className="degree mb-4">
                {language === "en" ? (
                  <>
                    BSc (Hons) Broadcast Engineering - 2:1 <br />
                    September 2021 - April 2024
                  </>
                ) : (
                  <>
                    放送工学学士（優等） - 2:1 <br />
                    2021年9月 - 2024年4月
                  </>
                )}
              </p>
              <div className="education-level mt-2">
                <h4 className="text-xl mb-2 font-semibold">
                  {language === "en"
                    ? "Key Courses and Projects"
                    : "主要コースとプロジェクト"}
                </h4>
                <ul className="course-list list-disc pl-5 mb-4">
                  {language === "en" ? (
                    <>
                      <li>Software Development & Programming</li>
                      <li>Python & Data Structures</li>
                      <li>Low-Level Programming (Arduino)</li>
                      <li>Computer Architecture & Operating Systems</li>
                      <li>Algorithms & Computational Theory</li>
                      <li>Final Major Project</li>
                    </>
                  ) : (
                    <>
                      <li>ソフトウェア開発とプログラミング</li>
                      <li>Pythonとデータ構造</li>
                      <li>低レベルプログラミング（Arduino）</li>
                      <li>コンピュータアーキテクチャとOS</li>
                      <li>アルゴリズムと計算理論</li>
                      <li>卒業制作</li>
                    </>
                  )}
                </ul>
                <p className="font-semibold mt-2 mb-2">
                  {language === "en"
                    ? "Total Degree Credits: 360"
                    : "総取得単位数：360"}
                </p>
                <Image
                  width={300}
                  height={150}
                  id="ravensbourne"
                  src={ravensbourneImage}
                  alt="Ravensbourne University"
                />
              </div>
            </div>
          </div>

          <div className="relative mb-12 flex" data-aos="fade-left">
            <Image
              id="graduation"
              alt="graduation"
              src="/images/index/graduation.svg"
              width={500}
              height={500}
              className="-ml-20 max-md:ml-0"
            />
          </div>

          <div
            className="relative mb-12 flex justify-end max-md:justify-start max-md:row-start-4"
            data-aos="fade-right"
          >
            <Image
              id="computer"
              alt="Computer"
              src="/images/index/computer.svg"
              width={500}
              height={500}
              className="-rotate-45 -mr-20 max-xl:-mr-10 max-md:0 max-md:px-4"
            />
          </div>

          <div
            className="mb-12 max-md:mb-0 rounded-lg duration-300 flex flex-col"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-semibold mb-2">
              {language === "en"
                ? "Belfast Metropolitan"
                : "ベルファスト・メトロポリタン"}
            </h3>
            <p className="diploma mb-4">
              {language === "en" ? (
                <>
                  IT Extended Diploma Level 3<br />
                  September 2015 - June 2018
                </>
              ) : (
                <>
                  IT上級ディプロマ レベル3
                  <br />
                  2015年9月 - 2018年6月
                </>
              )}
            </p>
            <div className="education-level mt-2">
              <h4 className="text-xl mb-2 font-semibold">
                {language === "en" ? "Key Courses" : "主要コース"}
              </h4>
              <ul className="course-list list-disc pl-5 mb-4">
                {language === "en" ? (
                  <>
                    <li>Communication and Employability Skills</li>
                    <li>Information Systems</li>
                    <li>Software Design and Development</li>
                    <li>Website Production</li>
                    <li>Computer Systems</li>
                  </>
                ) : (
                  <>
                    <li>コミュニケーションと就職能力</li>
                    <li>情報システム</li>
                    <li>ソフトウェア設計と開発</li>
                    <li>ウェブサイト制作</li>
                    <li>コンピュータシステム</li>
                  </>
                )}
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

          <div
            className="mb-12 rounded-lg duration-300 flex flex-col items-end max-md:items-start"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2">Codecademy</h3>
              <p className="certificate mb-4">
                {language === "en" ? (
                  <>
                    Front-End Development Course
                    <br />
                    Completed: May 2024
                  </>
                ) : (
                  <>
                    フロントエンド開発コース
                    <br />
                    修了：2024年5月
                  </>
                )}
              </p>
              <div className="education-level mt-2">
                <h4 className="text-xl mb-2 font-semibold">
                  {language === "en"
                    ? "Key Skills and Projects"
                    : "主要スキルとプロジェクト"}
                </h4>
                <ul className="course-list list-disc pl-5 mb-4">
                  {language === "en" ? (
                    <>
                      <li>HTML, CSS, and JavaScript</li>
                      <li>Responsive Web Design</li>
                      <li>React and Redux</li>
                      <li>APIs and Asynchronous Programming</li>
                      <li>Portfolio Projects</li>
                      <li>Linear Data Structures</li>
                      <li>Complex Data Structures</li>
                      <li>Algorithms</li>
                    </>
                  ) : (
                    <>
                      <li>HTML、CSS、JavaScript</li>
                      <li>レスポンシブウェブデザイン</li>
                      <li>ReactとRedux</li>
                      <li>APIと非同期プログラミング</li>
                      <li>ポートフォリオプロジェクト</li>
                      <li>線形データ構造</li>
                      <li>複雑なデータ構造</li>
                      <li>アルゴリズム</li>
                    </>
                  )}
                </ul>
                <button
                  onClick={handleSeeMoreClick}
                  className="inline-block mb-4 px-6 py-2 border border-current rounded relative overflow-hidden group"
                >
                  <span className="absolute left-0 top-0 h-full w-0 bg-blue-500/40 transition-all duration-300 group-hover:w-full"></span>
                  <span className="relative z-10">
                    {language === "en" ? "See certificate" : "証明書を見る"}
                  </span>
                </button>
                <Image
                  width={220}
                  height={150}
                  id="codecademy"
                  src="/images/index/codecademy.png"
                  alt="Codecademy"
                />
              </div>
            </div>
          </div>
          <div
            className="relative mb-12 flex justify-start"
            data-aos="fade-left"
          >
            <Image
              id="graduation"
              alt="graduation"
              src="/images/index/networking.svg"
              width={500}
              height={500}
              className="-ml-40 max-xl:-ml-20 max-md:ml-0"
            />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-200">
          <div ref={modalRef} className="relative max-w-4xl w-full mx-4">
            <button
              aria-label="Close"
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <embed
              type="application/pdf"
              src="/pdf/certificate.pdf#pagemode=none&zoom=110"
              className="w-full h-[80vh] border-0 rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Education;
