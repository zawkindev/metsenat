/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary: {
          300: "var(--primary-300)",
          200: "var(--primary-200)",
        },
        secondary: {
          400: "var(--secondary-400)",
          300: "var(--secondary-300)",
          200: "var(--secondary-200)",
          100: "var(--secondary-100)",
        },
        success: {
          300: "var(--success-300)",
        },
        danger: {
          400: "var(--danger-400)",
          300: "var(--danger-300)",
          200: "var(--danger-200)",
        },
      },
    },
  },
  plugins: [],
};
