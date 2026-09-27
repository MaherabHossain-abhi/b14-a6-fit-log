# 🏋️‍♂️ FITLOG — Modern Workout & Fitness Management App

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Netlify-brightgreen?style=for-the-badge&logo=vercel)](https://abhi-fit-log.netlify.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14%2B-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strictly%20Typed-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-Responsive-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

FITLOG is a full-featured, responsive fitness logging application built using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed for gym enthusiasts and everyday fitness practitioners, FITLOG provides an intuitive interface to explore exercise libraries, build custom daily workout plans, bookmark exercises for future sessions, and mark completed routines in real time.

🚀 **Live Deployment:** [https://abhi-fit-log.netlify.app/](https://abhi-fit-log.netlify.app/)

---

## 📖 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Application Architecture](#-application-architecture)
- [Key Technical Implementations](#-key-technical-implementations)
- [Getting Started](#-getting-started)
- [API & Data Resiliency](#-api--data-resiliency)
- [Folder Structure](#-folder-structure)
- [Future Enhancements](#-future-enhancements)
- [License](#-license)

---

## ✨ Features

### 🏋️ 1. Interactive Exercise Library
- Browse 12 major strength and resistance exercises targeting every major muscle group.
- View detailed metadata per exercise: target muscle tags, equipment required, estimated duration (minutes), calorie burn, sets, reps, and ratings.
- Fast navigation to individual workout details via Next.js routing.

### 📅 2. Today's Plan Management
- Add exercises directly to your active daily plan with a single click.
- Built-in duplicate protection to prevent adding the same exercise multiple times.
- Real-time badge counter updating in the navigation header.

### 🔖 3. Saved Workouts (Bookmark for Later)
- Save routines to your personal bookmark collection for future workout sessions.
- Dedicated management tab (`My Plan`) to view, organize, or clear saved workouts.

### ✅ 4. Completion & Task Tracking
- Mark exercises as completed ("Mark as Done"), which dynamically updates user state and provides instant UI feedback.
- Remove exercises from either Today's Plan or Saved lists with immediate toast notifications.

### 📱 5. Fully Responsive Mobile-First Design
- Mobile-optimized layout featuring an interactive drawer menu with stateful toggling.
- Adaptive grid layout (`1 col` on mobile, `3 cols` on desktop) with Tailwind utilities.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) (App Router, Server & Client Components) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict Mode) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **State Management** | React Context API (`WorkoutContext`) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) (`GiHamburgerMenu`, `RxCross2`, `FiCheck`, `FaRegClock`, `FaRegStar`) |
| **UI Notifications** | [React Toastify](https://fkhadra.github.io/react-toastify/) |
| **Deployment** | [Netlify](https://netlify.com/) |

---

## 📂 Folder Structure

```text
b14-a6-fit-log/
├── public/                     # Static assets & public media
├── src/
│   ├── app/                    # Next.js App Router structure
│   │   ├── exercise/[id]/      # Dynamic exercise detail route
│   │   ├── my-plan/            # User plan & saved workouts page
│   │   ├── layout.tsx          # Root layout wrapped with WorkoutProvider
│   │   ├── page.tsx            # Main landing page
│   │   └── globals.css         # Global styles & Tailwind imports
│   ├── assets/                 # Brand logos and local media
│   ├── components/             # Reusable React components
│   │   ├── Banner.tsx          # Hero section with CTA scroll
│   │   ├── DeleteSaveButtonPage.tsx # Save removal button
│   │   ├── DeleteTodayButton.tsx    # Plan removal button
│   │   ├── Footer.tsx          # App footer
│   │   ├── MarkAsSaved.tsx     # Completion button for saved items
│   │   ├── MarkAsSavedToday.tsx# Completion button for today items
│   │   ├── Navbar.tsx          # Responsive navigation & dynamic counters
│   │   ├── SaveCard.tsx        # Card UI for saved items
│   │   ├── savebutton.tsx      # Add to save button
│   │   ├── todaybutton.tsx     # Add to plan button
│   │   ├── workout.tsx         # Workout library grid section
│   │   └── workoutcard.tsx     # Individual exercise card UI
│   ├── context/
│   │   └── index.tsx           # WorkoutContext & WorkoutProvider
│   ├── types/
│   │   └── workouttype.ts      # IWorkout interface definition
│   └── utils/
│       └── workoutData.ts      # API fetcher with primary/fallback routing
├── package.json
├── tsconfig.json
└── tailwind.config.js
## 🛡️ Key Technical Implementations

- **Strict Type Safety:** Strongly typed using `IWorkout` interface across all context, props, and API layers.
- **API Resilience:** Dual-endpoint fetching logic with automatic fallback mechanism to prevent service downtime.
- **Runtime Error Protection:** Enforced optional chaining (`?.`), array fallbacks (`[]`), and unique composite keys (`id + index`) to guarantee crash-free rendering.

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone [https://github.com/your-username/b14-a6-fit-log.git](https://github.com/your-username/b14-a6-fit-log.git)

# Navigate to project & install dependencies
cd b14-a6-fit-log
npm install


# Run development server
npm run dev

## 🛡️ Key Technical Implementations

- **Strict Type Safety:** Strongly typed using `IWorkout` interface across all context, props, and API layers.
- **API Resilience:** Dual-endpoint fetching logic with automatic fallback mechanism to prevent service downtime.
- **Runtime Error Protection:** Enforced optional chaining (`?.`), array fallbacks (`[]`), and unique composite keys (`id + index`) to guarantee crash-free rendering.

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone [https://github.com/MaherabHossain-abhi/b14-a6-fit-log](https://github.com/MaherabHossain-abhi/b14-a6-fit-log)

# Navigate to project & install dependencies
cd b14-a6-fit-log
npm install

# Run development server
npm run dev

Open http://localhost:3000 in your browser.

🔮 Future Enhancements
[ ] Custom exercise creator with localStorage support

[ ] Workout progress analytics and calorie tracking

[ ] User authentication (NextAuth / Clerk)

📄 License
This project is licensed under the [MIT License](https://www.google.com/search?q=LICENSE).
