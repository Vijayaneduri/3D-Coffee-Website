import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Real Images & Video from assets
import landingVideo from '../assets/landing_vedio.mp4';
import homePageImg from '../assets/home_page.png';
import aboutMachine from '../assets/about_machine.jpg';
import aboutCoffee from '../assets/about_coffee.jpg';
import ambienceMain from '../assets/collection_ambience_main.png';
import dessertMain from '../assets/collection_dessert_main.png';
import dessertSub1 from '../assets/dessert_sub1.jpg';
import coffeeSub2 from '../assets/coffee_sub2.jpg';
import ambienceSub2 from '../assets/ambience_sub2.jpg';

import './Gallery.css';

const galleryItems = [
  {
    id: 'video-feature',
    type: 'video',
    src: landingVideo,
    title: 'The Art of the Pour',
    category: 'Craft',
    tag: 'Live Reel',
    span: 'featured-video',
  },
  {
    id: 'g1',
    type: 'image',
    src: homePageImg,
    title: 'Signature Roast Counter',
    category: 'Atmosphere',
    tag: 'Brooklyn Roastery',
    span: 'tall',
  },
  {
    id: 'g2',
    type: 'image',
    src: aboutCoffee,
    title: 'Precision Latte Art',
    category: 'Craft',
    tag: 'Single-Origin 92°C',
    span: 'medium',
  },
  {
    id: 'g3',
    type: 'image',
    src: aboutMachine,
    title: 'La Marzocco Custom',
    category: 'Craft',
    tag: 'Barista Station',
    span: 'medium',
  },
  {
    id: 'g4',
    type: 'image',
    src: ambienceMain,
    title: 'Warm Amber Room',
    category: 'Atmosphere',
    tag: 'Evening Light',
    span: 'wide',
  },
  {
    id: 'g5',
    type: 'image',
    src: dessertMain,
    title: 'Signature Tiramisu',
    category: 'Desserts',
    tag: 'Fresh Daily',
    span: 'medium',
  },
  {
    id: 'g6',
    type: 'image',
    src: coffeeSub2,
    title: 'Double Iced Latte',
    category: 'Craft',
    tag: 'Cold Extraction',
    span: 'medium',
  },
  {
    id: 'g7',
    type: 'image',
    src: ambienceSub2,
    title: 'The Sunlit Corner',
    category: 'Atmosphere',
    tag: 'Quiet Hours',
    span: 'medium',
  },
  {
    id: 'g8',
    type: 'image',
    src: dessertSub1,
    title: 'Dark Chocolate Fudge',
    category: 'Desserts',
    tag: 'Bakery Hearth',
    span: 'medium',
  },
];

const categories = ['All', 'Craft', 'Atmosphere', 'Desserts'];

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeMedia, setActiveMedia] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const filteredItems = galleryItems.filter(
    (item) => selectedFilter === 'All' || item.category === selectedFilter
  );

  const toggleVideoPlayback = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">
        {/* Floating Rounded Card matching the design */}
        <div className="gallery-floating-card">
          <div className="gallery-header-row">
            <div className="gallery-header-left">
              <span className="gallery-tag">VISUAL ARCHIVE</span>
              <h2 className="gallery-title">
                <span className="title-captured">Captured </span>
                <span className="title-moments">Moments</span>
              </h2>
              <p className="gallery-subtitle">
                An intimate look into our daily craft, artisan extractions, and the calm atmosphere of Bodrén.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="gallery-filter-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`gallery-pill ${selectedFilter === cat ? 'active' : ''}`}
                  onClick={() => setSelectedFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Bento Grid */}
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className={`gallery-item ${item.span}`}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                onClick={() => setActiveMedia(item)}
              >
                {item.type === 'video' ? (
                  <div className="gallery-video-wrapper">
                    <video
                      ref={videoRef}
                      className="gallery-video-element"
                      src={item.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    <div className="gallery-video-controls" onClick={toggleVideoPlayback}>
                      <button className="gallery-play-btn" aria-label={isPlaying ? 'Pause video' : 'Play video'}>
                        {isPlaying ? '❚❚' : '▶'}
                      </button>
                      <span className="gallery-video-badge">{item.tag}</span>
                    </div>
                  </div>
                ) : (
                  <div className="gallery-img-wrapper">
                    <img src={item.src} alt={item.title} className="gallery-img-element" />
                  </div>
                )}

                {/* Overlay details */}
                <div className="gallery-item-overlay">
                  <span className="gallery-item-tag">{item.tag}</span>
                  <h3 className="gallery-item-title">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeMedia && (
          <motion.div
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveMedia(null)}
          >
            <motion.div
              className="gallery-lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {activeMedia.type === 'video' ? (
                <video src={activeMedia.src} autoPlay controls playsInline className="lightbox-media" />
              ) : (
                <img src={activeMedia.src} alt={activeMedia.title} className="lightbox-media" />
              )}
              <div className="lightbox-caption">
                <h4>{activeMedia.title}</h4>
                <span>{activeMedia.tag} • Bodrén Coffee</span>
                <button className="lightbox-close-btn" onClick={() => setActiveMedia(null)}>
                  ✕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
