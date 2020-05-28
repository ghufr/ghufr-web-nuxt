module.exports = {
  theme: {
    fontFamily: {
      display: ['Montserrat', 'sans-serif'],
      body: ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        primary: { 500: '#2056E2', 700: '#376DF9' },
        dark: { 400: '#959CB1', 300: '#607090', 500: '#23293a', 700: '#16171B' }
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'components/**/*.vue',
      'nuxt.config.js'
    ]
  }
}
