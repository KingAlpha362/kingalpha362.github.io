import React, { useState, useEffect } from 'react';
import PillNav from './PillNav';
import ThemeToggle from './ThemeToggle';
import { Command } from 'lucide-react';

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
      rightElement={
        <div className="flex items-center gap-1 md:gap-2">
          <button 
            onClick={() => window.dispatchEvent(new Event('open-command-palette'))}
            className="flex items-center justify-center p-2 rounded-full hover:bg-[rgba(0,229,255,0.1)] transition-colors text-zinc-400 hover:text-[var(--gold)]"
            title="Command Palette (Cmd+K)"
            style={{ cursor: 'none' }}
          >
            <Command size={18} />
          </button>
          <ThemeToggle />
        </div>
      }
    />
  );
};

export default Navbar;
