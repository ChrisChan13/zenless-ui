import { resolve } from 'path'
import { defineConfig } from 'vite'

import { defaultConfig } from './vite.config'

const buildConfig = {
  ...defaultConfig,
  base: '/zenless-ui',
  build: {
    outDir: resolve(__dirname, 'website')
  }
}

export default defineConfig(() => {
  return buildConfig
})