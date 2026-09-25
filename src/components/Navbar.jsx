import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#products' },
  { name: 'Promise', href: '#promise' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' }
];

// SVG Icons — no emojis
const LogoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 10h16v2a8 8 0 01-16 0v-2z" stroke="#d4a84b" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M10 10V7a2 2 0 114 0v3" stroke="#d4a84b" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M22 12c2 0 3.5-1 3.5-2.5S24 7 22 7" stroke="#d4a84b" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 22h12" stroke="#d4a84b" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 20l1 2M18 20l-1 2" stroke="#d4a84b" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const CartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 01-8 0"/>
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
    >
      {/* Logo */}
      <motion.div className="nav-logo" whileHover={{ scale: 1.03 }}>
        <LogoIcon />
        <span className="logo-main">BODREN</span>
      </motion.div>

      {/* Navigation Links */}
      <div className="nav-links">
        {links.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            className={`nav-link ${activeLink === link.name ? 'active' : ''}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.08 }}
            onClick={() => setActiveLink(link.name)}
          >
            {link.name}
          </motion.a>
        ))}
      </div>

      {/* Right Side Actions */}
      <div className="nav-actions">
        <motion.button className="icon-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label="Search">
          <SearchIcon />
        </motion.button>

        <motion.button className="icon-btn cart-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label="Cart">
          <CartIcon />
          <span className="cart-badge">2</span>
        </motion.button>

        <motion.button
          className="signin-btn"
          whileHover={{ scale: 1.04, backgroundColor: 'rgba(212,168,75,0.15)' }}
          whileTap={{ scale: 0.96 }}
        >
          Sign In
        </motion.button>
      </div>

      {/* Hamburger */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span className={`bar ${menuOpen ? 'open' : ''}`} />
        <span className={`bar ${menuOpen ? 'open' : ''}`} />
        <span className={`bar ${menuOpen ? 'open' : ''}`} />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {links.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="mobile-link"
                onClick={() => { setMenuOpen(false); setActiveLink(link.name); }}
                whileHover={{ x: 8, color: '#d4a84b' }}
              >
                {link.name}
              </motion.a>
            ))}
            <div className="mobile-actions">
              <button className="mobile-action-btn">Sign In</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
