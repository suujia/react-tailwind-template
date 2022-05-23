const colors = require("tailwindcss/colors");
const forms = require("@tailwindcss/forms");

module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
      },
    },
  },
  plugins: [forms],
};
