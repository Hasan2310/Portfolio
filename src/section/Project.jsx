import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import PlaneIcon from '../assets/pesawat.png';

const Project = () => {
  const [hasArrived, setHasArrived] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const [isImageActive, setIsImageActive] = useState(false);

  const skills = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      alt: "HTML5",
      id: "html",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      alt: "Tailwind CSS",
      id: "tailwind",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
      alt: "Laravel",
      id: "laravel",
    },
  ];

const handleViewProject = () => {
  Swal.fire({
    title: '<span class="text-anton text-purple-gradient text-3xl">✈️ Just a Note</span>',
    html: `
      <div style="text-align: left; font-size: 16px; color: #eaeaea;">
        <p>This is a <strong style="color:#a78bfa">demo flight booking</strong> website.</p>
        <p>If you want to simulate an order, you can login using:</p>
        <p><strong>Email:</strong> user@gmail.com <br/>
        <strong>Password:</strong> 123123123</p>
      </div>
    `,
    background: '#1a1a1a',
    color: '#eaeaea',
    confirmButtonText: 'OK, Let`s Go!',
    confirmButtonColor: '#5b21b6',
    scrollbarPadding: false,
    allowOutsideClick: false,
    showCloseButton: true,
    customClass: {
      popup: 'bg-[#1a1a1a] rounded-xl shadow-lg border border-[#4c1d95]',
      confirmButton: 'bg-purple-gradient',
      title: 'text-anton text-purple-gradient',
    },
    didOpen: () => {
      // Inject Anton font dynamically if not already loaded
      if (!document.querySelector('link[href*="Anton"]')) {
        const fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Anton&display=swap';
        document.head.appendChild(fontLink);
      }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      window.open('https://tfly-production.up.railway.app/', '_blank');
    }
  });
};



  return (
    <section
      className="h-auto pb-10 w-full px-4 sm:px-10 flex flex-col justify-center items-center py-15"
      id="project"
    >
      {/* Title */}
      <div className="w-full">
        <motion.h1
          className="relative text-anton text-[60px] sm:text-[100px] md:text-[140px] lg:text-[165px] text-left overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          RECENT PROJECT
        </motion.h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mt-8 w-full">
        {/* Image */}
        <motion.div
          className="bg-[#e0e0e4]/10 p-3 rounded-2xl shadow-xl w-full lg:w-1/2"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="./Projects/Tfly.png"
            alt="TFly Preview"
            onClick={() => setIsImageActive(!isImageActive)}
            className={`w-full rounded-xl cursor-pointer transition-all duration-500
              ${isImageActive ? 'grayscale-0' : 'grayscale'} 
              hover:grayscale-0`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Description */}
        <motion.div
          className="text-start flex justify-center items-center w-full lg:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="space-y-5 relative">
            {/* Plane animation */}
            <motion.img
              src={PlaneIcon}
              alt="Plane"
              className="absolute top-[-30px] left-0 w-12 sm:w-16 lg:w-20 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
              initial={{ x: '-100%' }}
              whileInView={
                hasArrived
                  ? { x: '110%', y: [0, -10, 0, 10, 0] }
                  : { x: '110%' }
              }
              transition={{
                x: { duration: 3, ease: 'easeInOut' },
                y: hasArrived
                  ? {
                    duration: 8,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                  }
                  : {},
              }}
              viewport={{ once: true }}
              onViewportEnter={() => {
                if (!hasArrived) {
                  setTimeout(() => setHasArrived(true), 1000);
                }
              }}
            />

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold">TFly.</h1>

            <div className="ms-2 space-y-4">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
                TFly is a modern web application that allows users to book domestic flights across the Indonesian archipelago. Designed with simplicity and speed in mind, TFly offers real-time availability, an easy booking experience, and a responsive layout on all devices.
              </p>

              {/* Skill icons */}
              <div className="flex flex-row gap-4 items-center">
                {skills.map((skill, index) => (
                  <motion.img
                    key={skill.id}
                    src={skill.src}
                    alt={skill.alt}
                    onClick={() =>
                      setActiveSkill((prev) =>
                        prev === skill.id ? null : skill.id
                      )
                    }
                    className={`w-7 h-7 sm:w-8 sm:h-8 cursor-pointer transition-all rounded-md ${activeSkill === skill.id
                        ? 'grayscale-0 scale-110'
                        : 'grayscale hover:grayscale-0 hover:scale-105'
                      }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />
                ))}
              </div>

              {/* View project button */}
              <button
                onClick={handleViewProject}
                className="bg-white text-black px-6 py-2 font-bold uppercase tracking-wide rounded-xl shadow-md transition bg-purple-gradient"
              >
                View Project
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
