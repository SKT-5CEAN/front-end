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
        yellow: "var(--main-yellow)",
        plainYellow: "var(--plain-yellow)",
        lightYellow: "var(--light-yellow)",
        semiBoldYellow: "var(--semibold-yellow)",
        regularYellow: "var(--regular-yellow)",
        orange: "#ff9000",
        aqua: "var(--aqua)",
        plainPurple: "var(--plain-purple)",
        semiBoldPurple: "var(--semibold-purple)",
        regularPurple: "var(--regular-purple)",
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
  safelist: [
    "bg-teal-100",
    "text-teal-700",
    "text-teal-800",
    "bg-yellow-100",
    "text-yellow-700",
    "text-yellow-800",
    "bg-plainPurple",
    "text-semiBoldPurple",
    "text-regularPurple",
    "bg-rounded-teal",
    "bg-rounded-yellow",
    "bg-rounded-purple",
  ],
};
export default config;
