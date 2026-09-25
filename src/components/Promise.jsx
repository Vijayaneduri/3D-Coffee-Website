import { motion } from 'framer-motion';
import './Promise.css';

// Custom refined SVG icons matching the mockup
const LeafTradeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

const CupRitualIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h1a4 4 0 1 1 0 8h-1"/>
    <path d="M3 8h14v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/>
    <line x1="6" y1="2" x2="6" y2="4"/>
    <line x1="10" y1="2" x2="10" y2="4"/>
    <line x1="14" y1="2" x2="14" y2="4"/>
    <line x1="2" y1="22" x2="18" y2="22"/>
  </svg>
);

const LampSpaceIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6"/>
    <path d="M10 22h4"/>
    <path d="M12 2v1"/>
    <path d="M12 7a5 5 0 0 0-5 5c0 2 1.5 3 2.5 4h5c1-1 2.5-2 2.5-4a5 5 0 0 0-5-5z"/>
  </svg>
);

const promiseItems = [
  {
    id: '01',
    number: '01',
    icon: <LeafTradeIcon />,
    title: 'Direct-trade origins',
    description:
      'We know the farmers we buy from by name, and pay fair fixed prices for every harvest season, year after year.',
  },
  {
    id: '02',
    number: '02',
    icon: <CupRitualIcon />,
    title: 'Slow-crafted rituals',
    description:
      'Every espresso shot dialled daily. Every pour-over by hand. Nothing here is on autopilot.',
  },
  {
    id: '03',
    number: '03',
    icon: <LampSpaceIcon />,
    title: 'A space to linger',
    description:
      'Warm oak, low lamplight and the quiet hum of a room built for reading, thinking, drinking.',
  },
];

export default function Promise() {
  return (
    <section className="promise" id="promise">
      <div className="promise-container">
        {/* Floating Rounded Card matching the design */}
        <div className="promise-floating-card">
          {/* Subtle decorative glow overlay */}
          <div className="promise-card-glow" />

          {/* Top Header Area: Left (Tag + Title) | Right (Description) */}
          <div className="promise-header-row">
            <div className="promise-header-left">
              <span className="promise-tag">Our promise</span>
              <h2 className="promise-title">
                Three things we never<br />
                compromise on.
              </h2>
            </div>

            <div className="promise-header-right">
              <p className="promise-lead-text">
                Coffee, to us here, is a small act of hospitality. Everything
                we build — from bean sourcing to the cup in your hand —
                begins with that idea.
              </p>
            </div>
          </div>

          {/* 3 Promise Cards Grid */}
          <div className="promise-grid">
            {promiseItems.map((item) => (
              <motion.div
                key={item.id}
                className="promise-card"
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                {/* Card Top: Icon Badge + Number Badge */}
                <div className="promise-card-top">
                  <div className="promise-icon-wrapper" aria-hidden="true">
                    {item.icon}
                  </div>
                  <span className="promise-number">{item.number}</span>
                </div>

                {/* Card Title */}
                <h3 className="promise-card-title">{item.title}</h3>

                {/* Card Description */}
                <p className="promise-card-desc">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
