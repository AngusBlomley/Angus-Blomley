/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-bg-light': '#ffffff',
        'theme-bg-dark': '#212121',
        'theme-text-light': '#121212',
        'theme-text-dark': '#ffffff',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        'auto': 'auto',
      },
      fontFamily: {
        hiraKakuPro: ['HiraKakuPro', 'sans-serif'],
        hiraKakuStd: ['HiraKakuStd', 'sans-serif'],
        karla: ['Karla', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        unispace: ['Unispace', 'sans-serif'],
        ibmPlexMono: ['IBM Plex Mono', 'monospace']
      },
    },
  },
  keyframes: {
    'zoom-out': {
      '0%': { transform: 'scale(1.1)' },
      '100%': { transform: 'scale(1)' },
    },
  },
  animation: {
    'zoom-out': 'zoom-out 0.5s ease-out forwards',
  },
  darkMode: 'class',
  variants: {
    extend: {},
  },
  plugins: [],
};
