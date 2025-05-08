# Frontend Project

## 🚀 Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide Icons
- **Deployment:** Vercel

---

## 📁 Folder Structure
/public <br/>
└── assets/ # Static images used throughout the site <br/>
/src <br/>
└── app/ # App Router entry point <br/>
     └── styles/ # Global styles (if needed) <br/>
     └── page.tsx # Home page <br/>
└── components/ # All reusable components <br/>

/README.md <br/>
/next.config.js <br/>
/tailwind.config.js <br/>
/postcss.config.js <br/>
/tsconfig.json <br/>
/package.json <br/>


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

```
Then open http://localhost:3000 in your browser

