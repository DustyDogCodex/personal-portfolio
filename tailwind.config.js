/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        gray: "#ededed",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)"
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow": 
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
        "gradient-rainblue": 
          "linear-gradient(90deg, #24cbff 14.53%, #fc59ff 69.36%, #FFBD0c 117.73%)" 
      }),
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        robotoMono: ["Roboto Mono", "monospace"],
        permanentMarker: ["Permanent Marker", "cursive"]
      }
    },
    screens: {
      xs: "480px",
      sm: "780px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px"
    }
  },
  plugins: [],
}

