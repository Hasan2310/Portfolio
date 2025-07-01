import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: "HTML", level: "Expert", icon: "html5" },
  { name: "CSS", level: "Expert", icon: "css3" },
  { name: "JavaScript", level: "Intermediate", icon: "javascript" },
  { name: "PHP", level: "Intermediate", icon: "php" },
  { name: "Bootstrap", level: "Expert", icon: "bootstrap" },
  { name: "Tailwind", level: "Expert", icon: "tailwindcss" },
  { name: "React JS", level: "Beginner", icon: "react" },
  { name: "Laravel", level: "Intermediate", icon: "laravel" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const SkillsSection = () => {
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    if (window.innerWidth < 768) {
      setActive(active === index ? null : index); // toggle
    }
  };

  return (
    <section className="h-auto pb-20 px-4 sm:px-8 md:px-16 lg:px-28 py-20 bg-[#0f0f0f] text-white" id="skills">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-anton text-[60px] sm:text-[100px] md:text-[180px] lg:text-[250px] text-center leading-none"
      >
        MY SKILLS
      </motion.h1>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill, i) => {
          const isMobileActive = active === i;

          return (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex flex-col text-center group cursor-pointer"
              onClick={() => handleClick(i)}
            >
              <div className={`relative w-full aspect-square rounded-3xl flex flex-col justify-center items-center 
                  transition-all duration-300 ease-in-out overflow-hidden shadow-xl
                  ${isMobileActive ? 'scale-105' : ''} group-hover:scale-[1.05] bg-white/5`}>
                
                {/* Gradient Hover / Click BG */}
                <div
                  className={`absolute inset-0 rounded-3xl z-0 transition-all duration-500 
                  ${isMobileActive ? 'opacity-100 backdrop-blur-md' : 'opacity-0 group-hover:opacity-100 backdrop-blur-sm'}`}
                  style={{
                    background: 'linear-gradient(135deg, #4c1d95cc, #5b21b6cc)'
                  }}
                ></div>

                {/* Border Gradient */}
                <div
                  className={`absolute inset-0 rounded-3xl z-10 pointer-events-none border-2 transition-all duration-500 
                  ${isMobileActive ? 'border-purple-500' : 'border-transparent group-hover:border-purple-500'}`}
                ></div>

                {/* Icon */}
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-original.svg`}
                  alt={skill.name}
                  className={`w-[90px] sm:w-[100px] md:w-[110px] z-20 grayscale transition duration-300 ease-in-out 
                  ${isMobileActive ? 'translate-y-[-12px] grayscale-0' : 'group-hover:translate-y-[-12px] group-hover:grayscale-0'}`}
                />

                {/* Skill Level */}
                <span
                  className={`absolute bottom-4 text-sm z-20 transition-all duration-300 ease-in-out 
                  ${isMobileActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}`}
                >
                  {skill.level}
                </span>
              </div>

              <p className="mt-3 text-base sm:text-lg">{skill.name}</p>
            </motion.div>
          );
        })}
      </motion.div>
      
       
    </section>
  );
};

export default SkillsSection;
