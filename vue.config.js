const { defineConfig } = require('@vue/cli-service')

const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      // 按需导入插件
      require('unplugin-vue-components/webpack')({
        resolvers: [ElementPlusResolver()]
      }),
      // 按需导入 api
      require('unplugin-auto-import/webpack')({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
})
