import type { Config } from "tailwindcss";
const { withTV } = require("tailwind-variants/transformer");
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = withTV({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      base: "1rem", // 16px
      md: "1.125rem", // 18px
      lg: "1.25rem", // 20px
      xl: "1.5rem", // 24px
      "2xl": "2rem", // 32px
      "3xl": "2.5rem", // 40px
      "4xl": "3rem", // 48px
    },
    extend: {
      colors: {
        primary: {
          50: "#FFE58C",
          100: "#FFD540",
        },
        secondary: "#F15A29",
        tertiary: "#EBECF5",
        shadow: "#3C479D",
        gray: "#CCCCCC",
        lightGray: "#f7f7f7f7",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
      keyframes: {
        shine: {
          "100%": {
            left: "150%",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        shine: "shine 1s ease-in-out",
        fadeIn: "fadeIn 2.3s ease",
      },
    },
  },
  plugins: [],
});
export default config;
