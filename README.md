# 🚀 Minimalist Professional Portfolio - Michele Vantaggi

> **Project Note**: This website was conceived and built as an **experimental introductory project to explore AI agent-based software development tools using Google Antigravity**.

---

## 📖 Description

Personal and professional developer portfolio for **Michele Vantaggi** (*Junior Software Developer • Master's Student in Computer Engineering and Robotics LM-32*).

The project features an **extremely minimalist, sleek, and elegant design** built around a high-contrast architecture fully compliant with international **WCAG 2.1 AAA** accessibility standards.

---

## 🛠️ Tech Stack & Architecture

* **Core Framework**: React 18 + Vite
* **Language**: JavaScript (ES6+)
* **Styling**: Modern Vanilla CSS (Zinc Palette & Deep Teal `#0d6b63` CV accent color)
* **Icons**: Lucide React
* **API Integration**: Live public repository fetching from the **GitHub REST API** (`michelevantaggi02`) with `sessionStorage` caching (15-min TTL) and offline fallback.
* **Accessibility (WCAG 2.1 AAA)**: Text contrast ratio > 7.0:1, `:focus-visible` outline rings, keyboard navigation (`skip-link`), and `prefers-reduced-motion` support.

---

## 🧱 Core Components

* **`Navbar.jsx`**: Minimalist sticky header with brand logo, anchor navigation, direct PDF CV viewer button, and dark/light theme switcher.
* **`Hero.jsx`**: Professional introduction, academic status badge, and weighted Call-to-Action buttons (`CV PDF`, `GitHub Projects`, `Contact`).
* **`Skills.jsx`**: CV technical skills grid (Computer Vision & AI, Languages & Systems, Mobile Flutter, Server & Tools) featuring **interactive filtering** synced with the GitHub projects section.
* **`ProjectsGrid.jsx` & `ProjectCard.jsx`**: **Bento Grid** showcase with dedicated category/tag rows, 100% clickable cards, and equal-height button alignments.
* **`Publications.jsx`**: Academic research publication card for **ICAART 2026** with direct DOI link to publisher **SCITEPRESS**.
* **`Contact.jsx` & `Footer.jsx`**: Direct communication channels via email (`mailto:`) with one-click copy button and official **LinkedIn** profile.

---

## ⚡ Development Commands

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build
```
