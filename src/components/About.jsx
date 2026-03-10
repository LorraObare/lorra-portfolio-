import { useEffect, useRef } from 'react';
import '../Styles/About.css';

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
        }
      });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container about__inner">
        {/* Left: image */}
        <div className="about__visual reveal">
          <div className="about__img-frame">
            <div className="about__img-bg" />
            <div className="about__img-portrait">
              <img
                src="/hero-profile.jpg"
                alt="Laura Obare"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.dataset.fallback = 'true';
                }}
              />
              <span className="about__portrait-fallback">LO</span>
            </div>
            <div className="about__tag">
              <span className="label">Nairobi, Kenya</span>
            </div>
          </div>
        </div>

        {/* Right: content */}
        <div className="about__content">
          <p className="label reveal">About Me</p>
          <div className="divider reveal d1" />
          <h2 className="reveal d1">
            IT graduate.<br />
            <em>Systems thinker.</em><br />
            Digital builder.
          </h2>
          <p className="about__text reveal d2">
            I hold a Diploma in Information Technology with a Distinction, and I've deepened
            my skills through ALX Africa's certification programmes. My foundation spans
            frontend development, digital operations, and system management areas where
            I've had real, hands-on impact.
          </p>
          <p className="about__text reveal d3">
            I learn new tools quickly, communicate clearly, and bring genuine care to every
            project. Whether I'm refining a website's user experience, improving a document
            management workflow, or supporting learners through feedback, I show up with
            curiosity, precision, and a drive to make things work better.
          </p>

          <div className="about__facts reveal d4">
            {[
              { icon: '', label: 'Education', val: 'Information Technology — Distinction' },
              { icon: '', label: 'Location', val: 'Nairobi, Kenya' },
              { icon: '', label: 'Focus', val: 'Frontend Dev · Digital Ops · Systems' },
              
            ].map(f => (
              <div key={f.label} className="fact-row">
                <span className="fact-icon">{f.icon}</span>
                <div>
                  <span className="fact-label">{f.label}</span>
                  <span className="fact-val">{f.val}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="about__actions reveal d5">
            <a href="/LauraOsanya-CV.pdf" className="btn btn-primary" download>
              Download CV
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M7.5 2v8M3 7l4.5 4.5L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <button className="btn btn-outline" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Work With Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}