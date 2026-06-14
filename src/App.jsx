import React, { useEffect, useRef } from 'react';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import PageFour from './pages/PageFour';
import './App.css';

function App() {
  const [index, setIndex] = useState(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isAnimating.current) return;

      if (e.deltaY > 20) {
        isAnimating.current = true;
        setIndex((prev) => (prev + 1) % PAGES.length);
      } else if (e.deltaY < -20) {
        isAnimating.current = true;
        setIndex((prev) => (prev - 1 + PAGES.length) % PAGES.length);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="infinite-viewport">
      <motion.div 
        className="infinite-slider-container"
        animate={{ translateY: `-${index * 100}vh` }}
        transition={{
          type: "spring",
          stiffness: 65,
          damping: 22,
          restDelta: 0.001
        }}
        onAnimationComplete={() => {
          isAnimating.current = false;
        }}
      >
        {PAGES.map((page) => (
          <div className="infinite-page-section" key={page.id}>
            {page.component}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default App;
