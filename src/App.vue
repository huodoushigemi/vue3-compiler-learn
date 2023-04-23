<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TestForIf from './components/TestForIf.vue'
import TestSlot from './components/TestSlot.vue'
import TestSync from './components/TestSync.vue'

const value = ref('')
</script>

<template>
  <div style="text-align: center">
    <img src="/vite.svg" class="logo" alt="Vite logo" />
    <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    <HelloWorld msg="Vite + Vue" />
  </div>

  <TestSlot>
    <div #test-slot>slot content</div>
  </TestSlot>

  <TestSync :value.sync="value">
    <p>{{ value }}</p>
  </TestSync>

  <TestForIf />

  <br /><br />
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
