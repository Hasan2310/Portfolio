import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'About Me', href: '#about' },
    { label: 'Service', href: '#service' },
    { label: 'Skills', href: '#skills' },
    { label: 'Project', href: '#project' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY > 50) setIsMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <div>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isMobileMenuOpen
          ? 'bg-transparent shadow-none backdrop-blur-none'
          : isScrolled
            ? 'bg-[#1a1a1a]/80 backdrop-blur-md shadow-md'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white relative">
          {/* Logo */}
          <div className="z-50">
            <Logo className="w-12 h-12 text-white" />
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white text-3xl focus:outline-none z-50"
          >
            {isMobileMenuOpen ? (
              <X size={32} strokeWidth={2} />
            ) : (
              <Menu size={32} strokeWidth={2} />
            )}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-sm uppercase tracking-wide font-medium">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.label === 'Contact' ? (
                  <a
                    href={item.href}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-[#4c1d95] to-[#5b21b6] text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 hover:brightness-110 transition duration-300"
                  >
                    {item.label}
                  </a>
                ) : (
                  <a
                    href={item.href}
                    className="hover:text-[#5b21b6] transition duration-300"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}

          </ul>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-64 h-full bg-[#1a1a1a]/80 backdrop-blur-md text-white p-8 z-50 shadow-lg md:hidden border-l border-[#a78bfa]/30"
          >
            <ul className="flex flex-col gap-6 text-sm uppercase tracking-wide font-medium">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.label === 'Contact' ? (
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)} // ← INI DIA
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-[#4c1d95] to-[#5b21b6] text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 hover:brightness-110 transition duration-300"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)} // ← INI JUGA
                      className="hover:text-[#5b21b6] transition duration-300"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
