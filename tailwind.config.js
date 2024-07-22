/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      firstColor: "#474747",
      secondColor: "#AD343E",
      cW: "#fff",
      buttonClr: "#71717a",
      buttonClrHvr: "#a3a3a3",
    },
    // You can add other theme configurations here if needed
  },
  plugins: [],
};
