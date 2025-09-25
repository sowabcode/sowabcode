/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        medium: "0 8px 30px -8px rgba(49,130,206,0.2)", // ou utilise la même valeur HSL
      },
    },
  },
  plugins: ["@xpd/tailwind-3dtransforms"],
};
