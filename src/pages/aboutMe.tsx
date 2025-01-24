/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import WorldMap from "@/components/WorldMap";
import { useDarkMode } from "@/contexts/darkModeContext";
import { useLanguage } from "@/contexts/language";
import HeaderGlobal from "@/components/globals/headerGlobal";
import AOS from "aos";
import "aos/dist/aos.css";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { FaMailBulk } from "react-icons/fa";

const visitedCountries = [
  {
    country: "USA",
    coordinates: [39.1653, -86.5264],
    description: {
      en: "Attended a two-week diving camp at Indiana University to improve springboard and platform skills.",
      ja: "インディアナ大学で2週間のダイビングキャンプに参加し、スプリングボードとプラットフォームのスキルを向上させました。",
    },
  },
  {
    country: "GBR",
    coordinates: [51.5074, -0.1278],
    description: {
      en: "Born and raised in the UK, studied Broadcast Engineering at Ravensbourne University London for three years, engineering and programming.",
      ja: "イギリスで生まれ育ち、ロンドンのレイヴンズボーン大学で3年間放送工学を学び、エンジニアリングとプログラミングを専攻しました。",
    },
  },
  { country: "USA-las-vegas", coordinates: [37.1699, -112.1398] },
  { country: "AUS", coordinates: [-14.8688, 151.2093] },
  { country: "CHN", coordinates: [39.9042, 116.4074] },
  { country: "PRT", coordinates: [39.3999, -8.2245] },
  { country: "ESP", coordinates: [40.4637, -3.7492] },
  { country: "AUT", coordinates: [47.5162, 14.5501] },
  { country: "SGP", coordinates: [11.3521, 103.8198] },
  { country: "FRA", coordinates: [46.8566, 2.3522] },
  { country: "NLD", coordinates: [50.8676, 4.9041] },
  { country: "KEN", coordinates: [10.0236, 37.9062] },
];

