import React, { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [done, setDone] = useState(false);

  return (
    <section className="nl" id="faqs">

      {/* Red double-arrow squiggle pointing down — from design */}
      <svg className="nl__arrows" viewBox="0 0 140 80" fill="none">
        <path d="M40 10 Q55 40, 40 70" stroke="#e83a2e" strokeWidth="1.8" fill="none" strokeLinecap="round" className="nl-path"/>
        <path d="M70 5  Q88 38, 70 72" stroke="#e83a2e" strokeWidth="1.8" fill="none" strokeLinecap="round" className="nl-path"/>
        {/* Arrowheads */}
        <path d="M33 62 L40 72 L48 62" stroke="#e83a2e" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M62 64 L70 74 L78 64" stroke="#e83a2e" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      {/* Purple teardrop right */}
      <div className="nl__teardrop"></div>

      <div className="nl__inner sr">
        <h2 className="nl__h2">
          Subscribe to<br />our newsletter
        </h2>
        <p className="nl__sub">To make your stay special and even more memorable</p>

        {done ? (
          <div className="nl__thanks">
            <span>✓</span> Thank you for subscribing!
          </div>
        ) : (
          <button className="nl__btn h-target" onClick={() => setDone(true)}>
            Subscribe Now
          </button>
        )}
      </div>
    </section>
  );
}
