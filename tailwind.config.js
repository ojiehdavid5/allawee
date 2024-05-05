/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        title:['Syne',"sans-serif"],
        header:['Jersey' ,'sans serif']
      }
    },
  },
  plugins: [
    require('taos/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  purge: {
    content: {
      relative: true,
      transform: (content) => content.replace(/taos:/g, ''),
      files: ['./src/*.{html,js}'],
    },
  },
}