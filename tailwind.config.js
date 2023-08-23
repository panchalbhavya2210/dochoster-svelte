export default {
  plugins: [],
  theme: {
    extend: {},
  },
  purge: ["./index.html", "./src/**/*.{svelte,js,ts}"], //for unused css
  variants: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://raw.githubusercontent.com/panchalbhavya2210/dochoster-svelte/main/static/Desktop-Wallpaper.jpg')",
      },
    },
  },
  darkmode: false, // or 'media' or 'class'
};
