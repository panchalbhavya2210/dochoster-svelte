/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://raw.githubusercontent.com/panchalbhavya2210/dochoster-svelte/main/static/Desktop-Wallpaper.jpg')",
      },
    },
  },

  plugins: [],
};

module.exports = config;
