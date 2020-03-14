const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    port: 4000
  },
  configureWebpack: {
    resolve: {
      alias: {
        'components': resolve('src/components'),
        'pages': resolve('src/pages')
      }
    }
  }
}