<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TestForIf from './components/TestForIf.vue'
import TestSlot from './components/TestSlot.vue'
import TestSync from './components/TestSync.vue'
import TestModel from './components/TestModel.vue'

const value = ref('')
</script>

<template>
  <HelloWorld msg="👍 点个赞吧 ⭐" />

  <TestSlot>
    <div #test-slot>slot content</div>
  </TestSlot>

  <TestSync :value.sync="value">
    <div>👉{{ value }}</div>
  </TestSync>

  <TestForIf />

  <TestModel v-model="value">
    <div>👉{{ value }}</div>
  </TestModel>

  <br /><br />
</template>
