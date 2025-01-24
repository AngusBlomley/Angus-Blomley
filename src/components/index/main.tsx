import React, { useEffect, useState, useMemo, JSX } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../app/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "@/contexts/darkModeContext";
import { useLanguage } from "@/contexts/language";

function Main(): JSX.Element {
  const { isDarkMode } = useDarkMode();
  const { language } = useLanguage();
  const backgroundColor = isDarkMode
    ? "var(--background-color-dark)"
    : "var(--background-color-light)";
  const color = isDarkMode
    ? "var(--foreground-color-dark)"
    : "var(--foreground-color-light)";

  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [pdfVisible, setPdfVisible] = useState(false);

  const handleResumeClick = () => {
    if (window.innerWidth < 1024) {
      const link = document.createElement("a");
      link.href = "/pdf/Angus-Blomley.pdf";
      link.download = "Angus-Blomley.pdf";
      link.click();
    } else {
      setPdfVisible(true);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      once: true,
    });
  }, []);

  const words = useMemo(
    () =>
      language === "en"
        ? [
            "React.",
            "React Native.",
            "engineering.",
            "design.",
            "development.",
            "data analysis.",
            "software engineering.",
            "UI/UX design.",
            "sustainable technology.",
            "digital transformation.",
            "mobile development.",
            "web development.",
            "project management.",
          ]
        : [
            "React.",
            "React Native.",
            "エンジニアリング.",
            "デザイン.",
            "開発.",
            "データ分析.",
            "ソフトウェアエンジニアリング.",
            "UI/UXデザイン.",
            "持続可能な技術.",
            "デジタルトランスフォーメーション.",
            "モバイル開発.",
            "ウェブ開発.",
            "プロジェクト管理.",
          ],
    [language]
  );

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setTypedText(
        isDeleting
          ? fullText.substring(0, typedText.length - 1)
          : fullText.substring(0, typedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [typedText, isDeleting, loopNum, typingSpeed, words]);

  const ascii = `&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$XXXX$$$$$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$xx+;;;;;;;;;;;;;;;+++xX$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&X+;;;;;;;:::;;;;;;;;;;;;;;++xX$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&Xx+;;;;;;;;;:::::;;;;;;;;;;;;;;;;;;+X&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&X+;;;;;;;;;;;;;:::::::;;;;;;;;:;+;++;;+x$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&X++;;;:;;;;:::;:::::::::;::;;;;;::;++++;;+x&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&$x+;+;;;;::::;;::::;;;::::::::::;;;;::;++;;;:;;x$&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&x+;;;;+;;::::::::;;;;;;;;;;:;::::::;;::::;;;;::::;X&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&x;;;;;;;;;;;:;;;;::;;;;;;;;;;;;:;::;;;;::::;;;::::;;X&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&X+++;;;;;;;;;;;;;;;;+++++++++++++++++++;+;;;;;;;::::;+$&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&x;;;;;;;;;;;;;;;+++++++++xxxxxxxxxxxxxxxxxxxx++;:::::+$&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&x;;+;;;;;;;+++++++++xxxxxxxxxXXXXXXXXXXXXXXXxXx++;;::;X&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&x;;+;;;;;++xxxxxxxxxxxxxxXXXXXXXXXXXX$$$$$$$$$$XXXx+;;x&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&x;;+;;++xxxxxxxxxxxxxXxxXXXXXXXXXXXXXX$$$$$$$$$$$$Xx;;x$&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&x;+;++xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX$$$$$$$$$$$$X+;+$&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&x;++xxXXXXXXXXXXXXXxxxxxXXXXXXXXXXXXXXX$$$$$$$$$$$$X++x&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&X++xxXXX$$$XXXXXXXXXXXXXXXXXXXXXXXXXXX$$$$$$$$$$$$$Xx+X&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&$++xxXXX$$$$XXXXxXXXXXXXXXXXXXXXXXXXX$$$$$$$$$$$$$XXx+X&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&$x+xxX$$$$$$XXxxxxxxxxxxxxXXXXXXXXXXXXxxxxxxXXXXXXXXxx$&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&xxxxX$$$$$xx++++;;;;;;++++xxXXXXxxxxx+;;;++++xxxxXXxx$&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&XxxxX$$$$XXXXxxxxxxx++++++xxxXXXXXxxxxxxxXXXXXXXXXXXx$&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&$xx+xX$$$$$$XXxxxxx++++++;+xXXXX$$XXx++;;;;+xxxXXXXXXxX&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&$XX+xxx$$$$$Xx+++;;::+x+;;;+xXXXX$$XXX+;;;:;;++;+xX$$XxX$&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&Xx$$XXx$$$$$Xx++++;;;;+;;;++xXXXXX$XXXXx++++xxXX$$$$$XX$X$&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&Xxxx$$X$$$$$XXXXxxxxxx++;;+xXXXXXX$XXXXxxxXX$$$$$$$$$XX$$&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&Xx+x$$$$$$$XXXXXXxxxx+++xxXXXXXXXXXXX$$$$$$$$$$$$$$$XX$$&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&$x;;+x$$$$$$$XXXXXxxxxx+xxXXXXxxXXXXXX$$$$$$$$$$$$$$$XxxX&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&$+;++X$$$$$$$$XXXXxxxxx++xXXXXxXXXXXXX$$$$$$$$$$$$$$$XXxx$&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&X+++x$$$$$$$$XXXXXxxx++++xX$$XXX$$XXXX$$$$$$$$$$$$$$Xx+X&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&$$x+XX$$$$$$XXXXXxx+++++XXXXXxxXXXXXXX$$$$$$$$$$$$$XX$$&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&$$XXX$$$$$$$XXXXxx+++++++;+xx+xx+;+XX$$$$$$$$$$$$$X$$&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&$XXX$$$$$$$XXXXXxx++++++;++++xxxxxXX$$$$$$$$$$$$$X$&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&$XX$$$$$$$XXXXx+++;;;;;;++;;;;;;;++xX$$$$$$$$$XX&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&$XX$$$$$$$XXx+;;;;++++++x+;++++++++++X$$$$$$XX$&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&XX$XXXX$$Xx+;;;;;;;;;;;;;;++;;;+;;;;+x$$$XXXX&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&$XXXXxxXXXx++++xxx+++++xxxxxxxxxxx++xX$XxxxXX&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&$XXXXXXXXXXxxxxxXXXxxxxxxxxxxXXX$$XxxXXxxxXx$&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&XXXXXXXXXXxxxxXXXXxxxxxxxxXX$XX$$XxxXXxxxxX&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&XXXXXXXXXx+xxxxxxxxxx+++xXXXXXXXXxXXXXXxX&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$x+xXXXxxx+++xxxxxxxx+++xXXxxXxxxx+xXxx$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$x++xxxx+++++xxx++++x++xxx++x+++++x+x&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&$X$$$X+;;++++++++++++x+xx+++++++++;;;;x$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&$xx$$$$$X+;;;;;;;;+++++++++;;;;;;;;;;x$$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&X+;+$$$XXXXx++;;;;;;;;;;;;;;;;;;;;;+x$$$$$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&$+;;;X$$XXXXXXXxxxx+;::::;;;:;;;+xXX$$$$$$XX&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&$Xxx+;+xXXXXXxxxXXXXXxxxxx+++xX$$$$$$$$$$$$x+&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&$XXxxx++;;+xxxxxxxxXXXXxxxxxxX$$$$$$X$$$$$$$x;$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&$$Xxxxxxx+;;;++xxxxxxXXXXxxxxxX$$X$$$$$$$$$$$+;X&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&$x+xXXx+++xxxx+;;++xxxxxxxXXXXxxxxxXX$$$$$$$$$$X;;X&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&$XXx+;+xXxx+++xxxxx++++xxxxxxxxXXXxxxxXXX$$$$$$$$$Xx:+X$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&$Xxxx++x+;;;+xxx++;+xxxxxxx++xxxxxxxxxXXXXXXX$$$X$$$$$Xx;:xxxX&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&$$$X+++++++++++;;;+x++++++xxxxxxxxxxxxxxxxxXXXXXX$$$$$$$$$XX;:+xXxxXX$&&&&&&&&&&&&&&&&&&&&&&&&&
&$$$Xxx++++++++++xx++;;;+++++++++xxxxxxxxxxxxxxxxxxxXXXXX$$$$$$X;:+xXXxxxxxXX$&&&&&&&&&&&&&&&&&&&&&&
$XXXXxxxxxxxxxxxxxxxxx++++xxxx+xxxXXxXXXXXXXXXXXXXXXXXX$$$$$$$X+;+XXXXXXXXXXXXXX$&&&&&&&&&&&&&&&&&&&`;

  const text = ascii;
  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    const intervalSpeed = 1;

    const intervalId = setInterval(() => {
      if (i < text.length) {
        setI((prevI) => prevI + 5);
        setDisplayedText(text.substring(0, i + 5));
      } else {
        clearInterval(intervalId);
      }
    }, intervalSpeed);

    return () => clearInterval(intervalId);
  }, [i, text]);

  return (
    <section
      className="section flex lg:mt-40 justify-center w-full lg:h-screen"
      data-aos="fade-in"
      style={{ backgroundColor, color }}
    >
      <main className="max-lg:mt-20 max-lg:w-screen max-sm:w-full max-lg:px-4">
        <article className="grid grid-cols-2 max-md:grid-cols-1 duration-500">
          <div className="max-md:mx-auto max-md:w-96 max-sm:w-72">
            <h1
              className={`text-6xl font-bold mb-4 ${
                language === "ja" ? "font-hiraKakuPro" : ""
              }`}
              data-aos="fade-up"
            >
              {language === "en" ? "Angus Blomley" : "アンガス・ブロムリー"}
            </h1>
            <h2
              className={`text-2xl mb-8 ${
                language === "ja" ? "font-hiraKakuPro" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {language === "en"
                ? "Full Stack Developer & Language Enthusiast"
                : "フルスタック開発者＆言語愛好家"}
            </h2>
            <p
              className={`text-lg mb-8 max-w-2xl ${
                language === "ja" ? "font-hiraKakuPro" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {language === "en"
                ? "Crafting digital experiences with code and creativity. Passionate about building intuitive web applications and bridging cultural gaps through technology."
                : "コードと創造性でデジタル体験を作り出します。直感的なウェブアプリケーションの構築と、テクノロジーを通じた文化的ギャップの架け橋に情熱を注いでいます。"}
            </p>
            <div className="flex gap-4" data-aos="fade-up" data-aos-delay="600">
              <Link
                href="/about"
                className={`bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors ${
                  language === "ja" ? "font-hiraKakuPro" : ""
                }`}
              >
                {language === "en" ? "Learn More" : "詳しく見る"}
              </Link>
              <Link
                href="/contact"
                className={`bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors ${
                  language === "ja" ? "font-hiraKakuPro" : ""
                }`}
              >
                {language === "en" ? "Get in Touch" : "お問い合わせ"}
              </Link>
            </div>
            <div id="links" className="grid grid-cols-1 mb-20">
              <h3 className="font-ibmPlexMono mb-2">
                {language === "en" ? (
                  "Work:"
                ) : (
                  <span className="font-hiraKakuPro">仕事:</span>
                )}
              </h3>
              <Link
                href="/work/pwg"
                className="text-[0.9em] after:inline-block bg-inherit opacity-75 p-1 px-2 no-underline font-ibmPlexMono hover:opacity-100 hover:bg-opacity-10 hover:bg-white rounded-md transition-all duration-75 -ml-2 w-fit flex items-center gap-2 group"
              >
                - PWG Windows & Doors
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="h-2.5 w-2.5 transition-opacity"
                  style={{
                    color: isDarkMode
                      ? "var(--foreground-color-dark)"
                      : "var(--foreground-color-light)",
                  }}
                />
              </Link>
              <Link
                href="/work/vocabo"
                className="text-[0.9em] bg-inherit opacity-75 p-1 px-2 no-underline font-ibmPlexMono hover:opacity-100 hover:bg-opacity-10 hover:bg-white rounded-md transition-all duration-75 -ml-2 w-fit flex items-center gap-2 group"
              >
                - Vocabo
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="h-2.5 w-2.5 transition-opacity"
                  style={{
                    color: isDarkMode
                      ? "var(--foreground-color-dark)"
                      : "var(--foreground-color-light)",
                  }}
                />
              </Link>
              <Link
                href="/work/openfern"
                className="text-[0.9em] bg-inherit opacity-75 p-1 px-2 no-underline font-ibmPlexMono hover:opacity-100 hover:bg-opacity-10 hover:bg-white rounded-md transition-all duration-75 -ml-2 w-fit flex items-center gap-2 group"
              >
                -{" "}
                {language === "en" ? (
                  "Open Fern Studio"
                ) : (
                  <span className="font-hiraKakuPro">
                    オープンファーンスタジオ
                  </span>
                )}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="h-2.5 w-2.5 transition-opacity"
                  style={{
                    color: isDarkMode
                      ? "var(--foreground-color-dark)"
                      : "var(--foreground-color-light)",
                  }}
                />
              </Link>
              <Link
                href="/work/beFirst"
                className="text-[0.9em] bg-inherit opacity-75 p-1 px-2 no-underline font-ibmPlexMono hover:opacity-100 hover:bg-opacity-10 hover:bg-white rounded-md transition-all duration-75 -ml-2 w-fit flex items-center gap-2 group"
              >
                - Be First
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="h-2.5 w-2.5 transition-opacity"
                  style={{
                    color: isDarkMode
                      ? "var(--foreground-color-dark)"
                      : "var(--foreground-color-light)",
                  }}
                />
              </Link>

              <h3 className="font-ibmPlexMono mt-3 mb-1">
                {language === "en" ? (
                  "Projects:"
                ) : (
                  <span className="font-hiraKakuPro">プロジェクト:</span>
                )}
              </h3>
              <Link
                href="/work/stringBox"
                className="text-[0.9em] bg-inherit opacity-75 p-1 px-2 no-underline font-ibmPlexMono hover:opacity-100 hover:bg-opacity-10 hover:bg-white rounded-md transition-all duration-75 -ml-2 w-fit flex items-center gap-2 group"
              >
                -{" "}
                {language === "en" ? (
                  "String Box"
                ) : (
                  <span className="font-hiraKakuPro">ストリングボックス</span>
                )}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="h-2.5 w-2.5 transition-opacity"
                  style={{
                    color: isDarkMode
                      ? "var(--foreground-color-dark)"
                      : "var(--foreground-color-light)",
                  }}
                />
              </Link>
              <Link
                href="/work/celestialObjectTracker"
                className="text-[0.9em] bg-inherit opacity-75 p-1 px-2 no-underline font-ibmPlexMono hover:opacity-100 hover:bg-opacity-10 hover:bg-white rounded-md transition-all duration-75 -ml-2 w-fit flex items-center gap-2 group"
              >
                - Celestial Object Tracker
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="h-2.5 w-2.5 transition-opacity"
                  style={{
                    color: isDarkMode
                      ? "var(--foreground-color-dark)"
                      : "var(--foreground-color-light)",
                  }}
                />
              </Link>
              <Link
                href="/work/meetly"
                className="text-[0.9em]bg-inherit opacity-75 p-1 px-2 no-underline font-ibmPlexMono hover:opacity-100 hover:bg-opacity-10 hover:bg-white rounded-md transition-all duration-75 -ml-2 w-fit flex items-center gap-2 group"
              >
                - Meetly
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="h-2.5 w-2.5 transition-opacity"
                  style={{
                    color: isDarkMode
                      ? "var(--foreground-color-dark)"
                      : "var(--foreground-color-light)",
                  }}
                />
              </Link>

              <h3 className="font-ibmPlexMono mt-3 mb-1">
                {" "}
                {language === "en" ? "Profiles:" : "プロフィール："}
              </h3>
              <a
                href="https://www.codecademy.com/users/AngusBlomley/achievements"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.9em] bg-inherit opacity-75 p-1 px-2 no-underline font-ibmPlexMono hover:opacity-100 hover:bg-opacity-10 hover:bg-white rounded-md transition-all duration-75 -ml-2 w-fit flex items-center gap-2 group"
              >
                - Codecademy
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="h-2.5 w-2.5 transition-opacity"
                  style={{
                    color: isDarkMode
                      ? "var(--foreground-color-dark)"
                      : "var(--foreground-color-light)",
                  }}
                />
              </a>
              <a
                href="https://github.com/AngusBlomley"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.9em] bg-inherit opacity-75 p-1 px-2 no-underline font-ibmPlexMono hover:opacity-100 hover:bg-opacity-10 hover:bg-white rounded-md transition-all duration-75 -ml-2 w-fit flex items-center gap-2 group"
              >
                - GitHub
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="h-2.5 w-2.5 transition-opacity"
                  style={{
                    color: isDarkMode
                      ? "var(--foreground-color-dark)"
                      : "var(--foreground-color-light)",
                  }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/angus-blomley-82b45a177/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.9em] bg-inherit opacity-75 p-1 px-2 no-underline font-ibmPlexMono hover:opacity-100 hover:bg-opacity-10 hover:bg-white rounded-md transition-all duration-75 -ml-2 w-fit flex items-center gap-2 group"
              >
                - LinkedIn
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="h-2.5 w-2.5 transition-opacity"
                  style={{
                    color: isDarkMode
                      ? "var(--foreground-color-dark)"
                      : "var(--foreground-color-light)",
                  }}
                />
              </a>
              <div
                className="text-[0.9em] bg-inherit opacity-75 p-1 px-2 no-underline font-ibmPlexMono hover:opacity-100 hover:bg-opacity-10 hover:bg-white rounded-md transition-all duration-75 -ml-2 w-fit cursor-pointer flex items-center gap-2 group"
                onClick={handleResumeClick}
              >
                - {language === "en" ? "Resume" : "履歴書"}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="h-2.5 w-2.5 transition-opacity"
                  style={{
                    color: isDarkMode
                      ? "var(--foreground-color-dark)"
                      : "var(--foreground-color-light)",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mx-auto max-lg:mt-5 max-lg:mb-5 max-md:row-start-2 overflow-hidden">
            <pre
              id="text"
              className="whitespace-pre font-mono text-[10px] leading-[10px] tracking-normal transform-none max-xl:text-[8px] max-xl:leading-[8px] max-lg:w-[375px] max-lg:h-[400px] max-sm:w-full max-lg:text-[7px] max-lg:leading-[7px] max-sm:leading-[5px] max-sm:text-[5px]"
            >
              <p className="text-wrap bg-[#121212] text-white">
                {displayedText}
              </p>
            </pre>
          </div>

          <Link
            href="/#about"
            className="col-span-2 max-md:col-span-1 w-fit mx-auto"
          >
            <div className="text-center mx-auto mt-20 hover:text-green-400 group">
              {language === "en" ? (
                <p>LEARN MORE</p>
              ) : (
                <p className="font-hiraKakuPro">続きを読む</p>
              )}
              <FontAwesomeIcon
                icon={faArrowDown}
                size="1x"
                className="group-hover:animate-bounce -translate-y-1 mt-2"
              />
            </div>
          </Link>
        </article>
      </main>

      {pdfVisible && (
        <div className="fixed -top-48 inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-75"
            onClick={() => setPdfVisible(false)}
          ></div>
          <div className="relative w-4/5 h-5/6">
            <iframe
              title="Angus-Blomley.pdf"
              src="/pdf/Angus-Blomley.pdf"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Main;
