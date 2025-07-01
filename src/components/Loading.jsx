import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Loading = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isVisible]);

  return (
    <div>
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Layer Grape Purple di bawah */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 0 }}
              exit={{
                y: '100%',
                borderTopLeftRadius: '100%',
                borderTopRightRadius: '100%',
              }}
              transition={{
                delay: 0.001, // muncul lebih lambat
                duration: 1.1,
                ease: [0.6, 0.01, -0.05, 0.95],
              }}
              className="fixed top-0 left-0 w-full h-screen bg-[#4c1d95]  z-[9998] blur-lg"
            />

            {/* Layer utama loading */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 0 }}
              exit={{
                y: '100%',
                borderTopLeftRadius: '100%',
                borderTopRightRadius: '100%',
              }}
              transition={{
                duration: 1,
                ease: [0.6, 0.01, -0.05, 0.95],
              }}
              className="fixed top-0 left-0 w-full h-screen bg-[#1a1a1a] flex items-center justify-center z-[9999]"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: 0.7,
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-white w-32 h-32"
              >
                <Logo className="w-full h-full text-white" />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Loading;
