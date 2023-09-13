/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
    },
    extend: {
      colors: {
        pages: "#232931",
        navbar: "#232931",
        name: "#DDE6ED",
        role: "#EEEEEE",
        footer: "#222831",
        links:'#ff7c00',
        'bermuda': "#78dcca",
        white:'#EEEEEE',
        dark: "#F0F0F0",
        blue:"#4F709C",
        debug:'#ff7c00',
        highlights:'#F0F0F0',
        theme:'#4ECCA3'
        // "#F0F0F0",
      },
    },
  },
  plugins: [],
};
