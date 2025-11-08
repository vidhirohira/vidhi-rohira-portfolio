# Vidhi Rohira - HCI Portfolio Website

A modern, accessible portfolio website showcasing Human-Computer Interaction principles, projects, and professional experience. Built with React, TypeScript, and Tailwind CSS.

## 🎨 Features

- **Interactive HCI Demonstrations**
  - GUI Requirements (Functional, Aesthetic, Communicable)
  - Visual Design Principles Inspector
  - Rule of Thirds composition overlay
  
- **Accessibility First**
  - WCAG AA compliant
  - Full keyboard navigation
  - High contrast mode toggle
  - Semantic HTML5 markup
  - Screen reader friendly

- **Responsive Design**
  - Mobile-first approach
  - Hamburger menu for mobile devices
  - Fluid typography and spacing
  - Touch-friendly interactions

- **Modern Tech Stack**
  - React 18 with TypeScript
  - Vite for fast builds
  - Tailwind CSS for styling
  - Shadcn UI components
  - Lucide React icons

## 🚀 Local Development

### Prerequisites

- Node.js 18+ and npm installed
- Install Node.js with [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer
│   │   ├── hci/             # HCI demonstration components
│   │   ├── portfolio/       # Projects, Experience, Skills, etc.
│   │   └── ui/              # Reusable UI components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilities and helpers
│   ├── data/                # Portfolio data (JSON)
│   ├── pages/               # Page components
│   └── index.css            # Global styles & design tokens
├── public/                  # Static assets
└── vercel.json             # Vercel deployment config
```

## 🎨 Color Palette

The design uses a carefully chosen beige/pink/white palette:

- **Beige Primary**: `#F5F0E6` (HSL: 39 29% 94%)
- **Pink Soft**: `#F7D6DA` (HSL: 355 68% 90%)
- **Pink Accent**: `#C97B9C` (HSL: 339 35% 63%)
- **White**: `#FFFFFF` (HSL: 0 0% 100%)
- **Neutral Text**: `#2E2E2E` (HSL: 0 0% 18%)

All colors use CSS custom properties and are accessible via Tailwind utility classes.

## ✅ Testing Checklist

### Manual Tests

1. **Rule of Thirds Test**
   - Navigate to hero section
   - Click "Show Rule of Thirds" button
   - Verify grid overlay appears
   - Confirm main elements align to grid intersections

2. **Keyboard Navigation Test**
   - Tab through entire page
   - Verify visible focus states on all interactive elements
   - Confirm all sections are reachable via keyboard
   - Test form submission with Enter key

3. **Contrast Toggle Test**
   - Click accessibility toggle button (bottom-right)
   - Switch to high-contrast mode
   - Verify all text remains readable
   - Check button and link contrast

4. **Mobile Responsive Test**
   - Resize browser to 375px width
   - Verify hamburger menu appears
   - Test menu open/close functionality
   - Confirm all content displays properly

5. **HCI Demos Test**
   - GUI Requirements: Interact with all 3 cards
   - Visual Principles: Toggle inspector overlay
   - Rule of Thirds: Show/hide composition grid

## 📝 Customizing Content

Edit `src/data/portfolio-data.json` to update:

- Personal information (name, email, phone, social links)
- Projects and descriptions
- Work experience
- Skills and technologies
- Achievements
- Leadership roles

The UI will automatically reflect your changes.

## 🌐 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions on:

- Pushing to GitHub
- Deploying to Vercel (Web UI and CLI)
- Custom domain setup
- Environment variables

## 📄 License

This project is open source and available for personal and educational use.

## 🤝 Credits

Built by Vidhi Rohira as a demonstration of HCI principles and modern web development practices.

## 📞 Contact

- **Email**: rohiravidhi@gmail.com
- **Phone**: +91 96191 84233
- **LinkedIn**: [vidhi-rohira](https://linkedin.com/in/vidhi-rohira)
- **GitHub**: [vidhirohira](https://github.com/vidhirohira)
