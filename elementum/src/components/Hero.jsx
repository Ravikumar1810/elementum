import React, { useEffect, useRef } from 'react';
import './Hero.css';

/* 8 avatars spread across — matching the Figma layout */
const AVATARS = [
  { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', cls: 'av av1' },
  { url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', cls: 'av av2' },
  { url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&q=80', cls: 'av av3' },
  { url: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&q=80', cls: 'av av4' },
  { url: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&q=80', cls: 'av av5' },
  { url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80', cls: 'av av6' },
  { url: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=200&q=80', cls: 'av av7' },
  { url: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&q=80', cls: 'av av8' },
];

export default function Hero() {
  const headingRef = useRef(null);

  useEffect(() => {
    // stagger each word into view
    const words = headingRef.current?.querySelectorAll('.hw');
    words?.forEach((w, i) => {
      setTimeout(() => {
        w.style.opacity = '1';
        w.style.transform = 'translateY(0)';
      }, 100 + i * 90);
    });
  }, []);

  return (
    <section className="hero" id="home">

      {/* Left black+red squiggle — exactly from design */}
      <svg className="hero__squiggle" viewBox="0 0 70 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10 C 10 40, 60 80, 20 120 C -10 150, 50 180, 30 220" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M35 30 C 0 70, 55 110, 15 150 C -5 170, 40 200, 25 240" stroke="#e83a2e" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.85"/>
      </svg>

      {/* Top-right decorative square & teardrop */}
      <div className="hero__square"></div>
      <div className="hero__teardrop"></div>

      <div className="hero__content">
        {/* Heading with highlighted words */}
        <h1 className="hero__h1" ref={headingRef}>
          <span className="hw">The </span>
          <span className="hw"><span className="hl-yellow">thinkers</span> </span>
          <span className="hw">and</span>
          <br />
          <span className="hw">doers </span>
          <span className="hw">were </span>
          <span className="hw"><span className="hl-pink">changing</span></span>
          <br />
          <span className="hw">the </span>
          <span className="hw"><span className="hl-green">status</span> </span>
          <span className="hw">Quo </span>
          <span className="hw">with</span>
        </h1>

        <p className="hero__sub">
          We are a team of strategists, designers, communicators, and researchers.<br />
          Together, we believe that progress only happens when you refuse to play things safe.
        </p>
      </div>

      {/* Avatars */}
      <div className="hero__avatars">
        {AVATARS.map((av, i) => (
          <div key={i} className={`${av.cls} h-target`} style={{ animationDelay: `${i * 0.4}s` }}>
            <img src={av.url} alt="" loading="lazy" />
          </div>
        ))}
      </div>

      {/* Red guide curve under main visuals */}
      <svg className="hero__guide" viewBox="0 0 900 160" fill="none" preserveAspectRatio="none">
        <path d="M 10 40 C 170 70, 330 20, 490 55 C 620 95, 730 30, 890 70" stroke="#e83a2e" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="8 6" opacity="0.55" />
      </svg>

      {/* Bottom pink glow */}
      <div className="hero__glow"></div>
    </section>
  );
}
