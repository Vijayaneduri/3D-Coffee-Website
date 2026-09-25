import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import aboutCoffee from '../assets/about_coffee.webp';
import aboutMachine from '../assets/about_machine.webp';
import './About.css';

// SVG Icons matching the mockup
const BeanOutlineIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="12" rx="7" ry="10" transform="rotate(-30 12 12)" />
    <path d="M12 2C9 6 9 18 12 22" />
  </svg>
);

const CraftRosetteIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3.5" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

const EcoLeafIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about-container">
        {/* Main Floating Rounded Card */}
        <motion.div
          className="about-floating-card"
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Top 3-Column Area: Left Image | Center Content | Right Image */}
          <div className="about-main-grid">
            {/* Left Image: Latte Art on Coffee Beans */}
            <div className="about-image-col left-col">
              <img
                src={aboutCoffee}
                alt="Artisan Latte with Latte Art"
                className="about-side-img"
              />
            </div>

            {/* Center Content Column */}
            <div className="about-center-col">
              {/* Tag with underline */}
              <div className="about-tag-wrapper">
                <span className="about-tag">About us</span>
                <span className="about-tag-line" />
              </div>

              {/* Title */}
              <h2 className="about-title">
                A café built by coffee<br />
                people.
              </h2>

              {/* Narrative */}
              <p className="about-text">
                We opened Bodrén Coffee in 2018 with a small La Marzocco, a stubborn belief in single-origin espresso, and a corner store with good light. Seven years later
              </p>

              {/* Read our story link */}
              <a href="#about" className="about-story-link">
                Read our story →
              </a>

              {/* 3 Feature Cards */}
              <div className="about-features-row">
                <div className="about-feature-card">
                  <div className="about-feature-icon">
                    <BeanOutlineIcon />
                  </div>
                  <h4 className="about-feature-title">PREMIUM BEANS</h4>
                  <p className="about-feature-desc">
                    Sourced from ethical farms, with a focus on quality.
                  </p>
                </div>

                <div className="about-feature-card">
                  <div className="about-feature-icon">
                    <CraftRosetteIcon />
                  </div>
                  <h4 className="about-feature-title">EXPERTLY CRAFTED</h4>
                  <p className="about-feature-desc">
                    Our baristas bring skill and passion into every cup.
                  </p>
                </div>

                <div className="about-feature-card">
                  <div className="about-feature-icon">
                    <EcoLeafIcon />
                  </div>
                  <h4 className="about-feature-title">SUSTAINABLE</h4>
                  <p className="about-feature-desc">
                    We support farmers, communities, and a greener tomorrow.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image: La Marzocco Espresso Machine */}
            <div className="about-image-col right-col">
              <img
                src={aboutMachine}
                alt="La Marzocco Espresso Machine in Café"
                className="about-side-img"
              />
            </div>
          </div>

          {/* Bottom Full-Width Stats Bar */}
          <div className="about-stats-bar">
            <div className="about-stat-item">
              <span className="about-stat-number">2018</span>
              <span className="about-stat-label">Brewing Happiness</span>
            </div>
            <div className="about-stat-divider" />
            <div className="about-stat-item">
              <span className="about-stat-number">25+</span>
              <span className="about-stat-label">Passionate Baristas</span>
            </div>
            <div className="about-stat-divider" />
            <div className="about-stat-item">
              <span className="about-stat-number">100%</span>
              <span className="about-stat-label">Arabica Beans</span>
            </div>
            <div className="about-stat-divider" />
            <div className="about-stat-item">
              <span className="about-stat-number">15K+</span>
              <span className="about-stat-label">Happy customers</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
