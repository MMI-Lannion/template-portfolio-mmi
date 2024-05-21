/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
   "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xs : '0.6rem'
    }
  },
  plugins: [
    require("@tailwindcss/typography"), 
    require("daisyui")
  ],
}

