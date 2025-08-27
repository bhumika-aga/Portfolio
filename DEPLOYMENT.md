# Deployment Guide - Portfolio Website

## 🎯 Project Goal

Deploy professional portfolio website with Apple-inspired design, featuring dark/light mode toggle, responsive bento grid layout, and real GitHub project integrations.

## 🛠️ Tech Stack

- **React 19.1.1** - Frontend framework
- **TypeScript 4.9.5** - Type-safe development
- **Material-UI 7.3.1** - Component library
- **Render.com** - Cloud deployment platform

## 📸 Demo GIF

![Deployment Demo](https://my-portfolio-ri4w.onrender.com)

### Deployment Features

Showing automated deployment from GitHub to Render.com

## 🔗 Links to Deployment

**Live Website**: <https://my-portfolio-ri4w.onrender.com>

## 🚀 Quick Deploy Steps

### 1. Push to GitHub

```bash
git add .
git commit -m "Portfolio website ready for deployment"
git push origin main
```

### 2. Deploy on Render.com

1. **Create account** at [render.com](https://render.com)
2. **New → Web Service**
3. **Connect GitHub repository**
4. **Configure**:
   - **Name**: `bhumika-portfolio`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npx serve -s build -p $PORT`
   - **Node Version**: `18`
   - **Publish Directory**: `build`

### 3. Environment Variables

- `NODE_VERSION`: `18`
- Auto-deploy enabled via `render.yaml`

## 🔗 Links

- **Render Dashboard**: [dashboard.render.com](https://dashboard.render.com)
- **Build Logs**: Available in Render dashboard
- **Custom Domain**: Configure in Render settings (optional)

## ⚡ Auto-Deploy Configuration

The included `render.yaml` enables automatic deployment from GitHub pushes.
