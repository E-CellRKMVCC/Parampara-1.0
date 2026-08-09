# Parampara 1.0 🏆

Welcome to the official repository for **Parampara 1.0**, an inter-college hackathon proudly presented by the **Entrepreneurship Cell (E-Cell) of Ramakrishna Mission Vivekananda Centenary College (RKMVCC)**.

This website serves as the central hub for the event, showcasing the hackathon details, problem statements, event timeline, FAQs, and the organizing team. It features a modern, dark-themed UI with custom glitch animations, smooth scrolling, and dynamic Framer Motion transitions.

## 🚀 Tech Stack

- **Framework**: [React.js](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🎨 Features

- **Custom Glitch Effects**: "Spider-Verse" inspired CSS glitch animations on the preloader and hero title.
- **Parallax Scrolling**: Smooth, scroll-synced background elements (e.g., in the Timeline section).
- **Responsive Design**: Fully mobile-optimized layout using Tailwind CSS.
- **Glassmorphism UI**: Beautiful frosted-glass effects applied to navigation and cards.
- **Dynamic Preloader**: A multi-stage loading animation sequence before revealing the home page.

## 📦 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd Parampara-1.0
   ```

2. **Install the dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local URL provided in your terminal (usually `http://localhost:5173`).

## 🛠️ Scripts

- `npm run dev`: Starts the local Vite development server.
- `npm run build`: Compiles TypeScript (if used) and builds the production-ready assets into the `dist` folder.
- `npm run preview`: Locally preview the production build.

## 📂 Project Structure

```
Parampara-1.0/
├── src/
│   ├── assets/       
│   │   └── images/   # Static graphic assets (logos, background images)
│   │
│   ├── components/   # Modular React Components
│   │   ├── About.jsx               # 'About the Hackathon' section detailing the vision
│   │   ├── BackgroundDecor.jsx     # Floating background visual elements
│   │   ├── ContactCTA.jsx          # Call-to-action banner for reaching the team
│   │   ├── FAQ.jsx                 # Accordion-style Frequently Asked Questions
│   │   ├── Footer.jsx              # Bottom page footer with social and event links
│   │   ├── GlitchText.jsx          # Core reusable component for Spider-Verse glitch text effect
│   │   ├── Hero.jsx                # The primary landing banner (contains main text logo & glitch)
│   │   ├── Navbar.jsx              # Sticky top navigation with mobile hamburger menu
│   │   ├── ParamparaLogo.jsx       # SVG/Graphic logo wrapper
│   │   ├── Preloader.jsx           # Initial animated loading sequence 
│   │   ├── ProblemCard.jsx         # UI card representing a single hackathon problem statement
│   │   ├── ProblemStatements.jsx   # Section displaying the grid of all problem statements
│   │   ├── Team.jsx                # Section displaying the organizing team grid
│   │   ├── TeamCard.jsx            # UI card representing an individual team member
│   │   ├── Timeline.jsx            # Section showing the chronological flow of the event
│   │   └── TimelineItem.jsx        # Individual alternating nodes on the event timeline
│   │
│   ├── data/         # Content Source Files
│   │   ├── faq.js                  # Array of questions & answers for the FAQ section
│   │   ├── problems.js             # Data structure containing SIH problem statement categories
│   │   ├── team.js                 # Array of organizing team member details
│   │   └── timeline.js             # Array of event milestones and dates
│   │
│   ├── App.tsx       # Main component that stitches all sections into a single page
│   ├── index.css     # Global Tailwind styles & pure CSS @keyframes for glitch effects
│   └── main.tsx      # Entry point for React DOM
│
├── public/           # Static public directory for favicon etc.
├── tailwind.config.js # Contains custom Tailwind theme extensions (colors, fonts)
└── vite.config.ts    # Bundler config for Vite
```

## 🤝 Brought to you by
**E-Cell RKMVCC**
*Ramakrishna Mission Vivekananda Centenary College, Rahara*
