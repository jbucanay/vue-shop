<template>
  <each-product
    v-for="product in returnProducts"
    :key="product.id"
    :name="product.name"
    :id="product.id"
    :price="product.price"
    :quantity="product.quantity"
    :type="product.type"
    :image="product.image"
    @add-to-cart="addToCart"
  >
  </each-product>
</template>

<script setup>
import EachProduct from "../components/EachProduct.vue";
import { storeToRefs } from "pinia";
import { onMounted, onBeforeUnmount } from "vue";
import { productsStore } from "../stores/ProductsStore";
import { useCartStore } from "@/stores/CartStore";

/*************** store ******************/
const Productstore = productsStore();
const { returnProducts } = storeToRefs(Productstore);

/*************** Lifecycle hooks ******************/
onMounted(() => {
  Productstore.getProducts();
});

onBeforeUnmount(() => {
  // get rid of data in store everytime I save code.
  Productstore.$reset();
});

/*************** methods ******************/
</script>

<style scoped></style>
