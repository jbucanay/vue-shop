<template>
  <base-card width="240.5" rounded="2" variant="flat" elevation="0">
    <template #eachproduct>
      <v-img :src="image"></v-img>
      <v-card-title>{{ name }}</v-card-title>
      <v-card-text class="font-extrabold text-black-500 text-xl"
        >${{ price }}</v-card-text
      >
      <v-card-text>{{ shippingCost }}</v-card-text>
    </template>
  </base-card>
</template>

<script setup>
import BaseCard from "@/components/BaseCard.vue";
import { productsStore } from "../stores/ProductsStore";
import { useCartStore } from "@/stores/CartStore";
import { ref } from "vue";

/******************* stores **********/
const cartStore = useCartStore();
const productStore = productsStore();

/******************* data **********/
const selectedQuantity = ref();

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
  name: {
    type: String,
    required: true,
  },
});
// :key="product.product_id"
//     :name="product.product_name"
//     :id="product.product_id"
//     :price="product.price"
//     :image="product.media[0].media_link"
//     :shipping-cost="product.shipping_cost"
</script>

<style scoped>
input {
  width: 30%;
  padding: 3px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid gray;
  border-radius: 3px;
}
label {
  font-weight: bolder;
}

.out {
  color: red;
  text-decoration: underline;
}
.cursor-not-allowed {
  cursor: not-allowed !important;
  color: white;
}

img {
  border: red solid 2px;
}
</style>
