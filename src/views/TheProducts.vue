<template>
  <v-container fluid class="p-0 m-0">
    <v-row>
      <v-col>
        <v-sheet>
          <discount-carousel></discount-carousel>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row class="mx-13">
      <v-col>
        <v-sheet>
          <h3 class="font-medium">Shop by Category</h3>
        </v-sheet>
      </v-col>
      <v-col
        class="grid grid-cols-4 border-solid border border-gray-500 rounded-md mt-6"
        cols="10"
      >
        <div class="col-span-3 justify-self-center">
          {{ returnProducts.length }} results
        </div>
        <div class="col-span">
          <v-select
            :items="selectItems"
            density="compact"
            class="mr-6"
          ></v-select>
        </div>
        <each-product
          class="align-self-start"
          v-for="product in returnProducts"
          :key="product.product_id"
          :name="product.product_name"
          :id="product.product_id"
          :price="product.price"
          :image="
            (product.media.length && product.media[0].media_link) ||
            'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
          "
          :shipping-cost="product.shipping_cost"
          :discount="product.discount"
        >
        </each-product>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import EachProduct from "../components/EachProduct.vue";
import { storeToRefs } from "pinia";
import { onMounted, onBeforeUnmount, computed, ref } from "vue";
import { productsStore } from "../stores/ProductsStore";
import DiscountCarousel from "@/components/DiscountCarousel.vue";

/*************** data ******************/
const selectItems = ref(["Featured items", "Lowest Price", "Highest Price"]);
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
