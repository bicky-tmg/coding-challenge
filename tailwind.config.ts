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
      "2xl": "2.5rem", // 40px
      "3xl": "3rem", // 48px
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        50: "#FFE58C",
        100: "#FFD540",
      },
      secondary: "#F15A29",
      tertiary: "#EBECF5",
      shadow: "#3C479D",
    },
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
});
export default config;
