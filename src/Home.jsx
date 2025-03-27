import React, { useState } from 'react';
import profilePic from "./assets/image.jpg";
import gambar from "./assets/Gambar.png";
import Projects from "./components/Projects";
import Skills from './components/skills';
import Contact from './components/Contact';
import Certificateds from './components/Certificateds';
import CertificatedImage1 from './assets/certificate/1.png';
import CertificatedImage2 from './assets/certificate/2.png';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiLaravel, SiMysql } from 'react-icons/si';
import { AiOutlineArrowRight } from 'react-icons/ai';
import JalanSiagaImage from './assets/projects/JSM.png';
import StoreImage from './assets/projects/EM.png';
import ImageProject from './assets/projects/image.png';
import { FaAward } from 'react-icons/fa';

import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    emailjs
      .sendForm('service_st0b5wg', 'template_s632978', e.target, 'user_id')
      .then(
        (result) => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setStatus('Failed to send message, please try again.');
        }
      );
  };

  const [activeSection, setActiveSection] = useState('projects');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <section className="section h-screen">
        <div className="text-[#e9e9ea] flex flex-col items-center justify-center h-screen">
          <img src={gambar} className='md:w-2xl w-3xl' />
          <div className="relative text-center flex justify-center items-center md:-mt-52 sm:-mt-28 -mt-28">
            {/* Teks dengan Border Mengikuti Lekuk */}
            <h1
              className="absolute font-extrabold text-transparent md:text-7xl sm:text-6xl text-4xl tracking-widest uppercase sm:translate-y-2 translate-y-1"
              style={{
                WebkitTextStroke: '1px whitesmoke',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text'
              }}
            >
              Hasan Ahmad Halibah
            </h1>

            {/* Teks Utama */}
            <div className="relative md:text-7xl sm:text-6xl text-4xl">
              <h1 className="font-extrabold tracking-widest uppercase">
                Hasan Ahmad Halibah
              </h1>
            </div>
          </div>
          <h1 className='md:text-5xl font-bold md:pt-5 pt-3 text-xl'>WEB DEVELOPER</h1>
        </div>
      </section>

      <section className="section text-[#e9e9ea] py-10 md:pt-0 h-screen flex justify-center items-center px-10" id='about'>
        <div className="flex flex-wrap md:flex-nowrap items-center">
          <div className="relative w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              <img
                src={profilePic}
                alt="Profile"
                className="absolute border-4 border-white w-[300px] md:w-[800px] md:h-[350px] h-full rounded-lg shadow-lg z-10 transform rotate-2 object-cover"
              />
              <div className="absolute w-full md:w-[320px] h-full bg-slate-400 rounded-lg border-4 border-white shadow-lg -rotate-3 top-1"></div>
              <div className="absolute w-full md:w-[320px] h-full bg-slate-300 rounded-lg border-4 border-white shadow-md -rotate-1 top-2"></div>
            </div>
          </div>

          <div className="w-full d:w-1/2 text-center md:text-left order-2 md:order-1">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 mt-8 md:mt-0">About Me</h1>
            <p className="text-lg text-gray-300">
              Hi, I'm <span className="font-semibold">Hasan Ahmad Halibah</span>, a passionate web developer
              who loves creating modern, responsive, and interactive websites. I have experience in React, Tailwind CSS, and more!
            </p>
            <button className="mt-6 px-6 py-3 bg-[#e9e9ea] text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition">
              Contact Me
            </button>
          </div>
        </div>
      </section>


      <section className="section py-18 h-auto px-10" id='porfolio'>
        <h1 className="text-center text-3xl md:text-5xl font-bold">Portfolio Showcase</h1>
        <div className="flex justify-center items-center mt-5 font-bold">
          <hr className='w-[90px] border-4 rounded-4xl' />
        </div>
        {/* <div className="flex justify-center space-x-5 mt-10">
          <a
            href="#projects"
            className={`text-xl font-medium py-1 px-5 rounded-xl ${activeSection === 'projects' ? 'bg-gray-300 text-gray-800' : 'bg-slate-100 text-gray-800'}`}
            onClick={() => handleSectionClick('projects')} // Mengubah state ke 'projects'
          >
            Projects
          </a>

          <a
            href="#skills"
            className={`text-xl font-medium py-1 px-5 rounded-xl ${activeSection === 'skills' ? 'bg-gray-300 text-gray-800' : 'bg-slate-100 text-gray-800'}`}
            onClick={() => handleSectionClick('skills')} // Mengubah state ke 'skills'
          >
            Skills
          </a>

          <a
            href="#certificate"
            className={`text-xl font-medium py-1 px-5 rounded-xl ${activeSection === 'certificate' ? 'bg-gray-300 text-gray-800' : 'bg-slate-100 text-gray-800'}`}
            onClick={() => handleSectionClick('certificate')} // Mengubah state ke 'skills'
          >
            Certificate
          </a>
        </div>
        <div className="flex justify-center mt-5">
          <hr className="w-7xl" />
        </div>

        {activeSection === 'projects' && (
          <div id="projects">
            <Projects />
          </div>
        )}

        {activeSection === 'skills' && (
          <div id="skills">
            <Skills />
          </div>
        )}

        {activeSection === 'certificate' && (
          <div id="certificate">
            <Certificateds />
          </div>
        )} */}

        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="flex flex-col">
            <h1 className="text-xl mt-10 font-bold">Skills</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-5 md:pe-5 text-center">

              {/* HTML Card */}
              <div className="bg-white shadow-md rounded-lg py-3 flex flex-col items-center text-black">
                <FaHtml5 className="text-red-600 text-4xl" />
                <h2 className="text-xl font-semibold">HTML</h2>
              </div>

              {/* CSS Card */}
              <div className="bg-white shadow-md rounded-lg py-3 flex flex-col items-center text-black">
                <FaCss3Alt className="text-blue-600 text-4xl" />
                <h2 className="text-xl font-semibold">CSS</h2>
              </div>

              {/* JavaScript Card */}
              <div className="bg-white shadow-md rounded-lg py-3 flex flex-col items-center text-black">
                <FaJs className="text-yellow-500 text-4xl" />
                <h2 className="text-xl font-semibold">JavaScript</h2>
              </div>

              {/* PHP Card */}
              <div className="bg-white shadow-md rounded-lg py-3 flex flex-col items-center text-black">
                <FaPhp className="text-blue-700 text-4xl" />
                <h2 className="text-xl font-semibold">PHP</h2>
              </div>

              {/* Tailwind CSS Card */}
              <div className="bg-white shadow-md rounded-lg py-3 flex flex-col items-center text-black">
                <SiTailwindcss className="text-teal-400 text-4xl" />
                <h2 className="text-xl font-semibold">Tailwind CSS</h2>
              </div>

              {/* Laravel Card */}
              <div className="bg-white shadow-md rounded-lg py-3 flex flex-col items-center text-black">
                <SiLaravel className="text-red-600 text-4xl" />
                <h2 className="text-xl font-semibold">Laravel</h2>
              </div>

              {/* React Card */}
              <div className="bg-white shadow-md rounded-lg py-3 flex flex-col items-center text-black">
                <FaReact className="text-cyan-500 text-4xl" />
                <h2 className="text-xl font-semibold">React</h2>
              </div>

              {/* MySQL Card */}
              <div className="bg-white shadow-md rounded-lg py-3 flex flex-col items-center text-black">
                <SiMysql className="text-blue-600 text-4xl" />
                <h2 className="text-xl font-semibold">MySQL</h2>
              </div>

            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-bold mt-10 text-start">Certificate</h1>
            <div className="flex md:flex-row sm:flex-col flex-col md:space-x-3 space-y-5 mt-5">

              {/* Certificate 1 */}
              <div className="bg-white shadow-lg rounded-lg md:h-56">
                <img
                  src={CertificatedImage1}
                  alt="Certificate 1"
                  className="w-full md:h-56 object-cover rounded-lg"
                />
              </div>

              {/* Certificate 2 */}
              <div className="bg-white shadow-lg rounded-lg md:h-56">
                <img
                  src={CertificatedImage2}
                  alt="Certificate 2"
                  className="w-full md:h-56 object-cover rounded-lg"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="section h-auto">
        <div className="flex flex-col py-20 px-10 md:text-start text-center">
          <p className="text-center font-bold text-5xl">Projects</p>
          <div className="flex justify-center items-center mt-5 font-bold">
            <hr className='w-[90px] border-4 rounded-4xl' />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 gap-6 mt-3">
              {/* Project 1 */}
              <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-1/2 h-full">
                  <img
                    src={JalanSiagaImage}
                    alt="Project 1"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="p-4 flex flex-col justify-center sm:w-1/2">
                  <h3 className="text-xl font-semibold">JalanSiaga</h3>
                  <p className="mt-2">
                    Jalan Siaga is a website for road repair reports, built using HTML, CSS, Tailwind, PHP, Laravel, and MySQL.
                  </p>
                  <div className="flex space-x-2 mt-2 justify-center">
                    <FaHtml5 className="text-red-500 grayscale transition duration-300 hover:grayscale-0" />
                    <FaCss3Alt className="text-blue-500 grayscale transition duration-300 hover:grayscale-0" />
                    <SiTailwindcss className="text-teal-400 grayscale transition duration-300 hover:grayscale-0" />
                    <FaPhp className="text-blue-700 grayscale transition duration-300 hover:grayscale-0" />
                    <SiLaravel className="text-red-700 grayscale transition duration-300 hover:grayscale-0" />
                    <SiMysql className="text-blue-600 grayscale transition duration-300 hover:grayscale-0" />
                  </div>
                  <a href="YOUR_PROJECT_LINK" className='justify-center mt-10 text-white flex items-center'>
                    View Project <AiOutlineArrowRight className="ml-2 text-white" />
                  </a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-1/2 h-full">
                  <img
                    src={StoreImage}
                    alt="Project 2"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="p-4 flex flex-col justify-center sm:w-1/2">
                  <h3 className="text-xl font-semibold">Sannstore</h3>
                  <p className="mt-2">
                    Sannstore is an e-commerce website created as part of a task from Dibimbing.id to earn a certification, built using HTML, Tailwind, and JavaScript.
                  </p>
                  <div className="flex space-x-2 mt-2 justify-center">
                    <FaHtml5 className="text-red-500 grayscale transition duration-300 hover:grayscale-0" />
                    <SiTailwindcss className="text-teal-400 grayscale transition duration-300 hover:grayscale-0" />
                    <FaJs className="text-yellow-400 grayscale transition duration-300 hover:grayscale-0" />
                  </div>
                  <a href="YOUR_PROJECT_LINK" className='justify-center mt-10 text-white flex items-center'>
                    View Project <AiOutlineArrowRight className="ml-2 text-white" />
                  </a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-1/2 h-full">
                  <img
                    src={ImageProject} // Use the imported image
                    alt="Project 3"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="p-4 flex flex-col justify-center sm:w-1/2">
                  <h3 className="text-xl font-semibold">Ramadan 1445H</h3>
                  <p className="mt-2">
                    Ramadan 1445H is a greeting card website for Ramadan 1445H, built using HTML, CSS, Tailwind, and JavaScript.
                  </p>
                  <div className="flex space-x-2 mt-2 justify-center">
                    <FaHtml5 className="text-red-500 grayscale transition duration-300 hover:grayscale-0" />
                    <FaCss3Alt className="text-blue-500 grayscale transition duration-300 hover:grayscale-0" />
                    <SiTailwindcss className="text-teal-400 grayscale transition duration-300 hover:grayscale-0" />
                    <FaJs className="text-yellow-400 grayscale transition duration-300 hover:grayscale-0" />
                  </div>
                  <a href="YOUR_PROJECT_LINK" className='justify-center mt-10 text-white flex items-center'>
                    View Project <AiOutlineArrowRight className="ml-2 text-white" />
                  </a>
                </div>
              </div>

            </div>

            {/* Button for more projects */}
            <div className="pt-8 text-center">
              <button className="px-6 py-2 bg-white text-slate-800 rounded-lg shadow-md transition duration-300">
                View More Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='section h-screen flex py-10 px-6 items-center justify-center' id='contact'>
        <Contact />
      </section>
    </div>
  );
}

export default App;
