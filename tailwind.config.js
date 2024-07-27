/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
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
      backgroundColor: {
        base: "#efe7dc",
        dark_base: "#202023",
        gray_custom: "#f5f0e9",
        dark_gray_custom: "#323234",
      },
      textColor: {
        base: "#202023",
        dark_base: "#efe7dc",
      },
    },
  },
  plugins: [],
};
