import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Show loading for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <span className="loading-text">ALPHA TAPFUMA</span>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
        </div>
        <div className="loading-particles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="loading-particle" style={{ animationDelay: `${i * 0.2}s` }}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;