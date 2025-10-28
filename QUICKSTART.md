# Quick Start Guide

## Running the Website

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser:**
   Navigate to `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## What's Included

### Pages
- **Hero Section**: Animated landing page with vintage vibes
- **Day 1: Ideathon**: Complete details about the ideathon competition
- **Day 2: TheCipher**: Information about the decoding challenge
- **Theme Elements**: Visual showcase of 90s elements
- **Footer**: Event organizers and credits

### Design Features
- Vintage 90s color scheme (cream, brown, orange, teal, purple, pink)
- Retro pixel font "Press Start 2P" for headings
- Animated vinyl records and cassette icons
- CRT scanline effects
- Floating animations
- Responsive design for all devices
- Hover effects on cards

### Components
- `VintageCard`: Reusable colored cards with vintage borders
- `RetroHeading`: Pixel font headings with text shadows
- `CassetteIcon`: SVG cassette tape icon
- `VinylRecord`: Animated spinning vinyl record

## Customization Tips

### Change Colors
Edit `tailwind.config.ts` - look for the `vintage` color palette

### Modify Content
Edit `app/page.tsx` - all page content is in this file

### Add Sections
Create new components in `components/` folder and import them in `page.tsx`

### Update Styles
Edit `app/globals.css` for global styles and animations

## Troubleshooting

If you encounter issues:

1. **Clear cache and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Check Node version:**
   ```bash
   node --version
   ```
   (Should be 18.17 or higher)

3. **Clear Next.js cache:**
   ```bash
   rm -rf .next
   npm run dev
   ```

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
- Build the project: `npm run build`
- Serve the `.next` folder using Node.js

---

Enjoy building your vintage tech fest website!
