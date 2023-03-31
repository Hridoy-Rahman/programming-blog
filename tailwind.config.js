/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#d15776",
        
"secondary": "#7891e2",
        
"accent": "#8b71c6",
        
"neutral": "#1A1E23",
        
"base-100": "#E5E3F2",
        
"info": "#2077E9",
        
"success": "#20977E",
        
"warning": "#CB9F10",
        
"error": "#F76D55",
        },
      },
    ],
  },
  
  plugins: [require("daisyui")],
}

