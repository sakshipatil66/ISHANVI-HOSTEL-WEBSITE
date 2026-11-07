# ISHANVI Hostel & Accommodation – Website (React + Vite + Tailwind)

## Run locally
Requirements: **Node.js 18+ (20 or 22 recommended)** and npm. Internet is needed once for `npm install` and for Google Fonts.

```bash
# 1. Extract the ZIP, then open a terminal in the extracted folder
cd ISHANVI_PROJECT_FINAL-main

# 2. Install dependencies
npm install

# 3. Start the dev server  ->  http://localhost:3000
npm run dev

# Production build (output in /dist) and local preview
npm run build
npm run preview
```
If port 3000 is busy: `npx vite --port 3001`.
The `.env.example` file is optional; the site does not need an API key to run.

## What was improved
- **Hero sections** (Home slider + page headers on every inner page): removed fixed heights that clipped content on phones, flyer slide now scales by width, slide-2 copy is bottom-anchored on mobile with a stronger scrim, better photo crop (subject kept in frame), larger readable text + text-shadow, bigger tap targets.
- **Page headers / Editorial interlude**: removed background blur (photos are now sharp), scrims tuned so text stays readable.
- **Typography**: all 10 px / 9 px text raised to 11 px, caption text 12 px with higher contrast, fluid lead paragraph size, font smoothing.
- **Bug fix**: `.text-lead` colour override was ignored (light text on dark green rendered dark grey) – fixed.
- **Images**: every hostel photograph, the flyer and the logo were denoised, upscaled (1.5x photos / 2x flyer+logo with Lanczos), edge-masked sharpened and dithered (no banding). Content is unchanged – no generative edits. Same filenames, so no code paths changed.
- **Originals** are kept untouched in `_original_assets_backup/assets/` (delete this folder if you want a smaller project; it is not used by the site).

## Structure
```
index.html, package.json, vite.config.ts, tsconfig.json, .env.example, metadata.json
public/        images, robots.txt, sitemap.xml
src/           main.tsx, App.tsx, index.css, data/hostelData.ts, components/*
```
The site is a single-page app with these pages (switched via navbar): Home, About, Rooms, Amenities, Gallery, Contact.
