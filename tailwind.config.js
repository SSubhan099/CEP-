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
        primary: "#005e9a",
        "primary-container": "#0077c2",
        secondary: "#1b6d24",
        tertiary: "#006471",
        "on-surface": "#191c1d",
        "on-surface-variant": "#404751",
        "surface-container-low": "#f3f4f5",
        "surface-container-high": "#e7e8e9",
        "surface-container-lowest": "#ffffff",
        "outline-variant": "#c0c7d3",
        error: "#ba1a1a",
      },
    },
  },
  plugins: [],
};
