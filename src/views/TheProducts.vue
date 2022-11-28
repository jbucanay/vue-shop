<template>
  <div>testing page</div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { productsStore } from "../stores/ProductsStore";

// store
const { products, createProduct } = storeToRef(productsStore);
</script>

<style scoped></style>
