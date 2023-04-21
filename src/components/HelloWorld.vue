<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <button type="button" @click="count++">count is {{ count }}</button>

  <div class="footer">
    <slot name="footer" />
  </div>
</template>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 55px;
  width: 100%;
  background: #80808080;
  color: #00ff00;
  line-height: 55px;
}
</style>
