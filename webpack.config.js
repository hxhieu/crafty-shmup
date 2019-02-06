const path = require('path')

module.exports = env => {
  console.log(`🛠️  running ${env} Mode using ./webpack/webpack.${env}.js 🛠️`)
  const webpack = require(`./webpack/webpack.${env}.js`)
  return {
    ...webpack,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
}
