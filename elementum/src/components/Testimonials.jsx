import React from 'react';
import './Testimonials.css';

const LEFT_AVS = [
  'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&q=80',
  'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=120&q=80',
  'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=120&q=80',
];
const RIGHT_AVS = [
  'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=120&q=80',
  'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=120&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80',
];

export default function Testimonials() {
  return (
    <section className="testi" id="contact">

      {/* Red squiggle top-right */}
      <svg className="testi__squiggle" viewBox="0 0 200 60" fill="none">
        <path d="M 10 50 Q 60 5, 110 35 Q 150 55, 190 15" stroke="#e83a2e" strokeWidth="1.5" fill="none" strokeLinecap="round" className="testi-path"/>
      </svg>

      <div className="testi__layout">
        {/* Left avatars */}
        <div className="testi__side testi__side--left">
          {LEFT_AVS.map((url, i) => (
            <div key={i} className={`tav tav-l${i+1} h-target`} style={{ animationDelay: `${i*0.5}s` }}>
              <img src={url} alt="" loading="lazy" />
            </div>
          ))}
        </div>

        {/* Center card */}
        <div className="testi__center sr">
          <h2 className="testi__h2">
            What our customer<br />
            says <span className="testi__about">About Us</span>
          </h2>
          <div className="testi__card h-target">
            <span className="testi__qq open">"</span>
            <p className="testi__text">
              Elementum delivered the site within the timeline as requested.
              In the end, the client saw a 50% increase in traffic within days of launch.
              The team also adopted tools that the company had not used before, and everything
              proved to be easy to use and extremely reliable.
            </p>
            <span className="testi__qq close">"</span>
          </div>
        </div>

        {/* Right avatars */}
        <div className="testi__side testi__side--right">
          {RIGHT_AVS.map((url, i) => (
            <div key={i} className={`tav tav-r${i+1} h-target`} style={{ animationDelay: `${i*0.5+0.3}s` }}>
              <img src={url} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
