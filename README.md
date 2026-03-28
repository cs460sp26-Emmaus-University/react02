# react02
grok-generated react project

## 🚀 Easy Deployment to Render (No Terminal Needed)

Your Vite app is a frontend website. The easiest way to make it live online is with **one click**:

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/YOUR-ORG/YOUR-TEMPLATE-REPO-NAME)

### How to Deploy (Super Simple Steps):

1. Click the **Deploy to Render** button above.
2. Log in with your GitHub account (the same one you use for GitHub Classroom).
3. Click **Approve** or **Create** — Render will automatically:
   - Install dependencies
   - Build your Vite app (`npm run build`)
   - Deploy it as a live website
4. Wait 1–2 minutes. When it's done, you'll see a link like `https://your-app-name.onrender.com`

**That's it!** Your website is now live on the internet.

Every time you push new code to GitHub, Render will automatically rebuild and update your site.

> **Note for Free Tier:** The site may take 10–30 seconds to "wake up" if no one has visited it recently. Just refresh the page.

### Alternative (Manual Way – Still Easy)

If the button doesn't work for any reason:
1. Go to [https://dashboard.render.com](https://dashboard.render.com)
2. Click **New** → **Static Site**
3. Connect your GitHub Classroom repository
4. Use these settings (Render usually fills them automatically):
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
5. Click **Create Static Site**

### Check Your `package.json`

Make sure your `package.json` has this standard Vite script (it should already be there):

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
