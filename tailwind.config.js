import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          foreground: '#FFFFFF',
          DEFAULT: '#6c5fbc',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {},
        dark: {},
      },
    }),
  ],
};
