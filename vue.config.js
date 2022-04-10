const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({ 

  publicPath: '',

  devServer: {
      proxy:{
        '^/connect-api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        logLevel:'debug',
        pathRewrite: { '^/connect-api': '/' },

    }
  },
  }

})
