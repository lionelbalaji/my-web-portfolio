/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
      colors: {
        bg: {
          main: "#0C0E12",
          card: "#1F2126",
        },
        textc: {
          primary: "#FFFFFF",
          secondary: "#8A8F98",
        },
        accent: {
          blue: "#5FCBE2",
          blueDark: "#3F9BAF",
        },
      },

      backgroundImage: {
        buttonbg: "linear-gradient(to right, #5FCBE2, #3F9BAF)",
      },

      boxShadow: {
        buttonshadow: "0 4px 20px rgba(95, 203, 226, 0.35)",
      },

      dropShadow: {
        neon: "0 0 12px rgba(95, 203, 226, 0.7)",
        react: "0 0 12px rgba(95, 203, 226, 0.8)",
        firebase: "0 0 12px rgba(250, 204, 21, 0.8)",
        js: "0 0 12px rgba(250, 204, 21, 0.8)",
        html: "0 0 12px rgba(249, 115, 22, 0.8)",
        css: "0 0 12px rgba(59, 130, 246, 0.8)",
        node: "0 0 12px rgba(34, 197, 94, 0.8)",
      },
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInTop: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInBottom: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideInLeft: "slideInLeft 0.8s ease-out forwards",
        slideInRight: "slideInRight 0.8s ease-out forwards",
        slideInTop: "slideInTop 0.8s ease-out forwards",
        slideInBottom: "slideInBottom 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
