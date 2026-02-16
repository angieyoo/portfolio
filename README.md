# Modern Portfolio Site

A stunning, interactive portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, distinctive design with gradient accents
- ✨ Smooth animations and interactive elements
- 📱 Fully responsive layout
- ⚡ Optimized for performance
- 🚀 Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

### Method 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project

### Method 2: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "Add New Project"

4. Import your repository

5. Vercel will auto-detect Next.js and configure settings

6. Click "Deploy"

Your site will be live in minutes!

## Customization

### Colors
Edit the color scheme in `tailwind.config.js` and `app/globals.css`

### Content
Update the following in `app/page.tsx`:
- Hero section title and description
- About section text
- Projects array with your actual projects
- Contact information and social links

### Fonts
Change fonts in `app/layout.tsx` - currently using Playfair Display and Manrope

## Project Structure

```
portfolio-site/
├── app/
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Main portfolio page
│   └── globals.css      # Global styles and animations
├── public/              # Static assets
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Dependencies
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **Google Fonts** - Playfair Display & Manrope

## License

Free to use for personal and commercial projects.
