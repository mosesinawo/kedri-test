/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#F15C44',
        secondary: '#F1C40F',
        gray_light:"#B4B4B4",
        gray_dark:"#2E2F36",
        gray:"#828282",
        pink: '#FF6EB4',
        light_blue: '#F4F8FF',
        red: '#EB5757',
        green: '#219653',
        teal: '#20c997',
        accent: '#FFC107',
        success: '#28A745',
        warning: '#FFC107',
        danger: '#DC3545',
        light:'#ebeaeafc'
      },
    },
  },
  plugins: [],
}

