/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    fontfamily: {
      jost: ["Jost", "sans-serif"]
    },
    // colors:{

    //   first: "#15bc12",

    //   primary: "#171717"
    //   ,

    //   primarys: "#f622ef",
    //   secondary: "#f6e6cf"

    // }
  },
  plugins: [],
}