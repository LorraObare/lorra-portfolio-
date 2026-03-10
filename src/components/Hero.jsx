import { useEffect, useRef } from 'react';
import '../Styles/Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    setTimeout(() => el.classList.add('loaded'), 100);
  }, []);

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero" ref={heroRef}>

      {/* Decorative background */}
      <div className="hero__bg">
        <div className="hero__blob blob-1" />
        <div className="hero__blob blob-2" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__inner">

        {/* ── LEFT: text content ── */}
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="label">Frontend Developer</span>
            <span className="hero__dot" />
            <span className="label">Digital Operations</span>
          </div>

          <h1 className="hero__title">
            Building the<br />
            <em>digital Africa</em><br />
            of <span className="hero__highlight">tomorrow</span>
          </h1>

          <p className="hero__sub">
            I'm <strong>Laura Obare</strong> — an IT graduate and digital professional
            with a passion for frontend development, systems thinking, and African
            creativity. I build experiences that are thoughtful, functional, and made to last.
          </p>

          <div className="hero__actions">
            <button className="btn btn-primary" onClick={() => scrollTo('#work')}>
              View My Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn btn-ghost" onClick={() => scrollTo('#contact')}>
              Let's Talk
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* ── RIGHT: globe visual ── */}
        <div className="hero__visual">

          {/* Outermost atmospheric ring */}
          <div className="hero__globe-scene">
            <div className="globe-atmosphere" />
            <div className="globe-ring ring-outer" />
            <div className="globe-ring ring-mid" />

            {/* Globe image in circular frame */}
            <div className="globe-frame">
              {/* Colour-match overlay to blend the sky-blue bg into cream */}
              <div className="globe-blend-overlay" />
              <img
                src="/digital-globe.jpg"
                alt="Digital world — cities, roads and connected technology"
                className="globe-img"
              />
            </div>

            {/* Floating stat chips */}
            <div className="globe-chip chip-tl">
              <span className="chip__icon">✦</span>
              <span className="chip__label">Open to Work</span>
            </div>

            <div className="globe-chip chip-br">
              <span className="chip__val">2+</span>
              <span className="chip__label">Yrs Exp.</span>
            </div>

            <div className="globe-chip chip-bl">
              <span className="chip__icon">🌍</span>
              <span className="chip__label">Nairobi, KE</span>
            </div>
          </div>

        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="hero__stats">
        <div className="container">
          <div className="stats-row">
            {[
              { val: 'Distinction', lbl: 'IT Graduate' },
              { val: 'ALX',         lbl: 'Africa Certified' },
              { val: '2+',          lbl: 'Years Experience' },
              { val: '100%',        lbl: 'Attention to Detail' },
            ].map(s => (
              <div key={s.lbl} className="stat-item">
                <strong>{s.val}</strong>
                <span>{s.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}