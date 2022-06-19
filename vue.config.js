const {
  defineConfig
} = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_INTERFACE_URL,
        changOrigin: true,
        pathRewrite: {
          '^/api': 'dsdsd'
        }
      }
    }
  }
})
