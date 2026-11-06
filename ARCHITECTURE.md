# Portfolio Technical Architecture

This document describes the architectural design, component hierarchy, state management strategy, and design principles powering Hashim Hussain's Portfolio Application.

---

## 🏗️ System Overview

The portfolio is architected as a **Full-Stack Single-Page Application (SPA)** powered by Vite, React 19, and an Express.js backend server running seamlessly in both development (via Vite middleware) and production environments.

```
┌─────────────────────────────────────────────────────────────┐
│                      Client Browser                         │
│  (React 19 + Tailwind v4 + Framer Motion + Lucide Icons)   │
└──────────────────────────────┬──────────────────────────────┘
                               │ Fetch / JSON
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                     Express.js Server                       │
│  • Middleware: Vite SPA Handler (Dev) / Static Asset (Prod) │
│  • API Routes: GET /api/info, POST /api/contact             │
│  • Env Extraction: Reads CONTACT_EMAIL from process.env     │
└─────────────────────────────────────────────────────────────┘
```

---

## 🧱 Component Architecture & Hierarchy

The component tree follows a strict **Clean Modular Architecture** with clear boundaries between layout, sections, cards, modals, hooks, and services:

```text
App.tsx
├── Header (layout/Header.tsx)
│   └── Theme Switcher (useTheme hook)
├── Hero (sections/Hero.tsx)
│   ├── OwnerCard (cards/OwnerCard.tsx)
│   │   └── useClipboard hook
│   └── Metrics Strip
├── About (sections/About.tsx)
├── SkillsSection (sections/SkillsSection.tsx)
│   ├── Category Tabs
│   └── Search Input
├── ProjectsSection (sections/ProjectsSection.tsx)
│   ├── Flagship Galaxy AI Agent Card
│   └── ProjectModal (modals/ProjectModal.tsx)
├── GitHubStats (sections/GitHubStats.tsx)
│   ├── Live GitHub Metrics Cards
│   └── Interactive CLI Terminal Emulator
├── ContactSection (sections/ContactSection.tsx)
│   └── useContactForm hook
├── Footer (layout/Footer.tsx)
└── ResumeModal (modals/ResumeModal.tsx)
    └── Plaintext ATS Copy (useClipboard hook)
```

---

## 🔄 State Management & Custom Hooks

To minimize visual component complexity, state and side-effects are decoupled into custom React hooks:

### 1. `useTheme` (`src/hooks/useTheme.ts`)
- Manages Light vs. Dark theme toggling.
- Persists user preference in `localStorage`.
- Syncs class `.dark` onto `document.documentElement`.

### 2. `useClipboard` (`src/hooks/useClipboard.ts`)
- Handles text copy operations (`navigator.clipboard.writeText`).
- Provides a transient `copied` boolean indicator for user feedback (2s auto-reset).

### 3. `useProfile` (`src/hooks/useProfile.ts`)
- Fetches profile metadata and extracted email from `/api/info`.
- Seamlessly falls back to local data (`OWNER_INFO`) if network is unavailable.

### 4. `useContactForm` (`src/hooks/useContactForm.ts`)
- Manages form field values, strict validation (email regex, message length).
- Dispatches submissions to `/api/contact` and captures tracking IDs.

---

## 🎨 Design System & Anti-Slop Discipline

The application follows the **Universal Frontend Design Constitution**:

- **Top Bar Contract**: Standardized 3-zone header layout (1-line Brand wordmark, 5 clean navigation links, 1 primary action CTA + theme toggle).
- **60-30-10 Color Budget**:
  - **60% Neutral Canvas**: Off-white (`#F8FAFC`) in Light mode / Deep Slate (`#020617`) in Dark mode.
  - **30% Structural Surfaces**: Clean card containers and hairline borders (`border-slate-200` / `border-slate-800`).
  - **10% Focal Accent**: Vibrant cobalt blue (`#2563EB`) strictly reserved for action points and primary highlights.
- **Zero-Pill Metadata**: Metadata uses clean inline text with typographic separators (`·`, `/`) instead of clunky static capsules or pill tags.
- **Tabular Numerals**: Numerical metrics and statistics use `font-mono tabular-nums` for crisp alignment.

---

## 🔒 Security & Performance Features

- **No Secret Leakage**: Environment secrets remain strictly server-side.
- **Image Fallbacks**: Every image tag (`<img>`) includes an `onError` fallback handler preventing empty frames or broken visuals.
- **Compositor Animations**: Framer Motion animations only manipulate GPU-composited properties (`transform`, `opacity`).
- **Standardized Type Checking**: Strict TypeScript definitions (`src/types/index.ts`) enforce zero `any` usage.
