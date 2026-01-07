/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    colors: {
    'martens-yellow': '#FFC916',
	  'martens-black': '#232323',
	  'martens-beige': '#EFEFD0',
    'martens-haribo': '#FF2352',
    }
  }
},
  plugins: [],
}