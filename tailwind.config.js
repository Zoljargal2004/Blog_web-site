/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      transitionProperty: {
        'max-height': 'max-height'
      },
      boxShadow:{
        extra: '0px 12px 24px -6px #181A2A1F'
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
};
