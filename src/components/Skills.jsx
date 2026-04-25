import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const reveals = containerRef.current.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(r => io.observe(r));

    const barIO = new IntersectionObserver((entries) => {
      entries.forEach((e, index) => {
        if (e.isIntersecting) {
          setTimeout(() => {
            e.target.querySelectorAll('.skill-bar-fill').forEach((bar, barIndex) => {
              setTimeout(() => {
                bar.style.width = bar.dataset.width + '%';
                bar.style.animation = 'skillPulse 0.6s ease-out';
              }, barIndex * 200);
            });
          }, index * 300);
        }
      });
    }, { threshold: 0.3 });
    containerRef.current.querySelectorAll('.bento-card').forEach(c => barIO.observe(c));

    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', x + '%');
      card.style.setProperty('--my', y + '%');
    };

    containerRef.current.querySelectorAll('.bento-card').forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
    });

    return () => {
      io.disconnect();
      barIO.disconnect();
    };
  }, []);

  return (
    <section id="features" ref={containerRef}>
      <div className="section-label reveal">Core Competencies</div>
      <h2 className="section-title reveal reveal-delay-1">Built on a foundation of<br/><em className="font-display" style={{ fontStyle: 'italic', color: 'var(--gold)' }}>deep expertise</em></h2>
      <div className="divider reveal reveal-delay-2"></div>

      <div className="bento">
        {/* Card 1 */}
        <div className="bento-card reveal" style={{ gridColumn: 'span 5' }}>
          <div className="card-icon">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="4" fill="rgba(201,168,76,0.08)"/>
              <path d="M10 13L6 18L10 23M26 13L30 18L26 23M21 11L15 25" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="card-title">Languages & Frameworks</div>
          <div className="card-body">Proficient across the full spectrum of modern programming — from systems-level C++ to data-powered Python and interactive JavaScript environments.</div>
          <div className="tag-list">
            <span className="tag">Python</span><span className="tag">C++</span><span className="tag">JavaScript</span>
            <span className="tag">TypeScript</span><span className="tag">SQL</span><span className="tag">VB.NET</span>
            <span className="tag">React</span><span className="tag">Vue.js</span><span className="tag">HTML/CSS</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bento-card reveal reveal-delay-1" style={{ gridColumn: 'span 7', padding: 0 }}>
          <div className="terminal" style={{ height: '100%', border: 'none', borderRadius: '4px' }}>
            <div className="terminal-bar">
              <div className="dot dot-r"></div><div className="dot dot-y"></div><div className="dot dot-g"></div>
              <span style={{ fontSize: '0.7rem', color: 'var(--muted)', marginLeft: '0.5rem', letterSpacing: '0.1em' }}>alpha@portfolio ~ /skills</span>
            </div>
            <div className="terminal-body">
              <div><span className="cmd">$ </span><span className="comment"># Alpha's toolkit</span></div>
              <div><span className="cmd">$ </span>import {'{'} skills {'}'} from './alpha'</div>
              <div><span className="out">✓ Languages: Python, C++, JS, SQL loaded</span></div>
              <div><span className="cmd">$ </span>alpha.run('data_analysis')</div>
              <div><span className="out">→ Pandas, NumPy, Matplotlib, Scikit-learn</span></div>
              <div><span className="cmd">$ </span>alpha.run('web_dev')</div>
              <div><span className="out">→ React, Vue.js, HTML, CSS, jQuery</span></div>
              <div><span className="cmd">$ </span>alpha.run('security')</div>
              <div><span className="out">→ Threat intel, Pen testing, Risk assess</span></div>
              <div><span className="cmd">$ </span><span className="terminal-cursor"></span></div>
            </div>
          </div>
        </div>

        {/* Card 3 - Data Science */}
        <div className="bento-card reveal reveal-delay-2" style={{ gridColumn: 'span 4' }}>
          <div className="card-icon">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="4" fill="rgba(201,168,76,0.08)"/>
              <rect x="7" y="22" width="4" height="7" rx="1" fill="#C9A84C" opacity="0.4"/>
              <rect x="13" y="17" width="4" height="12" rx="1" fill="#C9A84C" opacity="0.6"/>
              <rect x="19" y="12" width="4" height="17" rx="1" fill="#C9A84C" opacity="0.8"/>
              <rect x="25" y="7" width="4" height="22" rx="1" fill="#C9A84C"/>
              <path d="M7 20L16 14L22 16L30 9" stroke="#E8C97A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="card-title">Data Science</div>
          <div className="card-body">Transforming raw data into meaningful insights using industry-standard tools.</div>
          <div style={{ marginTop: '1.5rem' }}>
            <div className="skill-bar">
              <div className="skill-bar-label"><span>Pandas / NumPy</span><span>88%</span></div>
              <div className="skill-bar-track"><div className="skill-bar-fill" data-width="88"></div></div>
            </div>
            <div className="skill-bar">
              <div className="skill-bar-label"><span>Matplotlib</span><span>82%</span></div>
              <div className="skill-bar-track"><div className="skill-bar-fill" data-width="82"></div></div>
            </div>
            <div className="skill-bar">
              <div className="skill-bar-label"><span>Scikit-learn</span><span>75%</span></div>
              <div className="skill-bar-track"><div className="skill-bar-fill" data-width="75"></div></div>
            </div>
            <div className="skill-bar">
              <div className="skill-bar-label"><span>BeautifulSoup</span><span>79%</span></div>
              <div className="skill-bar-track"><div className="skill-bar-fill" data-width="79"></div></div>
            </div>
          </div>
        </div>

        {/* Card 4 - Cybersecurity */}
        <div className="bento-card reveal reveal-delay-3" style={{ gridColumn: 'span 4', background: 'linear-gradient(135deg, #111113, #16141A)' }}>
          <div className="card-icon">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="4" fill="rgba(201,168,76,0.08)"/>
              <path d="M18 6L8 10V18C8 23.5 12.5 28.5 18 30C23.5 28.5 28 23.5 28 18V10L18 6Z" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 18L16.5 20.5L22 15" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="card-title">Cybersecurity</div>
          <div className="card-body">Network architecture, IP subnetting, threat intelligence, incident response, and penetration testing principles.</div>
          <div className="tag-list" style={{ marginTop: '1.2rem' }}>
            <span className="tag">Network Security</span>
            <span className="tag">Pen Testing</span>
            <span className="tag">Risk Assessment</span>
            <span className="tag">AI Ethics</span>
          </div>
        </div>

        {/* Card 5 - Cloud */}
        <div className="bento-card reveal reveal-delay-4" style={{ gridColumn: 'span 4' }}>
          <div className="card-icon">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="4" fill="rgba(201,168,76,0.08)"/>
              <path d="M10 24C7.8 24 6 22.2 6 20C6 18 7.5 16.3 9.4 16.1C9.2 15.6 9 14.8 9 14C9 11.2 11.2 9 14 9C16 9 17.7 10.1 18.6 11.7C19.1 11.3 19.8 11 20.5 11C22.4 11 24 12.6 24 14.5C24 14.7 24 14.8 23.9 15C26.2 15.4 28 17.4 28 20C28 22.2 26.2 24 24 24H10Z" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="card-title">Cloud & Architecture</div>
          <div className="card-body">Academic grounding in cloud computing paradigms and computer architecture for scalable, efficient system design.</div>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', color: 'var(--gold)' }}>Cloud</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Computing</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', color: 'var(--gold)' }}>DB</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Systems</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', color: 'var(--gold)' }}>OOP</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Design</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
