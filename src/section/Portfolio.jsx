import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });

  return (
    <section
      ref={ref}
      className="flex justify-center items-center min-h-screen bg-[#17181d] px-4" id="portfolio"
    >
      <div className="flex flex-col justify-center items-center relative w-full">
        <img
          src="me.png"
          alt="Me"
          className="block lg:hidden w-full max-w-sm sm:max-w-md mx-auto -mb-12 sm:-mb-16 z-10"
        />
        <h1 className="text-anton text-[60px] sm:text-[100px] md:text-[160px] lg:text-[250px] xl:text-[330px] text-center leading-none md:z-0 z-10 md:mt-24 mt-0">
          PORTFOLIO
        </h1>
        <img
          src="me.png"
          alt="Me"
          className="hidden lg:block w-[300px] xl:w-[400px] -mt-40 md:z-10 z-0"
        />
      </div>

    </section>
  );
};

export default Portfolio;
