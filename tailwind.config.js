module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // dropShadow: {
      //   'wsm':'0 1px 2px rgba(255,255,255,0.25)',
      // }
    }
  },
  plugins: [],
  variants: {
    extend: {
      padding: ['hover','focus'],
      // dropShadow: ['hover','focus'],
    }
  },
  height: {
    xxl:'130px'
  }
}
