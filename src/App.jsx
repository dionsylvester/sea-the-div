import React, { useEffect, useRef } from 'react';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import PageFour from './pages/PageFour';
import './App.css';

function App() {
  const isResetting = useRef(false);

  useEffect(() => {
    const h = window.innerHeight;
    
    setTimeout(() => {
      window.scrollTo(0, h);
    }, 10);

    const handleScroll = () => {
      if (isResetting.current) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const h = window.innerHeight;

      if (scrollTop >= h * 5) {
        isResetting.current = true;
        window.scrollTo(0, h);
        
        setTimeout(() => { isResetting.current = false; }, 20);
      }
      
      else if (scrollTop <= 0) {
        isResetting.current = true;
        window.scrollTo(0, h * 4);
        
        setTimeout(() => { isResetting.current = false; }, 20);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-container">
      <section><PageFour /></section> 
      
      <section><PageOne /></section>
      <section><PageTwo /></section>
      <section><PageThree /></section>
      <section><PageFour /></section>
      <section><PageOne /></section>
    </div>
  );
}

export default App;