<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div style="text-align: center">
    <img src="/vite.svg" class="logo" alt="Vite logo" />
    <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />

    <a href="https://github.com/huodoushigemi/vue3-compiler-learn" target="_blank">
      <button style="font-size: 1.5em">{{ msg }}</button>
    </a>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
