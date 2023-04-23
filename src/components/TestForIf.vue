<template>
  <p>
    <h2>test: (v-for > v-if)</h2>
    
    <div class="card">
      <span v-for="i in 10" v-if="i % 2">
        {{ i }}&emsp;
      </span>
    </div>
  </p>
</template>