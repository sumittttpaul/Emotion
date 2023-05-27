module.exports = {
  content: [
    './src/pages/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  media: true,
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0076E4',
        'primary-blue-rgb': '#0074e4',
        'color-dark': '#FFFFFF3B',
        'primary-theme': '#0f0f0f',
        'secondary-theme': '#202020',
        // Dark Colors (Note: also change in main.css)
        'dark-red': '#4B0000', // rgba(75, 0, 0, 1)
        'dark-pink': '#45004B', // rgba(69, 0, 75, 1)
        'dark-blue': '#003C4B', // rgba(0, 60, 75, 1)
        'dark-yellow': '#464B00', // rgba(70, 75, 0, 1)
        'dark-green': '#004B0C', // rgba(0, 75, 12, 1)
        'dark-purple': '#320161', // rgba(50, 1, 97, 1)
        'dark-orange': '#613B01', // rgba(97, 59, 1, 1)
        // Super Dark Colors (Note: also change in main.css)
        'super-dark-red': '#300000', // rgba(48, 0, 0, 1)
        'super-dark-pink': '#26002B', // rgba(38, 0, 43, 1)
        'super-dark-blue': '#002933', // rgba(0, 41, 51, 1)
        'super-dark-yellow': '#252900', // rgba(37, 41, 0, 1)
        'super-dark-green': '#003008', // rgba(0, 48, 8, 1)
        'super-dark-purple': '#1F003B', // rgba(31, 0, 59, 1)
        'super-dark-orange': '#362100', // rgba(54, 33, 0, 1)
      },
      screens: {
        'xs-200': '200px',
        'xs-300': '300px',
        'xs-330': '330px',
        'xs-350': '350px',
        'xs-400': '400px',
        'xs-435': '435px',
        'xs-470': '470px',
        'sm-500': '500px',
        'small-screen': '555px',
        'sm-600': '600px',
        'sm-670': '670px',
        'sm-700': '700px',
        'sm-750': '750px',
        'sm-800': '800px',
        'small-medium-screen': '830px',
        'md-900': '900px',
        'md-1000': '1000px',
        'medium-screen': '1040px',
        'lg-1100': '1100px',
        'lg-1140': '1140px',
        'lg-1200': '1200px',
        'medium-large-screen': '1300px',
        'xl-1400': '1400px',
        'large-screen': '1520px',
        'xl-1765': '1765px',
        'xl-2000':'2000px',
      },
    },
  },
  plugins: ['postcss-import', 'tailwindcss', 'autoprefixer'],
};
