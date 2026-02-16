/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'monospace'],
      },
      colors: {
        primary: '#ffffff',
        text: '#1a1a1a',
        accent: '#2ecc71',
        muted: '#666666',
      },
    },
  },
  plugins: [],
}
