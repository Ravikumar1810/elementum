import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Offerings from './components/Offerings';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    /* ─── Cursor ─── */
    const dot  = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    let rx = 0, ry = 0;

    const onMove = (e) => {
      dot.style.left  = e.clientX + 'px';
      dot.style.top   = e.clientY + 'px';
    };

    const lerp = () => {
      const dot2 = document.getElementById('cursor-dot');
      if (!dot2) return;
      const tx = parseFloat(dot2.style.left) || 0;
      const ty = parseFloat(dot2.style.top)  || 0;
      rx += (tx - rx) * 0.12;
      ry += (ty - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(lerp);
    };

    window.addEventListener('mousemove', onMove);
    lerp();

    const addHover = () => {
      document.querySelectorAll('a, button, .h-target').forEach(el => {
        el.addEventListener('mouseenter', () => { dot.classList.add('hovering'); ring.classList.add('hovering'); });
        el.addEventListener('mouseleave', () => { dot.classList.remove('hovering'); ring.classList.remove('hovering'); });
      });
    };
    // Run after paint so components are mounted
    setTimeout(addHover, 300);

    /* ─── Scroll reveal ─── */
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) en.target.classList.add('visible'); });
    }, { threshold: 0.1 });

    const attach = () => document.querySelectorAll('.sr, .sr-l, .sr-r').forEach(el => obs.observe(el));
    setTimeout(attach, 100);

    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      <div id="cursor-dot"></div>
      <div id="cursor-ring"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Offerings />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
