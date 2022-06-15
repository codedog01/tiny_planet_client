const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/sysdev': {
        target: 'http://localhost:1401',
        changOrigin: true,
        pathRewrite: {
          '^/sysdev': ''
        }
      },
      '/systest': {
        target: 'http://1.15.184.191:1401/',
        changOrigin: true,
        pathRewrite: {
          '^/systest': ''
        }
      }

    }
  }
})
