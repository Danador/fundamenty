module.exports = {
    plugins: [
      require('postcss-import'),
      require('tailwindcss'),
      require('autoprefixer'),
      require('postcss-gap')({ method: 'duplicate' })
    ]
  }