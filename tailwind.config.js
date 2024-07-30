import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Proza Libre"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
