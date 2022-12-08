<template>
  <v-card
    variant="flat"
    width="700"
    class="mt-10"
    rounded="0"
    :style="'border-bottom: 2px solid gray;'"
  >
    <v-card-title class="text-center text-3xl">Your Cart</v-card-title>
  </v-card>
  <h1 class="mt-6 font-semibold text-xl">
    Total Amount:
    <span class="ml-2 px-3 text-white bg-orange-800 rounded-full"
      >${{ bill }}</span
    >
  </h1>
  <base-card v-for="item in cartItems" :key="item.id" width="500">
    <template #cartproduct>
      <v-img height="100" :src="item.image" class="mt-2 rounded-full"></v-img>
      <v-card-title class="text-center">{{ item.name }}</v-card-title>
      <div class="flex justify-center">
        <v-card-text class="mr-25 text-base"
          >Price per item:
          <span class="font-bold">${{ item.price }}</span></v-card-text
        >
        <v-card-text class="text-lg ml-24 pl-20"
          >Quantity:
          <span class="font-bold">{{
            item.selectedQuantity
          }}</span></v-card-text
        >
      </div>
      <p class="text-center mx-9 font-bold text-lg border-y-2 border-gray-400">
        Total: ${{ item.price * item.selectedQuantity }}
      </p>
      <div class="flex justify-center">
        <base-button
          class="my-5 rounded-2xl"
          rounded="3"
          @click="cartStore.removeFromCart(item.id)"
        >
          <template #cartremove> Remove </template>
        </base-button>
      </div>
    </template>
  </base-card>
</template>

<script setup>
import BaseCard from "@/components/BaseCard.vue";
import { useCartStore } from "@/stores/CartStore";
import BaseButton from "@/components/BaseButton.vue";
import { onMounted, computed } from "vue";

/******************* store **********/
const cartStore = useCartStore();
const bill = computed(() => Number(cartStore.calculateBill).toLocaleString());
const cartItems = computed(() => cartStore.getCart);

/******************* lifecycle hooks **********/
onMounted(() => {
  cartStore.getCart;
});
</script>

<style scoped></style>
