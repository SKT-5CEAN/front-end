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
        aqua: "var(--aqua)",
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
  safelist: [
    'bg-lime-100',
    'bg-purple-200',
    'bg-rose-200',
    'bg-cyan-200',
    'bg-gray-200', // 기본 값으로 설정한 색상도 포함
  ],
  plugins: [],
};
export default config;
