import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;

    const onMouseMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      setTimeout(() => {
        ring.style.left = e.clientX + 'px';
        ring.style.top = e.clientY + 'px';
      }, 80);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, .project-card, .bento-card, .visual-cert-item, .stat-pill');
      if (target) {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        ring.style.width = '60px';
        ring.style.height = '60px';
        ring.style.borderColor = 'rgba(0,229,255,0.7)';
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('a, button, .project-card, .bento-card, .visual-cert-item, .stat-pill');
      if (target) {
        cursor.style.width = '12px';
        cursor.style.height = '12px';
        ring.style.width = '40px';
        ring.style.height = '40px';
        ring.style.borderColor = 'rgba(0,229,255,0.4)';
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" id="cursorRing" ref={ringRef}></div>
    </>
  );
};

export default CustomCursor;
