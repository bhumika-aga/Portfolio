# Deployment Guide - Render.com

## 🎯 Project Goal

Deploy Bhumika Agarwal's portfolio website to Render.com for professional showcase and easy access by potential employers and collaborators.

## 🛠️ Tech Stack

- **React 19.1.1** - Frontend framework
- **Node.js 18** - Runtime environment
- **Serve** - Static file server
- **Render.com** - Cloud deployment platform

## 🌐 Live Demo

**Portfolio URL**: `https://your-service-name.onrender.com` (after deployment)

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

### 3. Environment Variables

- `NODE_VERSION`: `18`

## 🔗 Links

- **Render Dashboard**: [dashboard.render.com](https://dashboard.render.com)
- **Build Logs**: Available in Render dashboard
- **Custom Domain**: Configure in Render settings (optional)

## ⚡ Auto-Deploy Configuration

The included `render.yaml` enables automatic deployment from GitHub pushes.
