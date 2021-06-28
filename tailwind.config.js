module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js',
          './components/**/*.js',
          ],
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
