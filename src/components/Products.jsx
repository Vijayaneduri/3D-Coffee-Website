import { useState } from 'react';
import { motion } from 'framer-motion';

// Featured Main Images
import coffeeMain from '../assets/collection_coffee_main.png';
import ambienceMain from '../assets/collection_ambience_main.png';
import dessertMain from '../assets/collection_dessert_main.png';

// Coffee Thumbnails
import coffeeSub1 from '../assets/collection_coffee_sub1.png';
import coffeeSub2 from '../assets/coffee_sub2.jpg';
import coffeeSub3 from '../assets/coffee_sub3.jpg';

// Ambience Thumbnails
import ambienceSub1 from '../assets/ambience_sub1.jpg';
import ambienceSub2 from '../assets/ambience_sub2.jpg';
import ambienceSub3 from '../assets/ambience_sub3.jpg';

// Dessert Thumbnails
import dessertSub1 from '../assets/dessert_sub1.jpg';
import dessertSub2 from '../assets/dessert_sub2.jpg';
import dessertSub3 from '../assets/dessert_sub3.jpg';

import './Products.css';

const categories = ['All', 'Coffee', 'Snacks', 'Food', 'Beverages', 'Desserts'];

const collections = [
  {
    id: 'coffee',
    category: 'Coffee',
    title: 'Coffee',
    itemCount: '12+ Items',
    mainImage: coffeeMain,
    mainAlt: 'Artisan Latte with Latte Art',
    thumbnails: [
      { src: coffeeSub1, alt: 'Espresso in black ceramic cup' },
      { src: coffeeSub2, alt: 'Layered Iced Latte' },
      { src: coffeeSub3, alt: 'Caramel Coffee Shake with Whipped Cream' },
    ],
  },
  {
    id: 'ambience',
    category: 'Ambience',
    title: 'Ambience',
    itemCount: '08+ Items',
    mainImage: ambienceMain,
    mainAlt: 'Warm Cozy Café Interior with Wooden Tables',
    thumbnails: [
      { src: ambienceSub1, alt: 'Café table with cappuccino and croissant' },
      { src: ambienceSub2, alt: 'Cozy café corner with ambient lighting and greenery' },
      { src: ambienceSub3, alt: 'Sunlit modern coffee shop seating' },
    ],
  },
  {
    id: 'desserts',
    category: 'Desserts',
    title: 'Desserts',
    itemCount: '10+ Items',
    mainImage: dessertMain,
    mainAlt: 'Classic Tiramisu Dessert with Cocoa Powder',
    thumbnails: [
      { src: dessertSub1, alt: 'Decadent chocolate fudge cake slice' },
      { src: dessertSub2, alt: 'Golden flaky butter croissant on wood' },
      { src: dessertSub3, alt: 'Creamy blueberry cheesecake slice' },
    ],
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter collections if specific category selected (or show all 3 if All or matching)
  const filteredCollections = collections.filter(
    (col) => activeCategory === 'All' || col.category.toLowerCase() === activeCategory.toLowerCase()
  );

  const displayCollections = filteredCollections.length > 0 ? filteredCollections : collections;

  return (
    <section className="products" id="products">
      <div className="products-container">
        {/* Floating Rounded Card matching the design */}
        <div className="products-floating-card">
          {/* Header */}
          <div className="products-header-area">
            <span className="products-tag">EXPLORE</span>
            <h2 className="products-title">
              <span className="title-popular">Popular </span>
              <span className="title-collections">Collections</span>
            </h2>

            {/* Category Filter Pills */}
            <div className="category-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 3 Main Collection Cards */}
          <div className="collections-grid">
            {displayCollections.map((col) => (
              <motion.div
                key={col.id}
                className="collection-card"
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                {/* Main Featured Image */}
                <div className="collection-main-img-wrapper">
                  <img
                    src={col.mainImage}
                    alt={col.mainAlt}
                    className="collection-main-img"
                  />
                </div>

                {/* 3 Sub Thumbnails */}
                <div className="collection-thumbnails-row">
                  {col.thumbnails.map((thumb, tIdx) => (
                    <div key={tIdx} className="collection-thumb-wrapper">
                      <img
                        src={thumb.src}
                        alt={thumb.alt}
                        className="collection-thumb-img"
                      />
                    </div>
                  ))}
                </div>

                {/* Card Footer: Title, Count & Arrow */}
                <div className="collection-footer">
                  <h3 className="collection-name">{col.title}</h3>
                  <div className="collection-action">
                    <span className="collection-count">{col.itemCount}</span>
                    <button className="collection-arrow-btn" aria-label={`View ${col.title}`}>
                      →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
