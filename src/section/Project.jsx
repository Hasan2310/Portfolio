import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PlaneIcon from '../assets/pesawat.png';

const Project = () => {
  const [hasArrived, setHasArrived] = useState(false);

  return (
    <section
      className="h-auto pb-10 w-full px-4 sm:px-10 flex flex-col justify-center items-center py-15"
      id="project"
    >
      {/* Judul */}
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
        {/* Gambar */}
        <motion.div
          className="bg-[#e0e0e4]/10 p-3 rounded-2xl shadow-xl transition-all duration-300 w-full lg:w-1/2"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, }}
          viewport={{ once: true }}
        >
          <img
            src="./Projects/Tfly.png"
            className="w-full rounded-xl grayscale hover:grayscale-0 transition duration-300"
            alt="TFly Preview"
          />
        </motion.div>

        {/* Deskripsi */}
        <motion.div
          className="text-start flex justify-center items-center w-full lg:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="space-y-5 relative">

            {/* ✈️ Animasi pesawat dengan whileInView */}
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
                x: {
                  duration: 3, // 🐢 makin pelan terbangnya
                  ease: 'easeInOut',
                },
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
                  setTimeout(() => setHasArrived(true), 1000); // ⏱️ delay = durasi x
                }
              }}
            />


            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold">TFly.</h1>

            <div className="ms-2 space-y-4">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
                TFly is a modern web application that allows users to seamlessly book domestic flights
                across the Nusantara. Designed with user experience and speed in mind, TFly offers real-time
                availability, easy booking, and responsive design on all devices.
              </p>

              <div className="flex flex-row gap-4 items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                  className="w-7 h-7 sm:w-8 sm:h-8 grayscale hover:grayscale-0 transition duration-300"
                  alt="HTML5"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  className="w-7 h-7 sm:w-8 sm:h-8 grayscale hover:grayscale-0 transition duration-300"
                  alt="Tailwind CSS"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
                  className="w-7 h-7 sm:w-8 sm:h-8 grayscale hover:grayscale-0 transition duration-300"
                  alt="Laravel"
                />
              </div>

              <a href='https://github.com/Hasan2310/TFly.' className="bg-white text-black px-6 py-2 font-bold uppercase tracking-wide rounded-xl shadow-md transition bg-purple-gradient">
                View Project
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
