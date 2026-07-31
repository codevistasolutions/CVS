// Tailwind CSS v3 Configuration - Tailkit
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          background: "#FFFFFF",
          surface: "#F8FAFC",
          card: "#FFFFFF",
        
          text: "#111827",
          muted: "#64748B",
        
          orange: "#FF8C42",
          orangeLight: "#FFB26B",
        
          border: "#E5E7EB",
        },
      
        'customOrange-200': '#FDEDE9',
        'customOrange-300': '#FBDBD3',
        'customOrange-400': '#F7B6A6',
        'customOrange-500': '#EE6C4D',
        'customOrange-600': '#D46349',
        'customOrange-700': '#B95944',
        'customOrange-800': '#83453A',
      },
      maxWidth: {
        "8xl": "90rem",
        "9xl": "105rem",
        "10xl": "120rem",
      },
      zIndex: {
        1: 1,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
      },

      boxShadow: {
        glow: "0 0 60px rgba(255,140,66,.30)",
        card: "0 15px 45px rgba(0,0,0,.35)",
      },
      
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
      
        "brand-gradient":
          "linear-gradient(135deg,#FF8C42 0%,#FFB26B 100%)",
      },
      
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        fadeUp: "fadeUp .8s ease forwards",
      },
      
      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-14px)",
          },
        },
      
        glow: {
          "0%,100%": {
            opacity: ".45",
          },
          "50%": {
            opacity: "1",
          },
        },
      
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
      },

      typography: {
        DEFAULT: {
          css: {
            a: {
              textDecoration: "none",
              "&:hover": {
                opacity: ".75",
              },
            },
            img: {
              borderRadius: defaultTheme.borderRadius.lg,
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    plugin(function ({ addUtilities }) {
      const utilBgPatterns = {
        ".pattern-dots-sm": {
          "background-image":
            "radial-gradient(currentColor 0.5px, transparent 0.5px)",
          "background-size": "calc(10 * 0.5px) calc(10 * 0.5px)",
        },
        ".pattern-dots-md": {
          "background-image":
            "radial-gradient(currentColor 1px, transparent 1px)",
          "background-size": "calc(10 * 1px) calc(10 * 1px)",
        },
        ".pattern-dots-lg": {
          "background-image":
            "radial-gradient(currentColor 1.5px, transparent 1.5px)",
          "background-size": "calc(10 * 1.5px) calc(10 * 1.5px)",
        },
        ".pattern-dots-xl": {
          "background-image":
            "radial-gradient(currentColor 2px, transparent 2px)",
          "background-size": "calc(10 * 2px) calc(10 * 2px)",
        },
      };

      addUtilities(utilBgPatterns);
    }),
    plugin(function ({ addUtilities }) {
      const utilFormSwitch = {
        ".form-switch": {
          border: "transparent",
          "background-color": colors.gray[300],
          "background-image":
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")",
          "background-position": "left center",
          "background-repeat": "no-repeat",
          "background-size": "contain !important",
          "vertical-align": "top",
          "&:checked": {
            border: "transparent",
            "background-color": "currentColor",
            "background-image":
              "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")",
            "background-position": "right center",
          },
          "&:disabled, &:disabled + label": {
            opacity: ".5",
            cursor: "not-allowed",
          },
        },
      };

      addUtilities(utilFormSwitch);
    }),
  ],
};