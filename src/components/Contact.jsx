import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  // Intersection Observer for reveal animations
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        'service_caj7znp', // EmailJS service ID
        'template_2q7q6jn', // EmailJS template ID
        form,
        'kjTvhv7Nv_gSqrilb' // EmailJS public key
      )
      .then(() => {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('Email sending failed:', err);
        alert('Something went wrong. Please try again.');
      })
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container contact__inner">
        {/* Left: Contact info */}
        <div className="contact__copy">
          <p className="label reveal">Get In Touch</p>
          <div className="divider reveal d1" />
          <h2 className="reveal d1">
            Let's work<br />
            <em>together</em>
            <br />
            on something great
          </h2>
          <p className="contact__sub reveal d2">
            I'm open to opportunities in website management, frontend development,
            digital operations, tech training, and e-commerce support. Whether you're
            a startup, an organisation, or a creative brand, I'd love to hear from you.
          </p>

          <div className="contact__details reveal d3">
            <a href="mailto:lorraobare@gmail.com" className="contact-link">
              <span className="contact-link__icon">✉</span>
              <div>
                <span className="label">Email</span>
                <span className="contact-link__val">lorraobare@gmail.com</span>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/laura-obare/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span className="contact-link__icon">in</span>
              <div>
                <span className="label">LinkedIn</span>
                <span className="contact-link__val">Laura Obare</span>
              </div>
            </a>
            <div className="contact-link">
              <span className="contact-link__icon">📍</span>
              <div>
                <span className="label">Location</span>
                <span className="contact-link__val">Nairobi, Kenya (Remote-friendly)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="contact__form-wrap reveal d2">
          {sent ? (
            <div className="form-success">
              <div className="success-icon">✓</div>
              <h3>Message sent!</h3>
              <p>Thank you for reaching out. I'll get back to you within 24–48 hours.</p>
              <button className="btn btn-outline" onClick={() => setSent(false)}>
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about the role or project you have in mind..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" disabled={sending}>
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}