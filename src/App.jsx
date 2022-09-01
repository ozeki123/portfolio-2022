import React, { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Projects from './pages/Projects/Projects';
import './styles/globals.scss';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import About from './pages/About/About';

function App() {
  const containerRef = useRef(null);
  return (
    <div className="app-container">
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.08,
          multiplier: 1,
        }}
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </LocomotiveScrollProvider>
    </div>
  );
}

export default App;
