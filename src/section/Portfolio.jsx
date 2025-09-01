import React, { useRef } from "react";
import { useInView } from "framer-motion";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });

  return (
    <section
      ref={ref}
      id="portfolio"
      className="flex justify-center items-center min-h-screen bg-[#17181d] px-6 sm:px-10 lg:px-30"
    >
      <div className="flex flex-col justify-center items-center relative w-full">
        {/* Gambar atas untuk mobile */}
        <img
          src="me.png"
          alt="Me"
          className="block lg:hidden w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto -mb-8 sm:-mb-12 z-10"
        />

        {/* Judul */}
        <h1 className="text-anton text-6xl sm:text-8xl md:text-[150px] lg:text-[220px] xl:text-[280px] text-center leading-none md:z-0 z-10 mt-0 md:mt-20">
          PORTFOLIO
        </h1>

        {/* Gambar bawah untuk desktop */}
        <img
          src="me.png"
          alt="Me"
          className="hidden lg:block w-[250px] md:w-[300px] xl:w-[400px] -mt-20 md:-mt-32 z-10"
        />
      </div>
    </section>
  );
};

export default Portfolio;
