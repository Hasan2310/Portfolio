import React, { useEffect } from "react"; // Add useEffect here
import { FaHtml5, FaCss3Alt, FaPhp, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiLaravel, SiMysql, SiMongodb } from "react-icons/si";
import { AiOutlineArrowRight } from "react-icons/ai";

// Import images
import JalanSiagaImage from './assets/projects/JSM.png'; // Change the path if needed
import StoreImage from './assets/projects/EM.png'; // Change the path if needed
import ImageProject from './assets/projects/image.png'; // Change the path if needed
import LatestProject from './assets/projects/1446H.png'; // Change the path if needed

import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'; // Assuming this file is for custom styles

const Projects = () => {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      offset: 5,
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <section className="section h-auto">
        <div className="flex flex-col py-20 px-10 md:text-start text-center">
          <p className="text-center font-bold text-3xl md:text-5xl" data-aos="fade-up" data-aos-delay="100">
            Projects
          </p>
          <div className="flex justify-center items-center mt-5 font-bold" data-aos="fade-up" data-aos-delay="300">
            <hr className="w-[90px] border-4 rounded-4xl" />
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 gap-6 mt-3">
            <div className="flex flex-col sm:flex-row justify-center items-center">
                <div className="relative sm:w-1/2 w-[450px] h-full" data-aos="fade-up" data-aos-delay="100">
                  <img
                    src={LatestProject}
                    alt="Project 3"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="p-4 flex flex-col justify-center sm:w-1/2" data-aos="fade-left" data-aos-delay="300">
                  <h3 className="text-xl font-semibold">Ramadan 1446H</h3>
                  <p className="mt-2">
                    Ramadan 1446H is a greeting card website for Ramadan 1446H, built using HTML, CSS, Tailwind, and JavaScript.
                  </p>
                  <div className="flex space-x-2 mt-2 sm:justify-center md:justify-start justify-center">
                    <FaHtml5 className="text-red-500 grayscale transition duration-300 hover:grayscale-0" />
                    <FaCss3Alt className="text-blue-500 grayscale transition duration-300 hover:grayscale-0" />
                    <SiTailwindcss className="text-teal-400 grayscale transition duration-300 hover:grayscale-0" />
                    <FaJs className="text-yellow-400 grayscale transition duration-300 hover:grayscale-0" />
                  </div>
                  <a
                    href="https://hasan2310.github.io/Ramadan-1446H/"
                    className="sm:justify-center md:justify-start justify-center mt-10 text-white flex items-center"
                  >
                    View More <AiOutlineArrowRight className="ml-2 text-white" />
                  </a>
                </div>
              </div>

              {/* Project 1 */}
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <div className="relative sm:w-1/2 w-[450px] h-full" data-aos="fade-up" data-aos-delay="100">
                  <img
                    src={JalanSiagaImage}
                    alt="Project 1"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="p-4 flex flex-col justify-center sm:w-1/2" data-aos="fade-left" data-aos-delay="300">
                  <h3 className="text-xl font-semibold">JalanSiaga</h3>
                  <p className="mt-2">
                    Jalan Siaga is a website for road repair reports, built using HTML, CSS, Tailwind, PHP, Laravel, and MySQL.
                  </p>
                  <div className="flex space-x-2 mt-2 sm:justify-center md:justify-start justify-center">
                    <FaHtml5 className="text-red-500 grayscale transition duration-300 hover:grayscale-0" />
                    <FaCss3Alt className="text-blue-500 grayscale transition duration-300 hover:grayscale-0" />
                    <SiTailwindcss className="text-teal-400 grayscale transition duration-300 hover:grayscale-0" />
                    <FaPhp className="text-blue-700 grayscale transition duration-300 hover:grayscale-0" />
                    <SiLaravel className="text-red-700 grayscale transition duration-300 hover:grayscale-0" />
                    <SiMysql className="text-blue-600 grayscale transition duration-300 hover:grayscale-0" />
                  </div>
                  <a
                    href="https://github.com/Hasan2310/JalanSiaga"
                    className="sm:justify-center md:justify-start justify-center mt-10 text-white flex items-center"
                  >
                    View More <AiOutlineArrowRight className="ml-2 text-white" />
                  </a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <div className="relative sm:w-1/2 w-[450px] h-full" data-aos="fade-up" data-aos-delay="100">
                  <img
                    src={StoreImage}
                    alt="Project 2"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="p-4 flex flex-col justify-center sm:w-1/2" data-aos="fade-right" data-aos-delay="300">
                  <h3 className="text-xl font-semibold">Sannstore</h3>
                  <p className="mt-2">
                    Sannstore is an e-commerce website created as part of a task from Dibimbing.id to earn a certification, built using HTML, Tailwind, and JavaScript.
                  </p>
                  <div className="flex space-x-2 mt-2 sm:justify-center md:justify-start justify-center">
                    <FaHtml5 className="text-red-500 grayscale transition duration-300 hover:grayscale-0" />
                    <SiTailwindcss className="text-teal-400 grayscale transition duration-300 hover:grayscale-0" />
                    <FaJs className="text-yellow-400 grayscale transition duration-300 hover:grayscale-0" />
                  </div>
                  <a
                    href="https://github.com/Hasan2310/E-commerce-Dibimbing"
                    className="sm:justify-center md:justify-start justify-center mt-10 text-white flex items-center"
                  >
                    View More <AiOutlineArrowRight className="ml-2 text-white" />
                  </a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <div className="relative sm:w-1/2 w-[450px] h-full" data-aos="fade-up" data-aos-delay="100">
                  <img
                    src={ImageProject}
                    alt="Project 3"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="p-4 flex flex-col justify-center sm:w-1/2" data-aos="fade-left" data-aos-delay="300">
                  <h3 className="text-xl font-semibold">Ramadan 1445H</h3>
                  <p className="mt-2">
                    Ramadan 1445H is a greeting card website for Ramadan 1445H, built using HTML, CSS, Tailwind, and JavaScript.
                  </p>
                  <div className="flex space-x-2 mt-2 sm:justify-center md:justify-start justify-center">
                    <FaHtml5 className="text-red-500 grayscale transition duration-300 hover:grayscale-0" />
                    <FaCss3Alt className="text-blue-500 grayscale transition duration-300 hover:grayscale-0" />
                    <SiTailwindcss className="text-teal-400 grayscale transition duration-300 hover:grayscale-0" />
                    <FaJs className="text-yellow-400 grayscale transition duration-300 hover:grayscale-0" />
                  </div>
                  <a
                    href="https://github.com/Hasan2310/Ramadhan-1445H"
                    className="sm:justify-center md:justify-start justify-center mt-10 text-white flex items-center"
                  >
                    View More <AiOutlineArrowRight className="ml-2 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
