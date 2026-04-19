/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#f0ece3',
        accent: '#c8a96e',
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        mono: ['DM Mono', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

