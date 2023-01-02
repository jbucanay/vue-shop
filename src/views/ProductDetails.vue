<template>
  <v-container
    fluid
    v-for="item in theProduct"
    :key="item.product_id"
    class="mt-6"
  >
    <v-row>
      <v-col>
        <p>small images</p>
        <v-list density="compact" max-width="100">
          <v-list-item
            lines="one"
            variant="plain"
            width="100"
            v-for="media in item.media"
            :key="media.media_id"
            :value="media.media_link"
            active-class="border-orange-500 border-solid border-2"
          >
            <v-img
              class="m-0 p-0"
              width="100"
              cover
              :src="media.media_link"
            ></v-img>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col>
        <p>Big image</p>
        <v-img
          width="300"
          :src="item.media[0].media_link"
          class="bg-red p-0 m-0"
        >
        </v-img>
      </v-col>
      <v-col>
        <p>product details</p>
        <p>{{ item.product_name }}</p>
        <div>
          <span v-if="item.discount"
            >-{{ item.discount.discount_percent }}% ${{
              item.price - item.price * (item.discount.discount_percent / 100)
            }}</span
          >
          <span v-else>${{ item.price }}</span>
          <p v-if="item.discount">
            List price: <span class="line-through">{{ item.price }}</span>
          </p>
        </div>
        <h3 class="font-bold">About this item</h3>
        <ul>
          <li>{{ item.product_description }}</li>
        </ul>
      </v-col>
      <v-col class="border-solid border border-gray-500 rounded-md">
        <p>add to cart</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, computed } from "vue";
import { productsStore } from "../stores/ProductsStore";
import { storeToRefs } from "pinia";

//data
const items = ref(["Computers", "Shoes", "Cases"]);
const productStore = productsStore();
const { returnProducts: theProduct } = storeToRefs(productStore);

//computed

//lifecyclehooks
onMounted(() => {
  productStore.getOneProduct(props.id);
});

onBeforeUnmount(() => {
  // get rid of data in store everytime I save code.
  productStore.$reset();
});

const props = defineProps({
  id: {
    required: true,
  },
});
</script>

<style scoped></style>
