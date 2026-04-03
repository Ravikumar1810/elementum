import React, { useState } from 'react';
import './Offerings.css';

const ROWS = [
  { tag: 'Office of multiple\ninterest content',      title: 'Colaborative & partnership' },
  { tag: 'The hanger US Air force\ndigital experimental', title: 'We talk about our weight' },
  { tag: 'Delta faucet content,\nsocial, digital',    title: 'Piloting digital confidence' },
];

export default function Offerings() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="offerings" id="offerings">
      <div className="offerings__inner">

        {/* Heading */}
        <div className="offerings__head sr">
          <h2 className="offerings__h2">
            What we <span className="off-hl-green">can</span><br />
            <span className="off-underline">offer</span> you!
          </h2>
        </div>

        {/* Table rows */}
        <div className="offerings__table">
          {ROWS.map((row, i) => (
            <div
              key={i}
              className={`off-row sr h-target ${hovered === i ? 'off-row--active' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="off-tag">{row.tag}</span>
              <span className="off-title">{row.title}</span>
              <span className="off-arrow">
                {/* Long arrow — like → in Figma */}
                <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
                  <line x1="0" y1="6" x2="22" y2="6" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M18 2 L24 6 L18 10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
