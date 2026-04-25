import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  const appRef = useRef(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    gsap.to('.hero-bg', {
      yPercent: 8,
      ease: 'none',
      scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });

    ScrollTrigger.batch('.reveal', {
      start: 'top 88%',
      once: true,
      onEnter: (elements) => {
        gsap.to(elements, {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power2.out',
          overwrite: true
        });
      }
    });

    gsap.from('.bento-card', {
      autoAlpha: 0,
      y: 28,
      duration: 0.8,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#features .bento',
        start: 'top 82%'
      }
    });

    gsap.from('.project-card', {
      autoAlpha: 0,
      y: 28,
      duration: 0.8,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#projects .projects-grid',
        start: 'top 82%'
      }
    });
  }, { scope: appRef });

  return (
    <main ref={appRef}>
      <LoadingScreen />
      <CustomCursor />
      <ParticleBackground />
      <div className="grain"></div>
      <Navbar />
      <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 110 }}>
        <ThemeToggle />
      </div>
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
