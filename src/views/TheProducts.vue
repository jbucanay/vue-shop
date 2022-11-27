<template>
  <div>testing page</div>
  <h3>{{ testing.name }}</h3>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { productsStore } from "../stores/ProductsStore";

const testing = productsStore();
</script>

<style scoped></style>
