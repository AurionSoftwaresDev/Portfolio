# Hashim Hussain — Engineering Portfolio

A modern, production-grade portfolio application for **Hashim Hussain (Age 19)** — Full-Stack Web, Android Native/Mobile, Systems, and Low-Level Software Engineer.

Built with **React 19, TypeScript, Express.js, Tailwind CSS v4, and Framer Motion**, featuring dark/light theme support, an interactive developer CLI terminal, real-time API contact routing, live GitHub telemetry integrations, and an ATS-optimized executive resume generator.

---

## 🚀 Key Features

- **Split-Screen Hero & Verified Identity Card**: Showcases Hashim's profile image (`/images/owner_image.png`), core specializations, key tech engines, active language exploration (Go, Ruby), and quick 1-click email copy.
- **Interactive Technical Capabilities Matrix**: Filterable grid across 50+ technologies with search capabilities and category tabs (*Languages, Systems & Graphics, Frontend & UI, Backend & APIs, Databases, AI & Data, Cloud & DevOps, Tools & Design*).
- **Featured Works & Case Studies**: Showcases **Galaxy AI Agent** (Flutter + Python/FastAPI cross-platform desktop automation suite) with interactive architectural detail lightboxes.
- **Live GitHub Metrics & Developer CLI**:
  - Live streak stats, top languages, repository metrics, and trophies from `@AurionSoftwaresDev`.
  - Interactive terminal emulator supporting commands: `help`, `whoami`, `skills`, `exploring`, `contact`, `github`, `clear`.
- **Full-Stack Contact Engine**:
  - Server-side Express routing extracting destination email directly from `.env` (`CONTACT_EMAIL`).
  - Strict input validation, tracking submission IDs, and mailto fallback generation.
- **Microsoft / Google-Standard Executive Resume Lightbox**:
  - Print & PDF export layout optimized for tech recruiters.
  - Plaintext ATS copy button for job applications.

---

## 🛠️ Tech Stack & Frameworks

### Frontend & UI
- **React 19** & **TypeScript**
- **Tailwind CSS v4** (with custom `@custom-variant dark` theme support)
- **Framer Motion** (`motion/react`) for smooth spring animations
- **Lucide React** icons

### Backend & API
- **Express.js** (TypeScript via `tsx` runner)
- **Vite Middleware** for seamless full-stack dev execution
- **Dotenv** for environment variable extraction

### Development Tooling
- **Vite 8**
- **TypeScript 7**
- **ESBuild & TSX**

---

## 📁 Project Directory Structure

```text
/
├── .env                  # Local runtime environment variables
├── .env.example          # Environment variable template
├── index.html            # Entry HTML point with fonts & metadata
├── metadata.json         # AI Studio applet metadata
├── package.json          # Node dependencies & npm scripts
├── server.ts             # Express server with Vite SPA middleware
├── vite.config.ts        # Vite build configuration
└── src/
    ├── main.tsx          # Client entry rendering App
    ├── App.tsx           # Main application view container
    ├── index.css         # Tailwind CSS v4 import & custom fonts
    ├── types/
    │   └── index.ts      # TypeScript interfaces & domain schemas
    ├── data/
    │   └── portfolioData.ts # Skill matrices, projects, & profile info
    ├── services/
    │   └── api.ts        # API client for Express backend endpoints
    ├── hooks/
    │   ├── useTheme.ts        # Theme toggling & persistent storage
    │   ├── useClipboard.ts    # Clipboard copy helper with feedback
    │   ├── useProfile.ts      # Profile state fetcher hook
    │   └── useContactForm.ts  # Contact submission & validation hook
    ├── utils/
    │   └── formatters.ts      # Email regex, mailto link, scroll helpers
    └── components/
        ├── index.ts           # Unified barrel export file
        ├── layout/            # Site frame (Header, Footer)
        ├── sections/          # Content viewports (Hero, About, Skills, Projects, GitHub, Contact)
        ├── cards/             # Reusable cards (OwnerCard)
        └── modals/            # Overlays (ProjectModal, ResumeModal)
```

---

## ⚙️ API Endpoints

The full-stack Express backend exposes the following API routes:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/info` | Returns Hashim's profile data, status, and extracted `.env` email |
| `POST` | `/api/contact` | Handles contact form submissions and logs inquiries to console |
| `GET` | `/api/contact/recent` | Debug endpoint listing recent contact inquiries |

---

## 🏃 Local Setup & Running

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**:
   Create a `.env` file in the root directory:
   ```env
   CONTACT_EMAIL="jakirbhai421@gmail.com"
   VITE_CONTACT_EMAIL="jakirbhai421@gmail.com"
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. **Production Build**:
   ```bash
   npm run build
   npm start
   ```

---

## 📝 License

Apache License 2.0. Portfolio content © Hashim Hussain.
