import React, { useState } from 'react';
import profilePic from "./assets/image.jpg";
import gambar from "./assets/Gambar.png";
import Project from "./components/Project";
import Skills from './components/skills';
import Email from './components/Email';
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
      <section className="section pb-20">
        <div className="text-[#e9e9ea] flex flex-col items-center justify-center h-screen">
          <img src={gambar} className='w-3xl' />
          <div className="relative text-center flex justify-center items-center md:-mt-52 sm:-mt-28 -mt-28">
            {/* Teks dengan Border Mengikuti Lekuk */}
            <h1
              className="absolute font-extrabold text-transparent md:text-7xl sm:text-6xl text-4xl tracking-widest uppercase sm:translate-y-3 translate-y-2"
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
          <h1 className='md:text-5xl font-bold mt-5 text-xl'>WEB DEVELOPER</h1>
        </div>
      </section>

      <section className="section text-[#e9e9ea] px-5 sm:px-5 md:px-0 py-10 md:pt-0 h-screen flex justify-center items-center" id='about'>
        <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center">
          <div className="relative w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              <img
                src={profilePic}
                alt="Profile"
                className="absolute border-4 border-white w-[300px] md:w-[800px] md:h-[350px] h-full rounded-lg shadow-lg z-10 transform rotate-2 object-cover grayscale transition duration-300 hover:grayscale-0"
              />
              <div className="absolute w-full md:w-[320px] h-full bg-slate-400 rounded-lg border-4 border-white shadow-lg -rotate-3 top-1"></div>
              <div className="absolute w-full md:w-[320px] h-full bg-slate-300 rounded-lg border-4 border-white shadow-md -rotate-1 top-2"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1 md:ms-20">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 mt-8 md:mt-0">About Me</h1>
            <p className="text-lg text-gray-300">
              Hi, I'm <span className="font-semibold text-white">Hasan Ahmad Halibah</span>, a passionate web developer
              who loves creating modern, responsive, and interactive websites. I have experience in React, Tailwind CSS, and more!
            </p>
            <button className="mt-6 px-6 py-3 bg-[#e9e9ea] text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition">
              Contact Me
            </button>
          </div>
        </div>
      </section>


      <section className="section py-18" id='porfolio'>
        <h1 className="text-center text-3xl md:text-5xl font-bold">Portfolio Showcase</h1>
        <div className="flex justify-center space-x-5 mt-10">
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
        </div>
        <div className="flex justify-center mt-5">
          <hr className="w-7xl" />
        </div>

        {activeSection === 'projects' && (
          <div id="projects">
            <Project />
          </div>
        )}

        {activeSection === 'skills' && (
          <div id="skills">
            <Skills />
          </div>
        )}
      </section>

      <section className='section h-auto flex justify-center items-center py-10' id='contact'>
        <Email />
      </section>
    </div>
  );
}

export default App;
