import { useEffect, useRef } from 'react';
import '../Styles/Work.css';

const projects = [
  {
    id: 1,
    num: '01',
    title: 'Gemasu — Website Case Study',
    category: 'Frontend Development',
    desc: 'A full website built from concept to deployment. Starting with wireframes and user flows, I developed Gemasu using HTML, CSS, JavaScript, and React — with a focus on usability, responsiveness, and content clarity. The project taught me how to manage the complete build process: from planning architecture and choosing components, to testing across devices and refining the user experience based on feedback.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    color: '#2C3E2D',
    year: '2025',
  },
  {
    id: 2,
    num: '02',
    title: 'Document Management System — NTSA',
    category: 'Digital Operations',
    desc: 'At the National Transport and Safety Authority, I contributed to improving an internal document management system used across departments. My work focused on identifying workflow bottlenecks, improving data accuracy, and collaborating with teams to enhance the system\'s visibility and reliability. The result was a more organised, trackable, and user-friendly document environment.',
    tech: ['System Testing', 'Data Management', 'Workflow Design', 'Collaboration'],
    color: '#5A7D5C',
    year: '2025' ,
  },
  {
    id: 3,
    num: '03',
    title: 'Visitor Management System — NTSA',
    category: 'Digital Operations',
    desc: 'I played a key role in supporting the Visitor Management System at NTSA by handling data capture, testing system reliability, and ensuring operational efficiency at entry points. I worked closely with colleagues to identify gaps and improve the system\'s day-to-day performance, contributing to a more accurate and professional visitor experience.',
    tech: ['Data Capture', 'QA Testing', 'System Reliability', 'Operations'],
    color: '#B8A88A',
    year: '2025',
  },
  {
    id: 4,
    num: '04',
    title: 'College Algebra & Statistics Grading — ALX Africa',
    category: 'Teaching & Community',
    desc: 'As a Grader for ALX Africa\'s College Algebra and Statistics programme, I provided structured, constructive feedback to learners across Africa. This role sharpened my ability to communicate technical concepts clearly, maintain consistency and fairness in assessment, and support learners in building confidence with challenging material.',
    tech: ['ALX Africa', 'Structured Feedback', 'Digital Communication', 'Learner Support'],
    color: '#C9A84C',
    year: '2025',
  },
];

export default function Work() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100);
          });
        }
      });
    }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="work" className="section work" ref={ref}>
      <div className="container">
        <div className="work__header reveal">
          <div>
            <p className="label">Selected Work</p>
            <div className="divider" />
            <h2>Work that<br /><em>tells my story</em></h2>
          </div>
          <p className="work__header-sub">
            Real projects. Real impact. From building websites to improving
            government systems, every entry here represents a problem I helped solve.
          </p>
        </div>

        <div className="work__list">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`project-row reveal d${i + 1}`}
            >
              <div className="project-num">{p.num}</div>
              <div className="project-info">
                <div className="project-meta">
                  <span className="label">{p.category}</span>
                  <span className="project-year">{p.year}</span>
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tech">
                  {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
              <div className="project-preview" style={{ '--color': p.color }}>
                <div className="preview-inner">
                  <span>{p.title.charAt(0)}</span>
                </div>
              </div>
              <div className="project-arrow">
              <a href="https://gemasupaint.co.ke/" className="project-link">  
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}