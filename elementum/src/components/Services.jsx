import React from 'react';
import './Services.css';

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services__inner">

        {/* LEFT — circle image + triangles */}
        <div className="services__visual sr-l">
          <div className="services__tri t1"></div>
          <div className="services__tri t2"></div>
          <div className="services__circle h-target">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
              alt="team working"
            />
          </div>
        </div>

        {/* RIGHT — text */}
        <div className="services__text sr-r">
          <h2 className="services__h2">
            See <span className="services__how">how</span> we can<br />
            help you <span className="services__progress">progress</span>
          </h2>
          <p className="services__body">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>
          <a href="#offerings" className="readmore h-target">
            Read more <span className="readmore__line"></span>
          </a>
        </div>
      </div>

      {/* Wavy red line connector going down-right */}
      <svg className="services__wave" viewBox="0 0 500 80" fill="none">
        <path
          d="M 10 60 Q 80 10, 160 40 Q 240 70, 320 30 Q 400 0, 490 40"
          stroke="#e83a2e" strokeWidth="1.5" fill="none" strokeLinecap="round"
          className="wave-path"
        />
      </svg>
    </section>
  );
}
