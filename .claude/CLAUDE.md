# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (Vite, http://localhost:5173)
npm run build        # Production build to dist/
npm run preview      # Preview production build
npm run lint         # ESLint
npx playwright test  # E2E tests (Playwright, not yet configured)
```

## Architecture

Single-page React app for Gate of Redemption Church (GRC). No router — all 10 sections render on one page with smooth-scroll navigation between them.

**Stack:** Vite 7 + React 19 + Tailwind CSS v4 (via `@tailwindcss/vite` plugin, configured in `index.css` `@theme` block, not `tailwind.config.js`)

### Bilingual System (EN/FR)

All user-visible text lives in `src/i18n/en.json` and `src/i18n/fr.json`. Components access translations via `useTranslation()` hook which reads from `LanguageContext`. The context is provided in `main.jsx` via `LanguageProvider` and persists the choice to `localStorage` under key `grc-lang`.

When adding new text: add the key to **both** JSON files, then use `t('section.key')` in the component. Never hardcode user-visible strings.

### Section Components

`App.jsx` renders: Navbar → Hero → About → ServiceTimes → Values → Outreach → Events → Media → Gallery → Connect → Contact → Footer. Each section is a standalone component in `src/components/sections/`. Most sections wrap their content in `SectionWrapper` which provides consistent padding, dark/light theming, and scroll-triggered fade-in animation.

### Scroll Animation Pattern

`useScrollAnimation` hook creates an IntersectionObserver that adds the CSS class `is-visible` to elements with `animate-on-scroll`. This is a DOM-direct approach (classList mutation) — the animation classes are defined in `index.css`. For staggered children, add `stagger-children` class to the parent.

### Navbar

The most complex component. Centered logo layout with left/right nav groups. Desktop dropdowns (`DropdownMenu.jsx`) support both hover and full keyboard navigation (Enter/Space/Arrow/Escape). Mobile uses a slide-in panel (`MobileMenu.jsx`) with focus trap and accordion sub-menus. Nav link definitions live in `src/constants/navigation.js`.

### Brand Colors

Defined as CSS custom properties in `src/index.css` `@theme` block, making them available as Tailwind classes (e.g., `bg-burgundy`, `text-cream`). The palette: burgundy (#7B1E3A), amber (#D4922A), gold (#C9951A), cream (#FDF6EC).

### Images

Real church photos are in `public/images/`. Where photos aren't available, warm CSS gradient placeholders are used (burgundy-to-amber, etc.). The `CardImage` component in `ui/Card.jsx` handles both cases.

## Key Patterns

- **`cn()` utility** (`src/utils/cn.js`): wraps `clsx` + `tailwind-merge` for conditional class composition. Use this instead of string concatenation.
- **No backend**: Contact form validates client-side only and shows a success state — no actual submission. Wire up a service (Formspree, etc.) before launch.
- **Section IDs**: Each section has a stable `id` used for scroll navigation and scroll-spy tracking. The canonical list is `SECTION_IDS` in `constants/navigation.js`.
