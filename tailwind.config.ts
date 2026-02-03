import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5B7FFF",
          hover: "#4A6EEE",
          light: "#E8EDFF",
        },
        secondary: {
          DEFAULT: "#FF6B9D",
          hover: "#EE5A8C",
          light: "#FFE8EF",
        },
        accent: {
          DEFAULT: "#C44AFF",
          hover: "#B339EE",
          light: "#F5E8FF",
        },
        background: "#ffffff",
        foreground: "#1A1A2E",
        muted: "#6B7280",
        border: "#E5E7EB",
        card: "#F8FAFC",
        surface: "#F1F5F9",
      },
      fontFamily: {
        sans: ["Inter", "Noto Sans JP", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "pulse-slow": "pulse 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #FF6B9D 0%, #C44AFF 50%, #5B7FFF 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #5B7FFF 0%, #C44AFF 100%)",
        "gradient-light":
          "linear-gradient(135deg, #FFF5F8 0%, #F5E8FF 50%, #E8EDFF 100%)",
        "gradient-dark":
          "linear-gradient(135deg, #1A1A2E 0%, #2D1B69 50%, #1A1A2E 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
