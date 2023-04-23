import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { transformSync } from './transformSync'
import { transformSlot } from './transformSlot'
import { transformForIf } from './transformForIf'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          nodeTransforms: [transformSync, transformSlot, transformForIf]
        }
      }
    })
  ]
})
