import { useState, useEffect } from 'react';
import '../Styles/Navbar.css';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu when viewport widens past mobile breakpoint
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleLink = (href) => {
    setActive(href);
    setOpen(false);
    // Small delay lets the menu close animation finish before scrolling
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a className="navbar__logo" href="#hero" onClick={(e) => { e.preventDefault(); handleLink('#hero'); }}>
          <img
            src="/logo.png"
            alt="Laura Obare"
            className="logo-img"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <span className="logo-name">Laura Obare</span>
        </a>

        <nav className={`navbar__links ${open ? 'open' : ''}`} aria-label="Main navigation">
          {links.map(l => (
            <button
              key={l.href}
              className={`nav-link ${active === l.href ? 'active' : ''}`}
              onClick={() => handleLink(l.href)}
            >
              {l.label}
            </button>
          ))}
          <a
            href="mailto:lorraobare@gmail.com.com"
            className="btn btn-primary nav-cta"
            onClick={() => setOpen(false)}
          >
            Hire Me
          </a>
        </nav>

        <button
          className={`navbar__burger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}