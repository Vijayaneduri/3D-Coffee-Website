import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LandingVideo from './components/LandingVideo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Promise from './components/Promise';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import './App.css';

function MainSite() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Promise />
      <Gallery />
      <Contact />
    </motion.div>
  );
}

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [landingDone, setLandingDone] = useState(false);

  const handleLandingComplete = () => {
    setShowLanding(false);
    setTimeout(() => setLandingDone(true), 1000);
  };

  return (
    <div className="app">
      <AnimatePresence>
        {showLanding && (
          <LandingVideo key="landing" onComplete={handleLandingComplete} />
        )}
      </AnimatePresence>
      {landingDone && <MainSite />}
    </div>
  );
}

export default App;
