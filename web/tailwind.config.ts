import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: {
          100: "#f2f2f2",
          90: "#a3a3a3",
          80: "#717171",
          50: "#5F5F5F",
          40: "#2d2d2d",
          30: "#e6e1e5",
          20: "#cac4d0",
        },
        red: {
          100: "#e8908c",
          120: "#f85757",
        },
        green: {
          20: "#59c08d",
          100: "#1f9701",
        },
      },
    },
  },
  plugins: [],
};
export default config;
