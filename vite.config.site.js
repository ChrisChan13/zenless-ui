import { resolve } from 'path'
import { defineConfig } from 'vite'

import { defaultConfig } from './vite.config'

const buildConfig = {
  ...defaultConfig,
  base: './',
  build: {
    outDir: resolve(__dirname, 'docs')
  }
}

export default defineConfig(() => {
  return buildConfig
})