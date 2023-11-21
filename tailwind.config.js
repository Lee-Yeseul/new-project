/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 300ms ease-out",
        "fade-out": "fade-out 300ms ease-out",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar-hide")],
};
