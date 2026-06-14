import React, { useEffect, useRef } from 'react';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import PageFour from './pages/PageFour';
import './App.css';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      
      if (scrollTop >= windowHeight * 4) {
        window.scrollTo(0, 0);
      }
      
      if (scrollTop < 0) {
        window.scrollTo(0, windowHeight * 4);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="scroll-container">
        <section><PageOne /></section>
        <section><PageTwo /></section>
        <section><PageThree /></section>
        <section><PageFour /></section>
        <section><PageOne /></section>
      </div>
    </>
  )
}

export default App;
