# Portfolio Site - Vercel Deployment Guide

## 📦 What's Included

- Next.js portfolio site with:
  - Home page with project list
  - About page
  - 4 case study pages (HTML):
    - Record List Template (CRUD patterns)
    - Notification Framework
    - Wayfinding (IA/Navigation)
    - Loading States
  - Resume PDF

## 🚀 Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Click "Import Git Repository" or upload the zip file
4. Vercel will auto-detect Next.js
5. Click "Deploy"
6. Done! ✨

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI (if you haven't)
npm i -g vercel

# Unzip the portfolio-site-vercel.zip
unzip portfolio-site-vercel.zip

# Navigate to the folder
cd portfolio-site

# Deploy
vercel

# Follow the prompts
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name? portfolio (or whatever you want)
# - Directory? ./
# - Override settings? N

# Production deployment
vercel --prod
```

### Option 3: Connect to GitHub

1. Create a new GitHub repo
2. Push the portfolio-site folder to GitHub
3. Go to Vercel → "Import Project" → Connect your GitHub repo
4. Vercel auto-deploys on every push

## 📁 File Structure

```
portfolio-site/
├── app/
│   ├── page.tsx          # Home page (project list)
│   ├── about/
│   │   └── page.tsx      # About page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── public/
│   ├── Angie_Yoo_Resume.pdf
│   ├── images/
│   │   ├── table-before.png
│   │   └── table-after.png
│   ├── work-record-list.html      # Record List case study
│   ├── work-notification.html     # Notification Framework
│   ├── work-wayfinding.html       # Wayfinding
│   └── work-loading.html          # Loading States
├── package.json
├── next.config.js
└── tailwind.config.js
```

## 🎨 What Works

✅ Home page with animated project list
✅ About page with experience & education
✅ All 4 case study pages (HTML)
✅ Resume download
✅ Responsive design
✅ Custom fonts (Bodoni Moda + IBM Plex Mono)
✅ Green accent color (#00a86b)

## 🔧 Local Development (Optional)

If you want to run locally:

```bash
cd portfolio-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Update Projects
Edit `app/page.tsx` - the `projects` array (lines 26-55)

### Update About Page
Edit `app/about/page.tsx`

### Update Case Studies
Edit HTML files in `public/` folder:
- `work-record-list.html`
- `work-notification.html`
- `work-wayfinding.html`
- `work-loading.html`

### Update Resume
Replace `public/Angie_Yoo_Resume.pdf`

### Update Colors
Edit `tailwind.config.js`:
```js
colors: {
  accent: '#00a86b',  // Your accent color
  // ...
}
```

## 🐛 Troubleshooting

**Build fails on Vercel?**
- Check that package.json has correct dependencies
- Make sure Next.js version is 14+

**Images not showing?**
- Ensure images are in `public/images/` folder
- Check file names match exactly (case-sensitive)

**Case studies not loading?**
- Verify HTML files are in `public/` folder
- Check links in `app/page.tsx` point to correct filenames

## 📧 Support

If you run into issues, check:
1. Vercel build logs
2. Browser console for errors
3. Ensure all files from zip are uploaded

## 🎉 You're Done!

Your portfolio should be live at:
`https://your-project-name.vercel.app`

You can add a custom domain in Vercel dashboard → Settings → Domains
