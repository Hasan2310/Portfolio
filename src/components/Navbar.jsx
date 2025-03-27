import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent text-[#e9e9ea] py-4 fixed w-full top-0 z-50 shadow-md">
      <div className="px-10">
        <div className="flex justify-between items-center">
          <h1 className="font-extrabold text-2xl italic">.H</h1>
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
          <a href="#about" className="text-2xl hover:text-gray-400">
            About
          </a>
          <a href="#porfolio" className="text-2xl hover:text-gray-400">
            Portfolio Showcase
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
