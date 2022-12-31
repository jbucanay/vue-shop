<template>
  <div>{{ id }}</div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import { productsStore } from "../stores/ProductsStore";

const productStore = productsStore();

//lifecyclehooks
onMounted(() => {
  productStore.getOneProduct(props.id);
});

onBeforeUnmount(() => {
  // get rid of data in store everytime I save code.
  productStore.$reset();
});

const props = defineProps({
  id: {
    required: true,
  },
});
</script>

<style scoped></style>
