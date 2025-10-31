# Autism Spectrum Disorder (ASD) Info Site

Single-page, accessible website prepared for the Genetics Disorders Conference project. The goal is to deliver trustworthy, easy-to-read information about Autism Spectrum Disorder while meeting rubric requirements (diagnosis, causes, symptoms, treatments, community supports, visuals, and APA references) and performance targets (Lighthouse ≥ 90/95/90/90).

## Quick Start

1. Open this folder in your browser or local server.
   - Simplest option: double-click `index.html`.
   - Optional: run `npx serve` (or any static server) inside the project directory.
2. Scroll through each section using the sticky navigation menu.
3. Click **Download Letter Brochure (Print)** to open the print dialog. Choose “Save as PDF” for a digital handout.

## Project Structure

- `index.html` – All sections (Hero, Overview, Diagnosis, Causes, Signs & Symptoms, Life With ASD, Treatment, Community Support, Images, References, Brochure, Footer).
- `css/styles.css` – Theme variables, layout helpers, responsive breakpoints (360/768/1024/1280), and `@media print` for the brochure.
- `js/app.js` – Navigation toggle and print button handler.
- `assets/` – Placeholder illustrations (`autism-classroom.svg`, `dna-neurodiversity.svg`). Replace with licensed imagery before final submission.
- `licenses.csv` – Table for visual asset credits (fill in when real images are selected).

## Content Updates

- All section text lives in `index.html`. Headings follow semantic order (H1 → H2 → H3).
- To change colors or spacing, edit CSS custom properties at the top of `css/styles.css`.

## Accessibility & Performance Notes

- Meets WCAG 2.1 AA intent: semantic structure, high contrast, keyboard navigation, `aria` updates.
- Images include meaningful `alt` text and captions with licensing placeholders.
- Navigation becomes a collapsible menu below 768px to maintain usability on mobile.
- Print stylesheet hides non-essential UI and reveals a clean, single-page brochure in Letter format.

## Visual Asset Instructions

1. Source high-quality photos or illustrations from Unsplash, Wikimedia Commons, or institutional sites that permit reuse.
2. Save each file into the `assets/` folder with descriptive names (e.g., `autism-classroom.jpg`).
3. Update the `<img>` `src`, `alt`, caption text, and license notes in the Images section.
4. Record each asset in `licenses.csv` with columns: `filename,title,creator,source,license,notes`.

## Print Brochure Tips

- Use the hero button or press `Ctrl/Cmd + P` to open the print dialog.
- Select “Letter” paper size and “Portrait” orientation.
- Disable headers/footers in the print dialog for a clean edge-to-edge look.

## Future Enhancements

- Add bilingual support (English/Turkish) using simple `data-i18n` attributes.
- Embed a lightweight visit counter (no analytics services) for classroom demos.
- Expand to a multi-page experience with case studies and downloadable materials.

## Attribution Checklist

- [ ] Replace placeholder images with licensed assets and update captions.
- [ ] Fill in `licenses.csv` with correct credit lines.
- [ ] Capture Lighthouse screenshots (Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 90, SEO ≥ 90) and add them to the final submission package.


