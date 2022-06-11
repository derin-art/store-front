module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily : {
        PlayFair: ["PlayFair", "sans-serif"],
        QuickSand : ["QuickSand", "sans"],
        Prompt: ["Prompt", "sans"],
        Paytone: ["Paytone", "sans"]
      },
      animation: {
        slide: "slide 6s infinite",
        slideMedium: "slideMedium 6s infinite",
        slideSmall: "slideSmall 6s infinite",
        fadeIn: "fadeIn 2s",
        fadeOut: "fadeOut 2s"
      }
   
    },
  },
  plugins: [ require('tailwind-scrollbar-hide')],
}
