# Elementum — Agency Website

> React implementation of the Elementum Figma design. Features custom cursor, scroll-reveal animations, SVG line draws, floating avatars, and full responsiveness.

---

##  Run Locally (without Docker)

```bash
git clone https://github.com/Ravikumar1810/elementum.git
cd elementum
npm install
npm start
# → http://localhost:3000
```

---

##  Run with Docker

```bash
git clone https://github.com/Ravikumar1810/elementum.git
cd elementum
docker-compose up --build
# → http://localhost:3000

# To stop:
docker-compose down
```

---

##  Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI components |
| CSS3 | Animations, layout, responsiveness |
| Docker + Nginx | Production container |

---

##  Features

-  Pixel-accurate Figma implementation
-  Fully responsive — mobile / tablet / desktop
-  Custom animated dual cursor
-  Scroll-reveal animations (fade + slide)
-  SVG line draw animations
-  Floating avatar animations
-  Hover states on all interactive elements
-  Sticky navbar with scroll effect
-  Mobile hamburger menu

---

##  Structure

```
src/
├── components/
│   ├── Navbar.jsx + .css
│   ├── Hero.jsx + .css
│   ├── About.jsx + .css
│   ├── Services.jsx + .css
│   ├── Offerings.jsx + .css
│   ├── Testimonials.jsx + .css
│   ├── Newsletter.jsx + .css
│   └── Footer.jsx + .css
├── App.jsx
├── index.js
└── index.css
```

Built by Ravikumar N K for Website Global Private Limited Assessment 2026