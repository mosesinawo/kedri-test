/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#A324F2',
        secondary: '#F1C40F',
        backgroundDark: '#15171E',
        gray_light:"#B4B4B4",
        gray_dark:"#2E2F36",
        gray:"#848484",
        pink: '#FF6EB4',
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

