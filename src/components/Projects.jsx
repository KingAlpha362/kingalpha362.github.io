import React, { useEffect, useRef } from 'react';
import CircularGallery from './CircularGallery';

const Projects = () => {
  const containerRef = useRef(null);
  const projects = [
    {
      lang: 'Python',
      name: 'ATM Machine Simulation',
      desc: 'Menu-driven application simulating real banking interactions — deposits, withdrawals, and balance tracking with clean state management.',
      link: 'https://github.com/KingAlpha362',
      delay: ''
    },
    {
      lang: 'Python',
      name: 'Inventory Management System',
      desc: 'Stock management tool for tracking inventory items, quantities, and categories — built with clean OOP principles for extensibility.',
      link: 'https://github.com/KingAlpha362',
      delay: 'reveal-delay-1'
    },
    {
      lang: 'Data Science',
      name: 'Sales Data Analysis',
      desc: 'Jupyter Notebook workflow extracting actionable insights from sales datasets using Pandas, Matplotlib, and statistical analysis techniques.',
      link: 'https://github.com/KingAlpha362',
      delay: 'reveal-delay-2'
    },
    {
      lang: 'React',
      name: 'React Application',
      desc: 'General-purpose React form application demonstrating component-based architecture, state management, and modern UI/UX patterns.',
      link: 'https://github.com/KingAlpha362',
      delay: 'reveal-delay-3'
    },
    {
      lang: 'TypeScript',
      name: 'Penny 1.0',
      desc: 'A TypeScript-based application exploring strongly-typed development patterns and modern ES module architecture.',
      link: 'https://github.com/KingAlpha362',
      delay: ''
    },
    {
      lang: 'Python / Tkinter',
      name: 'OOP GUI Application',
      desc: "Graphical desktop application demonstrating object-oriented design principles using Python's Tkinter framework for native UI rendering.",
      link: 'https://github.com/KingAlpha362',
      delay: 'reveal-delay-1'
    },
    {
      lang: 'C++',
      name: 'Bank System',
      desc: 'Structured C++ program simulating core banking operations — demonstrating systems-level programming and memory management fundamentals.',
      link: 'https://github.com/KingAlpha362',
      delay: 'reveal-delay-2'
    },
    {
      lang: 'JavaScript',
      name: 'Web Projects Collection',
      desc: 'A suite of responsive web interfaces — school pages, timetables, sign-up forms, and layout exercises built with HTML, CSS, JS, and jQuery.',
      link: 'https://github.com/KingAlpha362',
      delay: 'reveal-delay-3'
    }
  ];

  const createProjectCardImage = (project) => {
    const escapeXml = (value) =>
      value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');

    const CARD_WIDTH = 700;
    const CARD_HEIGHT = 900;

    const wrapText = (text, maxCharsPerLine, maxLines) => {
      const words = text.split(/\s+/);
      const lines = [];
      let currentLine = '';

      for (const word of words) {
        const candidate = currentLine ? `${currentLine} ${word}` : word;
        if (candidate.length <= maxCharsPerLine) {
          currentLine = candidate;
          continue;
        }
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }

      if (currentLine) lines.push(currentLine);

      if (lines.length <= maxLines) return lines;

      const clamped = lines.slice(0, maxLines);
      let lastLine = clamped[maxLines - 1];
      if (lastLine.length >= maxCharsPerLine - 1) {
        lastLine = `${lastLine.slice(0, Math.max(0, maxCharsPerLine - 2)).trim()}…`;
      } else {
        lastLine = `${lastLine}…`;
      }
      clamped[maxLines - 1] = lastLine;
      return clamped;
    };

    const renderTspans = (lines, x, startY, lineHeight) =>
      lines
        .map((line, index) => `<tspan x="${x}" y="${startY + index * lineHeight}">${escapeXml(line)}</tspan>`)
        .join('');

    const titleLines = wrapText(project.name, 18, 2);
    const titleStartY = 250;
    const titleLineHeight = 66;
    const titleBottomY = titleStartY + (titleLines.length - 1) * titleLineHeight;
    const dividerY = titleBottomY + 36;

    const descLines = wrapText(project.desc, 30, 4);
    const descStartY = dividerY + 62;
    const descLineHeight = 38;

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${CARD_WIDTH}" height="${CARD_HEIGHT}" viewBox="0 0 ${CARD_WIDTH} ${CARD_HEIGHT}">
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#111113"/>
            <stop offset="100%" stop-color="#18181C"/>
          </linearGradient>
          <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#C9A84C"/>
            <stop offset="100%" stop-color="#E8C97A"/>
          </linearGradient>
        </defs>
        <rect width="${CARD_WIDTH}" height="${CARD_HEIGHT}" fill="url(#bg)"/>
        <rect x="32" y="32" width="${CARD_WIDTH - 64}" height="${CARD_HEIGHT - 64}" rx="22" fill="none" stroke="#2B2B31" stroke-width="2"/>
        <text x="64" y="132" fill="#C9A84C" font-family="Arial, sans-serif" font-size="30" letter-spacing="3">${escapeXml(project.lang.toUpperCase())}</text>
        <text x="64" y="${titleStartY}" fill="#E8E8EF" font-family="Arial, sans-serif" font-size="56" font-weight="700">
          ${renderTspans(titleLines, 64, titleStartY, titleLineHeight)}
        </text>
        <rect x="64" y="${dividerY}" width="230" height="4" rx="2" fill="url(#line)"/>
        <text x="64" y="${descStartY}" fill="#A4A4B2" font-family="Arial, sans-serif" font-size="31">
          ${renderTspans(descLines, 64, descStartY, descLineHeight)}
        </text>
        <text x="64" y="790" fill="#C9A84C" font-family="Arial, sans-serif" font-size="27" letter-spacing="1.5">VIEW ON GITHUB</text>
      </svg>
    `;

    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  };

  const galleryItems = projects.map((project) => ({
    image: createProjectCardImage(project),
    text: project.name
  }));

  useEffect(() => {
    const reveals = containerRef.current.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(r => io.observe(r));

    return () => io.disconnect();
  }, []);

  return (
    <section id="projects" style={{ background: 'var(--surface)' }} ref={containerRef}>
      <div className="section-label reveal">Work</div>
      <h2 className="section-title reveal reveal-delay-1">Selected <em className="font-display" style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Projects</em></h2>
      <div className="divider reveal reveal-delay-2"></div>
      <p className="reveal reveal-delay-3" style={{ color: 'var(--text-dim)', fontSize: '0.9rem', maxWidth: '560px', lineHeight: 1.8, marginTop: '0.5rem' }}>
        A curated selection of work spanning systems programming, data science, web development, and productivity tooling.
      </p>

      <div className="reveal" style={{ height: '600px', position: 'relative', marginTop: '3rem' }}>
        <CircularGallery items={galleryItems} bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
      </div>
    </section>
  );
};

export default Projects;
