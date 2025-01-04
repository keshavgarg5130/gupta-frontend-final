import type { Config } from "tailwindcss";

export default {
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
        themeBlue: "#0c77b6"
      },
    },
  },
  plugins: [
    //@ts-ignore
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hidden': {
          '-ms-overflow-style': 'none', /* Internet Explorer 10+ */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.scrollbar-hidden::-webkit-scrollbar': {
          display: 'none', /* Safari and Chrome */
        },
      });
    }, require('tailwind-scrollbar'),
  ],
} satisfies Config;
