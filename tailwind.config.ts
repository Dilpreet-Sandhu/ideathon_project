import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor : {
        "maroon" : "#d6274a",
        "buttonColor" : "#8a2929"
      },
      backgroundColor : {
        "maroon" : "#d6274a",
        "buttonColor" : "#8a2929",
        "darkBg" : "#d9d9d9"
      },
      textColor : {
        "maroon" : "#d6274a",
        "buttonColor" : "#8a2929"
      },
      
      backgroundImage : {
        bannerImage : "url('../assets/background.jpg')"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
