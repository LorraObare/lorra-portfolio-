import '../Styles/Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTo = id => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="logo-mark">LO</span>
            <span className="logo-name">Laura Obare</span>
          </div>
          <p className="footer__tagline">
            Frontend developer &amp; digital professional.<br />
            Building thoughtful digital experiences for Africa and beyond.
          </p>
          <div className="footer__socials">
            {[
              { label: 'Li', href: 'https://www.linkedin.com/in/laura-obare/' },
              { label: 'Gh', href: 'https://github.com/LorraObare' },
              { label: 'In', href: 'https://www.instagram.com/l_osanya/?hl=en' },
              
            ].map(s => (
              <a key={s.label} href={s.href} className="social-link" target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__nav">
          <h5>Navigation</h5>
          {['#about', '#services', '#work', '#skills', '#contact'].map(id => (
            <button key={id} onClick={() => scrollTo(id)}>
              {id.replace('#', '').charAt(0).toUpperCase() + id.slice(2)}
            </button>
          ))}
        </div>

        <div className="footer__nav">
          <h5>Services</h5>
          {['Frontend Development', 'Website Management', 'Digital Operations', 'Tech Training'].map(s => (
            <span key={s}>{s}</span>
          ))}
        </div>

        <div className="footer__nav">
          <h5>Contact</h5>
          <a href="mailto:lorraobare@gmail.com">lorraobare@gmail.com</a>
          <span>Nairobi, Kenya</span>
          <span>Available for Remote</span>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} Laura Obare. All rights reserved.</span>
          <span className="footer__credit">Designed &amp; Built with ♥</span>
        </div>
      </div>
    </footer>
  );
}