import React from 'react';

const WaveBackground = () => {
  return (
    <div className="wave-background">
      <svg
        className="wave wave-1"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C300,100 600,20 900,60 C1050,80 1200,40 1200,60 L1200,120 L0,120 Z"
          fill="rgba(0,229,255,0.03)"
        />
      </svg>
      <svg
        className="wave wave-2"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 C250,40 500,80 750,40 C900,60 1050,20 1200,60 L1200,120 L0,120 Z"
          fill="rgba(0,229,255,0.02)"
        />
      </svg>
      <svg
        className="wave wave-3"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 C200,60 400,100 600,60 C800,80 1000,40 1200,80 L1200,120 L0,120 Z"
          fill="rgba(0,229,255,0.015)"
        />
      </svg>
    </div>
  );
};

export default WaveBackground;
