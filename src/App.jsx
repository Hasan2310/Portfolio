import React, { useState, useEffect } from 'react';
import './App.css'
import Loading from './components/Loading';
import Portfolio from './section/Portfolio';
import About from './section/About';
import Service from './section/Service';
import Skills from './section/Skill';
import Project from './section/Project';
import Contact from './section/Contact';


const App = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false); // mulai animasi keluar
    }, 2000); // durasi tampilan loading

    return () => clearTimeout(timer);
  }, []);

  // Nunggu animasi exit selesai (1 detik delay tambahan)
  useEffect(() => {
    if (!showLoading) {
      const contentTimer = setTimeout(() => {
        setShowContent(true); // baru render konten
      }, 1000); // <== HARUS SAMA kayak transition.duration di Loading.jsx

      return () => clearTimeout(contentTimer);
    }
  }, [showLoading]);

  return (
    <div className="overflow-hidden">
      <Loading isVisible={showLoading} />
      {showContent && (
        <>
          <Portfolio/>

          <About/>

          <Service/>

          <Skills/>

          <Project/>

          <Contact/>

        </>
      )}
    </div>
  )
}

export default App
