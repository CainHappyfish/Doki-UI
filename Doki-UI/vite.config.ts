import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    lib: {
      entry: 'src/index.ts',
      formats: ['cjs', 'es']
    },
    rollupOptions: {
      external: ['vue']
    }
  },
  plugins: [vue()],
  server: {
    // port: 8888,          // 指定开发服务器端口
    open: true,             // 在开发服务器启动时自动在浏览器中打开应用程序
    proxy: {
      '^/api/.*': {
        target: 'http://localhost:3000/',	// 跨源目标
        changeOrigin: true,    // 允许跨域
        rewrite: (path) => path.replace(/^\/api/, ''),
        timeout: 60000,  // 设置代理超时时间为 60 秒
      }
    }
  }
})
