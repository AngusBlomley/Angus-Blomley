/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import WorldMap from "@/components/WorldMap";
import { useDarkMode } from "@/contexts/darkModeContext";
import HeaderGlobal from "@/components/globals/headerGlobal";
import AOS from "aos";
import "aos/dist/aos.css";

const visitedCountries = [
  {
    country: "USA",
    coordinates: [39.1653, -86.5264],
    description:
      "Attended a two-week diving camp at Indiana University to improve springboard and platform skills.",
  },
  {
    country: "USA-las-vegas",
    coordinates: [37.1699, -112.1398],
  },
  { country: "AUS", coordinates: [-14.8688, 151.2093] },
  { country: "CHN", coordinates: [39.9042, 116.4074] },
  { country: "PRT", coordinates: [39.3999, -8.2245] },
  { country: "ESP", coordinates: [40.4637, -3.7492] },
  { country: "AUT", coordinates: [47.5162, 14.5501] },
  { country: "SGP", coordinates: [11.3521, 103.8198] },
  { country: "GBR", coordinates: [51.5074, -0.1278] },
  { country: "FRA", coordinates: [46.8566, 2.3522] },
  { country: "NLD", coordinates: [50.8676, 4.9041] },
  { country: "KEN", coordinates: [10.0236, 37.9062] },
];

export default function AboutMe() {
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    AOS.init({
      duration: 1200,
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
      <main className="min-h-screen pt-10" style={{ backgroundColor, color }}>
        <div data-aos="fade-in">
          <section className="mb-12">
            <div className="w-full h-full flex items-center justify-center">
              <WorldMap
                visitedCountries={
                  visitedCountries as {
                    country: string;
                    coordinates: [number, number];
                    description?: string;
                  }[]
                }
              />
            </div>
          </section>

          {/* <div className="max-w-6xl mx-auto px-4">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
              <p className="mb-4">[Your personal introduction here]</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
              <p className="mb-4">[Your journey in tech/career here]</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                Skills & Interests
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Technical Skills</h3>
                  <ul className="list-disc list-inside">
                    <li>Skill 1</li>
                    <li>Skill 2</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Interests</h3>
                  <ul className="list-disc list-inside">
                    <li>Interest 1</li>
                    <li>Interest 2</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Values & Goals</h2>
              <p className="mb-4">[Your values and future goals here]</p>
            </section>

            <section id="usa-experience" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4">
                My Experience in the USA
              </h2>
              <div className="dark:bg-gray-800 rounded-lg">
                <h3 className="text-xl font-medium mb-3">
                  Indiana University Diving Camp
                </h3>
                <p className="mb-4">
                  During my time at Indiana University, I had the incredible
                  opportunity to participate in an intensive two-week diving
                  camp. This experience was focused on improving both my
                  springboard and platform diving techniques under the guidance
                  of experienced coaches.
                </p>
                <p className="mb-4">
                  The camp not only enhanced my diving skills but also allowed
                  me to train in world-class facilities and connect with other
                  passionate divers from around the globe. The technical
                  expertise and confidence I gained during this program have
                  been invaluable to my development as a diver.
                </p>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Key Takeaways:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Advanced springboard technique training</li>
                    <li>Platform diving skill development</li>
                    <li>Professional coaching and feedback</li>
                    <li>Experience with Olympic-standard facilities</li>
                  </ul>
                </div>
              </div>
            </section>
          </div> */}
        </div>
      </main>
    </>
  );
}
