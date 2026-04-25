import React, { useState, useEffect } from 'react';

const TypingText = ({ text, delay = 0, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let typingInterval;
    const startTimeout = setTimeout(() => {
      let index = 0;
      setDisplayText('');

      typingInterval = setInterval(() => {
        index += 1;
        setDisplayText(text.slice(0, index));

        if (index >= text.length) {
          clearInterval(typingInterval);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      if (typingInterval) clearInterval(typingInterval);
    };
  }, [text, delay, speed]);

  const isComplete = displayText.length >= text.length;

  return (
    <span className={`typing-text ${isComplete ? 'complete' : ''}`}>
      {displayText}
      {!isComplete && <span className="cursor">|</span>}
    </span>
  );
};

export default TypingText;