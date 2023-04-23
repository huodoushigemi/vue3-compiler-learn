<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ value: string }>()
</script>

<template>
  <p>
    <h2>test: (v-model)</h2>

    <div class="card">
      <input :value="value" @input="$emit('update:value', $event.target.value)" />
      <slot />
    </div>
  </p>
</template>