export default function AboutMe() {
  const { isDarkMode } = useDarkMode();
  const { language } = useLanguage();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const backgroundColor = isDarkMode
    ? "var(--background-color-dark)"
    : "var(--background-color-light)";
  const color = isDarkMode
    ? "var(--foreground-color-dark)"
    : "var(--foreground-color-light)";

  return (
    <>
      <HeaderGlobal />
      <main
        className="min-h-screen pt-10 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor, color }}
      >
        <div data-aos="fade-in">
          <div className="z-50 mt-10 sm:mt-20 absolute">
            <h1
              className="text-xl font-hiraKakuPro text-center mb-8 sm:ml-80 z-50 hidden xl:block"
              data-aos="fade"
              data-aos-delay="1000"
              data-aos-duration="2000"
            >
              {language === "en" ? "Some places I have been" : "訪れた場所"}
            </h1>
          </div>
          <section>
            <div className="w-full h-full flex items-center justify-center">
              <WorldMap
                visitedCountries={
                  visitedCountries as {
                    country: string;
                    coordinates: [number, number];
                    description?: { en: string; ja: string };
                  }[]
                }
              />
            </div>
            <div
              className="text-center mx-auto -translate-y-10 sm:-translate-y-20 hover:text-green-400 group z-50 cursor-pointer max-lg:hidden"
              onClick={() => {
                document
                  .getElementById("gbr")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <p>{language === "en" ? "LEARN MORE" : "詳しく見る"}</p>
              <FontAwesomeIcon
                icon={faArrowDown}
                size="1x"
                className="group-hover:animate-bounce -translate-y-1 mt-2"
              />
            </div>
          </section>

          <div className="max-w-6xl mx-auto">
            <section id="gbr" className="mb-8 sm:mb-12 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4 text-center sm:text-left">
                {language === "en"
                  ? "Hi, I'm Angus Blomley"
                  : "こんにちは、アンガス・ブロムリーです"}
              </h2>
              <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-6 sm:gap-8">
                <p
                  className={`italic font-karla text-lg text-center sm:text-left ${
                    language === "ja" ? "font-hiraKakuPro" : ""
                  }`}
                >
                  {language === "en"
                    ? "I'm a software engineer with a passion for creating efficient, high-performance web applications. My journey into languages began with Japanese, where I combine traditional mentorship with modern technology like spaced repetition and Anki to optimize my learning. When I'm not immersed in code or language study, I explore different cultures through travel - having experienced 12 countries and counting! I believe in leveraging technology to create powerful learning opportunities, whether it's in software development or language acquisition."
                    : "効率的で高性能なウェブアプリケーションの作成に情熱を注ぐソフトウェアエンジニアです。言語への旅は日本語から始まり、伝統的な指導と間隔反復やAnkiなどの最新技術を組み合わせて学習を最適化しています。コーディングや言語学習に没頭していない時は、旅行を通じて異なる文化を探求しています - これまでに12カ国を経験し、その数は増え続けています！ソフトウェア開発であれ言語習得であれ、テクノロジーを活用して強力な学習機会を創出することを信念としています。"}
                </p>
                <Image
                  src="/images/about/portrait.jpeg"
                  alt="Angus Blomley"
                  width={200}
                  height={200}
                  className="rounded-full shadow-xl w-48 h-48 sm:w-[200px] sm:h-[200px] sm:mx-20"
                />
              </div>
            </section>

            <section
              id="language-journey"
              className="mb-8 sm:mb-12 scroll-mt-24"
            >
              <h2 className="text-2xl font-semibold mb-4 text-center sm:text-left">
                {language === "en"
                  ? "Language Learning Journey"
                  : "言語学習の旅"}
              </h2>
              <div className="space-y-4">
                <p
                  className={`italic font-karla text-lg text-center sm:text-left ${
                    language === "ja" ? "font-hiraKakuPro" : ""
                  }`}
                >
                  {language === "en"
                    ? "My language learning journey has been deeply intertwined with my love for technology and different cultures. Through immersion-based learning and leveraging modern language learning tools, I've been steadily progressing in Japanese. I believe in the power of combining traditional study methods with innovative technology to create effective learning experiences."
                    : "私の言語学習の旅は、テクノロジーと異文化への愛と深く結びついています。没入型学習と最新の言語学習ツールを活用することで、日本語の習得を着実に進めています。伝統的な学習方法と革新的なテクノロジーを組み合わせることで、効果的な学習体験を生み出すことができると信じています。"}
                </p>
              </div>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-center sm:text-left">
                {language === "en" ? "Global Perspective" : "グローバルな視点"}
              </h2>
              <div className="space-y-4">
                <p
                  className={`italic font-karla text-lg text-center sm:text-left ${
                    language === "ja" ? "font-hiraKakuPro" : ""
                  }`}
                >
                  {language === "en"
                    ? "Born and raised in the United Kingdom, I pursued my higher education at Ravensbourne University, where I studied Broadcast Engineering for three years. This program gave me a deep understanding of signal processing and low-level programming, forming the foundation of my technical expertise."
                    : "イギリスで生まれ育ち、レイヴンズボーン大学で3年間放送工学を学びました。このプログラムを通じて、信号処理と低レベルプログラミングについての深い理解を得ることができ、それが私の技術的専門知識の基礎となっています。"}
                </p>
                <p
                  className={`text-center sm:text-left ${
                    language === "ja" ? "font-hiraKakuPro" : ""
                  }`}
                >
                  {language === "en"
                    ? "Having traveled to 12 countries across multiple continents, I've gained a global perspective that influences both my personal and professional life. Each journey has contributed to my understanding of different cultures and approaches to problem-solving, making me a more adaptable and empathetic developer."
                    : "複数の大陸にまたがる12カ国を旅することで、私の個人生活と職業生活の両方に影響を与えるグローバルな視点を得ることができました。それぞれの旅は、異なる文化や問題解決へのアプローチについての理解を深め、より適応力があり共感できる開発者となる助けとなっています。"}
                </p>
              </div>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-center sm:text-left">
                {language === "en"
                  ? "My Programming Journey"
                  : "プログラミングの旅"}
              </h2>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
                  <div className="w-full sm:w-1/2">
                    <p
                      className={`italic font-karla text-lg text-center sm:text-left ${
                        language === "ja" ? "font-hiraKakuPro" : ""
                      }`}
                    >
                      {language === "en"
                        ? "My programming journey began in 2014 at the age of 16, when I first discovered my passion for coding. Starting with basic web development, I quickly progressed through various programming languages and technologies."
                        : "私のプログラミングの旅は、16歳だった2014年にコーディングへの情熱を見出したことから始まりました。基本的なウェブ開発から始め、様々なプログラミング言語とテクノロジーを素早く習得していきました。"}
                    </p>
                    <p
                      className={`mt-4 italic font-karla text-lg text-center sm:text-left ${
                        language === "ja" ? "font-hiraKakuPro" : ""
                      }`}
                    >
                      {language === "en" ? (
                        <>
                          Through platforms like{" "}
                          <a
                            href="https://www.codecademy.com/users/AngusBlomley/achievements"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600"
                          >
                            Codecademy
                          </a>
                          , I built a strong foundation in programming
                          fundamentals and continued to expand my skills through
                          practical projects, formal education and mentorship.
                        </>
                      ) : (
                        <>
                          <a
                            href="https://www.codecademy.com/users/AngusBlomley/achievements"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600"
                          >
                            Codecademy
                          </a>
                          などのプラットフォームを通じて、プログラミングの基礎を固め、実践的なプロジェクト、正規教育、メンターシップを通じてスキルを拡大し続けています。
                        </>
                      )}
                    </p>
                  </div>
                  <Link
                    href="https://www.codecademy.com/users/AngusBlomley/achievements"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 flex justify-center"
                  >
                    <Image
                      src="/images/about/certificate.png"
                      alt="Codecademy"
                      width={200}
                      height={200}
                      className="rounded-lg shadow-xl hover:brightness-75 duration-200"
                    />
                  </Link>
                </div>
              </div>
            </section>

            <section id="usa" className="mb-8 sm:mb-12 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4 text-center sm:text-left">
                {language === "en"
                  ? "My Experience at Indiana University"
                  : "インディアナ大学での経験"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex justify-center items-center overflow-hidden h-[300px] sm:h-[550px]">
                  <video
                    src="/videos/diving.mp4"
                    autoPlay
                    muted
                    loop
                    className="rounded-lg shadow-xl w-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-center sm:text-left">
                    {language === "en"
                      ? "Indiana University Diving Academy"
                      : "インディアナ大学ダイビングアカデミー"}
                  </h3>
                  <p
                    className={`italic font-karla text-lg text-center sm:text-left ${
                      language === "ja" ? "font-hiraKakuPro" : ""
                    }`}
                  >
                    {language === "en"
                      ? "During my time at Indiana University, I had the incredible opportunity to participate in an intensive two-week diving camp. This experience was focused on improving both my springboard and platform diving techniques under the guidance of experienced coaches."
                      : "インディアナ大学での滞在中、2週間の集中ダイビングキャンプに参加する素晴らしい機会を得ました。この経験は、経験豊富なコーチの指導のもと、スプリングボードとプラットフォームの両方のダイビング技術の向上に焦点を当てたものでした。"}
                  </p>
                  <p
                    className={`italic font-karla text-lg text-center sm:text-left ${
                      language === "ja" ? "font-hiraKakuPro" : ""
                    }`}
                  >
                    {language === "en"
                      ? "The camp not only enhanced my diving skills but also allowed me to train in world-class facilities and connect with other passionate divers from around the globe. The technical expertise and confidence I gained during this program have been invaluable to my development as a diver."
                      : "このキャンプは、ダイビングスキルを向上させただけでなく、世界クラスの施設でトレーニングを行い、世界中の情熱的なダイバーたちと交流する機会を与えてくれました。このプログラムで得た技術的な専門知識と自信は、ダイバーとしての成長に計り知れない価値をもたらしました。"}
                  </p>
                  <div>
                    <h4 className="font-medium mb-2 text-center sm:text-left">
                      Key Takeaways:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-center sm:text-left">
                      <li>Advanced springboard technique training</li>
                      <li>Platform diving skill development</li>
                      <li>Professional coaching and feedback</li>
                      <li>Experience with Olympic-standard facilities</li>
                      <li>Learned how to focus the mind and body</li>
                      <li>Meditation and mental health sessions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8 sm:mb-12 pb-8 sm:pb-12">
              <h2 className="text-2xl font-semibold mb-4 sm:text-left">
                {language === "en" ? "Looking Forward" : "今後の展望"}
              </h2>
              <div>
                <div className="space-y-4">
                  <p className="italic font-karla text-lg sm:text-left">
                    {language === "en"
                      ? "Today, I continue to push the boundaries of what's possible in software development, combining my broadcast engineering background with modern web technologies. I'm particularly excited about the intersection of performance optimization and user experience."
                      : "今日、私はソフトウェア開発における可能な限りの境界を押し広げています。放送工学の背景と最新のウェブ技術を組み合わせることで、パフォーマンスの最適化とユーザー体験の交差点に興味を持っています。"}
                  </p>
                  <p className="italic font-karla text-lg sm:text-left">
                    {language === "en"
                      ? "I'm always open to discussing new projects, technical challenges, or potential collaborations. Whether you're interested in working together or just want to connect, feel free to reach out through email using the contact form."
                      : "新しいプロジェクト、技術的な課題、または潜在的なコラボレーションについて話し合うことに常に開いています。一緒に働くか、ただ接続したいだけなら、連絡を取るのは自由です。"}
                  </p>
                  <div className="flex justify-center pt-4">
                    <Link
                      href="/#contact"
                      className="inline-flex border items-center px-6 py-3 text-center mx-auto hover:border-green-400 hover:text-green-400 group z-50 cursor-pointer text-white font-medium rounded-lg transition-colors duration-200"
                    >
                      {language === "en" ? "Get in Touch" : "お問い合わせ"}
                      <FaMailBulk className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
