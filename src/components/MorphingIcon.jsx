import React from 'react';

const MorphingIcon = ({ icon: IconComponent, className = '', delay = 0 }) => {
  return (
    <div
      className={`morphing-icon ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <IconComponent />
    </div>
  );
};

export default MorphingIcon;