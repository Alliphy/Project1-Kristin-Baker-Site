/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gap: {
        11: "2.75rem",
      },
    },
  },
  plugins: [],
};
