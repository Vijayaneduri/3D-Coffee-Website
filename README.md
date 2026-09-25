# ☕ BODREN Coffee - Premium 3D Interactive Experience

A stunning, modern coffee website featuring an immersive landing video intro, 3D animations, smooth scrolling effects, and premium design aesthetics inspired by luxury coffee brands. Built with React, Three.js, and Framer Motion.

![Coffee Website](https://img.shields.io/badge/Status-Production_Ready-brightgreen)
![React](https://img.shields.io/badge/React-18-blue)
![Three.js](https://img.shields.io/badge/Three.js-3D-orange)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animations-purple)

## ✨ Features

### 🎬 Landing Experience
- **Video Introduction**: Cinematic landing video that plays on first visit
- **Skip Option**: Allows users to skip to main content after 2 seconds
- **Smooth Transitions**: Elegant fade between landing and home page

### 🎨 Design Elements
- **3D Interactive Elements**: Floating coffee cups, beans, and particles using Three.js
- **Smooth Animations**: Page transitions and scroll effects powered by Framer Motion and GSAP
- **BODREN-Inspired Design**: Premium typography, warm color palette, and luxury aesthetics
- **Glassmorphism Effects**: Modern blur effects and translucent elements
- **Responsive Layout**: Fully responsive across all devices

### 📄 Page Sections
1. **Hero Section**: Dramatic coffee cup showcase with animated text
2. **About**: Philosophy cards with company stats
3. **Products/Menu**: 6 premium coffee blends with interactive cards
4. **Gallery**: Visual journey featuring coffee experiences
5. **Contact**: Form with info cards and footer

### 🔧 Navigation
- **BODREN Branding**: Coffee cup logo with brand name
- **Centered Navigation**: Home, About, Menu, Gallery, Contact
- **Action Buttons**: Search, Cart with badge, Sign In
- **Mobile Menu**: Responsive hamburger menu for mobile devices

## 🎯 Key Highlights

- **Landing Video**: Auto-plays on first visit with skip option
- **Hero Image Integration**: Uses imported assets for coffee cup showcase
- **3D Scene**: Scroll-based 3D animations throughout the site
- **Premium Features Bar**: Shows key benefits with icons
- **Gallery Section**: Showcases coffee culture and community
- **Custom Loader**: Branded loading screen with progress indicator
- **Performance Optimized**: Lazy loading and optimized rendering

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd coffee-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📦 Tech Stack

### Core
- **React 18** - UI framework
- **Vite** - Build tool and dev server

### 3D Graphics
- **Three.js** - 3D library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Helper components for R3F

### Animations
- **Framer Motion** - React animation library
- **GSAP** - Professional-grade animation library
- **@gsap/react** - GSAP React integration

### Assets
- **Landing Video** - MP4 video intro
- **Hero Image** - Premium coffee cup PNG
- **Home Page Image** - Gallery featured image

## 📂 Project Structure

```
coffee-website/
├── src/
│   ├── assets/
│   │   ├── landing_vedio.mp4   # Landing intro video
│   │   ├── hero.png            # Hero coffee cup image
│   │   └── home_page.png       # Gallery featured image
│   ├── components/
│   │   ├── LandingVideo.jsx    # Video landing page
│   │   ├── Scene3D.jsx         # 3D scene with coffee elements
│   │   ├── Navbar.jsx          # BODREN navigation bar
│   │   ├── Hero.jsx            # Hero section with image
│   │   ├── About.jsx           # About section
│   │   ├── Products.jsx        # Product showcase
│   │   ├── Gallery.jsx         # Gallery section
│   │   ├── Contact.jsx         # Contact form + footer
│   │   ├── Loader.jsx          # Loading screen
│   │   └── *.css              # Component styles
│   ├── App.jsx                 # Main app with landing logic
│   ├── App.css                 # Global styles
│   ├── main.jsx               # Entry point
│   └── index.css              # Base styles
├── public/                     # Static assets
├── dist/                       # Production build
├── index.html                  # HTML template
└── package.json               # Dependencies
```

## 🎯 Key Components

### LandingVideo
- Fullscreen video player
- Auto-play on mount
- Skip button after 2 seconds
- Floating coffee bean decorations
- Smooth exit transition

### Hero (BODREN Style)
- Split layout with content left, image right
- Imported hero image with floating animation
- "A slow ritual, poured with intent" tagline
- Animated CTA buttons
- Features bar at bottom with stats

### Navbar (BODREN Style)
- Coffee cup logo with "BODREN" branding
- Centered navigation links
- Search and cart icons
- Sign In button
- Responsive mobile menu

### Gallery
- Featured large image from home_page.png
- Grid layout with varied card sizes
- Emoji-based visual elements
- Hover effects and animations

## 🎨 Customization

### Colors
Edit the CSS variables in `src/App.css`:
```css
:root {
  --coffee-dark: #0d0705;
  --coffee-brown: #3d1c0c;
  --gold: #d4a84b;
  --cream: #f5e6c8;
  /* ... more colors */
}
```

### Landing Video
Replace `src/assets/landing_vedio.mp4` with your own video.

### Images
- Replace `src/assets/hero.png` for the hero coffee cup
- Replace `src/assets/home_page.png` for the gallery featured image

### Skip Landing Video
In `App.jsx`, change initial state to skip landing:
```javascript
const [showLanding, setShowLanding] = useState(false); // Change to false
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Mobile Optimization

- Responsive grid layouts
- Touch-friendly interactions
- Mobile menu with hamburger
- Optimized 3D performance
- Video optimization for mobile

## ⚡ Performance Tips

- Video lazy loads on landing
- 3D elements use efficient rendering
- Images are optimized
- Smooth scroll performance
- Minimal re-renders with React best practices

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- **Fonts**: Google Fonts (Playfair Display, Inter, Cormorant Garamond)
- **3D**: Three.js and React Three Fiber communities
- **Animations**: Framer Motion and GSAP teams
- **Design Inspiration**: BODREN Coffee luxury branding

---

**A slow ritual, poured with intent** ☕✨
