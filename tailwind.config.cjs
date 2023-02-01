/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#111111"
        },
        secondary: {
          100: "#141414"
        },
        tertiary: {
          100: "#5C14EB"
        },
        quaternary: {
          100: "#CECECE"
        }
      },
      fontFamily: {
        sf: ['SF Pro Display', 'sans-serif'],
      },
      //create a animation of floating up and down
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translatey(0px)' },
          '50%': { transform: 'translatey(-20px)' },
        }
      },
      //apply the animation to the class
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
