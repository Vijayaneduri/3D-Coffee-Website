import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import landingVideo from '../assets/landing_vedio.mp4';
import './LandingVideo.css';

export default function LandingVideo({ onComplete }) {
  const [showSkip, setShowSkip] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowSkip(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="landing-video-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <video
        ref={videoRef}
        className="landing-video"
        autoPlay
        muted
        playsInline
        onEnded={onComplete}
      >
        <source src={landingVideo} type="video/mp4" />
      </video>

      <AnimatePresence>
        {showSkip && (
          <motion.button
            className="skip-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onComplete}
          >
            Skip Intro →
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
