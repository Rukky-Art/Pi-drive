/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        tablet: '690px',
        laptop: '1024px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#359ABA',
        'second-col': '#fffff',
        textCol: '#8E979F',
      },
          backgroundImage: {
        'circle-pattern': "url('/public/circle6.jpg')",
      },
    },
  },
  plugins: [],
};
