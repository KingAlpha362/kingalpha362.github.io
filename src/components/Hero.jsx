import TypingText from './TypingText';
import StaggeredText from './StaggeredText';
import Silk from './Silk';
import heroImg from '../assets/IMG_20230505_192032.jpg';

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
        <div className="hero-badge animate-fade-in">
          <span></span>
          <span>Available for opportunities · 2027 Graduate</span>
        </div>
        <h1 className="hero-name">
          <TypingText text="Alpha" delay={1000} speed={150} />
          <br/>
          <em>
            <TypingText text="Tapfuma" delay={2000} speed={150} />
          </em>
        </h1>
        <p className="hero-tagline animate-slide-up" style={{ animationDelay: '3.5s' }}>
          <StaggeredText
            text="BSc Information Technology student crafting efficient, secure, and data-driven solutions — where code meets curiosity."
            delay={3500}
            staggerDelay={20}
          />
        </p>
        <div className="hero-cta animate-slide-up" style={{ animationDelay: '5s' }}>
          <a href="#projects" className="btn-gold animate-pulse-glow">
            <StaggeredText text="View My Work" delay={5500} staggerDelay={50} />
          </a>
          <a href="#contact" className="btn-outline animate-pulse-glow" style={{ animationDelay: '6s' }}>
            <StaggeredText text="Get In Touch" delay={6500} staggerDelay={50} />
          </a>
        </div>
      </div>

      {/* Photo + Stats */}
      <div className="hero-right animate-slide-left" style={{ animationDelay: '2s' }}>
        <div className="photo-frame animate-float" style={{ zIndex: 1, position: 'relative' }}>
          <img src={heroImg} alt="Alpha Tapfuma" />
          <div className="photo-glow"></div>
        </div>

        <div className="stat-pills animate-stagger-up" style={{ zIndex: 2, position: 'relative' }}>
          <div className="stat-pill animate-bounce-in" style={{ animationDelay: '3.5s' }}>
            <div className="stat-num">5+</div>
            <div className="stat-label">Languages<br/>Mastered</div>
          </div>
          <div className="stat-pill animate-bounce-in" style={{ animationDelay: '4s' }}>
            <div className="stat-num">30+</div>
            <div className="stat-label">Projects<br/>Completed</div>
          </div>
          <div className="stat-pill animate-bounce-in" style={{ animationDelay: '4.5s' }}>
            <div className="stat-num">3</div>
            <div className="stat-label">Certifications<br/>Earned</div>
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
