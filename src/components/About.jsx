import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const containerRef = useRef(null);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    const reveals = containerRef.current.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(r => io.observe(r));

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      io.disconnect();
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (activeModal !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [activeModal]);

  const certs = [
    { id: 1, title: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy · Nov 2024', img: '/Intro to Cyber.jpg' },
    { id: 2, title: 'Artificial Intelligence Fundamentals', issuer: 'IBM SkillsBuild · Oct 2024', img: '/Artificial-Intelligence.png' },
    { id: 3, title: 'Cybersecurity Fundamentals', issuer: 'IBM SkillsBuild · Oct 2024', img: '/Cyberfundementals.png' }
  ];

  return (
    <section id="about" ref={containerRef}>
      <div className="section-label reveal">Background</div>
      <h2 className="section-title reveal reveal-delay-1">Driven by <em className="font-display" style={{ fontStyle: 'italic', color: 'var(--gold)' }}>curiosity</em>,<br/>guided by precision</h2>
      <div className="divider reveal reveal-delay-2"></div>

      <div className="about-grid">
        <div className="about-text reveal reveal-delay-2">
          <div className="about-photo-inline">
            <img src="/1761846259768.jpg" alt="Alpha Tapfuma"/>
          </div>
          <p>I'm Alpha Tapfuma, a BSc Information Technology student with a passion for building things that are efficient, secure, and beautifully engineered. My academic journey has taken me through the full spectrum of modern computing — from the low-level logic of computer architecture to cloud-native systems and data-driven applications.</p>
          <p>My technical foundation spans Python, C++, JavaScript, SQL, and MySQL, with hands-on experience in web development using React and Vue.js. I've applied this knowledge across real projects in data analysis, GUI development, and systems programming.</p>
          <p>I'm particularly drawn to the intersection of cybersecurity and intelligent systems — building solutions that are not only functional, but resilient and responsible. Graduating in 2027, I'm actively seeking opportunities to apply and expand this expertise.</p>
        </div>

        <div className="reveal reveal-delay-3">
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>Certifications</div>
          <div className="visual-cert-list">

            {certs.map((cert, index) => (
              <div key={cert.id} className="visual-cert-item" onClick={() => setActiveModal(cert.id)}>
                <div className="visual-cert-preview">
                  <img src={cert.img} alt={cert.title}/>
                  <div className="visual-cert-overlay">
                    <span>Click to view</span>
                  </div>
                </div>
                <div className="visual-cert-info">
                  <div className="cert-num-small">0{index + 1}</div>
                  <div>
                    <div className="cert-title">{cert.title}</div>
                    <div className="cert-issuer">{cert.issuer}</div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* MODALS */}
        {certs.map(cert => (
          <div 
            key={`modal-${cert.id}`} 
            className={`cert-modal ${activeModal === cert.id ? 'open' : ''}`} 
            onClick={() => setActiveModal(null)}
          >
            <div className="cert-modal-inner" onClick={e => e.stopPropagation()}>
              <button className="cert-close" onClick={() => setActiveModal(null)}>&#x2715;</button>
              <img src={cert.img} alt={cert.title} />
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default About;
