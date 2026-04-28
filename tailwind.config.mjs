/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}"],
  theme: {
    extend: {
      colors: {
        goldenPrimary: "#E7C468",   
        goldenSecondary: "#D6B55C", 
        bluePrimary: "#1E40AF",
        blueDark: "#1A304E",
        blueText: "#002251",
        darkText: "#4B4B4B",
        lightText: "#E8E8E8",
        whiteBg: "#F5F5F5",
        blackBg: "#1A1A1A",
      },
      fontFamily: {
        "encode-sans": ['"Encode Sans SC"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
