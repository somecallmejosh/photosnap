module.exports = {
  mode: "jit",
  purge: ["/pages/**/*.vue", "/components/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-grey": "#dfdfdf",
        "grad-start": "#FFC593",
        "grad-middle": "#BC7198",
        "grad-end": "#5A77FF",
      },
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
        sans: ["DM Sans", "sans-serif"],
        serif: ["DM Serif Display", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
