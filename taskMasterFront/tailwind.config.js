/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mongo: "#00ED64",
        ts: "#3178C6",
        gcpBlue: "#4285F4",
        gcpRed: "#EA4335",
        gcpYellow: "#FBBC04",
        gcpGreen: "#34A853",
        darkBg: "#050505", // Un negro más profundo para que resalten los colores
      },
    },
  },
  plugins: [],
};
