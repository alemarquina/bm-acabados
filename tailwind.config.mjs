/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}"],
  theme: {
    extend: {
      colors: {
        goldenPrimary: "#E7C468",
        goldenSecondary: "#D6B55C",
        bluePrimary: "#112566",
        blueDark: "#101F33",
        blueText: "#002251",
        darkText: "#4B4B4B",
        lightText: "#E8E8E8",
        whiteBg: "#F5F5F5",
        blackBg: "#27272A",
      },
      fontFamily: {
        "encode-sans": ['"Encode Sans SC"', 'sans-serif'],
      },
    },
  },
  plugins: [    
  ],
};
