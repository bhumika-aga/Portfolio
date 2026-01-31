# Portfolio Website - Bhumika Agarwal

A professional portfolio website showcasing full-stack development expertise with modern React architecture and Apple-inspired design. Features interactive project showcases, comprehensive skill demonstrations, and seamless contact integration for software engineering opportunities.

## Tech Stack

- **React 19.1.1** - Frontend framework with concurrent features
- **TypeScript 4.9.5** - Type-safe development environment
- **Material-UI 7.3.1** - Apple-inspired component library and design system
- **EmailJS** - Client-side email integration for contact form
- **React Router 6.30.1** - Client-side routing and navigation
- **Emotion 11.14.x** - CSS-in-JS styling and theming

## Live Demo

**Live Portfolio**: [https://bhumika-portfolio-zkq0.onrender.com](https://bhumika-portfolio-zkq0.onrender.com)

## Key Features

- **Bento Grid Layout**: Dynamic asymmetric project showcase with intelligent content distribution
- **Centralized Data Management**: Projects stored in separate data file for easy maintenance
- **Working Contact Form**: Functional email submission powered by EmailJS
- **Form Validation**: Comprehensive email and input validation on contact form
- **Smart Button Alignment**: Conditional project buttons with perfect alignment and spacing
- **Apple-Inspired Design**: Glass morphism effects with smooth transitions
- **Dark/Light Mode Toggle**: Persistent theme switching with localStorage
- **Responsive Design**: Mobile-first architecture with breakpoint optimization
- **Performance Optimized**: Production-ready builds with TypeScript compilation

## Quick Start

### Prerequisites

- Node.js 18+
- EmailJS Account (Service ID, Template ID, Public Key)

### Installation

```bash
# Clone repository
git clone https://github.com/bhumika-aga/portfolio.git

# Navigate to project
cd portfolio

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Serve production build locally
npm run serve
```

## EmailJS Configuration

To enable the Contact Form, ensure you have set up your EmailJS account and configured the service with the following template variables:

- `{{name}}`
- `{{email}}`
- `{{subject}}`
- `{{message}}`

## Project Structure

```txt
portfolio/
├── src/
│   ├── components/
│   │   ├── Footer.tsx          # Footer with social links and scroll-to-top
│   │   └── Navbar.tsx          # Navigation with theme toggle
│   ├── data/
│   │   └── projects.ts         # Centralized project data (Source of Truth)
│   ├── pages/
│   │   ├── Home.tsx            # Hero landing page with animations
│   │   ├── About.tsx           # Professional timeline and skills
│   │   ├── Projects.tsx        # Bento grid portfolio showcase
│   │   └── Contact.tsx         # Contact form with EmailJS integration
│   ├── services/
│   │   └── githubService.ts    # Data handling service
│   ├── theme/
│   │   ├── ThemeContext.tsx    # Dark/light mode context
│   │   └── theme.ts            # Material-UI theme configuration
│   ├── App.tsx                 # Main application component
│   └── index.tsx               # Application entry point
├── public/
│   └── Bhumika_Agarwal_Resume.pdf
├── render.yaml                 # Render.com deployment config
├── README.md                   # Project documentation
└── DEPLOYMENT.md               # Deployment guide
```

## Deployment

Optimized for **Render.com** deployment with included `render.yaml` configuration:

- **Build Command**: `npm install && npm run build`
- **Start Command**: `serve -s build -p $PORT`
- **Node Version**: 18
- **Auto-deploy**: Enabled via GitHub integration

## Design Philosophy

This portfolio follows Apple's design principles with clean typography, generous whitespace, and intuitive navigation. The centered layout approach ensures optimal content consumption across all devices while maintaining visual hierarchy and user engagement.

## Architecture Decisions

A deep dive into the system design:

1. **Centralized Project Data**: Projects are stored in `src/data/projects.ts` for easy maintenance and scalability
2. **Component Separation**: UI components are separated from page components for better code organization
3. **Theme Context**: Custom React Context for theme management with localStorage persistence
4. **Form Validation**: Client-side validation with comprehensive error handling
5. **Responsive Bento Grid**: CSS Grid-based layout that adapts to content and screen size
6. **Dynamic Rendering Logic**: Automated layout calculations for asymmetric grid designs
7. **Contact System Implementation**: Serverless email transmission using EmailJS with secure credential management

---

**Built by Bhumika Agarwal** | [Live Demo](https://bhumika-portfolio-zkq0.onrender.com) | [GitHub Repository](https://github.com/bhumika-aga/portfolio)
