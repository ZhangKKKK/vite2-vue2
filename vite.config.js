import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import legacy from '@vitejs/plugin-legacy'
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy(),
    createVuePlugin()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    }
  },
  // Vite启动后提示“Network: use `--host` to expose“ 通过ip访问
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://erp.testapi.netjoy.com',
        ws: false,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: { // 更改主题在这里
          // 'primary-color': '#52c41a',
          // 'link-color': '#1DA57A',
          // 'border-radius-base': '2px'
        },
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    // 配置别名 vue cli一样 以@引入文件
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
