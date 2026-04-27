import TypingText from './TypingText';
import StaggeredText from './StaggeredText';
import Silk from './Silk';
import heroImg from '../assets/professional.jpg';

const Hero = () => {
  return (
    <section id="home">
      <div className="hero-bg"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Silk
            speed={5}
            scale={1}
            color="#7B7481"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>
      </div>

      <div className="hero-content">
        <div className="font-mono text-[var(--gold)] text-xs uppercase tracking-[0.3em] mb-4 opacity-80">
          <TypingText text="> sudo run _" delay={500} speed={80} />
        </div>
        <h1 className="hero-name">
          <StaggeredText text="Engineering" delay={1200} staggerDelay={30} />
          <br/>
          <em className="text-[var(--gold)]">
            <StaggeredText text="Scalable UI_." delay={1800} staggerDelay={30} />
          </em>
        </h1>
        <p className="hero-tagline animate-slide-up" style={{ animationDelay: '3s' }}>
          <StaggeredText
            text="I am Alpha Tapfuma — a BSc Information Technology undergraduate architecting robust backends and high-performance frontend systems."
            delay={3000}
            staggerDelay={20}
          />
        </p>
        <div className="hero-cta animate-slide-up" style={{ animationDelay: '4.5s' }}>
          <a href="#projects" className="btn-gold animate-pulse-glow">
            <StaggeredText text="< View Work />" delay={4500} staggerDelay={30} />
          </a>
          <a href="#contact" className="btn-outline animate-pulse-glow" style={{ animationDelay: '5s' }}>
            <StaggeredText text="initialize_contact()" delay={5000} staggerDelay={30} />
          </a>
        </div>
      </div>

      {/* Photo + Stats */}
      <div className="hero-right animate-slide-left" style={{ animationDelay: '2s' }}>
        <div className="photo-frame animate-float" style={{ zIndex: 1, position: 'relative' }}>
          <img src={heroImg} alt="Alpha Tapfuma" className="relative z-10" />
          <div className="photo-glow"></div>
          {/* Tech Data Ring */}
          <svg className="absolute -inset-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)] animate-spin-slow opacity-40 pointer-events-none" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="var(--gold)" strokeWidth="0.5" strokeDasharray="4 8" />
            <circle cx="50" cy="50" r="38" fill="none" stroke="var(--gold)" strokeWidth="0.2" />
          </svg>
        </div>

        <div className="stat-pills animate-stagger-up" style={{ zIndex: 2, position: 'relative' }}>
          <div className="stat-pill animate-bounce-in" style={{ animationDelay: '3.5s' }}>
            <div className="stat-num font-mono text-xl">5<span className="text-[var(--gold)]">+</span></div>
            <div className="stat-label uppercase tracking-widest text-[0.6rem] opacity-70">// Languages</div>
          </div>
          <div className="stat-pill animate-bounce-in" style={{ animationDelay: '4s' }}>
            <div className="stat-num font-mono text-xl">30<span className="text-[var(--gold)]">+</span></div>
            <div className="stat-label uppercase tracking-widest text-[0.6rem] opacity-70">// Repositories</div>
          </div>
          <div className="stat-pill animate-bounce-in" style={{ animationDelay: '4.5s' }}>
            <div className="stat-num font-mono text-xl">3</div>
            <div className="stat-label uppercase tracking-widest text-[0.6rem] opacity-70">// Certifications</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator animate-fade-in" style={{ animationDelay: '7s' }}>
        <div className="scroll-line"></div>
        <span className="scroll-text">Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
