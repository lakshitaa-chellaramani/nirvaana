# NIRVAANA - Back to the 90s

A vintage-themed website for NIRVAANA, a tech fest presented by DJS IEEE X GDG DJSCE.

## Event Overview

### Day 1: Ideathon
An innovation-driven competition featuring:
- 5 Problem Statement tracks (AI/ML, Software, Blockchain, Hardware, IoT)
- 50 teams shortlisted through screening round
- Top 10 teams advance to Grand Finale
- 3 Winners

### Day 2: TheCipher
A vintage-inspired decoding adventure with:
- Round 1: Switchboard Puzzle (50 teams)
- Round 2: Split Challenge (25 teams)
- Round 3: Final Bid - Coding Challenge (6 teams)
- 3 Winners

## Theme
Back to the 90s - Featuring retro elements like cassettes, vinyl records, Kodak cameras, walkmans, and film rolls.

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Press Start 2P (retro pixel font)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Features

- Vintage 90s themed design
- Responsive layout for mobile and desktop
- Animated vintage elements (vinyl records, cassettes)
- Scanline effects for retro CRT monitor feel
- Custom vintage color palette
- Retro pixel font headings

## Project Structure

```
nirvaana/
├── app/
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Main page with all sections
│   └── globals.css      # Global styles and Tailwind
├── components/
│   ├── VintageCard.tsx  # Reusable card component
│   ├── RetroHeading.tsx # Retro styled headings
│   ├── CassetteIcon.tsx # SVG cassette icon
│   └── VinylRecord.tsx  # Animated vinyl record SVG
└── tailwind.config.ts   # Tailwind configuration
```

## Customization

### Colors
Edit the vintage color palette in `tailwind.config.ts`:
- `vintage-cream`: Background color
- `vintage-brown`: Primary brown
- `vintage-orange`: Accent color
- `vintage-purple`: Heading color
- And more...

### Animations
Custom animations are defined in `globals.css`:
- `animate-float`: Floating effect
- `animate-rotate`: Rotation effect
- `animate-blink`: Blinking effect

---

Built with vintage vibes and modern innovation
