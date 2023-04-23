<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ value: number }>()
</script>

<template>
  <h2>test: (.sync)</h2>

  <div class="card">
    <input placeholder="请输入" :value="value" @input="$emit('update:value', $event.target.value)" />
    <slot />
  </div>
</template>
