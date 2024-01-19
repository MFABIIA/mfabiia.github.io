/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,njk}"],
  theme: {

    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },


    extend: {
      colors: {
        'cpl-one': '#2C3531',
        'cpl-two': '#116466',
        'cpl-three': '#D9B08C',
        'cpl-four': '#FFCB9A',
        'cpl-five': '#D1E8E2'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

