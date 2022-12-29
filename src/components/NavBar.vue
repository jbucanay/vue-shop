<template>
  <v-app-bar title="VuEbay" flat class="font-bold pl-20 pt-2">
    <v-container>
      <v-row justify="center" align="baseline">
        <v-text-field
          density="compact"
          variant="outlined"
          color="black"
          placeholder="Search for anything"
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
        <v-tabs class="px-20 flex justify-start">
          <v-tab class="capitalize" color="orange" to="/products">
            Products</v-tab
          >
          <v-tab class="capitalize" color="orange" to="/cart"
            >Cart
            <span class="bg-orange-800 rounded-full ml-1 p-1 text-white">{{
              cartStore.getCart.length
            }}</span></v-tab
          >
          <v-tab
            class="capitalize"
            color="orange"
            to="/addproduct"
            v-if="authStore.isAuthenticated"
            >Admin</v-tab
          >
          <v-tab
            class="capitalize"
            color="orange"
            to="/login"
            v-if="!authStore.isAuthenticated"
            >Login</v-tab
          >
          <v-tab
            class="capitalize"
            color="orange"
            v-if="authStore.isAuthenticated"
            to="/logout"
            >Logout</v-tab
          >
        </v-tabs>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
<script setup>
import { useCartStore } from "@/stores/CartStore";
import { useAuth } from "@/stores/AuthStore";
import { computed } from "vue";

//store
const cartStore = computed(() => useCartStore());
const authStore = computed(() => useAuth());
</script>
