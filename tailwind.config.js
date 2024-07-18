module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'valentine'],
  },
  theme: {
    extend: {
      fontFamily: {
        'Eyesome_Script': ['Eyesome Script', 'cursive'],
        'Eyesome': ['Eyesome Regular', 'sans-serif'],
      }
    }
  }
};
