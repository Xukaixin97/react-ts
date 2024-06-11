/** @type {import('tailwindcss').Config} */
// https://tailwindcss.com/docs/configuration#core-plugins

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'number-box': 'url(\'/src/assets/dashboard/number_bg.svg\')',
      },
    },
  },
  corePlugins: {
    // https://tailwindcss.com/docs/preflight
    preflight: false,
  },
  plugins: [],
}
