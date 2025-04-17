import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      devOptions: {
        enabled: false,             // 改成 true 就能在 `pnpm dev` 下测试离线功能
      },
      manifest: {
        name: 'EnReading',
        short_name: 'EnReading',
        description: 'EnReading Application',
        theme_color: '#ffffff',
        background_color: '#ffffff',  // 添加背景色
        display: 'standalone',        // 添加显示模式
        start_url: '/',              // 添加启动URL
        icons: [
          {
            src: 'logos/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'logos/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {} // 留空或完全移除workbox配置
    })
  ],
  test: { // Vitest 专属配置
    globals: true, // 全局注入测试 API（如 describe, it）
    environment: 'happy-dom', // 模拟浏览器环境
    coverage: {
      provider: 'istanbul' // 覆盖率工具
    }
  }
})
