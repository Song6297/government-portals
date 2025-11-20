# 🚀 Railway Deployment Guide

## ✅ Step 1: Prepare Project (COMPLETED!)

- ✅ `.gitignore` file exists and configured
- ✅ `package.json` has start script: `"start": "node server.js"`
- ✅ All dependencies listed
- ✅ Node.js version specified (>=18.0.0)

---

## 📋 Next Steps

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `government-portals` (or any name)
3. Make it **Public** or **Private**
4. Click **"Create repository"**

5. **Push your code:**
```bash
git init
git add .
git commit -m "Initial commit - Government Portal Directory"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/government-portals.git
git push -u origin main
```

---

### Step 3: Deploy on Railway

1. **Go to:** https://railway.app
2. Click **"Login"** → Sign in with **GitHub**
3. Click **"New Project"**
4. Select **"Deploy from GitHub repo"**
5. Choose your repository: `government-portals`
6. Railway auto-detects Node.js and deploys!

---

### Step 4: Add Environment Variable

1. In Railway dashboard, click your project
2. Click **"Variables"** tab
3. Click **"+ New Variable"**
4. Add:
   - **Key:** `GEMINI_API_KEY`
   - **Value:** `AIzaSyAedOchsqfdflYXAtOZQj7Bmp54wJDzEBM`
5. Click **"Add"**

---

### Step 5: Get Your URL

1. Go to **"Settings"** tab
2. Scroll to **"Networking"** section
3. Click **"Generate Domain"**
4. Copy your URL: `https://your-app.up.railway.app`

---

### Step 6: Update Backend URL

1. Open `chatbot-backend.js`
2. Update line 6:
```javascript
const BACKEND_URL = 'https://your-app.up.railway.app/api/chat';
```

3. **Commit and push:**
```bash
git add chatbot-backend.js
git commit -m "Update backend URL for production"
git push
```

Railway will auto-deploy the update!

---

### Step 7: Test Your Live Website

1. Wait 2-3 minutes for deployment
2. Open: `https://your-app.up.railway.app`
3. Test all pages:
   - ✅ Home page loads
   - ✅ About page works
   - ✅ Constitution page works
   - ✅ AI Assistant chatbot works
   - ✅ Portal cards display correctly

---

## 🎯 Quick Commands

**Initialize Git (if not done):**
```bash
git init
git add .
git commit -m "Initial commit"
```

**Push to GitHub:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/your-repo.git
git branch -M main
git push -u origin main
```

**Update after changes:**
```bash
git add .
git commit -m "Your update message"
git push
```

---

## 💰 Railway Free Tier

- **$5 credit per month** (FREE)
- **~500 hours** of runtime
- **Automatic deployments** from GitHub
- **Custom domains** supported
- **Environment variables** included

---

## 🔧 Troubleshooting

### Deployment Failed?
1. Check Railway logs: Click "Deployments" → "View Logs"
2. Verify `package.json` has `"start": "node server.js"`
3. Ensure all dependencies are installed

### AI Chatbot Not Working?
1. Verify `GEMINI_API_KEY` is set in Railway Variables
2. Check backend URL in `chatbot-backend.js`
3. Open browser console (F12) to see errors

### Port Issues?
Railway automatically assigns a PORT. Your `server.js` already handles this:
```javascript
const PORT = process.env.PORT || 3000;
```

---

## 📱 After Deployment

Your website will be live at:
```
https://your-app.up.railway.app
```

**Share it with the world!** 🎉

---

## 🎨 Optional: Custom Domain

1. Buy domain from Namecheap/GoDaddy (~$10-15/year)
2. In Railway, go to Settings → Domains
3. Click "Custom Domain"
4. Add your domain: `www.yourwebsite.com`
5. Update DNS records as shown by Railway
6. Wait 24-48 hours for DNS propagation

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Railway project created
- [ ] Connected to GitHub repo
- [ ] Environment variable added (GEMINI_API_KEY)
- [ ] Domain generated
- [ ] Backend URL updated in chatbot-backend.js
- [ ] Changes pushed to GitHub
- [ ] Website tested and working
- [ ] AI chatbot tested and working

---

**Total Time:** 10-15 minutes
**Difficulty:** Easy
**Cost:** FREE

Good luck! 🚀
