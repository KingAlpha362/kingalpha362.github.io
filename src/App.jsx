import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TargetCursor from './components/TargetCursor';
import ClickSpark from './components/ClickSpark';
import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import DeveloperTerminal from './components/DeveloperTerminal';

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
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          overwrite: true
        });
      }
    });

    gsap.from('.bento-card', {
      autoAlpha: 0,
      y: 40,
      duration: 1.2,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#features .bento',
        start: 'top 82%'
      }
    });

    gsap.from('.project-card', {
      autoAlpha: 0,
      y: 40,
      duration: 1.2,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#projects .projects-grid',
        start: 'top 82%'
      }
    });
  }, { scope: appRef });

  return (
    <main ref={appRef}>
      <ClickSpark sparkColor="#00e5ff" sparkSize={12} sparkRadius={20} sparkCount={8} duration={400}>
        <LoadingScreen />
        <TargetCursor targetSelector="a, button, .bento-card, .project-card, .visual-cert-item, .tech-logo-wrapper" />
        <ParticleBackground />
        <div className="grain"></div>
        <Navbar />
        <Hero />
        <Skills />
        <TechStack />
        <Projects />
        <About />
        <Contact />
        <Footer />
        <CommandPalette />
        <DeveloperTerminal />
      </ClickSpark>
    </main>
  );
}

export default App;
