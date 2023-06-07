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
        "gradient-radial":
          "radial-gradient(circle, rgba(99,80,80,1) 26%, rgba(69,116,252,0.8324579831932774) 71%)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),  
  ],
};
