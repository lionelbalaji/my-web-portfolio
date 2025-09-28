/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // enable dark mode with 'class'
  theme: {
    extend: {
      colors: {
        // Palette 1: Dark + Neon Blue / Cyan
        darkBlue: {
          bg: "#0F172A",
          text: "#F8FAFC",
          muted: "#94A3B8",
          primary: "#38BDF8", // Cyan
          secondary: "#3B82F6", // Blue
        },
        // Palette 2: Dark + Purple / Pink Glow
        main: {
          bg: "#1A1A2E",
          text: "#F5F3FF",
          muted: "#A78BFA",
          primary: "#9333EA", // Purple
          secondary: "#EC4899", // Pink
        },
        // Palette 3: Dark + Green Hacker Style
        darkGreen: {
          bg: "#0A0F0D",
          text: "#E5E7EB",
          muted: "#6EE7B7",
          primary: "#10B981", // Emerald
          secondary: "#34D399", // Mint
        },
        // Palette 4: Dark + Orange / Amber
        darkOrange: {
          bg: "#111827",
          text: "#F9FAFB",
          muted: "#D1D5DB",
          primary: "#F97316", // Orange
          secondary: "#FBBF24", // Amber
        },
        // Palette 5: Dark + Teal / Aqua
        darkTeal: {
          bg: "#0F172A",
          text: "#F8FAFC",
          muted: "#94A3B8",
          primary: "#14B8A6", // Teal
          secondary: "#06B6D4", // Aqua
        },
      },
      backgroundImage: {
        buttonbg: "linear-gradient(to right, #9333EA, #EC4899)",
      },
      boxShadow: {
        buttonshadow: "0 4px 20px rgba(236, 72, 153, 0.4)",
      },
      dropShadow: {
        neon: "0 0 12px rgba(236, 72, 153, 0.7)",
        react: "0 0 12px rgba(56, 189, 248, 0.8)",
        firebase: "0 0 12px rgba(250, 204, 21, 0.8)",
        js: "0 0 12px rgba(250, 204, 21, 0.8)",
        html: "0 0 12px rgba(249, 115, 22, 0.8)",
        css: "0 0 12px rgba(59, 130, 246, 0.8)",
        node: "0 0 12px rgba(34, 197, 94, 0.8)",
      },
    },
  },
  plugins: [],
};
