# Deployment Guide

This guide covers deploying your portfolio website to GitHub and Vercel.

## 📦 Prerequisites

- Git installed on your local machine
- GitHub account created
- Vercel account (sign up at [vercel.com](https://vercel.com))

## 🐙 GitHub Deployment

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click the "+" icon in the top-right corner
3. Select "New repository"
4. Name your repository (e.g., `portfolio-website`)
5. Choose "Public" or "Private"
6. **Do NOT** initialize with README, .gitignore, or license
7. Click "Create repository"

### Step 2: Push Code to GitHub

Open terminal in your project directory and run:

```bash
# Initialize git repository (if not already initialized)
git init

# Add all files to git
git add .

# Commit the files
git commit -m "Initial commit: HCI portfolio website"

# Rename branch to main
git branch -M main

# Add remote repository (replace with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# Push to GitHub
git push -u origin main
```

### Step 3: Verify Upload

1. Refresh your GitHub repository page
2. Verify all files are uploaded
3. Check that `vercel.json` and `package.json` are present

## 🚀 Vercel Deployment

### Option 1: Vercel Web UI (Recommended for First-Time Users)

#### Step 1: Connect Vercel to GitHub

1. Go to [vercel.com](https://vercel.com) and log in
2. Click "Add New..." → "Project"
3. Click "Import Git Repository"
4. Authorize Vercel to access your GitHub account
5. Select your portfolio repository

#### Step 2: Configure Project

Vercel will automatically detect the framework (Vite). Verify these settings:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

Leave these as detected or confirm they match.

#### Step 3: Deploy

1. Click "Deploy"
2. Wait 1-2 minutes for build to complete
3. Vercel will provide a live URL (e.g., `your-project.vercel.app`)
4. Click the URL to view your live site!

#### Step 4: Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for DNS propagation (5-30 minutes)

### Option 2: Vercel CLI

#### Step 1: Install Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Or with pnpm
pnpm add -g vercel

# Or with yarn
yarn global add vercel
```

#### Step 2: Login to Vercel

```bash
vercel login
```

Follow the prompts to authenticate (email or GitHub).

#### Step 3: Deploy

```bash
# Deploy to preview environment
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - What's your project name? (press Enter for default)
# - In which directory is your code located? ./
```

#### Step 4: Deploy to Production

```bash
# Deploy to production
vercel --prod
```

Your site is now live! Vercel will provide the production URL.

## 🔄 Continuous Deployment

Once connected to GitHub, Vercel automatically:

- Deploys every push to the `main` branch
- Creates preview deployments for pull requests
- Provides deployment status in GitHub

### Updating Your Site

```bash
# Make changes to your code
git add .
git commit -m "Update project descriptions"
git push

# Vercel automatically deploys the changes
```

## ⚙️ Build Settings Reference

### Vercel Configuration

Your `vercel.json` configures:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Environment Variables (If Needed)

If you add API integrations later:

1. Go to Vercel project → "Settings" → "Environment Variables"
2. Add variables (e.g., `API_KEY`)
3. Redeploy for changes to take effect

## 🔒 Security Headers

The `vercel.json` includes security headers:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`

These protect against common web vulnerabilities.

## 📊 Performance Optimization

Vercel automatically provides:

- **CDN**: Global content delivery network
- **Compression**: Gzip and Brotli
- **Image Optimization**: Automatic image processing
- **HTTPS**: Free SSL certificates
- **HTTP/2**: Modern protocol support

## 🐛 Troubleshooting

### Build Fails

**Issue**: Build fails with "Module not found"

**Solution**: 
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
git add package-lock.json
git commit -m "Update dependencies"
git push
```

### 404 Errors on Page Refresh

**Issue**: Direct navigation to routes returns 404

**Solution**: The `vercel.json` rewrites handle this. Verify the file exists in your repo.

### GitHub Push Rejected

**Issue**: `git push` rejected

**Solution**:
```bash
# Pull latest changes first
git pull origin main --rebase
git push
```

### Vercel CLI Not Found

**Issue**: `command not found: vercel`

**Solution**:
```bash
# Reinstall globally
npm install -g vercel

# Or use npx (no install needed)
npx vercel
```

## 📱 Testing Production Deployment

### Checklist

- [ ] Visit production URL
- [ ] Test all navigation links
- [ ] Verify mobile responsive design
- [ ] Test high-contrast mode toggle
- [ ] Check rule of thirds grid overlay
- [ ] Verify HCI demonstrations work
- [ ] Test contact form (mailto link)
- [ ] Confirm all images load
- [ ] Test keyboard navigation
- [ ] Check page load speed (use PageSpeed Insights)

## 🔗 Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
- [Custom Domains Guide](https://vercel.com/docs/concepts/projects/domains)
- [GitHub Pages Alternative](https://pages.github.com/)

## 🎉 Success!

Your HCI portfolio is now live and accessible worldwide! Share your URL:

```
https://your-project.vercel.app
```

For custom domain:
```
https://yourdomain.com
```

---

**Need Help?**

- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Community Forum: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
