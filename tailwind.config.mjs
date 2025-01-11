/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "custom-gif" : "url('/stars-starry-night.gif')",
      },
      colors: {
        background: "#f7f2ff", //Page background color: light purple
        "sidebar-bg": "#30109c", //Navigation bar color: purple
        "title-color": "#4e31b0"//Title color for every page
      },
    },
  },
  plugins: [],
};
