/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: '#4D917A',
        yellowButton: '#F0F1A1',
        lightGreen: '#94BDAF',
        notWhite: '#CADED7',
        lightWhite: '#fafafa',
        darkGray: '#58585A',
        likeYellow: '#FFDC26',
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        poly: ["var(--font-poly)"],
      },
    },
  },
  plugins: [],
};