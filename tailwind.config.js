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
        primary: "#E1A9FF",
        background: "#22223B",
        secondary: '#111928'
      },
      backgroundImage : {
        'hero-pattern' : "url('/bg-home.png')"
      }
    },
  },
  plugins: [],
};
