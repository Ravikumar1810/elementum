import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">

          <div className="footer__col">
            <h4 className="footer__title">Company</h4>
            <ul className="footer__list">
              {['Home','Studio','Service','Blog'].map(l => (
                <li key={l}><a href="#home" className="footer__link h-target">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">Terms &amp; Policies</h4>
            <ul className="footer__list">
              {['Privacy Policy','Terms & Conditions','Explore','Accesibility'].map(l => (
                <li key={l}><a href="#home" className="footer__link h-target">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">Follow Us</h4>
            <ul className="footer__list">
              {['Instagram','LinkedIn','Youtube','Twitter'].map(l => (
                <li key={l}><a href="#home" className="footer__link h-target">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">Terms &amp; Policies</h4>
            <div className="footer__contact">
              <p>1498w Fluton ste, STE<br />2D Chicgo, IL 63867.</p>
              <p>(123) 456789000</p>
              <a href="mailto:info@elementum.com" className="footer__link h-target">info@elementum.com</a>
            </div>
          </div>

        </div>

        <div className="footer__bottom">
          <p>©2023 Elementum. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
