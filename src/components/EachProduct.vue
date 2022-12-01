<template>
  <base-card>
    <template #displayproducts>
      <v-img height="250" :src="image"></v-img>
      <v-card-title>{{ name }}</v-card-title>
      <v-card-text class="font-extrabold text-black">${{ price }}</v-card-text>
      <v-tab class="capitalize underline" flat color="blue" :to="showDetails"
        >See details</v-tab
      >
      <router-view></router-view>
      <v-card-actions>
        <base-button>
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

/******************* computed properties **********/
const showDetails = computed(() => {
  return {
    name: "product-details",
    params: { id: props.id },
    props: { quantity: props.quantity, type: props.type },
  };
});
</script>
