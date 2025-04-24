// import React from "react";
// import HeaderGlobal from "@/components/globals/headerGlobal";
// import Footer from "@/components/globals/footer";
// import { useDarkMode } from "@/contexts/darkModeContext";
// import Image from "next/image";
// import { WorkNavigation } from "@/components/work/WorkNavigation";

// const StringBox = () => {
//   const { isDarkMode } = useDarkMode();
//   const backgroundColor = isDarkMode
//     ? "var(--background-color-dark)"
//     : "var(--background-color-light)";
//   const color = isDarkMode
//     ? "var(--foreground-color-dark)"
//     : "var(--foreground-color-light)";

//   return (
//     <>
//       <HeaderGlobal />
//       <div id="stringBox" style={{ backgroundColor, color }}>
//         <div className="container mx-auto px-4 py-8">
//           <h1 className="text-4xl mt-16 font-bold mb-4">
//             StringBox - Innovative Business Card
//           </h1>
//           <p className="text-lg">
//             The StringBox is a digital business card solution that enables users
//             to create a personalized profile and share it via QR code with
//             others. The application allows for seamless connectivity and
//             networking between professionals.
//           </p>
//           <div className="grid grid-cols-3 max-lg:grid-cols-1 mt-8">
//             <section className="col-span-1 pr-8">
//               <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
//               <div className="mt-4">
//                 <p>
//                   StringBox is a digital business card application designed to
//                   simplify professional networking. The application allows users
//                   to create a profile with their professional details, contact
//                   information, and links to their social media platforms. Users
//                   can then share this profile with others via QR code, making it
//                   easy to connect and network at events or meetings.
//                 </p>
//                 <h3 className="text-xl font-semibold mt-4 mb-2">
//                   Key Features
//                 </h3>
//                 <ul className="list-disc pl-5">
//                   <li>User profile creation and management</li>
//                   <li>QR code generation for profile sharing</li>
//                   <li>Responsive design for all devices</li>
//                   <li>Seamless scanning and connection</li>
//                   <li>Real-time profile updates</li>
//                 </ul>
//               </div>
//             </section>

//             <section className="col-span-2 mb-8">
//               <h2 className="text-2xl font-semibold mb-2">Technology Stack</h2>
//               <p>
//                 StringBox was developed using a modern technology stack to
//                 ensure a robust and responsive user experience.
//               </p>
//               <div className="grid grid-cols-3 gap-4 mt-4 max-md:grid-cols-1">
//                 <div className="border border-gray-300 rounded-lg p-4 border-opacity-20">
//                   <h3 className="text-xl font-semibold mb-2">Frontend</h3>
//                   <ul className="list-disc pl-5">
//                     <li>React</li>
//                     <li>Next.js</li>
//                     <li>Tailwind CSS</li>
//                     <li>QR Code Generator</li>
//                     <li>PWA capability</li>
//                   </ul>
//                 </div>
//                 <div className="border border-gray-300 rounded-lg p-4 border-opacity-20">
//                   <h3 className="text-xl font-semibold mb-2">Backend</h3>
//                   <ul className="list-disc pl-5">
//                     <li>Node.js</li>
//                     <li>Express</li>
//                     <li>MongoDB</li>
//                     <li>RESTful API</li>
//                     <li>JWT Authentication</li>
//                   </ul>
//                 </div>
//                 <div className="border border-gray-300 rounded-lg p-4 border-opacity-20">
//                   <h3 className="text-xl font-semibold mb-2">
//                     Development Tools
//                   </h3>
//                   <ul className="list-disc pl-5">
//                     <li>Git & GitHub</li>
//                     <li>Docker</li>
//                     <li>Jest for testing</li>
//                     <li>CI/CD pipelines</li>
//                     <li>Vercel deployment</li>
//                   </ul>
//                 </div>
//               </div>
//             </section>
//           </div>

