import React, { useEffect, useState } from 'react';

const StaggeredText = ({ text, delay = 0, staggerDelay = 50, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const letters = text.split('');

  return (
    <span className={`staggered-text ${className}`}>
      {letters.map((letter, index) => (
        <span
          key={index}
          className="staggered-letter"
          style={{
            animationDelay: isVisible ? `${index * staggerDelay}ms` : '0ms',
            animationPlayState: isVisible ? 'running' : 'paused'
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </span>
  );
};

export default StaggeredText;