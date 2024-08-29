/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{'1023-1200':{'min':'1024px','max':'1200px'} }
    },
  },
  plugins: [],
}

