# Deployment Guide

## Netlify Deployment (Frontend Only)

This project can be deployed to Netlify as a static site, but with some limitations:

### What Works:
- ✅ Next.js frontend with React components
- ✅ Static pages and routing
- ✅ UI components and styling
- ✅ Responsive design

### What Doesn't Work (Limitations):
- ❌ Python ML scripts execution (requires server-side Python)
- ❌ API routes for running ML tasks
- ❌ Dynamic server-side functionality

### Deployment Steps:

1. **Connect to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Connect your GitHub repository
   - Select the repository: `JoramMwanyika/AI-Tools-and-Applications`

2. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: 18

3. **Deploy:**
   - Netlify will automatically build and deploy your site
   - The site will be available at a Netlify URL

### Alternative Deployment Options:

#### For Full Functionality (Python + Frontend):

1. **Vercel + Python Backend:**
   - Deploy Next.js frontend to Vercel
   - Deploy Python ML scripts to a separate service (Railway, Heroku, etc.)

2. **Railway:**
   - Supports both Node.js and Python
   - Can run the full application

3. **Heroku:**
   - Supports both Node.js and Python
   - Requires Procfile configuration

4. **DigitalOcean App Platform:**
   - Supports multiple services
   - Can run frontend and backend separately

### Local Development:

For full functionality, run locally:

```bash
# Install dependencies
npm install
pip install -r requirements.txt

# Start development server
npm run dev
```

The local version will have full functionality including ML script execution. 