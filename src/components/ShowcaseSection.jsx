import React from "react";
import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import TitleHeader from "./TitleHeader";
gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);

  // --- Refs for each project card ---
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const project4Ref = useRef(null);
  const project5Ref = useRef(null); // Added ref for the 5th project
  const project6Ref = useRef(null); // Added ref for the 6th project
  const project7Ref = useRef(null); // Added ref for the 7th project

  useGSAP(() => {
    // --- Animate all 7 project cards ---
    const projects = [
      project1Ref.current,
      project5Ref.current, // Leetcode Tester
      project6Ref.current, // Greenverse
      project7Ref.current, // FaceKey
      project2Ref.current, // Gesture Pointer
      project3Ref.current, // TaskSync AI
      project4Ref.current, // DriveEase
    ];

    projects.forEach((card, index) => {
      if (!card) return; // Failsafe if a ref is null
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2 * index, // Stagger the animation
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100', // Start animation when the top of the card is 100px from the bottom of the viewport
            toggleActions: 'play none none none'
          }
        }
      )
    })
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })
  }, [])

  return (
    <div id="counter">
      <div id="work" ref={sectionRef} className="app-showcase">
        <div className="w-full">
        <TitleHeader title="PROJECTS" sub="" />
          <div className="showcaselayout">

            {/* LEFT SIDE (Corrected Structure) */}
            <div className="first-project-wrapper">
              {/* Project 1 */}
              <div className="project glass-card glass-card-hover p-5" ref={project1Ref}>
                <div className="image-wrapper">
                  <img src="/images/project5.png" alt="Multithreaded Proxy Cache Server" />
                </div>
                <div className="flex items-baseline gap-4 mt-4">
                  <h2 className="text-xl font-semibold">Multithreaded Proxy Cache Server</h2>
                  <a
                    href="https://github.com/ShubhamNegi4/Multi-threaded-proxy-web-server"
                    className="text-blue-500 hover:underline text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
                <p className="text-white-50 text-base mt-2">
                  High-performance multi-threaded proxy server built with C and OpenSSL, featuring dynamic SSL certificate generation, GDSF caching algorithm, and integrated machine learning threat detection.
                </p>
              </div>

              {/* Project 2 on the left side */}
              <div className="project glass-card glass-card-hover p-5" ref={project5Ref}>
                <div className="image-wrapper">
                  <img src="/images/project_leetcode.png" alt="Leetcode Stress Test" />
                </div>
                <div className="flex items-baseline gap-4 mt-4">
                  <h2 className="text-xl font-semibold">Leetcode Stress Test</h2>
                  <a
                    href="https://github.com/ShubhamNegi4/Leetcode-Stress-Tester"
                    className="text-blue-500 hover:underline text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
                <p className="text-white-50 md:text-base mt-2">
                  A Visual Studio Code extension to fetch LeetCode problems, set up local C++ testing environments, and stress-test your solutions with random and sample test cases.
                </p>
              </div>

              {/* Project 3 on the left side */}
              <div className="project glass-card glass-card-hover p-5" ref={project6Ref}>
                <div className="image-wrapper">
                  <img src="/images/project_greenverse.png" alt="Greenverse" />
                </div>
                <div className="flex items-baseline gap-4 mt-4">
                  <h2 className="text-xl font-semibold">Greenverse</h2>
                  <a
                    href="https://github.com/ShubhamNegi4/Greenverse-extension/tree/main"
                    className="text-blue-500 hover:underline text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
                <p className="text-white-50 md:text-base mt-2">
                  A Chrome extension that adds sustainability scoring and eco-friendly product recommendations to Amazon.in, helping users make climate-conscious shopping decisions.
                </p>
              </div>

              {/* Project 4 on the left side */}
              <div className="project glass-card glass-card-hover p-5" ref={project7Ref}>
                <div className="image-wrapper">
                  <img src="/images/project1.png" alt="FaceKey" />
                </div>
                <div className="flex items-baseline gap-4 mt-4">
                  <h2 className="text-xl font-semibold">FaceKey</h2>
                  <a
                    href="https://github.com/ShubhamNegi4/Face-Recognition"
                    className="text-blue-500 hover:underline text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
                <p className="text-white-50 md:text-base mt-2">
                  Real-time face-login system leveraging CNN-based anti-spoofing and Pickle-backed binary image storage for sub-second, 90% faster, and highly secure authentication.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE (Remains the same, refs are correct) */}
            <div className="project-list-wrapper overflow-hidden">
              <div className="project glass-card glass-card-hover p-5" ref={project2Ref}>
                <div className="image-wrapper bg-[#ffefdb]">
                  <img src="/images/project2.png" alt="Gesture Pointer" />
                </div>
                <div className="flex items-baseline gap-4 mt-4">
                  <h2 className="text-xl font-semibold">Gesture Pointer</h2>
                  <a
                    href="https://github.com/ShubhamNegi4/mouse-control-hand-gestures"
                    className="text-blue-500 hover:underline text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
                <p className="text-white-50 md:text-base mt-2">
                  AI hand-gesture mouse control (92% accuracy, 30% lower lag) with seamless cursor movement, clicking, and scrolling using Python, MediaPipe, and Cvzone.
                </p>
              </div>

              <div className="project glass-card glass-card-hover p-5" ref={project3Ref}>
                <div className="image-wrapper bg-[#ffe7eb]">
                  <img src="/images/project3.png" alt="TaskSync AI" />
                </div>
                <div className="flex items-baseline gap-4 mt-4">
                  <h2 className="text-xl font-semibold">TaskSync AI</h2>
                  <a
                    href="https://github.com/ShubhamNegi4/task-management-app/tree/main"
                    className="text-blue-500 hover:underline text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
                <p className="text-white-50 md:text-base mt-2">
                  Full-stack task manager with AI-powered summaries, real-time CRUD, and secure auth (Express.js, Node.js, MongoDB, Tailwind CSS).
                </p>
              </div>
              <div className="project glass-card glass-card-hover p-5" ref={project3Ref}>
                <div className="image-wrapper bg-[#ffe7eb]">
                  <img src="/images/project_pseudotranspiler.jpeg" alt="PseudoTranspiler" />
                </div>
                <div className="flex items-baseline gap-4 mt-4">
                  <h2 className="text-xl font-semibold">PseudoTranspiler</h2>
                  <a
                    href="https://github.com/ShubhamNegi4/PseudoTranspiler"
                    className="text-blue-500 hover:underline text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
                <p className="text-white-50 md:text-base mt-2">
                  Converts pseudocode to Python using compiler design principles.
                </p>
              </div>

              <div className="project glass-card glass-card-hover p-5" ref={project4Ref}>
                <div className="image-wrapper bg-[#ffe7eb]">
                  <img src="/images/project4.png" alt="DriveEase" />
                </div>
                <div className="flex items-baseline gap-4 mt-4">
                  <h2 className="text-xl font-semibold">DriveEase</h2>
                  <a
                    href="http://github.com/ShubhamNegi4/Car-Rental-Site"
                    className="text-blue-500 hover:underline text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href="https://shubhamnegi4.github.io/Car-Rental-Site/"
                    className="text-blue-500 hover:underline text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try now
                  </a>
                </div>
                <p className="text-white-50 md:text-base mt-2">
                  Interactive car-rental platform with location-based filters, dynamic listings, and smooth navigation (JavaScript, HTML, CSS, Bootstrap, SCSS).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;