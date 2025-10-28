import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vintage: {
          cream: '#F5E6D3',
          brown: '#8B4513',
          darkBrown: '#5C2E1F',
          orange: '#FF8C42',
          yellow: '#FFD166',
          teal: '#06AED5',
          purple: '#7B2CBF',
          pink: '#FF006E',
        },
      },
      fontFamily: {
        retro: ['Press Start 2P', 'cursive'],
        vintage: ['Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
