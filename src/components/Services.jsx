import { useEffect, useRef } from 'react';
import '../Styles/Services.css';

const services = [
  {
    num: '01',
    icon: '◈',
    title: 'Frontend Development',
    desc: 'Clean, responsive websites and interfaces built with HTML, CSS, JavaScript, and React. I write code that is readable, maintainable, and genuinely usable.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    num: '02',
    icon: '◉',
    title: 'Website Management',
    desc: 'Keeping digital platforms accurate, updated, and performing well. From content management to testing and debugging.I make sure things stay working.',
    tags: ['CMS', 'Debugging', 'QA Testing', 'UX'],
  },
  {
    num: '03',
    icon: '◇',
    title: 'Digital Operations & Systems',
    desc: 'Supporting document management, visitor systems, and internal tools. I improve workflows, data accuracy, and operational reliability for digital-first teams.',
    tags: ['System Testing', 'Data Entry', 'Workflows'],
  },
  {
    num: '04',
    icon: '◎',
    title: 'Tech Training & Learner Support',
    desc: 'During my time at Alx Africa, I shared knowledge through structured feedback, grading, and guidance. Rooted in my experience of supporting learners in algebra and statistics.',
    tags: ['ALX Africa', 'Feedback', 'E-learning'],
  },
];

export default function Services() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 80);
          });
        }
      });
    }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" className="section services" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <p className="label">What I Do</p>
          <div className="divider" />
          <h2>What I bring<br /><em>to the table</em></h2>
          <p className="section-sub">
            From building interfaces to managing systems. I work across the full
            digital lifecycle with care and precision.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <div key={s.num} className={`service-card reveal d${i + 1}`}>
              <div className="service-card__top">
                <span className="service-num">{s.num}</span>
                <span className="service-icon">{s.icon}</span>
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <div className="service-hover-bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}