<template>
  <each-product
    v-for="product in productsFromStore"
    :key="product.id"
    :name="product.name"
    :id="product.id"
    :price="product.price"
    :quantity="product.quantity"
    :type="product.quantity"
    :image="product.image"
  >
  </each-product>
</template>

<script setup>
import EachProduct from "../components/EachProduct.vue";
import { storeToRefs } from "pinia";
import { onMounted, onBeforeUnmount } from "vue";
import { productsStore } from "../stores/ProductsStore";

/*************** store ******************/
const store = productsStore();
const { productsFromStore } = storeToRefs(store);

/*************** Lifecycle hooks ******************/
onMounted(() => {
  store.getProducts();
});

onBeforeUnmount(() => {
  // get rid of data in store everytime I save code.
  store.$reset();
});
</script>

<style scoped></style>
