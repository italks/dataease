export default {
  server: {
    proxy: {
      '/api/f': {
        target: 'https://dataease.yw.jc.local/dataease',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api\/f/, '')
      },
      // 直接访问 de2api
      '/de2api': {
        target: 'https://dataease.yw.jc.local/dataease',
        changeOrigin: true,
        secure: false
      },
      // 使用 proxy 实例
      '/api': {
        target: 'https://dataease.yw.jc.local/dataease',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api/, 'de2api')
      }
    },
    port: 8080
  }
}
