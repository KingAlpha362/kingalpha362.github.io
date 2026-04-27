import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const StaggeredText = ({ text, delay = 0, staggerDelay = 20, className = '' }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.staggered-letter', {
      opacity: 0,
      y: 15,
      duration: 0.6,
      stagger: staggerDelay / 1000,
      delay: delay / 1000,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 95%',
      }
    });
  }, { scope: containerRef });

  const words = text.split(' ');

  return (
    <span className={`staggered-text ${className}`} ref={containerRef} style={{ display: 'inline-block' }}>
      {words.map((word, wIdx) => (
        <span key={wIdx} className="staggered-word" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((char, cIdx) => (
            <span
              key={cIdx}
              className="staggered-letter"
              style={{ display: 'inline-block', opacity: 1, willChange: 'opacity, transform' }}
            >
              {char}
            </span>
          ))}
          {wIdx !== words.length - 1 && (
            <span className="staggered-letter" style={{ display: 'inline-block' }}>&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
};

export default StaggeredText;