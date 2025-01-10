/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightTeal: "#A2C2C6",
        steelBlue: "#5582A3",
        darkSlateBlue: "#2F4C60",
        coral: "#FF6F61",
        softCream: "#F7F7F7",
        mustardYellow: "#E1B12C",
        dustyRose: "#D8A3B0",
        charcoalGray: "#333333",
        lightGray: "#B0B0B0",
        vividPink: "#FF4CA1",
        pureWhite: "#FFFFFF",
        mutedBeige: "#BDB6B3",
      },
    },
  },
  plugins: [],
};
