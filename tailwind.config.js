module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}',
          './components/**/*.{js,ts,jsx,tsx}',
          './Banner/**/*.{js,ts,jsx,tsx}',
          './Footer/**/*.{js,ts,jsx,tsx}',
          './Header/**/*.{js,ts,jsx,tsx}',
          './HowItsWorks/**/*.{js,ts,jsx,tsx}',
          './SVG/**/*.{js,ts,jsx,tsx}',
          './WhyUs/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'banner': "url('/banner1.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
    }),
  },
},
  variants: {
    extend: {},
  },
  plugins: [],
}
