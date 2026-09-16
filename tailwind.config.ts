import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          DEFAULT: "#2E7D5B",
          light: "#EAF5EE",
          dark: "#1F4D3A",
        },
        beige: "#F3FAF4",
        cream: "#FAF8F5",
        terracotta: {
          DEFAULT: "#C86F4A",
          dark: "#B15E3B",
        },
        ink: "#333333",
        muted: "#6B6B6B",
      },
      fontFamily: {
        serif: [
          "'Playfair Display'",
          "Georgia",
          "'Times New Roman'",
          "serif",
        ],
        sans: [
          "'Segoe UI'",
          "system-ui",
          "-apple-system",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        xl2: "1.75rem",
      },
      maxWidth: {
        content: "1240px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
