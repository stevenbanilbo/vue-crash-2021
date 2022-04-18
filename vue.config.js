const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({ 

  publicPath: process.env.NODE_ENV === 'production' ? '/vue-crash-2021/' : '/',

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
