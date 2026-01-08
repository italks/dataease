export default {
  server: {
    proxy: {
      '/api/f': {
        target: 'http://10.217.248.228:30021/dataease',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/f/, '')
      },
      // 直接访问 de2api
      '/de2api': {
        target: 'http://10.217.248.228:30021/dataease',
        changeOrigin: true
      },
      // 使用 proxy 实例
      '/api': {
        target: 'http://10.217.248.228:30021/dataease',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, 'de2api')
      }
    },
    port: 8080
  }
}
