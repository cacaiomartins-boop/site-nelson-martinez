/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fundo: "#F5F6F7",
        papel: "#FFFFFF",
        tinta: "#1A2227",
        suave: "#55626A",
        linha: "#DDE2E5",
        marca: {
          DEFAULT: "#1F5A6E",
          escuro: "#164757",
          claro: "#E6EFF2",
        },
      },
      fontFamily: {
        sans: ['"Outfit Variable"', "system-ui", "sans-serif"],
      },
      borderRadius: { padrao: "14px" },
      boxShadow: {
        suave: "0 10px 30px -12px rgba(26, 34, 39, 0.18)",
      },
    },
  },
  plugins: [],
};
