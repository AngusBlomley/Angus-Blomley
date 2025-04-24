import Image from "next/image";
import { useDarkMode } from "@/contexts/darkModeContext";
import Button from "../globals/Button";

function Education() {
  const { isDarkMode } = useDarkMode();
  const backgroundColor = isDarkMode
    ? "var(--background-color-dark)"
    : "var(--background-color-light)";
  const color = isDarkMode
    ? "var(--foreground-color-dark)"
    : "var(--foreground-color-light)";
  const ravensbourneImage = isDarkMode
    ? "/images/index/ravensbourne-white.png"
    : "/images/index/ravensbourne-black.png";

  const handleSeeMoreClick = () => {
    window.open("/pdf/certificate.pdf", "_blank");
  };

  return (
    <section
      id="education"
      style={{ backgroundColor, color }}
      className="py-20 max-md:pt-0 duration-200 overflow-x-hidden"
    >
      <div className=" overflow-x-hidden px-4">
        <h2 className="text-4xl text-center mb-20 max-lg:text-start">
          Building My Foundation
        </h2>
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
                  id="ravensbourne"
                  src={ravensbourneImage}
                  alt="Ravensbourne University"
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
    </section>
  );
}

export default Education;
