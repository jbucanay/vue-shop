<template>
  <base-card>
    <template #displayproducts>
      <v-img height="250" :src="image"></v-img>
      <v-card-title>{{ name }}</v-card-title>
      <v-card-subtitle>${{ price }}</v-card-subtitle>
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
/******************* props **********/
const props = defineProps({
  id: Number,
  price: Number,
  quantity: Number,
  type: String,
  image: String,
  name: String,
});
</script>

<!-- id	1
name	"MacBook Pro"
price	4000
quantity	300
type	"computer"
image -->
