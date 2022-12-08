<template>
  <v-app-bar title="VuEbay" elevation="1" class="font-bold pl-20">
    <v-tabs class="px-20 flex justify-start">
      <v-tab class="capitalize" color="orange" to="/products"> Products</v-tab>
      <v-tab class="capitalize" color="orange" to="/cart"
        >Cart
        <span class="bg-orange-800 rounded-full ml-1 p-1 text-white">{{
          cartStore.getCart.length
        }}</span></v-tab
      >
      <v-tab class="capitalize" color="orange" to="/addproduct">Admin</v-tab>
    </v-tabs>
  </v-app-bar>
</template>
<script setup>
import { useCartStore } from "@/stores/CartStore";
import { computed } from "vue";

//cartstore
const cartStore = computed(() => useCartStore());
</script>
