import { useEffect, useRef, useState } from 'react';
import '../Styles/Testimonials.css';

const testimonials = [
  {
    quote: "Laura brought a level of precision and initiative that genuinely stood out. Her ability to identify issues in our system and follow through with solutions made a real difference to our team's daily operations.",
    name: "Supervisor, NTSA",
    title: "National Transport & Safety Authority",
    initials: "NT",
  },
  {
    quote: "As a grader, Laura consistently delivered feedback that was fair, clear, and genuinely helpful to learners. She has a gift for explaining complex ideas in ways that build confidence rather than intimidate.",
    name: "Programme Lead, ALX Africa",
    title: "ALX Africa — Software Engineering",
    initials: "AL",
  },
  {
    quote: "Working with Laura on our digital platform was a great experience. She asked the right questions, paid close attention to the details that mattered, and delivered exactly what we needed.",
    name: "Client — Gemasu Project",
    title: "Website Development Partner",
    initials: "GP",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100);
          });
        }
      });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section testimonials" ref={ref}>
      <div className="container">
        <div className="testi__header reveal">
          <p className="label">What People Say</p>
          <div className="divider" />
          <h2>Words from those<br /><em>I've worked with</em></h2>
        </div>

        <div className="testi__content">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`testi-card ${i === active ? 'active' : ''}`}
            >
              <div className="testi-quote-mark">"</div>
              <blockquote className="testi-text">{t.quote}</blockquote>
              <div className="testi-author">
                <div className="testi-avatar">{t.initials}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.title}</span>
                </div>
              </div>
            </div>
          ))}

          <div className="testi-dots reveal">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === active ? 'active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}