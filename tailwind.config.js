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
        'color-dark': 'rgba(255, 255, 255, 0.23)',
      },
      screens: {
        'xs-300': '300px',
        'xs-330': '330px',
        'xs-350': '350px',
        'xs-400': '400px',
        'xs-435': '435px',
        'sm-500': '500px',
      },
    },
  },
  plugins: ['postcss-import', 'tailwindcss', 'autoprefixer'],
};
