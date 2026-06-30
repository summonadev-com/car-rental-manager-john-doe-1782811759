---
status: implemented
title: Car Rental App
---

## Overview
A clean, minimal car rental app with a home/landing page, a car listing/browse page with search & filters, and a car detail page. All car data is hardcoded. Styling is white/grey, modern and professional.

---

## Step 1 — Project foundation
- Ensure `/app/src/styles/global.css` starts with `@import "tailwindcss";` and defines any custom CSS variables (neutral greys, white backgrounds, accent colour).
- Ensure `/app/src/main.tsx` imports the global CSS file once and mounts the root app component.
- Expected outcome: Tailwind v4 styles apply globally across all pages.

---

## Step 2 — Shared TypeScript types
- Create `/app/src/types/car.ts` defining a `Car` type with fields: id, name, brand, category (e.g. SUV, Sedan, Electric), seats, pricePerDay, transmission (Auto/Manual), imageUrl, shortDescription, longDescription, features (string array), and available (boolean).
- Expected outcome: A single source of truth for the car data shape used everywhere in the app.

---

## Step 3 — Hardcoded car data
- Create `/app/src/lib/cars.ts` exporting an array of at least 8 sample `Car` objects covering a variety of categories (SUV, Sedan, Electric, Convertible), price ranges, and seat counts. Use realistic placeholder image URLs (e.g. from Unsplash or picsum.photos).
- Expected outcome: The app has realistic sample data to display without any backend.

---

## Step 4 — App routing setup
- Install and configure `react-router-dom` in `/app/src/main.tsx` using `BrowserRouter`.
- Create `/app/src/App.tsx` defining three routes:
  - `/` → Home page
  - `/cars` → Car listing page
  - `/cars/:id` → Car detail page
- Expected outcome: Navigating between URLs renders the correct page component.

---

## Step 5 — Shared layout components
- Create `/app/src/components/Navbar.tsx`: a sticky top navigation bar with the app logo/brand name on the left and a "Browse Cars" link on the right. Clean white background with a subtle bottom border.
- Create `/app/src/components/Footer.tsx`: a simple footer with the brand name, a tagline, and a copyright line.
- Expected outcome: Every page shares the same header and footer chrome.

---

## Step 6 — Home / landing page
- Create `/app/src/pages/HomePage.tsx` composed of:
  - A full-width hero section with a headline ("Find Your Perfect Ride"), a short subtext, and a prominent "Browse Cars" call-to-action button that navigates to `/cars`.
  - A "Why choose us" section with 3–4 icon + text cards (e.g. Free cancellation, Wide selection, Best price, 24/7 support).
  - A "Popular categories" section showing clickable category chips (SUV, Sedan, Electric, Convertible) that navigate to `/cars` with a pre-selected filter.
- Expected outcome: An attractive, informative landing page that drives users to the listing page.

---

## Step 7 — Search & filter hook
- Create `/app/src/hooks/useCarFilters.ts` that accepts the full cars array and returns:
  - Reactive filter state: search query (text), selected category, max price per day, min seats, transmission preference.
  - A `filteredCars` array derived from applying all active filters.
  - Setter functions for each filter.
  - A `resetFilters` function.
- Expected outcome: Reusable filtering logic decoupled from the UI, easy to test and extend.

---

## Step 8 — Filter sidebar / panel component
- Create `/app/src/components/FilterPanel.tsx` accepting filter state and setters as props, rendering:
  - A text search input (search by name or brand).
  - A category selector (All, SUV, Sedan, Electric, Convertible).
  - A max price slider or input.
  - A minimum seats selector.
  - A transmission toggle (Any / Auto / Manual).
  - A "Reset filters" button.
- Expected outcome: A reusable, self-contained filter UI wired to the hook state.

---

## Step 9 — Car card component
- Create `/app/src/components/CarCard.tsx` accepting a `Car` object as a prop and rendering:
  - Car image (aspect-ratio fixed, object-cover).
  - Brand + name, category badge, seats count, transmission type.
  - Price per day prominently displayed.
  - An "View Details" button that navigates to `/cars/:id`.
- Expected outcome: A polished, reusable card displayed in the listing grid.

---

## Step 10 — Car listing / browse page
- Create `/app/src/pages/CarsPage.tsx`:
  - Reads any category pre-filter passed via URL search params (from the homepage category chips).
  - Uses `useCarFilters` hook with the hardcoded cars data.
  - Renders `FilterPanel` on the left sidebar (collapsible on mobile).
  - Renders a responsive grid of `CarCard` components on the right.
  - Shows a result count ("Showing X cars") and an empty state message when no cars match.
- Expected outcome: A fully functional browse page where users can search and filter the car catalogue.

---

## Step 11 — Car detail page
- Create `/app/src/pages/CarDetailPage.tsx`:
  - Reads the `:id` param, finds the matching car from the hardcoded data (shows a "Car not found" message if missing).
  - Displays the car image prominently, full name, category badge, and availability status.
  - Shows all car specs (seats, transmission, price per day) in a clean info grid.
  - Lists the car features as a bulleted/icon list.
  - Shows the long description.
  - Includes a "Book This Car" call-to-action button (can show a simple toast/modal saying "Booking coming soon!" since booking is out of scope).
  - A "← Back to cars" link.
- Expected outcome: A rich, informative detail page for each individual car.

---

## Step 12 — Polish & responsiveness
- Review all pages for mobile responsiveness: the filter panel should collapse into a toggleable drawer on small screens, the car grid should be 1-column on mobile and 2–3 columns on wider screens.
- Ensure consistent spacing, typography scale, and colour usage across all components.
- Add hover and focus states to all interactive elements (buttons, cards, links).
- Expected outcome: The app looks great and is fully usable on both mobile and desktop screens.
