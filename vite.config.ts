import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { transformSync } from './transformSync'
import { transformSlot } from './transformSlot'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { compilerOptions: { nodeTransforms: [transformSync, transformSlot] } }
    })
  ]
})
