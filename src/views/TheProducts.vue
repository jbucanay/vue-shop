<template>
  <v-container>
    <v-row class="bg-red">
      <v-col>
        <v-sheet>Promo</v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-sheet> Category </v-sheet>
      </v-col>
      <v-col>
        <each-product
          v-for="product in returnProducts"
          :key="product.product_id"
          :name="product.product_name"
          :id="product.product_id"
          :price="product.price"
          :image="product.media[0].media_link"
          :shipping-cost="product.shipping_cost"
        >
        </each-product>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import EachProduct from "../components/EachProduct.vue";
import { storeToRefs } from "pinia";
import { onMounted, onBeforeUnmount } from "vue";
import { productsStore } from "../stores/ProductsStore";

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
</script>
