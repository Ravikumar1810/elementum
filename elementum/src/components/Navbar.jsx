import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NAV = ['Home', 'Studio', 'Services', 'Contact', 'FAQs'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__logo h-target">Elementum</a>

        <ul className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {NAV.map(n => (
            <li key={n}>
              <a href={`#${n.toLowerCase()}`} className="nav__link h-target" onClick={() => setOpen(false)}>
                {n}
              </a>
            </li>
          ))}
        </ul>

        {/* hamburger — matches the ≡ icon in design */}
        <button className={`nav__burger h-target ${open ? 'nav__burger--open' : ''}`} onClick={() => setOpen(!open)} aria-label="menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
