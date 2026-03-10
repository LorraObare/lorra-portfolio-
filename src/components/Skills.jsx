import { useEffect, useRef } from 'react';
import '../Styles/Skills.css';

const skillGroups = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML5 & Semantic Markup', level: 92 },
      { name: 'CSS3 & Responsive Design', level: 90 },
      { name: 'JavaScript (ES6+)', level: 82 },
      { name: 'React', level: 78 },
    ],
  },
  {
    category: 'Digital & Systems',
    items: [
      { name: 'System Testing & QA', level: 85 },
      { name: 'REST APIs & Debugging', level: 75 },
      { name: 'Document & Data Management', level: 88 },
      { name: 'UI Collaboration & Figma', level: 80 },
    ],
  },
  {
    category: 'Strengths',
    items: [
      { name: 'Attention to Detail', level: 96 },
      { name: 'Communication & Feedback', level: 92 },
      { name: 'Learning New Tools Quickly', level: 94 },
      { name: 'Organisation & Initiative', level: 90 },
    ],
  },
];

const tools = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Git', 'GitHub',
  'Figma', 'REST APIs', 'VS Code', 'Databases', 'CMS Platforms', 'ALX Africa',
];

export default function Skills() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 80);
          });
          // Animate skill bars
          e.target.querySelectorAll('.skill-fill').forEach(bar => {
            setTimeout(() => {
              bar.style.width = bar.dataset.level + '%';
            }, 400);
          });
        }
      });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="container">
        <div className="skills__header reveal">
          <p className="label">Expertise</p>
          <div className="divider" />
          <h2>Skills &amp; <em>expertise</em></h2>
        </div>

        <div className="skills__layout">
          <div className="skills__groups">
            {skillGroups.map((group, gi) => (
              <div key={group.category} className={`skill-group reveal d${gi + 1}`}>
                <h4 className="skill-group-title">{group.category}</h4>
                {group.items.map(skill => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-pct">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        data-level={skill.level}
                        style={{ width: 0 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="skills__side reveal d4">
            <div className="tools-panel">
              <h4 className="skill-group-title">Tools &amp; Stack</h4>
              <div className="tools-cloud">
                {tools.map(t => (
                  <span key={t} className="tool-chip">{t}</span>
                ))}
              </div>
            </div>

            <div className="skills__quote">
              <div className="quote-mark">"</div>
              <p>
                When I sit down to code, what goes through my mind is, How can I bring forth a better solution? My skills go beyond delivering all the way to; How best have I solved this problem to what sort of impact have I brought?

              </p>
              <span className="label">— Laura Obare</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}