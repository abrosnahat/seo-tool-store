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
      dropShadow: {
        '3xl': '0px 10px 25px rgba(70, 70, 70, 0.5)',
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
