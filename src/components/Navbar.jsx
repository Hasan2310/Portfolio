import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuItems = [
    { label: 'About Me', href: '#about' },
    { label: 'Service', href: '#service' },
    { label: 'Skills', href: '#skills' },
    { label: 'Project', href: '#project' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      // Deteksi arah scroll di desktop
      if (window.innerWidth >= 768) {
        if (currentScrollY > lastScrollY) {
          setShowNavbar(false); // Scroll down -> hide
        } else {
          setShowNavbar(true); // Scroll up -> show
        }
        setLastScrollY(currentScrollY);
      }

      // Auto close mobile menu saat scroll
      if (currentScrollY > 50) setIsMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 
          ${!showNavbar ? 'md:-translate-y-full' : ''} 
          ${
            isMobileMenuOpen
              ? 'bg-transparent shadow-none backdrop-blur-none'
              : isScrolled
              ? 'bg-[#1a1a1a]/80 backdrop-blur-md shadow-md'
              : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white relative">
          {/* Logo */}
          <div className="z-40">
            <Logo className="w-12 h-12 text-white" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-sm uppercase tracking-wide font-medium items-center">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`${
                    item.label === 'Contact'
                      ? 'px-4 py-2 rounded-full bg-gradient-to-r from-[#4c1d95] to-[#5b21b6] text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 hover:brightness-110'
                      : 'hover:text-[#5b21b6]'
                  } transition duration-300`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Hamburger Menu */}
      <button
        onClick={toggleMobileMenu}
        className="fixed top-6 right-6 z-[9999] md:hidden text-white text-3xl"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isMobileMenuOpen ? (
            <motion.div
              key="x-icon"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <X size={32} strokeWidth={2} />
            </motion.div>
          ) : (
            <motion.div
              key="menu-icon"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={32} strokeWidth={2} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

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
                  <button
                    onClick={() => {
                      scrollToSection(item.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`${
                      item.label === 'Contact'
                        ? 'px-4 py-2 rounded-full bg-gradient-to-r from-[#4c1d95] to-[#5b21b6] text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 hover:brightness-110'
                        : 'hover:text-[#5b21b6]'
                    } transition duration-300 w-full text-left`}
                  >
                    {item.label}
                  </button>
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
