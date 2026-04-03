import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="about" id="studio">
      <div className="about__inner">

        {/* LEFT — text */}
        <div className="about__text sr-l">
          <h2 className="about__h2">
            <span className="about__italic">Tomorrow</span> should<br />
            be better than <span className="about__today">today</span>
          </h2>
          <p className="about__body">
            We are a team of strategists, designers, communicators, and researchers.
            Together, we believe that <span className="about__tag">progress</span> only happens when you refuse to
            play things safe.
          </p>
          <div className="about__line-decor">
            <span></span>
            <span></span>
          </div>
          <div className="about__decor">
            <span></span><span></span><span></span>
          </div>
          <a href="#services" className="readmore h-target">
            Read more <span className="readmore__line"></span>
          </a>
        </div>

        {/* RIGHT — circular image + triangle */}
        <div className="about__visual sr-r">
          <div className="about__bubble"></div>
          {/* Red triangle top-right of circle */}
          <div className="about__tri"></div>
          {/* Pink glow behind circle */}
          <div className="about__glow"></div>
          <div className="about__circle h-target">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
              alt="team meeting"
            />
          </div>
        </div>
      </div>

      {/* Red curving line that connects sections — drawn via SVG */}
      <svg className="about__connector" viewBox="0 0 600 120" fill="none" preserveAspectRatio="none">
        <path
          d="M 580 10 C 500 10, 420 60, 340 70 C 260 80, 180 40, 100 60 C 60 70, 20 90, 10 110"
          stroke="#e83a2e" strokeWidth="1.5" fill="none" strokeLinecap="round"
          className="connector-path"
        />
      </svg>
    </section>
  );
}
