<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import MyInput from './components/MyInput.vue'

const value = ref('')
</script>

<template>
  <div>
    <img src="/vite.svg" class="logo" alt="Vite logo" />
    <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
  </div>

  <HelloWorld msg="Vite + Vue">
    <div #footer>
      {{ '<div #footer>test: footer<\/div>' }}
    </div>
  </HelloWorld>

  <br /><br />

  <div style="color: #00ff00">
    .sync test:
    <MyInput :value.sync="value" />
    <p> {{ value }}</p>
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
