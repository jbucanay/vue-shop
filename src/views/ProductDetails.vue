<template>
  <div>{{ id }}</div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

console.log(props.id);
</script>

<style scoped></style>
