import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const NAV_HEIGHT = 72; // tinggi navbar

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const menuItems = [
    { label: 'About Me', href: '#about' },
    { label: 'Service', href: '#service' },
    { label: 'Skills', href: '#skills' },
    { label: 'Project', href: '#project' },
    { label: 'Contact', href: '#contact' },
  ];

  const getScrollTop = () =>
    window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

  useEffect(() => {
    const onAnyScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const current = getScrollTop();
        const delta = current - lastScrollY.current;

        setIsScrolled(current > 50);

        if (!isMobileMenuOpen) {
          const threshold = 4;
          if (delta > threshold && current > NAV_HEIGHT + 8) {
            setShowNavbar(false); // scroll down
          } else if (delta < -threshold) {
            setShowNavbar(true); // scroll up
          } else if (current <= NAV_HEIGHT) {
            setShowNavbar(true); // top
          }
        } else {
          setShowNavbar(true);
        }

        lastScrollY.current = Math.max(0, current);
        ticking.current = false;
      });
    };

    document.addEventListener('scroll', onAnyScroll, { capture: true, passive: true });
    window.addEventListener('scroll', onAnyScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', onAnyScroll, { capture: true });
      window.removeEventListener('scroll', onAnyScroll);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(v => !v);

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      {/* Navbar */}
      <motion.nav
        initial={false}
        animate={{ y: showNavbar ? 0 : -NAV_HEIGHT, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 40, mass: 0.6 }}
        style={{ willChange: 'transform' }}
        className={`fixed top-0 left-0 right-0 z-40 ${
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
            {menuItems.map((item) => (
              <li key={item.href}>
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

      {/* Hamburger */}
      <AnimatePresence>
        {showNavbar && (
          <motion.button
            onClick={toggleMobileMenu}
            className="fixed top-6 right-6 z-[9999] md:hidden text-white text-3xl"
            aria-label="Toggle menu"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 40 }}
          >
            {isMobileMenuOpen ? <X size={32} strokeWidth={2} /> : <Menu size={32} strokeWidth={2} />}
          </motion.button>
        )}
      </AnimatePresence>

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
              {menuItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
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
