import React, { JSX, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../app/globals.css";
import Link from "next/link";
import Image from "next/image";
import { useDarkMode } from "@/contexts/darkModeContext";
import { useLanguage } from "@/contexts/language";

// Add TypeScript interface for media items
interface MediaItem {
  type: "video" | "image";
  src: string;
  link: string;
  title: string;
}

function Work(): JSX.Element {
  const { isDarkMode } = useDarkMode();
  const { language } = useLanguage();
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleAOSComplete = () => {
      setAnimationComplete(true);
    };

    const timer = setTimeout(handleAOSComplete, 1000);

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    };

    const carousel = document.querySelector(".carousel-wrapper");
    carousel?.addEventListener("touchmove", handleTouchMove as EventListener);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      carousel?.removeEventListener(
        "touchmove",
        handleTouchMove as EventListener
      );
    };
  }, []);

  const color = isDarkMode
    ? "var(--foreground-color-dark)"
    : "var(--foreground-color-light)";

  const media: MediaItem[] = [
    {
      type: "video",
      src: "/videos/stringBox.mp4",
      link: "/work/stringBox",
      title:
        language === "en"
          ? "String Box Project"
          : "ストリングボックスプロジェクト",
    },
    {
      type: "image",
      src: "/images/work/cst2.jpg",
      link: "/work/celestialObjectTracker",
      title: language === "en" ? "Final Major Project" : "卒業制作",
    },
    {
      type: "video",
      src: "/videos/meetly.mp4",
      link: "/work/meetly",
      title: "Meetly",
    },
    {
      type: "image",
      src: "/images/work/openfern.png",
      link: "/work/openfern",
      title: "Open Fern Studio",
    },
    {
      type: "image",
      src: "/images/index/vocabo.png",
      link: "/work/vocabo",
      title: "Vocabo",
    },
    {
      type: "image",
      src: "/images/index/pwg.png",
      link: "/work/pwg",
      title: "PWG Windows & Doors",
    },
    {
      type: "video",
      src: "/videos/beFirst.mp4",
      link: "/work/beFirst",
      title:
        language === "en"
          ? "Be First Barking Heritage Videos"
          : "Be First バーキング・ヘリテージ動画",
    },
    {
      type: "video",
      src: "/videos/misuzu.mp4",
      link: "/work/misuzuPortfolio",
      title:
        language === "en" ? "Misuzu Collaboration" : "美涼とのコラボレーション",
    },
  ];

  return (
    <section
      id="work"
      style={{
        color,
        scrollMarginTop: animationComplete ? "100px" : "300px",
      }}
      className="py-20 lg:mt-40 max-lg:mt-16 flex flex-col justify-center items-center z-10"
      aria-label={
        language === "en" ? "Projects Section" : "プロジェクトセクション"
      }
    >
      <div className="z-10" data-aos="fade-up">
        <h2
          className={`text-4xl text-center mb-24 max-md:mb-16 ${
            language === "ja" ? "font-hiraKakuPro" : ""
          }`}
          data-aos="fade-in"
        >
          {language === "en" ? "Projects" : "プロジェクト"}
        </h2>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="shadow-2xl w-full max-w-screen-lg h-[50vh] max-lg:h-[80vh] carousel-wrapper"
      >
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className="w-full h-full lg:rounded-lg"
        >
          {media.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center relative w-full"
            >
              <Link
                href={item.link}
                className="absolute w-full h-full hover:brightness-75 duration-200"
              >
                {item.type === "video" ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={item.src}
                    title={item.title}
                    className="object-cover filter brightness-75 w-full h-full shadow-lg rounded-lg max-lg:rounded-none"
                    onError={(e) => {
                      console.error(`Error loading video: ${item.src}`);
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover filter brightness-75 w-full h-full shadow-lg rounded-lg max-lg:rounded-none"
                    onError={() =>
                      console.error(`Error loading image: ${item.src}`)
                    }
                  />
                )}
              </Link>
              <Link
                href={item.link}
                className="absolute w-full bg-black bg-opacity-40 max-lg:text-center text-white font-hiraKakuPro bottom-0 py-2 px-4"
                aria-label={item.title}
              >
                {item.title}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="swiper-button-prev"
          aria-label={language === "en" ? "Previous slide" : "前のスライド"}
        ></div>
        <div
          className="swiper-button-next"
          aria-label={language === "en" ? "Next slide" : "次のスライド"}
        ></div>
        <div className="swiper-pagination"></div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="600"
        className="text-center mt-8 opacity-75 italic"
      >
        {language === "en"
          ? "Where pixels meet purpose, and coffee meets code. 🚀☕"
          : "ピクセルと目的、コーヒーとコードが出会う場所。🚀☕"}
      </div>
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: white;
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 20px;
        }
        .swiper-pagination-bullet {
          background: white;
        }
      `}</style>
    </section>
  );
}

export default Work;
