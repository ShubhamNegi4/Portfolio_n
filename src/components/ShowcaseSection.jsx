import React from "react";
import {useRef} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'
import HeroExperience from '../components/HeroModels/HeroExperience'
import TitleHeader from "./TitleHeader";
gsap.registerPlugin(ScrollTrigger);


const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const project4Ref = useRef(null);

  
  
  
  useGSAP(()=>{
    const projects = [project1Ref.current, project2Ref.current , project3Ref.current, project4Ref.current];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card, 
        {
          y:50, opacity: 0
        },
        {
          y:0,
          opacity:1,
          duration:1,
          delay: 0.2*(index+1),
          scrollTrigger:{
            trigger:card, 
            start:'top bottom-=100'
          }
        }
      )
    })
    gsap.fromTo(sectionRef.current, {opacity:0},{opacity:1, duration: 1.5})
  }, [])
  return (
    <div id="counter">
      <div id="work" ref = {sectionRef} className="app-showcase">
        
        <div className = "w-full">
          <div className = "showcaselayout">
            {/*left side */}
            <div className="first-project-wrapper" ref = {project1Ref}>
              <div className = "image-wrapper">
                <img src="/images/project5.png" alt="Ryde" />
              </div>
              <div className = "text-content">
              <div className="flex items-baseline gap-4">
                    <h2 className="text-xl font-semibold">Multithreaded Proxy Cache Server</h2>
                    <a
                      href="https://github.com/ShubhamNegi4/Multi-threaded-proxy-web-server"
                      className="text-blue-500 hover:underline text-base text-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </div>
                <p className = "text-white-50 md:text-xl">
                Implemented a high-performance multithreaded HTTP proxy from scratch in C with POSIX threads/TCP sockets and a custom thread-safe LRU cache to dramatically reduce latency and offload origin servers by serving repeat GET requests from cache.
                </p>
                <br />
              </div>
              <div className = "image-wrapper">
                <img src="/images/project1.png" alt="Ryde" />
              </div>
              <div className = "text-content">
              <div className="flex items-baseline gap-4">
                    <h2 className="text-xl font-semibold">FaceKey</h2>
                    <a
                      href="https://github.com/ShubhamNegi4/Face-Recognition"
                      className="text-blue-500 hover:underline text-base text-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </div>
                <p className = "text-white-50 md:text-xl">
                Real-time face-login system leveraging CNN-based anti-spoofing and Pickle-backed binary image storage with structured metadata for sub-second, 90% faster, and highly secure authentication (Python, scikit-learn, Matplotlib).
                </p>
              </div>
              
            </div>
            
            
            {/* right side */}
            <div className = "project-list-wrapper overflow-hidden">
              <div className="project" ref= {project2Ref}>
                <div className = "image-wrapper bg-[#ffefdb]">
                  <img src="/images/project2.png" alt="Library Management System" />
                </div>
                  <div className="flex items-baseline gap-4">
                    <h2 className="text-xl font-semibold">Gesture Pointer</h2>
                    <a
                      href="https://github.com/ShubhamNegi4/mouse-control-hand-gestures"
                      className="text-blue-500 hover:underline text-base text-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </div>
                <p className = "text-white-50 md:text-xl">
                AI hand-gesture mouse control (92% accuracy, 30% lower lag) with seamless cursor movement, clicking, and scrolling (Python, MediaPipe, Cvzone, Threading).
                </p>

              </div>
              <div className="project" ref = {project3Ref}>
                <div className = "image-wrapper bg-[#ffe7eb]">
                  <img src="/images/project3.png" alt="Yc System" />
                </div>
                <div className="flex items-baseline gap-4">
                    <h2 className="text-xl font-semibold">TaskSync AI</h2>
                    <a
                      href="https://github.com/ShubhamNegi4/task-management-app/tree/main"
                      className="text-blue-500 hover:underline text-base text-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </div>
                <p className = "text-white-50 md:text-xl">
                Full-stack task manager with AI-powered summaries, real-time CRUD, and secure auth (Express.js, Node.js, MongoDB, Tailwind CSS).
                </p>

              </div>
              <div className="project" ref = {project4Ref}>
                <div className = "image-wrapper bg-[#ffe7eb]">
                  <img src="/images/project4.png" alt="Yc System" />
                </div>
                <div className="flex items-baseline gap-4">
                    <h2 className="text-xl font-semibold">DriveEase</h2>
                    <a
                      href="http://github.com/ShubhamNegi4/Car-Rental-Site"
                      className="text-blue-500 hover:underline text-base text-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                    <a
                      href="https://shubhamnegi4.github.io/Car-Rental-Site/"
                      className="text-blue-500 hover:underline text-base text-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Try now -
                    </a>
                  </div>
                <p className = "text-white-50 md:text-xl">
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
