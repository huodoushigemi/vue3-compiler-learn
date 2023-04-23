import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { transformSync } from './transformSync'
import { transformSlot } from './transformSlot'
import { transformForIf } from './transformForIf'
import { transformModel } from './transformModel'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          nodeTransforms: [transformSync, transformSlot, transformForIf, transformModel]
        }
      }
    })
  ]
})
