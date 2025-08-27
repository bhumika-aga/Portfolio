# Portfolio Website - Bhumika Agarwal

## 🎯 Project Goal

Professional portfolio website showcasing full-stack development expertise with modern React architecture and Apple-inspired design. Features interactive project showcases, comprehensive skill demonstrations, and seamless contact integration for software engineering opportunities.

## 🛠️ Tech Stack

- **React 19.1.1** - Modern frontend framework with concurrent features
- **TypeScript 4.9.5** - Type-safe development environment  
- **Material-UI 7.3.1** - Apple-inspired component library and design system
- **React Router 6.30.1** - Client-side routing and navigation
- **Emotion CSS-in-JS** - Dynamic styling and theming capabilities

## 📸 Demo GIF

![Portfolio Demo](https://my-portfolio-ri4w.onrender.com)

Demo showcasing Bento grid project layout, compact footer design, enhanced button alignment, and optimized spacing throughout all components

## 🔗 Links to Deployment

**Live Portfolio**: [https://my-portfolio-ri4w.onrender.com](https://my-portfolio-ri4w.onrender.com)

## ✨ Key Features

- **Bento Grid Layout**: Dynamic asymmetric project showcase with intelligent content distribution
- **Compact Footer Design**: Streamlined footer with reduced spacing and enhanced social integration
- **Smart Button Alignment**: Conditional project buttons with perfect alignment and spacing
- **Centered Layout Architecture**: Full-screen hero sections with optimized content hierarchy
- **Clean Skills Showcase**: Icon-based skill presentation with compact typography
- **Enhanced Contact Flow**: Progressive disclosure with centered information layout
- **Professional Timeline**: Career progression with uniform styling and consistent iconography
- **Apple-Inspired Design**: Glass morphism effects with smooth transitions
- **Dark/Light Mode Toggle**: Persistent theme switching with localStorage
- **Responsive Design**: Mobile-first architecture with breakpoint optimization
- **Performance Optimized**: Production-ready builds with TypeScript compilation

## 🚀 Quick Start

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

## 📦 Deployment

Optimized for **Render.com** deployment with included `render.yaml` configuration:

- **Build Command**: `npm install && npm run build`
- **Start Command**: `serve -s build -p $PORT`  
- **Node Version**: 18
- **Auto-deploy**: Enabled via GitHub integration

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 🏗️ Project Structure

```txt
portfolio/
├── src/
│   ├── components/
│   │   ├── Footer.tsx          # Compact footer with social links
│   │   └── Navbar.tsx          # Navigation component
│   ├── pages/
│   │   ├── Home.tsx            # Hero landing page
│   │   ├── About.tsx           # Professional timeline & compact skills
│   │   ├── Projects.tsx        # Bento grid portfolio showcase
│   │   └── Contact.tsx         # Contact form & information
│   ├── theme/
│   │   ├── ThemeContext.tsx    # Dark/light mode context
│   │   └── theme.ts           # Material-UI theme config
│   ├── App.tsx                # Main application component
│   └── index.tsx              # Application entry point
├── public/
│   └── Bhumika_Agarwal_Resume.pdf
├── render.yaml                # Render.com deployment config
├── README.md                  # Project documentation
└── DEPLOYMENT.md              # Deployment guide
```

## 🎨 Design Philosophy

This portfolio follows Apple's design principles with clean typography, generous whitespace, and intuitive navigation. The centered layout approach ensures optimal content consumption across all devices while maintaining visual hierarchy and user engagement.

---

**Built with ❤️ by Bhumika Agarwal** | [Live Demo](https://my-portfolio-ri4w.onrender.com) | [GitHub Repository](https://github.com/bhumika-aga/portfolio)
