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
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: "var(--yellow-main)",
        plainYellow: "var(--yellow-200)",
        lightYellow: "var(--yellow-100)",
        orange: "#ff9000",
      },
      keyframes: {
        slideDown: {
          from: { maxHeight: "0px" },
          to: { maxHeight: "500px" },
        },
        slideUp: {
          from: { maxHeight: "500px" },
          to: { maxHeight: "0px" },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s ease-in-out",
        slideUp: "slideUp 0.3s ease-in-out",
      },
    },
    fontFamily: {
      pre: ["Pretendard"],
    },
  },
  plugins: [],
};
export default config;