//           <div className="my-8">
//             <h2 className="text-2xl font-semibold mb-4">Project Screenshots</h2>
//             <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
//               <div className="border border-gray-300 rounded-lg overflow-hidden border-opacity-20">
//                 <Image
//                   src="/images/stringbox/landing.png"
//                   alt="StringBox Landing Page"
//                   width={400}
//                   height={300}
//                   className="w-full"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-xl font-semibold mb-2">Landing Page</h3>
//                   <p>
//                     The main landing page of StringBox, showcasing the app&apos;s
//                     features and benefits.
//                   </p>
//                 </div>
//               </div>
//               <div className="border border-gray-300 rounded-lg overflow-hidden border-opacity-20">
//                 <Image
//                   src="/images/stringbox/profile.png"
//                   alt="User Profile Page"
//                   width={400}
//                   height={300}
//                   className="w-full"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-xl font-semibold mb-2">User Profile</h3>
//                   <p>
//                     The user profile page where users can view and edit their
//                     professional information.
//                   </p>
//                 </div>
//               </div>
//               <div className="border border-gray-300 rounded-lg overflow-hidden border-opacity-20">
//                 <Image
//                   src="/images/stringbox/qrcode.png"
//                   alt="QR Code Sharing"
//                   width={400}
//                   height={300}
//                   className="w-full"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-xl font-semibold mb-2">
//                     QR Code Sharing
//                   </h3>
//                   <p>
//                     The QR code generation and sharing feature, making it easy
//                     to connect with others.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="my-8">
//             <h2 className="text-2xl font-semibold mb-4">Development Process</h2>
//             <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
//               <div className="border border-gray-300 rounded-lg p-4 border-opacity-20">
//                 <h3 className="text-xl font-semibold mb-2">
//                   Design & Planning
//                 </h3>
//                 <p>
//                   The development process began with thorough planning and
//                   design. User personas were created to understand the target
//                   audience, and wireframes were designed to map out the user
//                   experience. The technology stack was carefully selected to
//                   ensure scalability and performance.
//                 </p>
//               </div>
//               <div className="border border-gray-300 rounded-lg p-4 border-opacity-20">
//                 <h3 className="text-xl font-semibold mb-2">Implementation</h3>
//                 <p>
//                   The implementation phase followed an agile methodology, with
//                   regular sprints and feature prioritization. The frontend and
//                   backend were developed in parallel, with continuous
//                   integration and testing to ensure code quality and
//                   functionality.
//                 </p>
//               </div>
//               <div className="border border-gray-300 rounded-lg p-4 border-opacity-20">
//                 <h3 className="text-xl font-semibold mb-2">
//                   Testing & Validation
//                 </h3>
//                 <p>
//                   Rigorous testing was conducted to ensure the application met
//                   all requirements and performed optimally. This included unit
//                   testing, integration testing, and user acceptance testing.
//                   Feedback from test users was incorporated to improve the user
//                   experience.
//                 </p>
//               </div>
//               <div className="border border-gray-300 rounded-lg p-4 border-opacity-20">
//                 <h3 className="text-xl font-semibold mb-2">
//                   Deployment & Maintenance
//                 </h3>
//                 <p>
//                   The application was deployed using CI/CD pipelines to ensure
//                   smooth and reliable releases. Post-deployment, a maintenance
//                   plan was established to address bugs, implement new features,
//                   and ensure the application remains up-to-date with the latest
//                   security standards.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="my-8">
//             <h2 className="text-2xl font-semibold mb-4">Future Enhancements</h2>
//             <p>
//               The development of StringBox is an ongoing process, with several
//               enhancements planned for future releases:
//             </p>
//             <ul className="list-disc pl-5 mt-2">
//               <li>Integration with professional networks like LinkedIn</li>
//               <li>
//                 Enhanced analytics for tracking profile views and interactions
//               </li>
//               <li>Customizable templates for business cards</li>
//               <li>Direct messaging capabilities between users</li>
//               <li>
//                 Advanced search functionality to find professionals by industry
//                 or skills
//               </li>
//             </ul>
//           </div>

//           <div className="mt-8 mb-16">
//             <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
//             <p>
//               StringBox represents a significant step forward in professional
//               networking, providing a digital solution to the traditional
//               business card. By leveraging modern web technologies and focusing
//               on user experience, StringBox offers a seamless and efficient way
//               for professionals to connect and share their information.
//             </p>
//             <a
//               href="https://github.com/your-username/stringbox"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
//             >
//               View on GitHub
//             </a>
//           </div>

//           <WorkNavigation currentPath="/work/stringBox" />
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default StringBox;
