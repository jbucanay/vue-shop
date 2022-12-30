<template>
  <base-card
    width="240.5"
    rounded="4"
    variant="flat"
    elevation="0"
    class="mb-4"
    :to="{
      name: 'productDetails',
      params: { id: id },
      query: { item: productName },
    }"
  >
    <template #eachproduct>
      <v-sheet
        class="bg-cover bg-center h-60"
        :style="`background-image: url(${image});`"
        fill-height
      ></v-sheet>
      <v-card-text
        class="font-medium text-wrap text-base tracking-normal leading-normal pb-0"
        >{{ productName }}</v-card-text
      >
      <v-card-text
        class="font-extrabold text-black-500 text-xl pb-1 mb-1 tracking-tight"
        >${{ priceAfterDiscount }}</v-card-text
      >
      <v-card-text
        class="pt-0 mt-0 text-gray-600 text-sm tracking-tight"
        v-if="hasDiscount"
      >
        Was:
        <span class="line-through">${{ price }} </span> |
        {{ discount.discount_percent }}% OFF</v-card-text
      >
      <v-card-text>{{ shippingCost }}</v-card-text>
    </template>
  </base-card>
</template>

<script setup>
import BaseCard from "@/components/BaseCard.vue";
import { productsStore } from "../stores/ProductsStore";
import { useCartStore } from "@/stores/CartStore";
import { computed } from "vue";

/******************* stores **********/
const cartStore = useCartStore();
const productStore = productsStore();

/******************* props **********/
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  shippingCost: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  discount: {
    type: Object,
  },
});

/******************* data **********/
const priceAfterDiscount = computed(() => {
  let thePrice = 0;
  if (props.discount) {
    let discountPrice = props.price * (props.discount.discount_percent / 100);
    thePrice = props.price - discountPrice;
  } else {
    thePrice = props.price;
  }
  return thePrice;
});

const hasDiscount = computed(() => {
  return priceAfterDiscount.value != props.price;
});
</script>

<style scoped></style>
