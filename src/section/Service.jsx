import React from 'react'
import { motion } from 'framer-motion'

const Service = () => {
    return (
        <section className="relative min-h-screen flex items-center px-6 md:px-30 py-16 bg-[#111] text-[#e0e0e0] overflow-hidden" id="service">
            {/* Konten Utama */}
            <div className="relative z-10 container mx-auto flex flex-col lg:flex-row justify-between items-center gap-16">

                {/* Judul */}
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h1 className="text-anton text-[80px] sm:text-[120px] md:text-[180px] leading-none text-center lg:text-left text-white">
                        <span className='text-purple-gradient'>MY</span><br />SERVICE
                    </h1>
                </motion.div>

                {/* Layanan */}
                <motion.div
                    className="flex-1 space-y-12 text-lg"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="group transition-all duration-300">
                        <h2 className="text-2xl font-semibold text-white mb-2">
                            Web Development
                        </h2>
                        <p className="text-[#b0b0b0] group-hover:text-white transition-colors duration-300">
                            I develop responsive and easy-to-use websites that adapt well to different screen sizes.
                            The goal is to make websites that look good, load fast, and are simple to navigate.
                            I work with attention to structure, layout, and user experience.
                        </p>
                    </div>

                    <div className="group transition-all duration-300">
                        <h2 className="text-2xl font-semibold text-white mb-2">
                            UI/UX Design
                        </h2>
                        <p className="text-[#b0b0b0] group-hover:text-white transition-colors duration-300">
                            I design simple and user-friendly interfaces that focus on clarity and ease of use.
                            Each design is made to help users interact naturally and comfortably, whether on mobile or desktop.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Service;
