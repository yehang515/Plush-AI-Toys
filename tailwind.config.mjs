/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#11201d',
        moss: '#21463d',
        mist: '#eff4ed',
        oat: '#f8f4ec',
        coral: '#e8734d',
      },
      fontFamily: {
        display: ['DM Sans', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
