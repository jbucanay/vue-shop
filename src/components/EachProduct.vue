<template>
  <base-card width="600">
    <template #displayproducts>
      <v-img height="180" :src="image" class="mt-2 rounded-full"></v-img>
      <v-card-title>{{ name }}</v-card-title>
      <v-card-subtitle>{{ type }}</v-card-subtitle>
      <v-card-text class="font-extrabold text-sky-500 text-xl"
        >${{ price }}</v-card-text
      >
      <v-card-text>
        <label for="quantity">Quantity</label><br />
        <input
          :disabled="disabled"
          type="number"
          :min="1"
          :max="quantity"
          required
          v-model="selectedQuantity"
        />
        <span :class="['ml-3', available]"> {{ available }}</span>
      </v-card-text>
      <v-card-actions>
        <base-button
          @click="addToCart({ id, name, price, selectedQuantity, type, image })"
          :disabled="disabled"
        >
          <template #eachproduct> Add to cart </template>
        </base-button>
      </v-card-actions>
    </template>
  </base-card>
</template>

<script setup>
import BaseCard from "@/components/BaseCard.vue";
import BaseButton from "./BaseButton.vue";
import { computed } from "vue";
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
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  type: {
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

/******************* methods **********/
const addToCart = (product) => {
  const { id, name, price, selectedQuantity, type, image } = product;
  const quantityRemainder = props.quantity - selectedQuantity;
  cartStore.addProductToCart(product);
  productStore.updateProductGoingCart(id, quantityRemainder);
};

/******************* computed properties **********/
const disabled = computed(() => {
  return props.quantity === 0 && true;
});

const available = computed(() => {
  return props.quantity > 0 ? `${props.quantity} Available` : "Sold out";
});
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
</style>
