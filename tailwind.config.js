/** @type {import('tailwindcss').Config} */
export default {
content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "var(--primaryColor)",
        secondaryColor: "var(--secondaryColor)",
        tertiaryColor: "#4b300fff",
        shadowColor: "var(--shadowColor)",
      },
      screens: {
        sbp: '982px',
        fsc: '1306px',
        ssm: '821px'
       
      }

    },
  },

  plugins: [],
}

