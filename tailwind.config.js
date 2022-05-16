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
      screens: {
        'xs-350' :'350px',
        'sm-500': '500px',
      }
    },
  },
  plugins: ['postcss-import', 'tailwindcss', 'autoprefixer'],
};
