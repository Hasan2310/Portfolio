import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './Home.jsx';
import Project from './Projects.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Portfolio" element={<Home />} />
        <Route path="/Portfolio/Projects" element={<Project />} />
      </Routes>
    </Router>
  </StrictMode>,
)
