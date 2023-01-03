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
    Total Amount ({{ itemsLength && cartItems.length }} {{ itemsLength }}) :
    <span class="ml-2 px-3 text-white bg-orange-800 rounded-full"
      >${{ bill }}</span
    >
  </h1>
  <base-button class="my-5 rounded-2xl bg-yellow-400 w-1/4" rounded="3">
    <template #cartremove>Proceed to checkout</template>
  </base-button>
  <base-card v-for="item in cartItems" :key="item.id" width="500" class="mt-2">
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

      <p
        class="my-5 cursor-pointer text-blue-700 hover:underline text-center m-auto w-1/6"
        rounded="3"
        @click="cartStore.removeFromCart(item.id)"
      >
        Delete
      </p>
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

const itemsLength = computed(() => {
  return cartItems.value.length
    ? cartItems.value.length === 1
      ? "item"
      : "items"
    : "";
});

/******************* lifecycle hooks **********/
onMounted(() => {
  cartStore.getCart;
});
</script>

<style scoped></style>
