/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      color: {
        "sky-purple": "#7C69BB",
        "my-purple": "#B799FF",
        "my-blue": "ACBCFF",
        "my-light-green": "E6FFFD",
        "my-light-blue": "ACBCFF",
      },
    },
  },
  plugins: [],
};
