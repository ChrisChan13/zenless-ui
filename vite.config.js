import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export const defaultConfig = {
  plugins: [vue()],
  resolve: {
    alias: {
      'zenless-ui': resolve(__dirname, 'packages'),
      '@src': resolve(__dirname, 'src'),
      '@': resolve(__dirname, 'examples')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import 'zenless-ui/theme/var.scss';
        `
      }
    }
  }
}

const devConfig = {
  server: {
    host: true
  }
}

const buildConfig = {
  publicDir: false,
  build: {
    lib: {
      formats: ['es'],
      entry: resolve(__dirname, 'packages/index.js'),
      name: 'ZenlessUI',
      fileName: 'index'
    },
    cssCodeSplit: true,
    sourcemap: true,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
}

export default defineConfig(({ command }) => {
  const config = { ...defaultConfig }
  if (command === 'build') {
    Object.assign(config, buildConfig)
  } else {
    Object.assign(config, devConfig)  
  }
  return config
})
