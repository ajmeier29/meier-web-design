/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#eaf0f1",
          secondary: "teal",
        },
      },
    ],
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        //'hero-image': "url('/images/beachSunset.jpg')",
        // 'hero-image': "url('/images/blue-breakthrough-over-mountains.webp')",
        // 'hero-image-mobile': "url('/images/blue-breakthrough-over-mountains-mobile.webp')",
        'hero-gradient':
          "linear-gradient(100deg, rgba(246,230,203,1) 0%, rgba(160,147,125,1) 31%, rgba(160,147,125,1) 76%, rgba(246,230,203,1) 100%)",
        'hero-gradient-background':
          "linear-gradient(100deg, rgba(216,222,255,1) 0%, rgba(242,244,255,1) 27%, rgba(242,244,255,1) 76%, rgba(216,222,255,1) 100%)",
      },
      colors: {
        "primary-background": "#eaf0f1",
        "option-hover-bg": "#3f8790",
        "option-bg": "#c0c7c8",
        "primary-hover": "pink-600",
      },
      fontSize: {
        "navbar-font-xl": "20px"
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}

