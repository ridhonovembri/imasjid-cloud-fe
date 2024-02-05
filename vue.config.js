const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = defineConfig({
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ],
  devServer: {
    // outputDir: path.resolve(__dirname,'../BE/public'),
    proxy:{
      '^/api':{
        // target: 'http://localhost:3001'
        target: 'https://imasjid-cloud-be.vercel.app'
      }
    }
  }
})
