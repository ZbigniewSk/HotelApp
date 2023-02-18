/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      gridTemplateAreas: {
        table: [
          "header header header header header header",
          "number type price amenities checkin checkout",
          "footer footer footer footer footer footer",
        ],
      },
      gridTemplateColumns: {
        table: "10px auto auto auto auto auto auto 10px",
      },
      keyframes: {
        "color-text": {
          "0%": {
            backgroundPosition: "right",
          },
          "100%": {
            backgroundPosition: "left",
          },
        },
        "font-size": {
          "0%, 100%": {
            fontSize: "1.875rem",
          },
          "50%": {
            fontSize: "2.25rem",
          },
        },
      },
      animation: {
        "color-text": "color-text 3s linear infinite",
        "font-size": "font-size 1s ease-in-out infinite",
      },

      colors: {
        chujowy: "#f5c542",
      },
      backgroundImage: {
        "color-text-anim":
          "linear-gradient(90deg, #4f46e5, #65a30d, #e11d48, #4f46e5, #65a30d, #e11d48, #4f46e5)",
        "double-color-text-anim":
          "linear-gradient(90deg, #7c3aed, #f59e0b, #7c3aed, #f59e0b, #7c3aed)",
        "double-color":
          "linear-gradient(90deg, #7e22ce 15%, #fbbf24, #7e22ce 35% 65%, #fbbf24, #7e22ce 85%)",
        "double-color-2":
          "linear-gradient(90deg, #9f1239 15%, #2dd4bf, #9f1239 35% 65%, #2dd4bf, #9f1239 85%)",
      },
    },
  },
  plugins: [
    require("@savvywombat/tailwindcss-grid-areas"),
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("@tailwindcss/typography"),
  ],
};
