import React from 'react';
import '../App.css';

// Import gambar-gambar
import JalanSiagaImage from '../assets/projects/JalanSiaga.png';
import StoreImage from '../assets/projects/Store.png';
import ImageProject from '../assets/projects/image.png';

// Import icons
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact } from 'react-icons/fa'; 
import { SiTailwindcss, SiLaravel, SiMysql } from 'react-icons/si';

const Projects = () => {
  return (
    <div className="p-6 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={JalanSiagaImage} // Gunakan gambar yang diimpor
            alt="Project 1"
            className="w-full h-56 object-cover grayscale transition duration-300 hover:grayscale-0 touch:grayscale-0"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-600">JalanSiaga</h3>
            <p className="text-gray-600 mt-2">
              JalanSiaga is a website for road improvement, built using HTML, CSS, Tailwind, PHP, Laravel, and MySQL.
            </p>
            <div className="flex space-x-2 mt-2">
              <FaHtml5 className="text-red-500 grayscale transition duration-300 hover:grayscale-0" />
              <FaCss3Alt className="text-blue-500 grayscale transition duration-300 hover:grayscale-0" />
              <SiTailwindcss className="text-teal-400 grayscale transition duration-300 hover:grayscale-0" />
              <FaPhp className="text-blue-700 grayscale transition duration-300 hover:grayscale-0" />
              <SiLaravel className="text-red-700 grayscale transition duration-300 hover:grayscale-0" />
              <SiMysql className="text-blue-600 grayscale transition duration-300 hover:grayscale-0" />
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={StoreImage} 
            alt="Project 2"
            className="w-full h-56 object-cover grayscale transition duration-300 hover:grayscale-0 touch:grayscale-0"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-600">Sannstore</h3>
            <p className="text-gray-600 mt-2">
              Sannstore is an e-commerce website created as part of a task from Dibimbing.id to earn a certification, built using HTML, Tailwind, and JavaScript.
            </p>
            <div className="flex space-x-2 mt-2">
              <FaHtml5 className="text-red-500 grayscale transition duration-300 hover:grayscale-0" />
              <SiTailwindcss className="text-teal-400 grayscale transition duration-300 hover:grayscale-0" />
              <FaJs className="text-yellow-400 grayscale transition duration-300 hover:grayscale-0" />
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={ImageProject} // Gunakan gambar yang diimpor
            alt="Project 3"
            className="w-full h-56 object-cover grayscale transition duration-300 hover:grayscale-0 touch:grayscale-0"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-600">Ramadan 1445H</h3>
            <p className="text-gray-600 mt-2">
              Ramadan 1445H is a greeting card website for Ramadan 1445H, built using HTML, CSS, Tailwind, and JavaScript.
            </p>
            <div className="flex space-x-2 mt-2">
              <FaHtml5 className="text-red-500 grayscale transition duration-300 hover:grayscale-0" />
              <FaCss3Alt className="text-blue-500 grayscale transition duration-300 hover:grayscale-0" />
              <SiTailwindcss className="text-teal-400 grayscale transition duration-300 hover:grayscale-0" />
              <FaJs className="text-yellow-400 grayscale transition duration-300 hover:grayscale-0" />
            </div>
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
  );
}

export default Projects;
