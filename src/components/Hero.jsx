import { motion } from 'framer-motion';
import homePage from '../assets/home_page.webp';
import './Hero.css';

const BeanIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="12" rx="7" ry="10" transform="rotate(-30 12 12)" />
    <path d="M12 2C9 6 9 18 12 22" />
  </svg>
);

const CupIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h2a2 2 0 010 4h-2" />
    <path d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" />
    <path d="M6 2v2M10 2v2M14 2v2" />
  </svg>
);

const LeafIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 22s4-2 6-6c2-4 2-10 8-12 0 0-2 8-4 10s-6 5-10 8z" />
    <path d="M2 22l7-7" />
  </svg>
);

const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" />
    <path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background image & soft vignette overlay */}
      <div className="hero-bg">
        <img src={homePage} alt="Bodren Coffee Splash" className="hero-bg-img" />
        <div className="hero-bg-overlay" />
      </div>

      {/* Hero Typography & CTA Content */}
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span variants={itemVariants} className="hero-tag">
          PREMIUM COFFEE EXPERIENCE
        </motion.span>

        <motion.h1 variants={itemVariants} className="hero-title">
          <span className="title-line">A slow ritual,</span>
          <span className="title-line italic">poured with intent.</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="hero-subtitle">
          Bold flavors, ethically sourced beans, and moments<br />
          that brew something more than just coffee.
        </motion.p>

        <motion.div variants={itemVariants} className="cta-buttons">
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(212,168,75,0.45)' }}
            whileTap={{ scale: 0.96 }}
          >
            Explore Our Menu →
          </motion.button>
          <motion.button
            className="btn btn-secondary"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Get Delivery
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Bottom Features Bar docked at viewport bottom */}
      <motion.div
        className="features-bar"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
      >
        <div className="feature-item">
          <div className="feature-icon"><BeanIcon /></div>
          <div className="feature-text">
            <h4>Premium Beans</h4>
            <p>Sourced ethically</p>
          </div>
        </div>
        <div className="feature-divider" />
        <div className="feature-item">
          <div className="feature-icon"><CupIcon /></div>
          <div className="feature-text">
            <h4>Expertly Crafted</h4>
            <p>With passion</p>
          </div>
        </div>
        <div className="feature-divider" />
        <div className="feature-item">
          <div className="feature-icon"><LeafIcon /></div>
          <div className="feature-text">
            <h4>Sustainable</h4>
            <p>For a better tomorrow</p>
          </div>
        </div>
        <div className="feature-divider" />
        <div className="feature-item">
          <div className="feature-icon"><UsersIcon /></div>
          <div className="feature-text">
            <h4>15K+ Happy Customers</h4>
            <p>Join our coffee community</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
