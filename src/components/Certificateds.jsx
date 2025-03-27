import React from 'react';
import '../App.css';

// Import images
import CertificatedImage1 from '../assets/certificate/1.png';
import CertificatedImage2 from '../assets/certificate/2.png';

// Import icons
import { FaAward } from 'react-icons/fa';

const Certificateds = () => {
    return (
        <div className="p-6 flex flex-col items-center justify-center">
            <div className="flex md:flex-row sm:flex-col flex-col gap-10">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                        src={CertificatedImage1}
                        alt="Certificate 1"
                        className="md:w-full md:h-96 object-cover grayscale transition duration-300 hover:grayscale-0 touch:grayscale-0"
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-600">Front End Developer </h3>
                        <p className="text-gray-600 mt-2">
                            Awarded by Dibimbing.id during the Digital Skill Fairy event for completing the e-commerce frontend case study, focusing on building a responsive e-commerce website using modern web technologies.
                        </p>

                        <div className="flex space-x-2 mt-2">
                            <FaAward className="text-yellow-500 grayscale transition duration-300 hover:grayscale-0" />
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                        src={CertificatedImage2}
                        alt="Certificate 2"
                        className="md:w-full md:h-96 object-cover grayscale transition duration-300 hover:grayscale-0 touch:grayscale-0"
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-600">Full Stack Laravel</h3>
                        <p className="text-gray-600 mt-2">
                            Awarded for completing the Full-Stack Laravel workshop, gaining hands-on experience in building dynamic web applications with both front-end and back-end development using Laravel.
                        </p>

                        <div className="flex space-x-2 mt-2">
                            <FaAward className="text-yellow-500 grayscale transition duration-300 hover:grayscale-0" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certificateds;
