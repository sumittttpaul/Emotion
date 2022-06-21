module.exports = {
  mode: 'jit',
  content: [
    './src/pages/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  media: false,
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0076E4',
        'primary-blue-rgb': 'rgb(0,116,228)',
        'color-dark': 'rgba(255, 255, 255, 0.23)',
      },
      screens: {
        'xs-300': '300px',
        'xs-330': '330px',
        'xs-350': '350px',
        'xs-400': '400px',
        'xs-435': '435px',
        'sm-500': '500px',
        'sm-750': '750px',
        'md-900': '900px',
        'lg-1100': '1100px',
        'xl-1300': '1300px',
      },
    },
  },
  plugins: ['postcss-import', 'tailwindcss', 'autoprefixer'],
};
