import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SiReact, SiTailwindcss, SiGoogle, SiLaravel, SiMysql, SiPhp, SiJavascript } from "react-icons/si";
import '../App.css';

const projects = [
  {
    id: 1,
    title: "MAC | Gear Repair",
    desc: "A reporting system for MAC (Muslim Archery Club) to log damaged bows, arrows, and targets. Reports are submitted through a form and automatically recorded in Google Sheets via Apps Script, making the process fast, organized, and easy to access.",
    img: "./Projects/MAC.png",
    imgSize: "w-40 md:w-140",
    link: "https://github.com/Hasan2310/MAC/",
    stack: [
      { name: "React", icon: <SiReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Apps Script", icon: <SiGoogle /> },
      { name: "Google Sheets", icon: <SiGoogle /> },
    ],
  },
  {
    id: 2,
    title: "TFly",
    desc: "This website allows users to easily search and book flight tickets online. Users can compare prices, select flight schedules, and make secure payments all within one platform. The system streamlines the booking process and provides a fast, convenient, and user-friendly experience.",
    img: "./Projects/Tfly.png",
    imgSize: "w-80 md:w-160",
    link: "https://github.com/Hasan2310/TFlyy",
    stack: [
      { name: "PHP", icon: <SiPhp /> },
      { name: "Laravel", icon: <SiLaravel /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Mysql", icon: <SiMysql /> },
    ],
  },
  {
    id: 3,
    title: "JalanSiaga",
    desc: "This website allows citizens to report damaged roads online. Users can submit reports with photos and location details, which are automatically recorded in the system for faster, organized response by the responsible authorities.",
    img: "./Projects/Jalansiaga.png",
    imgSize: "w-80 md:w-160",
    link: "https://github.com/Hasan2310/JalanSiaga",
    stack: [
      { name: "PHP", icon: <SiPhp /> },
      { name: "Laravel", icon: <SiLaravel /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Mysql", icon: <SiMysql /> },
    ],
  },
];

// Variants untuk pagination
const variants = {
  enter: (direction) => ({ y: direction > 0 ? 300 : -300, opacity: 0 }),
  center: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
  exit: (direction) => ({ y: direction < 0 ? 300 : -300, opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }),
};

// Variants untuk staggered animation
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Project = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [clicked, setClicked] = useState(false); // toggle warna di mobile
  const project = projects[page];

  const paginate = (newPage) => {
    setPage(([prevPage]) => [newPage, newPage > prevPage ? 1 : -1]);
    setClicked(false);
  };

  const handleImageClick = () => setClicked(!clicked);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="project" className="relative h-auto w-full px-6 md:px-30 py-10">
      <h2 className="text-4xl sm:text-6xl md:text-[200px] font-bold text-anton mb-12 text-center md:text-left">
        MYPROJECT
      </h2>

      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={project.id}
          ref={ref}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-left ${
            page % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <motion.div
            className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Gambar */}
            <motion.img
              src={project.img}
              alt={project.title}
              className={`${project.imgSize} h-auto rounded-xl shadow-lg filter grayscale md:hover:grayscale-0 transition duration-500 cursor-pointer ${
                clicked ? "grayscale-0" : "grayscale"
              }`}
              onClick={handleImageClick}
              variants={itemVariants}
            />

            {/* Deskripsi */}
            <motion.div className="max-w-4xl" variants={itemVariants}>
              <motion.h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-anton mb-4" variants={itemVariants}>
                {project.title}
              </motion.h1>
              <motion.p className="text-base text-justify md:text-xl text-gray-300 mb-6" variants={itemVariants}>
                {project.desc}
              </motion.p>

              {/* Tech Stack */}
              <motion.div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start" variants={itemVariants}>
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1 px-2 py-1 border-2 border-[#5b21b6] rounded-lg text-sm font-medium bg-gradient-to-r from-[#4c1d95] to-[#5b21b6] bg-clip-text text-transparent"
                  >
                    {React.cloneElement(tech.icon, { className: "w-4 h-4 text-[#5b21b6]" })} {tech.name}
                  </span>
                ))}
              </motion.div>

              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-2 bg-purple-gradient text-white rounded-lg shadow transition mt-8 inline-block"
                variants={itemVariants}
              >
                View Project
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Indicator */}
      <div className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        {projects.map((_, idx) => (
          <span
            key={idx}
            onClick={() => paginate(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              idx === page ? "bg-purple-gradient scale-125" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
