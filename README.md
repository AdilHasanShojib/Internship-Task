# Frontend Project

## 🚀 Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide Icons
- **Deployment:** Vercel

---

## 📁 Folder Structure
/public
└── assets/ # Static images used throughout the site
/src
└── app/ # App Router entry point
     └── styles/ # Global styles (if needed)
     └── page.tsx # Home page
└── components/ # All reusable components (Hero, Footer, etc.)

/README.md
/next.config.js
/tailwind.config.js
/postcss.config.js
/tsconfig.json
/package.json


---

## 🧠 Decisions & Assumptions

- The project uses **Next.js App Router** with `use client` where needed for interactivity.
- Layout is built mobile-first and fully responsive using **Tailwind's responsive utilities**.
- Assets are stored in `/public/assets` for direct use via `<Image />` or `url()`.
- Fonts and icons are loaded locally or via CDN (as required by the design).
- No API or backend integration was assumed or required.
- SEO or analytics were not included per scope.

---

## ✅ How to Run Locally

```bash
npm install
npm run dev


