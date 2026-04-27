import React, { useState, useEffect } from 'react';
import PillNav from './PillNav';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '#home';
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 100) {
          current = '#' + s.id;
        }
      });
      setActiveSection(current);

      // Update scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      const nav = document.querySelector('.pill-nav-container');
      if (nav) {
        nav.style.setProperty('--scroll-progress', scrollPercent + '%');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items = [
    { label: '<Home />', href: '#home' },
    { label: '<Skills />', href: '#features' },
    { label: '<Projects />', href: '#projects' },
    { label: '<About />', href: '#about' },
    { label: '<Contact />', href: '#contact' }
  ];

  return (
    <PillNav
      logo="logo.svg"
      logoAlt="Alpha Tapfuma Logo"
      items={items}
      activeHref={activeSection}
      baseColor="#00e5ff"
      pillColor="rgba(255,255,255,0.06)"
      hoveredPillTextColor="#111113"
      pillTextColor="#E8E8EF"
      ease="power2.easeOut"
      rightElement={<ThemeToggle />}
    />
  );
};

export default Navbar;
