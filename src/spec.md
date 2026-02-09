# Specification

## Summary
**Goal:** Update the site’s accent theme from orange/gold to a cleaner bright yellow, and apply the provided Baidees Salon logo site-wide (including favicon/preview assets) while keeping the premium black/white base styling.

**Planned changes:**
- Centralize and update the global accent color tokens so all existing accent usages (text/background/border, focus rings, hover states, glows, badges/banners, CTAs) render as distinctly yellow across all pages and shared components.
- Add the provided logo as frontend static assets and integrate it into the Navbar and Footer brand areas with responsive sizing and preserved layout.
- Generate and wire up logo-derived favicon assets (and OG/social preview image where used) via frontend static assets and `frontend/index.html` metadata/links.

**User-visible outcome:** The website consistently uses a bright yellow accent (not orange) across the UI, and the Baidees Salon logo appears in the header/footer and browser/tab icons (and social preview where applicable) with crisp rendering on mobile and desktop.
