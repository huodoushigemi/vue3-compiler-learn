<template>
  <input @input="$emit('update:value', $event.target.value)" />
</template>

<script setup lang="ts">
defineProps<{
  value: string
}>()
</script>
