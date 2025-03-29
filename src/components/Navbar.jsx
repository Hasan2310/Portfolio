import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent text-[#e9e9ea] py-4 fixed w-full top-0 z-50 shadow-md">
      <div className="px-10">
        <div className="flex justify-between items-center">
          <svg className="w-9" viewBox="0 0 865 756" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_38_2)">
              <path d="M450.74 634.98L518.46 631.84C551.36 608.46 589.63 556.97 620.14 535.99C637.5 524.06 661.11 552.83 659.46 568.65C642.57 596.34 618.85 739.34 598.82 749.21C499.26 747.99 385.16 761.12 287.04 752.46C246.58 748.89 262.45 745.7 247.25 725.94C236.92 712.51 222.11 713.55 231.21 684.14L370.52 490.08C351.62 485.33 323.49 481.43 308.69 496.09C267.1 534.67 161.33 731.98 123.75 749.01C111.86 754.39 54.7399 754.71 41.8899 750.94C28.4899 747.01 -8.13006 699.47 1.60994 682.7C107.35 522.92 223.34 369.51 333.51 212.55C321.74 202.05 303.11 205.57 289.25 201.38C283.02 199.5 260.74 192.1 259.58 184.92L467.01 123.52L506.24 129.39L519.19 132.9C541.85 148.12 544.81 160.54 532.46 189.36L397.96 372.1C397.96 372.1 405.28 371.76 412.08 371.38C423.71 370.72 444.26 371.69 452.81 368.87C475.36 361.44 623.61 113.83 660.36 83.0499L598.72 67.5999C596.84 66.1299 601.87 60.2599 604.82 58.3499C612.86 53.1499 774.91 1.59995 787.41 0.269947C821.35 -3.33005 886.3 28.3499 856.85 69.91L450.71 634.97L450.74 634.98ZM407.57 634.98L441.76 622.98C577.62 433.93 715.02 245.85 848.99 55.5199L842.25 30.7299L407.57 634.98ZM352.07 375.96C365.29 376.36 380.4 378.7 389.3 367L521.54 184.65L515.4 154.07L352.07 375.96ZM389.07 462.36H293.48C278.03 462.36 138.78 686.55 111.81 712.39C89.1999 740.69 56.2299 716.56 31.4099 730.66C50.9799 743.63 112.21 745.35 128.34 731.93L305.39 480.43C328.82 463.62 372.03 489.44 389.07 462.36ZM265.73 739.88H589.5C593.92 737.5 595.14 733.23 597.31 729.19C602.6 719.37 644.99 576.98 645.34 567.58C645.71 557.4 638.56 554.89 632.64 548.72C617.2 572.73 591.24 727.53 564.83 727.53H265.73V739.86V739.88Z" fill="#e9e9ea" />
            </g>
            <defs>
              <clipPath id="clip0_38_2">
                <rect width="864.34" height="755.44" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <button onClick={() => setIsOpen(!isOpen)} className="z-50">
            {isOpen ? '' : <Menu size={32} />}
          </button>
        </div>

        <div
          className={`fixed inset-0 bg-[#4b4b4b]/95 flex flex-col items-center justify-center gap-6 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6">
            <X size={40} color="#e9e9ea" />
          </button>
          <a href="#home" className="text-2xl hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="text-2xl hover:text-gray-400">
            About
          </a>
          <a href="#porfolio" className="text-2xl hover:text-gray-400">
            Portfolio
          </a>
          <a href="#contact" className="text-2xl hover:text-gray-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
