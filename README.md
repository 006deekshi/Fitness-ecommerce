# Premium Fitness E-Commerce Website

A modern, high-performance fitness e-commerce website built with React, Tailwind CSS, and GSAP animations.

## Features

✨ **Premium Design**
- Custom color palette (space indigo, dusty grape, lilac ash, almond silk, parchment)
- Dark theme with luxury athletic aesthetic
- Glassmorphism effects
- Smooth gradients and transitions

🎬 **Advanced Animations**
- GSAP ScrollTrigger for scroll-driven effects
- Staggered text reveals
- Parallax backgrounds
- Floating elements
- Count-up statistics
- Transform-only animations for 60fps performance

🛍️ **E-Commerce Features**
- Product categories (Apparel, Equipment, Supplements, Accessories)
- Featured products grid
- Animated cart badge
- Hover micro-interactions

📱 **Fully Responsive**
- Mobile-first design
- Optimized for all screen sizes
- Touch-friendly interactions

## Tech Stack

- React 18 (Vite)
- Tailwind CSS (custom configured)
- GSAP + ScrollTrigger
- Functional components with hooks

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx      # Fixed navbar with cart
│   ├── HeroNew.jsx         # Hero with GSAP animations
│   ├── Categories.jsx      # Category section
│   ├── CategoryCard.jsx    # Glassmorphism cards
│   ├── FeaturedProducts.jsx # Products grid
│   ├── ProductCard.jsx     # Individual product cards
│   ├── Stats.jsx           # Animated statistics
│   └── Footer.jsx          # Footer with newsletter
├── assets/                 # Images
├── App.jsx                 # Main app component
├── index.css               # Global styles
└── main.jsx                # Entry point
```

## Custom Color Palette

```css
space_indigo: #22223b   /* Primary background */
dusty_grape: #4a4e69    /* Secondary/cards */
lilac_ash: #9a8c98      /* Muted accents */
almond_silk: #c9ada7    /* CTA/highlights */
parchment: #f2e9e4      /* Text/light */
```

## Performance

- Transform-only animations (GPU accelerated)
- Proper GSAP cleanup with context
- No layout reflows
- Optimized images
- Smooth 60fps animations

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

MIT
