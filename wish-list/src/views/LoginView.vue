<script setup>
const name = defineModel()
const password = defineModel()
</script>

<template>
  <div class="flex flex-row items-start">
    <input v-model="name" placeholder="name"/>
    <input v-model="password" placeholder="password"/>
  </div>
</template>
