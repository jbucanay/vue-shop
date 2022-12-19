<template>
  <v-card-text>{{ quantity }}</v-card-text>
  <v-card-subtitle>{{ type }}</v-card-subtitle>
</template>

<script setup>
import { useRoute } from "vue-router";

// routing
const route = useRoute();
// Props
const props = defineProps({
  quantity: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
