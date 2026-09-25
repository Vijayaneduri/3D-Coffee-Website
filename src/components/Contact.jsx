import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

// SVG Icons
const MapPinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const MailPhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const CoffeeCupIcon = () => (
  <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 10h16v2a8 8 0 01-16 0v-2z" stroke="#deb06c" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M10 10V7a2 2 0 114 0v3" stroke="#deb06c" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M22 12c2 0 3.5-1 3.5-2.5S24 7 22 7" stroke="#deb06c" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 22h12" stroke="#deb06c" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Table Reservation',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'Table Reservation', message: '' });
    }, 4500);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* Floating Rounded Card matching the design */}
        <div className="contact-floating-card">
          <div className="contact-header-area">
            <span className="contact-tag">CONNECT</span>
            <h2 className="contact-title">
              <span className="title-visit">Visit Our </span>
              <span className="title-roastery">Café & Roastery</span>
            </h2>
            <p className="contact-subtitle">
              Join us for a quiet morning brew, arrange a private cupping session, or inquire about single-origin retail beans.
            </p>
          </div>

          <div className="contact-main-grid">
            {/* Left Column: Direct Info Cards */}
            <div className="contact-info-col">
              {/* Location Card */}
              <motion.div className="contact-info-card" whileHover={{ y: -4, transition: { duration: 0.25 } }}>
                <div className="contact-icon-box">
                  <MapPinIcon />
                </div>
                <div className="contact-card-text">
                  <h4>Café & Roastery</h4>
                  <p>48 Montague Street, Brooklyn Heights, NY 11201</p>
                  <span className="contact-highlight">Two blocks from the Brooklyn Promenade</span>
                </div>
              </motion.div>

              {/* Hours Card */}
              <motion.div className="contact-info-card" whileHover={{ y: -4, transition: { duration: 0.25 } }}>
                <div className="contact-icon-box">
                  <ClockIcon />
                </div>
                <div className="contact-card-text">
                  <h4>Hours of Ritual</h4>
                  <div className="hours-row">
                    <span>Monday – Friday</span>
                    <span className="hours-time">07:00 – 19:30</span>
                  </div>
                  <div className="hours-row">
                    <span>Saturday – Sunday</span>
                    <span className="hours-time">08:00 – 20:00</span>
                  </div>
                </div>
              </motion.div>

              {/* Concierge & Inquiries */}
              <motion.div className="contact-info-card" whileHover={{ y: -4, transition: { duration: 0.25 } }}>
                <div className="contact-icon-box">
                  <MailPhoneIcon />
                </div>
                <div className="contact-card-text">
                  <h4>Direct Concierge</h4>
                  <p className="contact-link-line">
                    <a href="mailto:hello@bodrencoffee.com">hello@bodrencoffee.com</a>
                  </p>
                  <p className="contact-link-line">
                    <a href="tel:+17185550194">+1 (718) 555-0194</a>
                  </p>
                </div>
              </motion.div>

              {/* Amenities Badge Bar */}
              <div className="amenities-badge-bar">
                <span>Free Fiber Wi-Fi</span>
                <span className="amenity-dot">•</span>
                <span>Pet-Friendly Terrace</span>
                <span className="amenity-dot">•</span>
                <span>Oat & Almond Bar</span>
              </div>
            </div>

            {/* Right Column: Inquiries Form */}
            <div className="contact-form-col">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Julian Wright"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      className="form-input"
                      placeholder="e.g. julian@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-subject">Inquiry Purpose</label>
                  <select
                    id="contact-subject"
                    className="form-input form-select"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="Table Reservation">Table Reservation (Evening Lounge)</option>
                    <option value="Tasting Session">Private Cupping & Tasting Session</option>
                    <option value="Wholesale Beans">Wholesale Coffee & Bean Supply</option>
                    <option value="Private Event">Host a Private Gathering / Event</option>
                    <option value="Other">General Hello</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Your Message</label>
                  <textarea
                    id="contact-message"
                    className="form-input form-textarea"
                    rows="4"
                    placeholder="Tell us about your visit date or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="form-submit-row">
                  <button type="submit" className="contact-submit-btn">
                    Send Message →
                  </button>
                  {submitted && (
                    <motion.span
                      className="submit-confirmation"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      ✓ Message received. We look forward to welcoming you.
                    </motion.span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Brand Footer */}
        <footer className="site-footer">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo-row">
                <CoffeeCupIcon />
                <span className="footer-brand-name">BODREN</span>
              </div>
              <p className="footer-tagline">
                Artisan coffee roasted in Brooklyn. Built by coffee people for coffee lovers since 2018.
              </p>
            </div>

            <div className="footer-links-group">
              <span className="footer-col-title">Navigation</span>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#products">Menu</a>
              <a href="#promise">Our Promise</a>
              <a href="#gallery">Gallery</a>
            </div>

            <div className="footer-links-group">
              <span className="footer-col-title">Social</span>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer">Vimeo Craft</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">X / Twitter</a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <span>© 2026 Bodrén Coffee Roasters. All rights reserved.</span>
            <span>Crafted with single-origin passion.</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
