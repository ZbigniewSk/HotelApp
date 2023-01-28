/** @type {import('tailwindcss').Config} */
module.exports = {
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
        "color-text": "color-text 2s linear infinite",
        "font-size": "font-size 1s ease-in-out infinite",
      },

      colors: {
        chujowy: "#f5c542",
      },
      backgroundImage: {
        "color-text-anim":
          "linear-gradient(90deg, #4f46e5, #65a30d, #e11d48, #4f46e5, #65a30d, #e11d48, #4f46e5)",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
