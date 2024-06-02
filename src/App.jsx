import React, { useEffect, useRef } from 'react';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import PageFour from './pages/PageFour';
import './App.css';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      let scrollHeight = document.documentElement.scrollHeight;
      let totalHeight = window.innerHeight + window.pageYOffset;

      if (totalHeight >= scrollHeight - 100) {
        window.scrollTo(0, 1);
      }
    };

    window.addEventListener('scroll', handleScroll);

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
      </div>
    </>
  )
}

export default App;
