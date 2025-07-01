import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 md:px-10" id="about">
      {/* Judul Animasi */}
      <motion.h1
        className="text-anton text-[60px] sm:text-[100px] md:text-[180px] lg:text-[250px] text-center leading-none"
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        viewport={{ once: true }}
      >
        ABOUT ME
      </motion.h1>

      <div className="sm:text-lg md:text-xl lg:text-2xl max-w-5xl text-justify mt-10 space-y-6 px-4 sm:px-0">
        {/* Paragraf 1 */}
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.2, 0.65, 0.3, 0.9] }}
          viewport={{ once: true }}
        >
          Hi, I'm <span className="bg-purple-gradient font-bold px-2 py-1 rounded">Hasan Ahmad Halibah</span>. I'm a recent graduate in <span className="bg-purple-gradient font-bold px-2 py-1 rounded">Software Engineering</span> (class of 2025) with a strong passion for <span className="bg-purple-gradient font-bold px-2 py-1 rounded">Web Development</span> and <span className="bg-purple-gradient font-bold px-2 py-1 rounded">UI/UX Design</span>. I enjoy turning ideas into real, user-friendly websites using technologies.
        </motion.p>

        {/* Paragraf 2 */}
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
          viewport={{ once: true }}
        >
          This <span className="bg-purple-gradient font-bold px-2 py-1 rounded">portfolio</span> is my way of sharing what I’ve created and how I’ve grown as a developer. I’m always open to <span className="bg-purple-gradient font-bold px-2 py-1 rounded">learning</span> more, <span className="bg-purple-gradient font-bold px-2 py-1 rounded">collaborating</span> with others, and building something impactful. Thanks for visiting — let’s <span className="bg-purple-gradient font-bold px-2 py-1 rounded">connect</span> and <span className="bg-purple-gradient font-bold px-2 py-1 rounded">create</span> something great together!
        </motion.p>
      </div>
    </section>
  );
};

export default AboutMe;
